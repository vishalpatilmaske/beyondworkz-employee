import { useState } from "react";

const tabs = [
  "All",
  "Applied",
  "Under Review",
  "Shortlisted",
  "Interview (2)",
  "Rejected",
];

const ApplicationTabs = () => {
  const [active, setActive] = useState("Interview (2)");

  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 text-sm rounded-full font-medium transition
          ${
            active === tab
              ? "bg-orange-500 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ApplicationTabs;
