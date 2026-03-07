const AboutSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-slate-900">About Me</h3>

        <button className="text-slate-400">✏️</button>
      </div>

      <p className="text-sm text-slate-500 leading-relaxed">
        Passionate software engineer with over 6 years of experience building
        scalable web applications. I specialize in the React ecosystem,
        TypeScript, and modern CSS architectures.
      </p>
    </div>
  );
};

export default AboutSection;
