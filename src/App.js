import Hero from "./components/Hero";
import Reasons from "./components/Reasons";
import Programs from "./components/Programs";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footers from "./components/Footers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;
