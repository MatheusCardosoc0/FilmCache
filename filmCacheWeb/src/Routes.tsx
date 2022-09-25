import { Navigate, Route, Routes } from "react-router-dom";
import { Favoritos } from "./pages/favoritos";
import { Film } from "./pages/film";
import { Initial } from "./pages/Initial";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/film/:id" element={<Film />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}