import { Routes, Route } from "react-router-dom";
import FormCargo from "./FormCargo";
import List_Cargo from "./List_Cargo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormCargo />} />
        <Route path="listcargo" element={<List_Cargo />} />
      </Routes>
    </div>
  );
}
export default App;
