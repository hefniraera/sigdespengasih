import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        <HashRouter >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </HashRouter>
      }
    </div>
  );
}

export default App;

// <Route path="/dashboard" element={<Dashboard />}/>