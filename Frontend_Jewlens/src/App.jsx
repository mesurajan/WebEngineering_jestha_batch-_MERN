import Layouts from "./layout/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";

import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AdminWelcome from "./pages/adminpages/AdminWelcome";
import AdminProductList from "./pages/adminpages/AdminProductList";
import AdminProductCreate from "./pages/adminpages/AdminProductCreate";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import ProductDetails from "./components/product/ProductDetails";
import Signup from "./pages/auth/signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminDashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<AdminWelcome title="Welcome to Overview" />} />
          <Route path="product-list" element={<AdminProductList />} />
          <Route path="product-create" element={<AdminProductCreate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
