
import Achievements from "../components/home/Achievements/Achievements"
import Culture from "../components/home/Culture/Culture"
import Expertise from "../components/home/Expertise/Expertise"
import Hero from "../components/home/Hero/Hero"
import NewsLetter from "../components/home/Newsletter.tsx/NewsLetter"

const Home = () => {
  return (
    <div className="relative h-auto w-full ">
      <Hero />
      <Achievements />
      <Expertise />
      <Culture />
      <NewsLetter />
    </div>
  )
}

export default Home