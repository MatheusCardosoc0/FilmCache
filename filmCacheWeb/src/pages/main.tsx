import { useEffect, useState } from "react"
import { Header } from "../components/header"
import { api } from "../services/api"


interface DataFilmAtributes {
  adult: boolean,
  backdrop_path: string,
  genre_ids: [
    number
  ],
  id: number,
  original_language: string,
  original_title: string,
  overview: string ,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const Main = () => {

  const [dataFilm, setDataFilm] = useState<DataFilmAtributes[]>([])

  useEffect(() =>{
    async function GetFilms(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
          page:1,
        }
      })
      console.log(response)
    }
    GetFilms()
  },[])


  return (
    <div>
      <Header />
    </div>
  )
}