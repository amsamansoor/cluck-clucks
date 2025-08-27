import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import CateringPage from "./pages/CateringPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/catering" replace />} />
        <Route path="/catering" element={<CateringPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
