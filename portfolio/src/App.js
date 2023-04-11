import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import ScrollUp from "./components/ScrollUp";
import TheEnd from "./components/TheEnd";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main font-Poppins bg-main_bg text-main_color [overflow:hidden]">
          <Header />
          <Home />
          <About />
          <Education />
          <Contact />
          <TheEnd />
        </div>
        <ScrollUp />
      </div>
    </BrowserRouter>
  );
}

export default App;
