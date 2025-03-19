import { Routes, Route } from "react-router-dom";
import FormCargo from "./FormCargo";
import List_Cargo from "./List_Cargo";
import FormOrder from "./FormOrder";
import List_Order from "./List_Order";
import FormMusteri from "./FormMusteri";
import List_Musteri from "./List_Musteri";
import FormProduct from "./FormProduct";
import List_Product from "./List_Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormCargo />} />
        <Route path="formcargo" element={<FormCargo />} />
        <Route path="listcargo" element={<List_Cargo />} />
        <Route path="formorder" element={<FormOrder />} />
        <Route path="listorder" element={<List_Order />} />
        <Route path="FormMusteri" element={<FormMusteri />} />
        <Route path="ListMusteri" element={<List_Musteri />} />
        <Route path="FormProduct" element={<FormProduct />} />
        <Route path="ListProduct" element={<List_Product />} />
      </Routes>
    </div>
  );
}
export default App;
