import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CateringPage from "./pages/cateringPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/catering" replace />} />
        <Route path="/catering" element={<CateringPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
