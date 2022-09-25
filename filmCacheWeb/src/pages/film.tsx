import { CaretLeft } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../components/header"
import { api } from "../services/api"
import { DataFilmAtributes } from "./Initial"




export const Film = () => {

  const [detailsFilm, setDEtailsFilm] = useState<DataFilmAtributes>()
  const [filmExixt, setFilmExist] = useState(false)


  const { id } = useParams()

  useEffect(() => {
    async function GetDetails() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br",
        }
      })
        .then(Response => {
          setDEtailsFilm(Response.data)
          setFilmExist(true)
        })
    }
    GetDetails()
  }, [])

  function saveFilm(){
    const MyList = localStorage.getItem('@filmCache')

    let filmeSalvo = JSON.parse((MyList) || '[]')

    const notSaveRepeatFilms = filmeSalvo.some((filmeSalvo: { id: number }) => filmeSalvo.id === detailsFilm?.id)

    if(notSaveRepeatFilms){
      alert('Filme já está na lista')
      return
    }
    filmeSalvo.push(detailsFilm)
    localStorage.setItem('@filmCache' , JSON.stringify(filmeSalvo))
    alert('Salvo com sucesso!')
  }



  return (
    <div>
      <Header />
      <div className="h-screen w-full bg-gradient-to-r from-teal-500 to-gray-800 flex justify-center items-center">

        {filmExixt ?
          <div className="top-[10rem] absolute md:w-[36rem] overflow-hidden rounded-2xl flex flex-col gap-5 text-gray-100 bg-zinc-800">
            <img className="" src={`https://image.tmdb.org/t/p/w500/${detailsFilm?.backdrop_path}`} />
            <div className="p-2 flex gap-4 flex-col pb-4">
              <h2 className="text-2xl">{detailsFilm?.title}</h2>
              <p>Sinopse: <b>{detailsFilm?.overview}</b></p>
              <div className="flex justify-between mb-4">
                <span>Avaliação: {detailsFilm?.vote_average}/10.0</span>
                <span>Popularidade: {detailsFilm?.popularity} classificações</span>
              </div>
              <div className="flex justify-between">
                <span>Data de lançamento: {detailsFilm?.release_date.slice(-2) + '/' + detailsFilm?.release_date.slice(5, 7) + '/' + detailsFilm?.release_date.slice(0, 4)}
                </span>
                <div className="flex gap-12 mx-auto">
                <button onClick={saveFilm} className="py-1 px-3 text-lg font-semibold bg-yellow-600 rounded-lg hover:brightness-75">Salvar</button>
                <a className="py-1 px-3 text-lg font-semibold bg-blue-600 flex items-center rounded-lg hover:brightness-75" href={`https://www.youtube.com/results?search_query=${detailsFilm?.title}`} target={"blank"} rel="external" >Trailer</a>
              </div>
              </div>
            </div>
          </div>
          :
          <div className="">
            <Link className="w-48 h-48" to={'/'}><CaretLeft size={60} className='animate-bounce fixed top-1/3 left-20 text-slate-200' /></Link>
            <h3 className="text-4xl font-bold text-slate-200 ">Filme não encontrado</h3>
          </div>}
      </div>
      <div className="h-[20vh] bg-gradient-to-r from-teal-500 to-gray-800"></div>
    </div>
  )
}