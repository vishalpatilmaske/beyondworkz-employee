import { useState } from "react";
import arrowDown from "../../assets/icons/down-arrow.svg";

const FiltersSidebar = () => {
  const [openSections, setOpenSections] = useState({
    experience: true,
    workMode: true,
    datePosted: false,
    salaryRange: false,
    department: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filters = {
    experience: [
      { label: "Entry Level (0-2 Yrs)", count: "1,204" },
      { label: "Mid Level (3-5 Yrs)", count: "3,492" },
      { label: "Senior Level (6-10 Yrs)", count: "943" },
    ],
    workMode: [
      { label: "Hybrid", count: "2,100" },
      { label: "Remote", count: "1,842" },
      { label: "On-site", count: "3,901" },
    ],
  };

  return (
    <aside className="w-full rounded-2xl border border-slate-200 bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">All Filters</h2>

        <button className="text-sm text-blue-600 hover:underline">
          Clear All
        </button>
      </div>

      {/* EXPERIENCE */}
      <div className="border-t border-slate-200 pt-5">
        <button
          onClick={() => toggleSection("experience")}
          className="flex w-full items-center justify-between mb-4"
        >
          <span className="font-semibold text-slate-900">Experience</span>

          <img
            src={arrowDown}
            className={`w-4 transition ${
              openSections.experience ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.experience && (
          <ul className="space-y-3">
            {filters.experience.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-sm"
              >
                <label className="flex items-center gap-2 text-slate-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600"
                  />
                  {item.label}
                </label>

                <span className="text-slate-400 text-xs">{item.count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* WORK MODE */}
      <div className="border-t border-slate-200 pt-5 mt-6">
        <button
          onClick={() => toggleSection("workMode")}
          className="flex w-full items-center justify-between mb-4"
        >
          <span className="font-semibold text-slate-900">Work Mode</span>

          <img
            src={arrowDown}
            className={`w-4 transition ${
              openSections.workMode ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.workMode && (
          <ul className="space-y-3">
            {filters.workMode.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-sm"
              >
                <label className="flex items-center gap-2 text-slate-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600"
                  />
                  {item.label}
                </label>

                <span className="text-slate-400 text-xs">{item.count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* OTHER SECTIONS */}
      {["Date Posted", "Salary Range", "Department"].map((title) => (
        <div key={title} className="border-t border-slate-200 pt-5 mt-6">
          <button className="flex w-full items-center justify-between">
            <span className="font-semibold text-slate-900">{title}</span>

            <img src={arrowDown} className="w-4 opacity-70" />
          </button>
        </div>
      ))}
    </aside>
  );
};

export default FiltersSidebar;
