import "./App.css";
import HomeLogin from "./components/login";
import Payment from "./components/payment";
import Pay from "./components/pay";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/make-payment" element={<Payment />} />
          <Route path="/cards" element={<Pay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
