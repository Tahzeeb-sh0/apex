// import { Routes, Route } from "react-router-dom";
// import Layout from "../components/Layout";
// import Home from "../Pages/Home";
// import Service from "../Pages/Service";
// import CSR from "../Pages/CSR";
// import Project from "../Pages/Project";
// import Contact from "../Pages/Contact";
// import ProjectDetailPage from "../Pages/ProjectDetail";
// import About from "../Pages/About";
// import Gallery from "../Pages/Gallery";
// import AdminLayout from "../components/AdminLayout";
// import Dashboard from "../Pages/AdminPanel/Dashboard";
// import Projects from "../Pages/AdminPanel/Projects";
// import AddProject from "../Pages/AdminPanel/AddProject";
// import Enquiries from "../Pages/AdminPanel/Enquiries";
// import Settings from "../Pages/AdminPanel/Settings";


// export default function Router() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//          <Route path="services" element={<Service />} />
//          <Route path="csr" element={<CSR/>} />
//          <Route path="gallery" element={<Gallery/>} />
//          <Route path="projects" element={<Project />} />
//          <Route path="contact" element={<Contact />} />
//          <Route path="projectdetail" element={<ProjectDetailPage />} />
//          <Route path="about" element={<About />} /> 
//          </Route> 
//         {/*Admin Panel*/}
//         <Route>
//         <Route path="/admin" element={<AdminLayout/>}/>
//         <Route path="/admin/dashboard" element={<Dashboard/>}/>
//         <Route path="/admin/projects" element={<Projects/>}/>
//         <Route path="/admin/add-project" element={<AddProject/>}/>
//        <Route path="/admin/enquiries" element= {<Enquiries/>}/>
//        <Route path="/admin/settings" element={<Settings/>}/>
//       </Route>
//     </Routes>
//   );
// }
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import CSR from "../Pages/CSR";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import ProjectDetailPage from "../Pages/ProjectDetail";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../Pages/AdminPanel/Dashboard";
import Projects from "../Pages/AdminPanel/Projects";
import AddProject from "../Pages/AdminPanel/AddProject";
import Enquiries from "../Pages/AdminPanel/Enquiries";
import Settings from "../Pages/AdminPanel/Settings";
import Login from "../Pages/AdminPanel/Login";

export default function Router() {
  return (
    <Routes>
      {/* Website Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Service />} />
        <Route path="csr" element={<CSR />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projectdetail" element={<ProjectDetailPage />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Admin Panel Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="add-project" element={<AddProject />} />
        <Route path="enquiries" element={<Enquiries />} />
        <Route path="settings" element={<Settings />} />
        
      </Route>
    </Routes>
  );
}
