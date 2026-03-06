import employerImg from "../../assets/images/profile-creation.jpg";

const EmployerCard = () => {
  return (
    <aside className="hidden lg:block w-full">
      <div className="sticky top-20 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <img
          src={employerImg}
          className="rounded-lg mb-4 w-full h-40 object-cover"
        />

        <h3 className="font-semibold text-slate-900">Stand out to employers</h3>

        <p className="text-sm text-slate-500 mt-2">
          Create a detailed profile, upload your resume, and let top companies
          discover your talent instantly.
        </p>

        <button className="mt-4 w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
          Create Profile
        </button>
      </div>
    </aside>
  );
};

export default EmployerCard;
