import { motion } from "framer-motion";

const slideUp = {
    initial: {
        y: 0
    },
    enter: {
        y: '-400px'
    }
}


const VideoComponent = ({src}: {src: string}) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden hover:rounded-br-[40%] hover:transition:all hover:duration-700 hover:ease-in-out ">
        <video src={src} autoPlay muted loop className="w-full h-full object-cover"></video>
        <motion.div 
        variants={slideUp}
        initial="initial"
        whileInView="enter"
        transition={{duration: 1, delay: 0.5, ease: [0.64, 0, 0.24, 1] as const}}
        viewport={{once: true}}
        className="bg-[#D8D7CB] absolute inset-0 z-[2px] "></motion.div>
    </div>
  )
}

export default VideoComponent