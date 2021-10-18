import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calander from "./Components/Calander";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MettingPage from "./Components/MettingPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Calander} />
        <Route path="/MettingPage" component={MettingPage} />
      </Router>
    </div>
  );
}

export default App;
