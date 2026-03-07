const RecentlyViewed = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="font-semibold mb-4">Recently Viewed</h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-sm">Full Stack Developer</p>
            <p className="text-xs text-slate-500">Innovate Techies</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-medium text-sm">UI Engineer</p>
            <p className="text-xs text-slate-500">BuildIt Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
