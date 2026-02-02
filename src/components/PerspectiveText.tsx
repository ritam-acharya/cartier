import { motion } from "framer-motion";


const perspectiveTextContainer = {
    intital: {
        rotateX: 0
    },
    hover: {
        rotateX: -90
    }
}

const perspectiveTextP1 = {
    initial: {
        opacity: 1,
        translateY: 0
    },
    hover: {
        opacity: 0,
        translateY: -10
    }
}

const perspectiveTextP2 = {
    initial: {
        opacity: 0
    },
    hover: {
        opacity: 1
    }
}


export default function Perspective({lable}: {lable: string}) {
    return <motion.div 
    variants={perspectiveTextContainer}
    initial="initial"
    whileHover="hover"
    transition={{duration: 0.75, ease: [0.64, 0, 0.24, 1]}}
    className="perspective-button w-full h-full relative text-lg  ">
        <motion.p  
        variants={perspectiveTextP1}
        transition={{duration: 0.7, ease: [0.64, 0, 0.24, 1]}}
        className="h-full w-full flex items-center justify-center ">{lable}</motion.p>
        <motion.p 
        variants={perspectiveTextP2}
        transition={{duration: 0.7, ease: [0.64, 0, 0.24, 1]}}
        className="absolute inset-0 flex items-center justify-center ">{lable}</motion.p>
    </motion.div>
}
