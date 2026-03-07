const StatCard = ({ stat }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex justify-between items-start">
      {/* LEFT CONTENT */}
      <div>
        <p className="text-sm text-slate-500">{stat.title}</p>

        <h2 className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</h2>

        <p className={`text-sm mt-2 ${stat.noteColor}`}>{stat.note}</p>
      </div>

      {/* ICON */}
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.iconBg}`}
      >
        <img src={stat.icon} alt={stat.title} className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatCard;
