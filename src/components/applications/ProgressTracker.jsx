const steps = ["Applied", "Reviewed", "Shortlisted", "Interview", "Offer"];

const ProgressTracker = ({ currentStep = 3 }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      {steps.map((step, index) => {
        const active = index <= currentStep;

        return (
          <div key={step} className="flex-1 flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200 text-slate-400"
              }`}
            >
              {active ? "✓" : ""}
            </div>

            <span
              className={`text-xs mt-2 ${
                active ? "text-slate-800" : "text-slate-400"
              }`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTracker;
