const TestimonialsSection = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-white py-10 shadow-lg shadow-slate-200">
          <div className="px-6 text-center sm:px-10">
            <p className="text-sm text-amber-400">★★★★★</p>
            <p className="mt-4 text-base font-medium text-slate-900 sm:text-lg">
              &quot;I found my ideal role within two weeks of signing up. The
              platform is incredibly intuitive, and the matching algorithm is
              spot on. I&apos;ve never had a smoother job search experience.&quot;
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-900">
              Sarah Jenkins
            </p>
            <p className="text-xs text-slate-500">
              Product Manager @ InnovateTech
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              className="h-2.5 w-8 rounded-full bg-blue-600"
              aria-label="Current testimonial"
            />
            <button
              type="button"
              className="h-2.5 w-2.5 rounded-full bg-slate-300"
              aria-label="Next testimonial"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

