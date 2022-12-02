import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/Auth";
import Login from "./components/Credential/Login";
import Header from "./components/Header/Header";
import Signup from "./components/Credential/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";
import Thanku from "./components/Thanku/Thanku";
function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/overview" element={<Overview />} />
        <Route exact path="/Thanku" element={<Thanku />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
