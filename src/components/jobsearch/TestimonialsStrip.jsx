import starIcon from "../../assets/icons/star.svg";
import user1 from "../../assets/icons/user.svg";
import user2 from "../../assets/icons/user.svg";
import user3 from "../../assets/icons/user.svg";

const testimonials = [
  {
    text: "Beyond Workz helped me transition from a mid-level role to a Senior Developer in just 3 weeks. The filters are extremely accurate.",
    name: "Rahul Sharma",
    role: "Senior Developer",
    avatar: user1,
  },
  {
    text: "I love the transparency. Seeing the exact salary ranges and having direct contact with recruiters made my job hunt stress-free.",
    name: "Priya Patel",
    role: "Product Manager",
    avatar: user2,
  },
  {
    text: "The UI is so clean and finding remote roles was a breeze. Best job portal I've used in India by far!",
    name: "Arjun Verma",
    role: "UX Designer",
    avatar: user3,
  },
];

const TestimonialsStrip = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-semibold text-slate-900">
          Trusted by thousands of professionals
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starIcon} className="w-4 h-4" alt="star" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-600 leading-relaxed">
                "{item.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={item.avatar}
                  className="w-10 h-10 rounded-full object-cover"
                  alt={item.name}
                />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStrip;
