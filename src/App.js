import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Joyride from "react-joyride";
import HomeSection from "./components/HomeSection";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";
import ProfessionalExperience from "./components/ProfessionalExperience";
import KeyRoles from "./components/KeyRoles";

const App = () => {
  const [run, setRun] = useState(false);
  const [steps] = useState([
    {
      target: "#home",
      content:
        "Welcome to my portfolio. This is the Home section where you can get an overview of who I am and what I do.",
      placement: "center",
    },
    {
      target: "#about",
      content:
        "In the About section, you can learn more about my background and experience as a Full Stack Web Developer.",
      placement: "top",
    },
    {
      target: "#expertise",
      content:
        "Here in the Expertise section, I outline my key skills and areas of specialization.",
      placement: "top",
    },
    {
      target: "#project",
      content:
        "This section showcases my projects, demonstrating the practical application of my skills.",
      placement: "top",
    },
    {
      target: "#testimonial",
      content:
        "Read testimonials from clients and colleagues who have worked with me.",
      placement: "top",
    },
    {
      target: "#contact",
      content: "Feel free to reach out to me through the Contact section.",
      placement: "top",
    },
  ]);

  return (
    <Router>
      <Joyride
        steps={steps}
        run={run}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeSection setRun={setRun} />
              <About />
              <Expertise />
              {/* <Service /> */}
              <Projects />
              <Testimonial />
              <ContactForm />
              <Map />
              <Copyright />
            </>
          }
        />
        <Route
          path="/professional-experience"
          element={<ProfessionalExperience />}
        />
        <Route path="/key-roles" element={<KeyRoles />} />
      </Routes>
    </Router>
  );
};

export default App;
