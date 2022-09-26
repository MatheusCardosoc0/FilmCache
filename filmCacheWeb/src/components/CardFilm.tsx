import { Link } from "react-router-dom"

interface CardFilmProps {
  id: number
  title: string
  poster_path: string
}




export function CardFilm({id, poster_path, title}: CardFilmProps) {
  return (
    <article key={id} className="text-slate-300 flex flex-col bg-gradient-to-tl from-teal-500 to-black rounded-lg overflow-hidden border-l-4 border-l-blue-500 border-t-blue-600 border-t-4 md:border-t-8 md:border-l-8">
      <img className=" h-[15rem] md:w-[32rem] md:h-[20rem]  object-cover rounded-b-lg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <div className="flex flex-col p-3 gap-4">
        <strong className="md:text-3xl">{title}</strong>
        <Link className="font-bold mx-auto py-1 px-3 rounded-lg bg-blue-600 md:text-2xl" to={`/film/${id}`} >Acessar</Link>
      </div>
    </article>
  )
}