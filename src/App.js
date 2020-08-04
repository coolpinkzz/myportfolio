import React from "react";
import Header from "./compononets/header/header";
import Hero from "./compononets/hero/hero";
import Skills from "./compononets/skills/skills";
import Work from "./compononets/work/work";
import Project from "./compononets/projects/projects";
import Achievement from "./compononets/achievements/achievements";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Work />
      <Project />
      <Achievement />
    </div>
  );
}

export default App;
