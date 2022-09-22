import { Navigate, Route, Routes } from "react-router-dom";
import { Film } from "./pages/film";
import { Main } from "./pages/main";

export function Routers(){
  return(
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/film/:id" element={<Film />}/>
      <Route path="*" element={<Navigate to={"/"} />}/>
    </Routes>
  )
}