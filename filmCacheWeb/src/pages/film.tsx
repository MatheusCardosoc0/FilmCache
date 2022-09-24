import { CaretLeft } from "phosphor-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../components/header"
import { api } from "../services/api"
import { DataFilmAtributes } from "./Initial"

export const Film = () => {

  const [detailsFilm, setDEtailsFilm] = useState<DataFilmAtributes[]>([])
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

  console.log(detailsFilm)



  return (
    <div>
      <Header />
      <div className="h-screen w-full bg-gradient-to-r from-teal-500 to-gray-800 flex justify-center items-center">

        {filmExixt ?
          <div>a</div>
          :
          <div className="">
            <Link className="w-48 h-48" to={'/'}><CaretLeft size={60} className='animate-bounce fixed top-1/3 left-20 text-slate-200' /></Link>
            <h3 className="text-4xl font-bold text-slate-200 ">Filme não encontrado</h3>
          </div>}
      </div>
    </div>
  )
}