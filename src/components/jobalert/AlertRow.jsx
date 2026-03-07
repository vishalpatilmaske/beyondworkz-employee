import ToggleSwitch from "./ToggleSwitch";
import deleteicon from "../../assets/icons/alerts/delete.svg";
import editicon from "../../assets/icons/alerts/edit.svg";

const AlertRow = ({ alert }) => {
  return (
    <tr className="border-t border-[#00000014] hover:bg-slate-50">
      <td className="p-4 font-medium text-slate-900">{alert.role}</td>

      <td className="p-4 text-slate-500">{alert.location}</td>

      <td className="p-4 text-slate-500">{alert.experience}</td>

      <td className="p-4">
        <span
          className={`text-xs px-3 py-1 rounded-full
          ${
            alert.frequency === "Daily"
              ? "bg-blue-100 text-blue-600"
              : alert.frequency === "Weekly"
                ? "bg-blue-100 text-blue-600"
                : "bg-slate-100 text-slate-500"
          }`}
        >
          {alert.frequency}
        </span>
      </td>

      <td className="p-4">
        <ToggleSwitch defaultChecked={alert.enabled} />
      </td>

      <td className="p-4 flex items-center gap-4">
        <img src={editicon} className="w-5 h-5 rounded-lg" />
        <button className="text-blue-600"></button>

        <button className="text-red-500">
          <img src={deleteicon} className="w-5 h-5 rounded-lg" />
        </button>
      </td>
    </tr>
  );
};

export default AlertRow;
