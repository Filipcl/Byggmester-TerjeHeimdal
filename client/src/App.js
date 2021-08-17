import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./components/landingPage/landing";
import Footer from "./components/footer/footer";

import Project from "./components/projects/project";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import ProjectOne from "./components/projects/projectPages/projectOne";
import ProjectTwo from "./components/projects/projectPages/projectTwo";
import ProjectThree from "./components/projects/projectPages/projectThree";
import ProjectFour from "./components/projects/projectPages/projectFour";
import ScrollToTop from "./customHook/scrollToTop";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/projectOne" component={ProjectOne} />
          <Route path="/projectTwo" component={ProjectTwo} />
          <Route path="/projectThree" component={ProjectThree} />
          <Route path="/projectFour" component={ProjectFour} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
