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
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFail from "./pages/PaymentFailed";
import {
  AdminProtectedRoute,
  LoginProtectedRoute,
} from "./components/ProtectedRoute";
import DashboardIconButton from "./components/iconTypeComponents/DashboardIconButton";

export default function App() {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  const { isAuthenticate, user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(ownProfile());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        newestOnTop={false}
      />

      <Header isAuthenticate={isAuthenticate} user={user} />
      {user && user.user.role === "admin" && <DashboardIconButton />}
      <LoadingBar color="#f11946" progress={progress} />
      {loading ? (
        <p>loading</p>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setProgressBar={setProgress} />}
          />
          <Route
            path="/register"
            element={<Register setProgressBar={setProgress} />}
          />
          <Route
            path="/products"
            element={<ShowProducts setProgressBar={setProgress} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductPage setProgressBar={setProgress} />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart setProgressBar={setProgress} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/paymentsuccess"
            element={
              <LoginProtectedRoute isAuthenticate={isAuthenticate}>
                <PaymentSuccess />
              </LoginProtectedRoute>
            }
          />
          <Route
            path="/paymentfailed"
            element={
              <LoginProtectedRoute isAuthenticate={isAuthenticate}>
                <PaymentFail />
              </LoginProtectedRoute>
            }
          />

          {/* Dashboard route */}

          {user && (
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute
                  isAuthenticate={isAuthenticate}
                  user={user}
                >
                  <DashboardLayout />
                </AdminProtectedRoute>
              }
            >
              <Route
                element={
                  <AdminProtectedRoute
                    isAuthenticate={isAuthenticate}
                    user={user}
                  >
                    <Dashboard />
                  </AdminProtectedRoute>
                }
              />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="categories" element={<Categories />} />
              <Route path="categories" element={<Categories />} />
              <Route
                path="createproduct"
                element={
                  <AdminProtectedRoute
                    isAuthenticate={isAuthenticate}
                    user={user}
                  >
                    <CreateProduct />
                  </AdminProtectedRoute>
                }
              />
            </Route>
          )}
        </Routes>
      )}

      <Footer />
    </BrowserRouter>
  );
}
