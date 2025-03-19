import { Routes, Route, Navigate } from "react-router-dom";
import FormCargo from "./FormCargo";
import List_Cargo from "./List_Cargo";
import FormOrder from "./FormOrder";
import List_Order from "./List_Order";
import FormMusteri from "./FormMusteri";
import List_Musteri from "./List_Musteri";
import FormProduct from "./FormProduct";
import List_Product from "./List_Product";
import LoginEkrani from "./LoginEkrani";
import PrivateRoute from "./PrivateRoute";

function App() {
  const isAuthenticated = localStorage.getItem("username");

  return (
    <div className="App">
      <Routes>
        {/* Default route redirects to login or dashboard based on auth status */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/FormMusteri" /> : <Navigate to="/login" />} 
        />
        
        {/* Login page */}
        <Route path="/login" element={<LoginEkrani />} />

        {/* Protected Routes */}
        <Route
          path="/formcargo"
          element={<PrivateRoute element={<FormCargo />} />}
        />
        <Route
          path="/listcargo"
          element={<PrivateRoute element={<List_Cargo />} />}
        />
        <Route
          path="/formorder"
          element={<PrivateRoute element={<FormOrder />} />}
        />
        <Route
          path="/listorder"
          element={<PrivateRoute element={<List_Order />} />}
        />
        <Route
          path="/FormMusteri"
          element={<PrivateRoute element={<FormMusteri />} />}
        />
        <Route
          path="/ListMusteri"
          element={<PrivateRoute element={<List_Musteri />} />}
        />
        <Route
          path="/FormProduct"
          element={<PrivateRoute element={<FormProduct />} />}
        />
        <Route
          path="/ListProduct"
          element={<PrivateRoute element={<List_Product />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
