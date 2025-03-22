import { Routes, Route, Navigate } from 'react-router-dom';
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
import Dashboard from './Dashboard';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  return (
    <Routes>
      {/* Ana sayfa yönlendirmesi */}
      <Route 
        path="/" 
        element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
      />
      
      {/* Login sayfası */}
      <Route path="/login" element={<LoginEkrani />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
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
  );
}

export default App;
