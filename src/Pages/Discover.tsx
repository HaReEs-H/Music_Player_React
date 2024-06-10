import { Error, Loader, SongCard } from '../Components'
import { genres } from '../Assets/Constants'

const Discover = () => {
  console.log(genres)
  return (
    <div className="flex flex-col">
      <Error />
      <Loader />
      <SongCard />
      <div className="w-full flex justify-between items-center flex-col mt-4 mb-10 sm:flex-row">
        <h2 className="font-bold text-white text-3xl text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8"></div>
    </div>
  )
}

export default Discover
