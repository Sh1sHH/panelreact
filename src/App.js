import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FormCargo from "./FormCargo";
import List_Cargo from "./List_Cargo";
import FormOrder from "./FormOrder";
import List_Order from "./List_Order";
import FormMusteri from "./FormMusteri";
import List_Musteri from "./List_Musteri";
import FormProduct from "./FormProduct";
import List_Product from "./List_Product";
import LoginEkrani from "./LoginEkrani";

// Özel Route Koruması
const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("username");
    if (!isAuthenticated) {
      navigate("/login"); // Eğer giriş yapılmamışsa login sayfasına yönlendir
    }
  }, [navigate]);

  return element;
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Giriş sayfası herkes erişebilir */}
        <Route path="login" element={<LoginEkrani />} />

        {/* Giriş yapmadan erişilemez sayfalar */}
        <Route path="/" element={<PrivateRoute element={<FormCargo />} />} />
        <Route
          path="formcargo"
          element={<PrivateRoute element={<FormCargo />} />}
        />
        <Route
          path="listcargo"
          element={<PrivateRoute element={<List_Cargo />} />}
        />
        <Route
          path="formorder"
          element={<PrivateRoute element={<FormOrder />} />}
        />
        <Route
          path="listorder"
          element={<PrivateRoute element={<List_Order />} />}
        />
        <Route
          path="FormMusteri"
          element={<PrivateRoute element={<FormMusteri />} />}
        />
        <Route
          path="ListMusteri"
          element={<PrivateRoute element={<List_Musteri />} />}
        />
        <Route
          path="FormProduct"
          element={<PrivateRoute element={<FormProduct />} />}
        />
        <Route
          path="ListProduct"
          element={<PrivateRoute element={<List_Product />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
