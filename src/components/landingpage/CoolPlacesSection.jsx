import capgemini from "../../assets/logos/capgemini.svg";
import genpact from "../../assets/logos/genpact.svg";
import icici from "../../assets/logos/icici.svg";
import kotak from "../../assets/logos/kotak.svg";
import techMahindra from "../../assets/logos/techmahindra.svg";
import heroImage from "../../assets/images/hero-image.png";

const companyLogos = [capgemini, genpact, icici, kotak, techMahindra];

const CoolPlacesSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-600 via-blue-600 to-blue-500">
      <div className="mx-auto max-w-7xl px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-14">
        <header className="text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Cool Places to Work
          </h2>
        </header>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white/10 px-4 py-4 sm:gap-8 sm:px-6">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company logo"
              className="h-8 w-auto object-contain sm:h-10"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={heroImage}
            alt="Professional at a cool workplace"
            className="w-full max-w-md rounded-3xl bg-white/10 p-4 shadow-lg shadow-blue-900/40 sm:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CoolPlacesSection;

