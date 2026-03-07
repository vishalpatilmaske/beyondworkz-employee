import { useState } from "react";

const ToggleSwitch = ({ defaultChecked }) => {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-10 h-5 flex items-center rounded-full transition
      ${enabled ? "bg-blue-600" : "bg-slate-300"}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition
        ${enabled ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  );
};

export default ToggleSwitch;
