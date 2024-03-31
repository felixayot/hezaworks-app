import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TalentSignup from "./components/TalentSignup";
import SigninForm from "./components/Signin";
import JobpostForm from "./components/JobpostForm";
import Jobpost from "./components/Jobpost";
import UserProfile from "./components/UserProfile";
import SelectUserType from "./components/UserTypeSelection";
import EmployerSignup from "./components/EmployerSignup";
import EditAccountSettings from "./components/EditUserSettings";
import AccountProfile from "./components/AccountProfile";
import EditJobpost from "./components/EditJobpost";
import Unauthorized from "./components/Unauthorized";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import RequireAuth from "./components/RequireAuth";
import Error500 from "./components/Error500";
import UserPosts from "./components/UserPosts";
import JobApplicants from "./components/JobApplicants";
import TalentsList from "./components/TalentsList";
import MyApplications from "./components/MyApplications";
import AllAplications from "./components/AllApplications";
import ApplyJob from "./components/ApplyJob";
import Jobcart from "./components/Jobcart";

function App() {
  // const [ auth, setAuth ] = useState(false)
  return (
      <Routes>
        {/* Public routes */}

        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="jobs" element={<Jobpost />} />
        <Route path="jobs/job/:id" element="<Jobpost />" />
        <Route path="signup" element={<SelectUserType />} />
        <Route path="signup/employer" element={<EmployerSignup />} />
        <Route path="signup/talent" element={<TalentSignup />} />
        <Route path="login" element={<SigninForm />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="user/account/edit" element={<EditAccountSettings />} />
        <Route path="user/account" element={<AccountProfile />} />
        <Route path="user/account/delete" element="<UserProfile />" />
        {/* User Protected routes */}
        <Route element={<RequireAuth allowedRoles={[55]} />}>
        <Route path="home" element={<HomePage />} />
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="jobs/job/:id/apply" element={<ApplyJob />} />
        <Route path="user/myapplications" element={<MyApplications />} />
        <Route path="user/jobcart" element={<Jobcart />} />
        </Route>

        {/* Employer routes */}
        <Route element={<RequireAuth allowedRoles={[3, 2]}/>}>
        <Route path="postjob" element={<JobpostForm />} />
        <Route path="user/posts" element={<UserPosts />} />
        <Route path="user/applicants" element={<AllAplications />} />
        <Route path="user/job/:id/applicants" element={<JobApplicants />} />
        <Route path="user/viewprofiles" element={<TalentsList />} />
        <Route path="user/job/:id/update" element={<EditJobpost />} />
        <Route path="user/job/:id/delete" element="<Jobpost />" />
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
