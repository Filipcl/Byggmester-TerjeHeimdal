import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./components/landingPage/landing";
import Footer from "./components/footer/footer";

import Project from "./components/projects/project";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import ProjectOne from "./components/projects/projectOne";
import ProjectTwo from "./components/projects/projectTwo";
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
