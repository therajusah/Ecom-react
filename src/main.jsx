import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Context from "./utils/Context"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
