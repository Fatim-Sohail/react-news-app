import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Health from "./components/Health";
import Business from "./components/Business";
import Culture from "./components/Culture";
import General from "./components/General";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="App">
      <>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<General />} />
          <Route path="/business" element={<Business />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/health" element={<Health />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
        {/* <Component/> */}
      </>
    </div>
  );
}

export default App;
