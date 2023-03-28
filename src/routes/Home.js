import "../styles/sass/Global.sass";
import "../styles/sass/Fonts.sass";
import Main from "../components/Main";
import Arrow from "../components/Arrow";
import Projects from "../components/Projects";
import React from 'react'

function Home() {
  return (
    <div className="Home">
      
      <Main />
      <Arrow />
      <Projects />
      
    </div>
  );
}

export default Home;
