const applications = [
  {
    role: "Product Manager",
    company: "FinServe Analytics",
    status: "Interview Scheduled",
    date: "Oct 12, 10:00 AM",
    dot: "bg-green-500",
    badge: "bg-blue-100 text-blue-600",
  },
  {
    role: "Software Development Engineer II",
    company: "ZetaCorp",
    status: "In Review",
    date: "Applied Oct 5",
    dot: "bg-orange-500",
    badge: "bg-orange-100 text-orange-600",
  },
  {
    role: "Frontend Developer",
    company: "WebWorks India",
    status: "Applied",
    date: "Applied Sep 28",
    dot: "bg-slate-400",
    badge: "bg-slate-100 text-slate-600",
  },
];

const ApplicationStatus = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Application Status
        </h3>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-200"></div>

        <div className="space-y-8">
          {applications.map((app, index) => (
            <div key={index} className="relative pl-8">
              {/* Dot */}
              <span
                className={`absolute left-[3px] top-2 w-4 h-4 rounded-full ${app.dot}`}
              ></span>

              {/* Content */}
              <div>
                <h4 className="font-semibold text-slate-900">{app.role}</h4>

                <p className="text-sm text-slate-500 mt-1">{app.company}</p>

                <span
                  className={`inline-block mt-3 text-xs font-medium px-3 py-1 rounded-md ${app.badge}`}
                >
                  {app.status}
                </span>

                <p className="text-sm text-slate-400 mt-2">{app.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
