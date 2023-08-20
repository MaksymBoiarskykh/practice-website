import { Routes, Route } from "react-router-dom";
import { Users } from "../pages/Users";
import { IdUserPage } from "../pages/IdUserPage";
import { About } from "../pages/About";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="/users/:id" element={<IdUserPage />} />
    <Route path="*" element={<Users />} />
  </Routes>
);
