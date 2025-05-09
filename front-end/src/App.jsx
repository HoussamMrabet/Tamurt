import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashbord";
import HeroSection from "./pages/HeroSection";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/Dashboard/PrivateRoute";
import OnlyAdmineRoute from "./components/Dashboard/OnlyAdmineRoute";
import Productspage from "./pages/Productspage";
import ProductPageLamps from "./pages/ProductPageLamps";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const login = window.localStorage.getItem("isLogeIn");
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<HeroSection/>}></Route>
          <Route path="/api/auth/signup" element={<SignUp />}></Route>
          <Route path="/api/auth/signin" element={<SignIn />}></Route>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/productChairs" element={<Productspage />}></Route>
          <Route path="/productLamps" element={<ProductPageLamps />}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/api/auth/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route element={<OnlyAdmineRoute />}>
            <Route path="/CreatProduct" element={<Dashboard />}></Route>
          </Route>
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}
