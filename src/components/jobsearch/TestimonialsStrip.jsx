const TestimonialsStrip = () => {
  const testimonials = [
    {
      text: "Found my dream job in just 2 weeks!",
      author: "Sarah Johnson",
      role: "Software Engineer",
    },
    {
      text: "The best job platform I've used.",
      author: "Michael Chen",
      role: "Product Manager",
    },
    {
      text: "Quick process and great opportunities.",
      author: "Priya Sharma",
      role: "UX Designer",
    },
  ];

  return (
    <section className="bg-blue-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          What Our Users Say
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-700">"{testimonial.text}"</p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStrip;
