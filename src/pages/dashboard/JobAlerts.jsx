import AlertsStats from "../../components/jobalert/AlertsStats";
import AlertTable from "../../components/jobalert/AlertTable";

const JobAlerts = () => {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-400">
        Dashboard <span className="mx-2">/</span>
        <span className="text-blue-600">Job Alerts</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Job Alerts</h1>

          <p className="text-slate-500 text-sm mt-1">
            Manage your customized job notifications and preferences.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow">
          + Create Alert
        </button>
      </div>

      {/* Stats */}
      <AlertsStats />

      {/* Table */}
      <AlertTable />
    </div>
  );
};

export default JobAlerts;
