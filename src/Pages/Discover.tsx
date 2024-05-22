import { Error, Loader, SongCard } from '../Components'
import { genres } from '../Assets/Constants'

const Discover = () => {
  console.log(genres)
  return (
    <div className="flex flex-col">
      <Error />
      <Loader />
      <SongCard />
      <div className="w-full flex justify-between items-center flex-col mt-4 mb-10 sm:flex-row"></div>
    </div>
  )
}

export default Discover
