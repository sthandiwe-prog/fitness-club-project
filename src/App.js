import Hero from "./components/Hero";
import Reasons from "./components/Reasons";
import Programs from "./components/Programs";
import Plans from "./components/Plans";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
