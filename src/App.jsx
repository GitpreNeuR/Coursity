import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Signup/SignUp"
import Courses from "./Components/Courses/Courses";
import Profile from "./Components/Pages/Profile/Profile";
import Reports from "./Components/Pages/Reports/Reports";
import Course from "./Components/Pages/Course/Course";
import LoginTwo from "./Components/Login/LoginTwo";
import MainNotesPage from "./Components/Pages/Notes/MainNotesPage";
import AdminProfile from "./Components/Admin/Profile/AdminProfile";
import AddStudent from "./Components/Admin/AddStudent/AddStudent";
import RolePage from "./Components/RolePage/RolePage";
import ViewStudent from "./Components/Admin/ViewStudent/ViewStudent";
import ViewTrainer from "./Components/Admin/ViewTrainer/ViewTrainer";
import InstructorProfile from "./Components/Instructor/InstructorProfile/InstructorProfile";
import Manage from "./Components/Instructor/Manage/Manage";
import Messages from "./Components/Instructor/Messages/Messages";
import ViewStudents from "./Components/Instructor/View Students/ViewStudents";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AppLayoutTwo = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
};





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="courses" element={<Courses />} />
          </Route>

          <Route element={<AppLayoutTwo />}>
            <Route path="contact" element={<Contact />} />
            
          

          </Route>

         

          <Route  path="signup" element={<SignUp/>} />
          <Route  path="login" element={<LoginTwo/>}/>
          <Route path="/dashboard/profile" element={<Profile/>}/>
          <Route path="/dashboard/reports" element={<Reports/>}/>
          <Route path="/dashboard/your-courses" element={<Course/>}/>
          <Route path="/dashboard/notes" element={<MainNotesPage/>}/>
          <Route path="/role-page" element={<RolePage/>}/>
          

          {/*-----------ADMIN ROUTING---------- */}
          <Route path="/admin/profile" element={<AdminProfile/>}/>
          <Route path="/admin/add-student" element={<AddStudent/>}/>
          <Route path="/admin/view-students" element={<ViewStudent/>}/>
          <Route path="/admin/view-trainer" element={<ViewTrainer/>}/>

          {/*-----------INSTRUCTOR ROUTING---------*/}
          <Route path="/instructor/profile" element={<InstructorProfile/>}/>
          <Route path="/instructor/manage" element={<Manage/>}/>
          <Route path="/instructor/messages" element={<Messages/>}/>
          <Route path="/instructor/view-students" element={<ViewStudents/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
