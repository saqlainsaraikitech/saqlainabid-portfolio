import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ScrollTop } from "./components/ui";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import Contact from "./pages/Contact";
import Thanks, { NotFound } from "./pages/Thanks";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:slug" element={<CourseDetail />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<WorkDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
