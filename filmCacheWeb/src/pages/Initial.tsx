import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardFilm } from "../components/CardFilm"
import { Header } from "../components/header"
import { api } from "../services/api"


export interface DataFilmAtributes {
  adult: boolean,
  backdrop_path: string,
  genre_ids: [
    number
  ],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const Initial = () => {

  const [dataFilm, setDataFilm] = useState<DataFilmAtributes[]>([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function GetFilms() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
          page: 1,
        }
      })
      setDataFilm(response.data.results.slice(0, 18))
      setLoad(false)
    }
    GetFilms()
  }, [])



  return (
    <div>
      {load ?
        <div className="w-full h-screen flex justify-center items-center bg-gray-700 gap-12">
          <div className="animate-spin h-[10rem] w-[10rem]  border-t-8 rounded-full border-teal-500" >
          </div>
          <h3 className="text-2xl text-teal-600 font-black">Carregando...</h3>
        </div>

        :

        <main>
          <Header />
          <div className="flex justify-center flex-col items-center gap-10 pt-20 bg-gradient-to-tr from-blue-700 via-slate-700 to-slate-900 pb-40 ">
            <h2 className="text-2xl md:text-5xl font-black text-transparent bg-gradient-to-tr from-teal-700 to-teal-500 bg-clip-text block mb-8">Filmes em lançamento</h2>
            <div className="md:flex-row flex flex-col flex-wrap gap-10 justify-center">
              {dataFilm.map(film => {
                return (
                  <CardFilm
                    id={film.id}
                    poster_path={film.poster_path}
                    title={film.title}
                  />
                )
              })}</div>
          </div>
        </main>
      }

    </div>
  )
}