import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Dashboard from './pages/dashboard/Dashboard'; // FIX: Import added
import CRUDJobs from './pages/dashboard/CRUDJobs';
import CRUDProjects from './pages/dashboard/CRUDProjects';
import CRUDBlogs from './pages/dashboard/CRUDBlogs';
import CRUDApplications from './pages/dashboard/CRUDApplications';
import CRUDTestimonial from './pages/dashboard/CRUDTestimonial';
import Login from './pages/Login.jsx'; // FIX: Import added
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navbar />
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboard and Sub-Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/jobs" element={<CRUDJobs />} />
            <Route path="/dashboard/projects" element={<CRUDProjects />} />
            <Route path="/dashboard/blogs" element={<CRUDBlogs />} />
            <Route path="/dashboard/messages" element={<CRUDApplications />} />
            <Route path="/dashboard/testimonials" element={<CRUDTestimonial />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
