import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./layout/admin-layout/AdminLayout";
import { Dashboard, Orders, Products, Settings, Statistics } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
