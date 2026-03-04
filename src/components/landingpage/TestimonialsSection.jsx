import { useState } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Product Manager @ InnovateTech",
      text: "I found my ideal role within two weeks of signing up. The platform is incredibly intuitive, and the matching algorithm is spot on. I've never had a smoother job search experience.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer @ DevCore",
      text: "Beyond Workz completely transformed my job hunt. The recommendations were accurate and the process felt effortless.",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "UI Designer @ Creatify",
      text: "The interface is beautiful and easy to use. I landed interviews within days of applying!",
    },
  ];

  const [active, setActive] = useState(1);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full flex justify-center bg-[#F1F5F9] mt-16">

      {/* Fixed Width Container */}
      <div className="relative w-[1440px] h-[631px] overflow-hidden py-24">

        {/* Slider Container */}
        <div className="relative flex items-center justify-center h-[420px]">

          {testimonials.map((item, index) => {
            const isActive = index === active;

            return (
              <div
                key={item.id}
                className={`absolute transition-all duration-500 ease-in-out
                  ${isActive
                    ? "z-20 scale-100 opacity-100"
                    : "z-10 scale-90 opacity-40"
                  }`}
                style={{
                  transform: `translateX(${(index - active) * 420}px)`,
                }}
              >
                <div
                  className="w-[800px] max-w-[800px] h-[439px]
                  rounded-[24px] border border-slate-200
                  bg-white shadow-lg
                  px-[48px] py-[56px]
                  flex flex-col gap-[32px]
                  text-center"
                >

                  {/* Stars */}
                  <div className="text-yellow-400 text-lg">
                    ⭐⭐⭐⭐⭐
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg text-slate-700 leading-relaxed">
                    "{item.text}"
                  </p>

                  {/* Profile Section */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-slate-300" />
                    <p className="font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {item.role}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* ✅ Figma Style Controller */}
        <div className="absolute bottom-16 w-full flex justify-center">
          <div className="flex items-center gap-4 px-5 py-2 bg-[#E5E7EB] rounded-full">

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="text-gray-600 text-lg"
            >
              ‹
            </button>

            {/* Progress Line */}
            <div className="relative w-14 h-[3px] bg-gray-300 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{
                  width: `${((active + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="text-gray-600 text-lg"
            >
              ›
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;