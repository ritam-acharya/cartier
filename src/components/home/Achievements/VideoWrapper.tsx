import { GoArrowRight } from "react-icons/go";
import VideoComponent from "./VideoComponent";
import { motion } from "framer-motion";

const slideRight = {
    initial: {
        x: '-95px'
    },
    enter: {
        x: 0
    }
}

const VideoWrapper = ({src, text1, text2, text3}: {src: string, text1: string, text2: string, text3: string}) => {
  return (
    <div className="h-auto w-full md:w-[48%] ">
        <VideoComponent src={src} />
        <p className="text-[#515252] cursor-pointer my-3 text-[16px] text-left ">{text1}</p>
        <div className="w-auto h-auto overflow-hidden cursor-pointer my-2 inline-block  ">
            <motion.div 
            variants={slideRight}
            initial="initial"
            whileHover="enter"
            transition={{
                duration: 0.5,
                ease: [0.64, 0, 0.24, 1]
            }}
            className="h-auto w-auto flex items-center justify-between gap-4 ">
                <div className="bg-[#D0FF71] w-auto h-auto px-8 py-3 rounded-[25px] text-lg md:text-xl inline-block "><GoArrowRight /></div>
                <h2 className="monu-medium text-2xl md:text-3xl lg:text-[34px]  ">{text2}</h2>
            </motion.div>
        </div>
        <p className="my-3 text-sm md:text-[16px] cursor-pointer text-gray-500 hover:text-black ">{text3}</p>
    </div>
  )
}

export default VideoWrapper