import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import FadeIn from "./ui/FadeIn";
import FadeRight from "./ui/FadeRight";


const Grid: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 mx-auto w-full max-w-screen-xl px-4 md:px-8 lg:px-12">
      {/* Use padding and max-width for better layout control */}
      <FadeRight>
          <h1 className="heading uppercase">
        Points System for the
      <br/>
        <span className="text-gradient"> Germany Opportunity Card</span>
      </h1>
        <BentoGrid className="w-full mt-10">
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
      </FadeRight>
    </section>
  );
};

export default Grid;
