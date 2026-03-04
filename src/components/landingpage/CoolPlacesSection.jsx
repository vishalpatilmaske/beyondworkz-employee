import capgemini from "../../assets/logos/capgemini.svg";
import genpact from "../../assets/logos/genpact.svg";
import icici from "../../assets/logos/icici.svg";
import kotak from "../../assets/logos/kotak.svg";
import techMahindra from "../../assets/logos/techmahindra.svg";
import coolPlaceImg from "../../assets/images/helper icon.svg";
import reliance from "../../assets/logos/reliance.svg";
import jio from "../../assets/logos/jio.svg";
import futureStep from "../../assets/logos/FutureStep_Limited.svg";



const companyLogos = [capgemini, reliance, jio, futureStep, icici,  techMahindra];

const CoolPlacesSection = () => {
  return (
    <section className="w-full bg-gradient-to-t from-[#F1F5F9] via-[#2563EB] to-[#F1F5F9]">
      
      <div className="mx-auto w-full max-w-[1250px] px-6 pt-16">
        
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Cool Places to Work
          </h2>
        </header>

        {/* Logos */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
        {companyLogos.map((logo, index) => (
             <div
             key={index}
             className=" bg-white w-[168px] h-[64px] flex items-center justify-center 
                 rounded-[16.8px] bg-[#FFFFFF01]
                 shadow-[0px_5.6px_8.4px_-2.8px_#0A0B0E14]"
              >
            <img
            src={logo}
            alt="Company logo"
            className="max-h-8 object-contain bg-white"
          />
         </div>
        ))}

      </div>
        {/* Image */}
        <div className="mt-12 flex justify-center">
          <img
            src={coolPlaceImg}
            alt="Professional at a cool workplace"
            className="w-[491px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default CoolPlacesSection;