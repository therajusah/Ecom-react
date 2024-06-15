import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
