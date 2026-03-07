const ProfileStrength = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
      <h3 className="font-semibold mb-4">Profile Strength</h3>

      <div className="w-32 h-32 mx-auto rounded-full border-8 border-blue-600 flex items-center justify-center text-2xl font-bold">
        75%
      </div>

      <p className="text-sm text-slate-500 mt-4">
        Add your latest projects and certifications to reach 100%.
      </p>

      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
        Update Profile
      </button>
    </div>
  );
};

export default ProfileStrength;
