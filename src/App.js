import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MortgageCalculator from "./pages/MortgageCalculator";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}