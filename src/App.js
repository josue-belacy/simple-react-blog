import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";

  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home />
    </div>
  );
}

export default App;
