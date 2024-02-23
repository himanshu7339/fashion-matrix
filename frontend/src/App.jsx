import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductPage from "./components/product/ProductPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { ownProfile } from "./app/actions/user/userAction";
import { useEffect, useState } from "react";
import ShowProducts from "./pages/ShowProducts";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import Products from "./pages/dashboard/Products";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Orders from "./pages/dashboard/Orders";
import CreateProduct from "./pages/dashboard/CreateProduct";
import Categories from "./pages/dashboard/Categories";

export default function App() {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  const { isAuthenticate, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(ownProfile());
  }, [dispatch]);

  if (loading) {
    return <div>....loading</div>;
  }
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        newestOnTop={false}
      />
      <Header isAuthenticate={isAuthenticate} />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route
          path="/product/:productId"
          element={<ProductPage setProgressBar={setProgress} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart setProgressBar={setProgress} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard route */}
        <Route path="/admin/dashboard" element={<DashboardLayout />}>
          <Route element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories" element={<Categories />} />
          <Route path="createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
