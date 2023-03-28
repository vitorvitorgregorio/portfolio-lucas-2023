import "./styles/sass/Global.sass";
import "./styles/sass/Fonts.sass";
import "./styles/sass/Main.sass";
import Header from "./components/Header";
import Main from "./components/Main";
import Arrow from "./components/Arrow";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
