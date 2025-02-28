import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import TodoDetail from "./components/pages/TodoDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
