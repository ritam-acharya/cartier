
import Achievements from "../components/home/Achievements/Achievements"
import Expertise from "../components/home/Expertise/Expertise"
import Hero from "../components/home/Hero/Hero"

const Home = () => {
  return (
    <div className="relative h-auto w-full ">
      <Hero />
      <Achievements />
      <Expertise />
    </div>
  )
}

export default Home