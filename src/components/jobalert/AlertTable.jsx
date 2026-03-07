import AlertRow from "./AlertRow";

const alerts = [
  {
    role: "Product Designer",
    location: "San Francisco, CA",
    experience: "3-5 Years",
    frequency: "Daily",
    enabled: true,
  },
  {
    role: "Frontend Developer",
    location: "Remote",
    experience: "2-4 Years",
    frequency: "Instant",
    enabled: false,
  },
  {
    role: "Senior Marketing Manager",
    location: "New York, NY",
    experience: "5+ Years",
    frequency: "Weekly",
    enabled: true,
  },
  {
    role: "Data Scientist",
    location: "Chicago, IL",
    experience: "3-5 Years",
    frequency: "Daily",
    enabled: true,
  },
];

const AlertTable = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
          <tr>
            <th className="p-4 text-left">Job Role</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Experience</th>
            <th className="p-4 text-left">Frequency</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert, index) => (
            <AlertRow key={index} alert={alert} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
