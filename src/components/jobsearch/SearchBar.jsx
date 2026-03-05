import { useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

const SearchBar = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-3 lg:flex-row lg:gap-0 lg:items-center"
        >
          {/* Job Title */}
          <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 lg:rounded-none lg:border-0 lg:border-r lg:px-6">
            <img src={searchIcon} alt="" className="h-5 w-5 opacity-60" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Location */}
          <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 lg:rounded-none lg:border-0 lg:border-r lg:px-6">
            <img src={locationIcon} alt="" className="h-5 w-5 opacity-60" />
            <input
              type="text"
              placeholder="City, state, or remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:rounded-none lg:px-6 lg:py-0 lg:border-0"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
