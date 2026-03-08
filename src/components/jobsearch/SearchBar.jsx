import { useState } from "react";
import searchIcon from "../../assets/icons/common-icon/search.svg";
import locationIcon from "../../assets/icons/common-icon/location.svg";
import experienceIcon from "../../assets/icons/common-icon/briefcase-gray.svg";

const SearchBar = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
        >
          {/* Job */}
          <div className="flex items-center gap-3 px-5 py-4 flex-1">
            <img src={searchIcon} className="w-5 opacity-60" />
            <input
              type="text"
              placeholder="Frontend Developer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <div className="h-8 w-px bg-slate-200" />

          {/* Experience */}
          <div className="flex items-center gap-3 px-5 py-4 flex-1">
            <img src={experienceIcon} className="w-5 opacity-60" />
            <span className="text-sm text-slate-700">3-5 Years</span>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          {/* Location */}
          <div className="flex items-center gap-3 px-5 py-4 flex-1">
            <img src={locationIcon} className="w-5 opacity-60" />
            <input
              type="text"
              placeholder="Bengaluru, India"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <button className="bg-blue-600 text-white px-8 py-4 text-sm font-semibold hover:bg-blue-700">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
