import { FaBriefcase, FaGlobe, FaHandshake, FaHeart, FaUserShield, FaMagento } from "react-icons/fa6";
import FadeLeftStagger from "./ui/FadeLeftStagger";


const Hero = () => {
  return (
    <section id="why">
      <div className="relative pb-28 py-16">
        <div className="flex justify-center relative">
          <div className="max-w-[89vw] md:max-w-6xl lg:max-w-7xl flex flex-col items-center justify-center">
            {/* Header */}
            <h1 className="heading uppercase">
              Benefits of
              <br />
              <span className="text-gradient"> Germany Opportunity Card</span>
            </h1>

            {/* Benefits Points with Fade Left Stagger */}
            <div className="mt-10">
            <FadeLeftStagger>
              {/* Point 1 */}
              <div className="flex flex-col items-center md:items-start gap-2 bg-gradient-to-r from-blue-900 to-purple-900 p-4 md:p-5 rounded-lg">
                <div className="text-3xl text-white">
                  <FaGlobe />
                </div>
                <div className="text-white text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-wide">
                    Live & Job Search in Germany
                  </h3>
                  <p className="text-xs md:text-sm tracking-wide">
                    Move to Germany and search for a job while living there for up to 12 months—no job offer required before arrival!
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex flex-col items-center md:items-start gap-2 bg-gradient-to-r from-green-900 to-teal-900 p-4 md:p-5 rounded-lg">
                <div className="text-3xl text-white">
                  <FaBriefcase />
                </div>
                <div className="text-white text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-wide">Flexible Career Options</h3>
                  <p className="text-xs md:text-sm tracking-wide">
                    Work in various industries, from tech to healthcare, and find your dream role in Europe’s top job market.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex flex-col items-center md:items-start gap-2 bg-gradient-to-r from-red-900 to-yellow-900 p-4 md:p-5 rounded-lg">
                <div className="text-3xl text-white">
                  <FaHeart />
                </div>
                <div className="text-white text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-wide">High Standard of Living</h3>
                  <p className="text-xs md:text-sm tracking-wide">
                    Enjoy Germany’s quality healthcare, affordable living, and excellent work-life balance.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex flex-col items-center md:items-start gap-2 bg-gradient-to-r from-violet-900 to-indigo-500 p-4 md:p-5 rounded-lg">
                <div className="text-3xl text-white">
                  <FaUserShield />
                </div>
                <div className="text-white text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-wide">Step Toward Permanent Residency</h3>
                  <p className="text-xs md:text-sm tracking-wide">
                    Secure employment and begin your journey towards permanent residency in Germany.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex flex-col items-center md:items-start gap-2 bg-gradient-to-r from-pink-900 to-orange-900 p-4 md:p-5 rounded-lg">
                <div className="text-3xl text-white">
                  <FaHandshake />
                </div>
                <div className="text-white text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-wide">Expand Your Professional Network</h3>
                  <p className="text-xs md:text-sm tracking-wide">
                    Build connections with top employers and grow your career in an innovative job market.
                  </p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="flex flex-col items-center md:items-start gap-2 bg-gradient-to-r from-sky-900 to-orange-900 p-4 md:p-5 rounded-lg">
                <div className="text-3xl text-white">
                  <FaMagento />
                </div>
                <div className="text-white text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-wide">No Job Offer Needed</h3>
                  <p className="text-xs md:text-sm tracking-wide">
                    Move to Germany and search for a job while living there no pre-arranged employment required!
                  </p>
                </div>
              </div>
            </FadeLeftStagger>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
