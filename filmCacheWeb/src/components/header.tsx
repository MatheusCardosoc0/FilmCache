import { Link } from "react-router-dom";

export function Header(props: any) {


  
  return (
    <header className={`
    bg-gradient-to-r from-teal-700 to-black
    flex justify-between py-4 px-6
    `}>
      <div className={`
      bg-gradient-to-r from-slate-300 to-neutral-400 rounded-full
      py-2 px-6
      `}>
        <h1 className={`
      md:text-3xl bg-gradient-to-r from-purple-500 to-orange-600
       rounded font-black bg-clip-text text-transparent
      `}>FilmCache</h1>
      </div>
      {props.state == 'favoritos'?
      <Link to={'/'} className="bg-gradient-to-tr from-teal-500 to-zinc-900
      text-slate-100 md:text-lg rounded py-1 px-4 md:px-8 items-center flex cursor-pointer border-t-4 border-t-teal-500 border-l-4 border-l-teal-400 font-extrabold hover:border-none">Retornar</Link>:
      <Link to={'/favoritos'} className="bg-gradient-to-tr from-teal-500 to-zinc-900
      text-slate-100 md:text-lg rounded py-1 px-4 md:px-8 items-center flex cursor-pointer border-t-4 border-t-teal-500 border-l-4 border-l-teal-400 font-extrabold hover:border-none">Meus filmes</Link>}
      
    </header>
  )
}