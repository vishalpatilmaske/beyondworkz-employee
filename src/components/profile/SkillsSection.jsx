const skills = [
  "React.js",
  "TypeScript",
  "Next.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "GraphQL",
  "Redux",
  "Jest & RTL",
  "Figma",
  "Git / GitHub",
];

const SkillsSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Skills</h3>
        <button className="text-slate-400 text-lg">＋</button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
