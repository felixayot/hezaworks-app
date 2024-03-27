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
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Error500 from "./components/Error500";
import UserPosts from "./components/UserPosts";
import JobApplicants from "./components/JobApplicants";
import TalentsList from "./components/TalentsList";

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
        <Route path="signup/employer" element={<EmployerSignup />} />
        <Route path="signup/talent" element={<TalentSignup />} />
        <Route path="login" element={<SigninForm />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="user/account/edit" element={<EditAccountSettings />} />
        <Route path="user/account" element={<AccountProfile />} />
        <Route path="user/account/delete" element="<UserProfile />" />
        {/* User Protected routes */}
        <Route element={<RequireAuth allowedRoles={[55]} />}>
        <Route path="/" element={<Layout />} />
        <Route path="home" element={<HomePage />} />
        <Route path="jobs/:id/apply" element="<Jobpost />" />
        <Route path="jobs/:id/add" element="<Jobpost />" />
        </Route>

        {/* Employer routes */}
        <Route element={<RequireAuth allowedRoles={[3, 2]}/>}>
        <Route path="/" element={<Layout />} />
        <Route path="postjob" element={<JobpostForm />} />
        <Route path="user/jobs" element={<UserPosts />} />
        <Route path="user/applicants" element={<JobApplicants />} />
        <Route path="user/viewprofiles" element={<TalentsList />} />
        <Route path="jobs/:id/update" element={<EditJobpost />} />
        <Route path="jobs/:id/delete" element="<Jobpost />" />
        </Route>
        {/* Admin routes */}
        <Route element={<RequireAuth allowedRoles={[1]}/>}>
        <Route path="/" element={<Layout />} />
        <Route path="admin" element={<Admin />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        {/* 500 */}
        <Route path="/" element={<Layout />} />
        <Route path="error" element={<Error500 />} />
      </Routes>
  );
}

export default App;
