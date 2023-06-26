import Indexx from "./components/Indexx";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import UtilBorder from "./components/UtilBorder";
import UtilColor from "./components/UtilColor";
import Util from "./components/Util";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPass from "./components/ForgotPass";
import Fourntfr from "./components/404";
import Charts from "./components/Charts";
import Blank from "./components/Blank";
import Tables from "./components/Tables";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Indexx />
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/animations" element={<Util />} />
          <Route path="/borders" element={<UtilBorder />} />
          <Route path="/colors" element={<UtilColor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/404-page" element={<Fourntfr />} />
          <Route path="/blank-page" element={<Blank />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
