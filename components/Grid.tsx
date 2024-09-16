import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import FadeIn from "./ui/FadeIn";

const Grid: React.FC = () => {
  return (
    <section id="about">
      <FadeIn>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id} // Use `item.id` for unique key
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      </FadeIn>
    </section>
  );
};

export default Grid;
