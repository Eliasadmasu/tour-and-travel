import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import { About } from "./pages/about/About";
import HomeFotter from "./components/homeComp/HomeFotter";
import Services from "./pages/services/Services";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <HomeFotter />
    </BrowserRouter>
  );
}

export default App;
