import Nav from "./components/Nav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.
          {/* <Route path="*" element={<NoMatch />} /> */}{" "}
          
        </Route>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
