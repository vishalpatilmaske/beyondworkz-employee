import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import Sidebar from "../../components/layout/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const currentUser = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
              BW
            </div>
            <span className="text-xl font-bold text-slate-900">
              Beyond Workz
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jobs, companies, or skills..."
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-96"
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                1
              </span>
            </button>

            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {currentUser.firstName?.[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
                <p className="text-xs text-slate-500">Frontend Developer</p>
              </div>
              <button
                onClick={handleLogout}
                className="ml-2 px-3 py-1 text-xs text-red-600 hover:bg-red-50 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {activeTab === "dashboard" && (
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  Welcome back, {currentUser.firstName}!
                </h1>
                <p className="text-slate-600">
                  Here is what is happening with your job search today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-600 text-sm font-medium mb-3">
                    Applied Jobs
                  </p>
                  <div className="flex items-end justify-between">
                    <h2 className="text-4xl font-bold text-slate-900">24</h2>
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.207l-5.293 5.293a1 1 0 01-1.414-1.414L13.793 7H12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      +3 this week
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-600 text-sm font-medium mb-3">
                    Saved Jobs
                  </p>
                  <div className="flex items-end justify-between">
                    <h2 className="text-4xl font-bold text-slate-900">12</h2>
                    <p className="text-slate-500 text-sm">— No change</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-600 text-sm font-medium mb-3">
                    Profile Views
                  </p>
                  <div className="flex items-end justify-between">
                    <h2 className="text-4xl font-bold text-slate-900">45</h2>
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.207l-5.293 5.293a1 1 0 01-1.414-1.414L13.793 7H12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      +12% vs last week
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-600 text-sm font-medium mb-3">
                    Interviews
                  </p>
                  <div className="flex items-end justify-between">
                    <h2 className="text-4xl font-bold text-slate-900">02</h2>
                    <p className="text-slate-500 text-sm">Upcoming this week</p>
                  </div>
                </div>
              </div>

              {/* Recommended Jobs & Profile Strength */}
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-slate-900">
                        Recommended Jobs
                      </h3>
                      <a
                        href="/jobs"
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        View all
                      </a>
                    </div>

                    <div className="space-y-4">
                      {/* Job Card 1 */}
                      <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4 flex-1">
                            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-2xl">
                              👨‍💻
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-slate-900 mb-1">
                                Senior Frontend Engineer
                              </h4>
                              <p className="text-sm text-slate-600 mb-2">
                                CreativeMonk
                              </p>
                              <div className="flex gap-2 text-xs text-slate-600 mb-2">
                                <span>📍 Bengaluru (Hybrid)</span>
                                <span>💰 18L - 24L / yr</span>
                                <span>⏱️ 4-6 Yrs</span>
                              </div>
                              <div className="flex gap-2">
                                {["React", "TypeScript", "Redux"].map(
                                  (skill) => (
                                    <span
                                      key={skill}
                                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                                    >
                                      {skill}
                                    </span>
                                  ),
                                )}
                              </div>
                              <p className="text-xs text-slate-500 mt-2">
                                Posted 2 days ago
                              </p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-slate-100 rounded">
                            <svg
                              className="w-5 h-5 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                          </button>
                        </div>
                        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg mt-3 hover:bg-blue-700">
                          Easy Apply
                        </button>
                      </div>

                      {/* Job Card 2 */}
                      <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4 flex-1">
                            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                              🎨
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-slate-900 mb-1">
                                UX/UI Developer
                              </h4>
                              <p className="text-sm text-slate-600 mb-2">
                                CreativeMonk
                              </p>
                              <div className="flex gap-2 text-xs text-slate-600 mb-2">
                                <span>📍 Mumbai (On-site)</span>
                                <span>💰 7-9L / yr</span>
                                <span>⏱️ 2-4 Yrs</span>
                              </div>
                              <div className="flex gap-2">
                                {["Figma", "HTML/CSS", "Tailwind"].map(
                                  (skill) => (
                                    <span
                                      key={skill}
                                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                                    >
                                      {skill}
                                    </span>
                                  ),
                                )}
                              </div>
                              <p className="text-xs text-slate-500 mt-2">
                                Posted 5 hours ago
                              </p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-slate-100 rounded">
                            <svg
                              className="w-5 h-5 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                          </button>
                        </div>
                        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg mt-3 hover:bg-blue-700">
                          Easy Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Strength */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">
                      Profile Strength
                    </h3>
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          85%
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mt-3">Advanced</p>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                      Add your latest projects and certifications to reach 100%
                      and boost your visibility to recruiters.
                    </p>
                    <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
                      Update Profile
                    </button>
                  </div>

                  {/* Job Alerts */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-900">
                        Job Alerts
                      </h3>
                      <a
                        href="#"
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        Manage
                      </a>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                        <div className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center text-sm">
                          📬
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">
                            Frontend Developer
                          </p>
                          <p className="text-xs text-slate-500">
                            Bengaluru, Pune
                          </p>
                        </div>
                        <p className="text-xs text-slate-600">Daily</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center text-sm">
                          📬
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">
                            React Native Developer
                          </p>
                          <p className="text-xs text-slate-500">Remote</p>
                        </div>
                        <p className="text-xs text-slate-600">Weekly</p>
                      </div>
                    </div>
                  </div>

                  {/* Recently Viewed */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Recently Viewed
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                        <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center">
                          👨
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">
                            Full Stack Developer
                          </p>
                          <p className="text-xs text-slate-500">
                            Innovatryx Techs
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 14.243a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zM5.757 5.757a1 1 0 000-1.414L5.05 3.636a1 1 0 10-1.414 1.414l.707.707z" />
                        </svg>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center">
                          👨
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">
                            UI Engineer
                          </p>
                          <p className="text-xs text-slate-500">
                            Kodak Solutions
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 14.243a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zM5.757 5.757a1 1 0 000-1.414L5.05 3.636a1 1 0 10-1.414 1.414l.707.707z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Status */}
              <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    Application Status
                  </h3>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    View all
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      <h4 className="font-bold text-slate-900">
                        Product Manager
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600">Finserve Analytics</p>
                    <p className="text-xs text-slate-500 mt-2">
                      Interview Scheduled
                    </p>
                    <p className="text-xs text-slate-500">Oct 12, 10:00 AM</p>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <h4 className="font-bold text-slate-900">
                        Software Development Engineer II
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600">2DataCorp</p>
                    <p className="text-xs text-slate-500 mt-2">In Review</p>
                    <p className="text-xs text-slate-500">Applied Oct 5</p>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <h4 className="font-bold text-slate-900">
                        Frontend Developer
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600">WebWorks India</p>
                    <p className="text-xs text-slate-500 mt-2">Applied</p>
                    <p className="text-xs text-slate-500">Applied Sep 28</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would go here */}
          {activeTab !== "dashboard" && (
            <div className="p-8">
              <p className="text-slate-600">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section
                coming soon...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
