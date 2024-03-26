import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import JobSeekerRegForm from "./components/JobSeekerRegForm";
import SigninForm from "./components/SigninForm";
import JobpostForm from "./components/JobpostForm";
import Jobpost from "./components/Jobpost";
import UserProfile from "./components/UserProfile";
import SelectUserType from "./components/UserTypeSelection";
import EmployerSignUpForm from "./components/EmployerSignUpForm";
import UserAccountSettingsForm from "./components/EditUserSettingsForm";
import AccountProfile from "./components/AccountProfile";
import EditJobpostForm from "./components/EditJobpostForm";
import Unauthorized from "./components/Unauthorized";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Error500 from "./components/Error500";
import UserPosts from "./components/UserPosts";

function App() {
  // const [ auth, setAuth ] = useState(false)
  return (
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Layout />} />
        <Route path="home" element={<HomePage />} />
        <Route path="jobs" element={<Jobpost />} />
        <Route path="jobs/:id" element="<Jobpost />" />
        <Route path="signup" element={<SelectUserType />} />
        <Route path="signup/employer" element={<EmployerSignUpForm />} />
        <Route path="signup/jobseeker" element={<JobSeekerRegForm />} />
        <Route path="login" element={<SigninForm />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/account/edit" element={<UserAccountSettingsForm />} />
        <Route path="/user/account/delete" element="<UserProfile />" />
        {/* User Protected routes */}
        <Route element={<RequireAuth allowedRoles={[55]} />}>
        <Route path="home" element={<HomePage />} />
        <Route path="/user/account" element={<AccountProfile />} />
        <Route path="jobs/:id/apply" element="<Jobpost />" />
        <Route path="jobs/:id/add" element="<Jobpost />" />
        </Route>

        {/* Employer routes */}
        <Route element={<RequireAuth allowedRoles={[3, 2]}/>}>
        <Route path="postjob" element={<JobpostForm />} />
        <Route path="/user/jobs" element={<UserPosts />} />
        <Route path="jobs/:id/update" element={<EditJobpostForm />} />
        <Route path="jobs/:id/delete" element="<Jobpost />" />
        </Route>
        {/* Admin routes */}
        <Route element={<RequireAuth allowedRoles={[1]}/>}>
        <Route path="admin" element={<Admin />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        {/* 500 */}
        <Route path="error" element={<Error500 />} />
      </Routes>
  );
}

export default App;
