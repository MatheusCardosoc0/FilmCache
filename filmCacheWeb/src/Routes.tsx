import { Navigate, Route, Routes } from "react-router-dom";
import { Film } from "./pages/film";
import { Initial } from "./pages/Initial";

export function Routers(){
  return(
    <Routes>
      <Route path="/" element={<Initial />}/>
      <Route path="/film/:id" element={<Film />}/>
      <Route path="*" element={<Navigate to={"/"} />}/>
    </Routes>
  )
}