import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import CateringPage from "./pages/CateringPage";

function App() {
  return (
    <div className="bg-red-500 text-white text-3xl p-10 text-center">
      Tailwind v4 is working!
    </div>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/catering" replace />} />
    //     <Route path="/catering" element={<CateringPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
