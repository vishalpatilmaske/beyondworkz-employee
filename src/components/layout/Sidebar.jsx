import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          <path d="M3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" />
          <path d="M14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
    {
      key: "profile",
      label: "My Profile",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      key: "applications",
      label: "Applications",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 1 1 0 000-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5a1 1 0 10 2 0V5a4 4 0 00-4-4h-1a1 1 0 000 2h1a2 2 0 012 2v12H4V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      key: "saved",
      label: "Saved Jobs",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      ),
    },
    {
      key: "interviews",
      label: "Interviews",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      key: "messages",
      label: "Messages",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.5 3A1.5 1.5 0 001 4.5v.793c.026.009.051.02.076.032a57.31 57.31 0 013.675 1.73.75.75 0 11-.75 1.298A55.821 55.821 0 001.5 6.045V7.5a1.5 1.5 0 001.5 1.5H3v2.5a1.5 1.5 0 001.5 1.5h7A1.5 1.5 0 0014 12.5V10h1.5a1.5 1.5 0 001.5-1.5v-1a.75.75 0 10-1.5 0v1a.75.75 0 01-.75.75H9V4.5a.75.75 0 00-.75-.75h-7a.75.75 0 00-.75.75v2.5H2.5a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h7a.75.75 0 01.75.75v2.5H15a.75.75 0 010 1.5h-1.5v-1a1.5 1.5 0 00-1.5-1.5H4z" />
        </svg>
      ),
    },
  ];

  const preferenceItems = [
    {
      key: "jobAlerts",
      label: "Job Alerts",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.5 1.5H5.75A2.75 2.75 0 003 4.25v11.5A2.75 2.75 0 005.75 18.5h8.5a2.75 2.75 0 002.75-2.75V9.5M6.5 4.75a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zM6.5 8a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" />
        </svg>
      ),
    },
    {
      key: "settings",
      label: "Settings",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.107a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.107-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.107a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
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
            {icon}
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
            {icon}
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
