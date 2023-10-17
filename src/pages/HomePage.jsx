import Categories from "../components/home/Categories"
import Videos from "../components/home/Videos"

const HomePage = () => {
  return (
    <div className='grid grid-rows-[min-content_1fr]'>
      <Categories />
      <Videos />
    </div>
  )
}

export default HomePage