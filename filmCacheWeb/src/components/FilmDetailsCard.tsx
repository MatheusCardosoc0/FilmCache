import { DataFilmAtributes } from "../pages/Initial"

interface FilmDetailsCardProps{
  storageData: any
  func: ()=> void
}


export function FilmDetailsCard({ storageData, func }: FilmDetailsCardProps) {
  return (
    <div className="top-[10rem] absolute md:w-[36rem] overflow-hidden rounded-2xl flex flex-col gap-5 text-gray-100 bg-zinc-800">
      <img className="" src={`https://image.tmdb.org/t/p/w500/${storageData?.backdrop_path}`} />
      <div className="p-2 flex gap-4 flex-col pb-4">
        <h2 className="text-2xl">{storageData?.title}</h2>
        <p>Sinopse: <b>{storageData?.overview}</b></p>
        <div className="flex justify-between mb-4">
          <span>Avaliação: {storageData?.vote_average}/10.0</span>
          <span>Popularidade: {storageData?.popularity} classificações</span>
        </div>
        <div className="flex justify-between">
          <span>Data de lançamento: {storageData?.release_date.slice(-2) + '/' + storageData?.release_date.slice(5, 7) + '/' + storageData?.release_date.slice(0, 4)}
          </span>
          <div className="flex gap-12 mx-auto">
            <button onClick={func} className="py-1 px-3 text-lg font-semibold bg-yellow-600 rounded-lg hover:brightness-75">Salvar</button>
            <a className="py-1 px-3 text-lg font-semibold bg-blue-600 flex items-center rounded-lg hover:brightness-75" href={`https://www.youtube.com/results?search_query=${storageData?.title}`} target={"blank"} rel="external" >Trailer</a>
          </div>
        </div>
      </div>
    </div>
  )
}