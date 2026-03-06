import React from "react";

import dashboardIcon from "../../assets/layout/icons/cube.svg";
import profileIcon from "../../assets/layout/icons/profile.svg";
import applicationsIcon from "../../assets/layout/icons/applications.svg";
import savedIcon from "../../assets/layout/icons/saved.svg";
import interviewIcon from "../../assets/layout/icons/calender.svg";
import messageIcon from "../../assets/layout/icons/messages.svg";
import alertIcon from "../../assets/layout/icons/notification.svg";
import settingsIcon from "../../assets/layout/icons/setting.svg";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: dashboardIcon },
    { key: "profile", label: "My Profile", icon: profileIcon },
    { key: "applications", label: "Applications", icon: applicationsIcon },
    { key: "saved", label: "Saved Jobs", icon: savedIcon },
    { key: "interviews", label: "Interviews", icon: interviewIcon },
    { key: "messages", label: "Messages", icon: messageIcon },
  ];

  const preferenceItems = [
    { key: "jobAlerts", label: "Job Alerts", icon: alertIcon },
    { key: "settings", label: "Settings", icon: settingsIcon },
  ];

  return (
    <aside className="w-56 bg-white border-r border-slate-200 min-h-[calc(100vh-80px)]">
      <nav className="space-y-1 p-4">
        {navItems.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
              activeTab === key
                ? "bg-blue-50 text-blue-600"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <img src={icon} alt={label} className="w-5 h-5" />
            {label}
          </button>
        ))}

        <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 uppercase tracking-wide">
          Preferences
        </div>

        {preferenceItems.map(({ key, label, icon }) => (
          <button
            key={key}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            <img src={icon} alt={label} className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
