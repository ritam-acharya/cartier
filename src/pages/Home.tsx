
import Achievements from "../components/home/Achievements/Achievements"
import Culture from "../components/home/Culture/Culture"
import Expertise from "../components/home/Expertise/Expertise"
import Footer from "../components/home/Footer/Footer"
import Hero from "../components/home/Hero/Hero"
import NewsLetter from "../components/home/Newsletter.tsx/NewsLetter"
import Loader from "../components/Loader"

const Home = () => {
  
  return (
    <div className="relative h-auto w-full bg-neutral-950 ">
      <Loader />
      <Hero />
      <Achievements />
      <Expertise />
      <Culture />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home