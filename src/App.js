import Header from "./Header";
import Baner from "./Baner";
import Projects from "./Projects";
import About from "./About";
import Form from "./Form";

import "./style.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Baner />
      <Projects />
      <About />
      <Form />
    </div>
  );
}

export default App;
