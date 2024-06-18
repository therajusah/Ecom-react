import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <div className="flex w-screen h-screen">
      {(pathname != "/" ||
        search.length > 0) && (
          <Link to="/" className="text-red-400 absolute left-[18%] top-[3%]">
            Home
          </Link>
        )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />

      </Routes>
    </div>
  );
}

export default App;
