import { CaretLeft } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { FilmDetailsCard } from "../components/FilmDetailsCard"
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
      toast.warn('Filme já está na lista')
      return
    }
    filmeSalvo.push(detailsFilm)
    localStorage.setItem('@filmCache' , JSON.stringify(filmeSalvo))
    toast.success('Salvo com sucesso!')
  }



  return (
    <div>
      <Header />
      <div className="h-screen w-full bg-gradient-to-r from-teal-500 to-gray-800 flex justify-center items-center">

        {filmExixt ?
          <FilmDetailsCard storageData={detailsFilm} func={() => saveFilm()} />
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