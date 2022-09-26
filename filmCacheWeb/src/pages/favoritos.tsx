import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../components/header";
import { DataFilmAtributes } from "./Initial";

export function Favoritos() {

  const [favoriteFilms, setFavoriteFilms] = useState<DataFilmAtributes[]>([])

  useEffect(() => {
    const film = localStorage.getItem("@filmCache")
    setFavoriteFilms(JSON.parse((film) || '[]'))
  }, [])

  function deletar(id: number) {
    let filterFilms = favoriteFilms.filter(film => {
      return (film.id !== id)
    })

    setFavoriteFilms(filterFilms)
    localStorage.setItem('@filmCache', JSON.stringify(filterFilms))
    toast.success('Filme removido')
  }


  return (
    <div className="h-full w-full bg-gradient-to-tr from-slate-600 via-teal-600 to-blue-600 pb-40">
      <Header state='favoritos' />

      <div className="flex flex-col items-start mt-12 md:w-[32rem] w-[17rem] bg-old mx-auto pr-4 md:pl-12 py-12 gap-4 rounded-tr-[8rem] rounded-bl-[8rem] rounded-xl pl-4">
        <h2 className="md:text-3xl text-xl mx-auto mb-12 font-semibold">Lista de favoritos</h2>
        {favoriteFilms.length == 0 && <span>Você não possui filmes salvos</span>}
        {favoriteFilms?.map(film => {
          return (
            <li key={film.id} className="mb-4">
              <span className="md:text-2xl">{film.title}</span>
              <div className="flex gap-3 mt-2">
                <Link className="bg-blue-500 p-1 rounded-lg text-slate-200" to={`/film/${film.id}`} >Detalhes</Link>
                <button className="bg-red-500 text-slate-200 p-1 rounded-lg" onClick={() => deletar(film.id)}>Exckuir</button>
              </div>
            </li>
          )
        })}
      </div>
     
    </div>
  )
}