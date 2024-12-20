import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import FadeIn from "./ui/FadeIn";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaLanguage, FaMoneyBillWave, FaChartLine } from "react-icons/fa"; // Import different icons
import FadeLeftList from "./ui/FadeLeftList";

const Experience = () => {
  const icons = [
    <FaGraduationCap className="text-white text-6xl" key="graduation" />, // For Skilled Professionals
    <FaBriefcase className="text-white text-6xl" key="briefcase" />,     // For Relevant Work Experience
    <FaCalendarAlt className="text-white text-6xl" key="calendar" />,   // For Age Criteria
    <FaLanguage className="text-white text-6xl" key="language" />,       // For Language Skills
    <FaMoneyBillWave className="text-white text-6xl" key="money" />,     // For Financial Stability
    <FaChartLine className="text-white text-6xl" key="chart" />,         // For Job Market Potential
  ];

  return (
    <section id="test" className="scroll-mt-20 md:scroll-m-12 sm:scroll-mt-28">
      
        <div className="py-2 w-full"> {/* Reduced top/bottom padding */}
         <FadeIn>
          <h1 className="heading uppercase">
            Who Can Apply for the <br/>
            <span className="text-gradient uppercase"> Germany Opportunity Card</span>
          </h1>
        </FadeIn>
        <FadeLeftList>
          {/* Adjust grid sizes for different screen sizes */}
          <div className="w-full mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-8"> {/* Reduced gaps */}
            {workExperience.map((card, index) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "linear-gradient(90deg, rgba(255,87,34,0.7) 0%, rgba(255,193,7,0.7) 100%)",
                  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-4 md:p-4 lg:p-8 gap-2"> {/* Reduced padding */}
                  {/* Use different icons for each grid */}
                  {icons[index]}
                  <div className="lg:ms-4">
                    <h1 className="text-start text-lg md:text-xl font-bold"> {/* Reduced text size */}
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-2 font-semibold"> {/* Reduced spacing */}
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
          </FadeLeftList>
        </div>
      
    </section>
  );
};

export default Experience;
