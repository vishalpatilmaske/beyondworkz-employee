import StatCard from "./StatCard";

import appliedIcon from "../../assets/icons/dashboard/message-arrow.svg";
import savedIcon from "../../assets/icons/dashboard/saved-color.svg";
import viewsIcon from "../../assets/icons/dashboard/views.svg";
import interviewIcon from "../../assets/icons/dashboard/calender-color.svg";

const stats = [
  {
    title: "Applied Jobs",
    value: "24",
    note: "+3 this week",
    icon: appliedIcon,
    iconBg: "bg-blue-100",
    noteColor: "text-green-600",
  },
  {
    title: "Saved Jobs",
    value: "12",
    note: "No change",
    icon: savedIcon,
    iconBg: "bg-orange-100",
    noteColor: "text-slate-400",
  },
  {
    title: "Profile Views",
    value: "45",
    note: "+12% vs last week",
    icon: viewsIcon,
    iconBg: "bg-green-100",
    noteColor: "text-green-600",
  },
  {
    title: "Interviews",
    value: "02",
    note: "Upcoming this week",
    icon: interviewIcon,
    iconBg: "bg-purple-100",
    noteColor: "text-slate-400",
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard key={i} stat={stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
