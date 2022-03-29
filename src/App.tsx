import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="register" element={<RegisterPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
