import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import JobSearchPage from "../pages/public/JobSearchPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Applications from "../pages/dashboard/Applications";
import JobSaved from "../pages/dashboard/SavedJobs";
import JobAlerts from "../pages/dashboard/JobAlerts";
import Interviews from "../pages/dashboard/Interviews";
import Messages from "../pages/dashboard/Messages";
import Settings from "../pages/dashboard/Setting";

import PageNotFound from "../pages/common/PageNotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobSearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="profile" element={<Profile />} />

          <Route path="applications" element={<Applications />} />

          <Route path="saved-jobs" element={<JobSaved />} />

          <Route path="job-alerts" element={<JobAlerts />} />

          <Route path="interviews" element={<Interviews />} />

          <Route path="messages" element={<Messages />} />

          <Route path="settings" element={<Settings />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Global 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
