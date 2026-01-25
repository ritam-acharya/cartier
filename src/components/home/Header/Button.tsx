
import { motion } from "framer-motion";

const SlideUp = {
    open: {
        y: '-40px',
        transition: {
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const
        }
    },
    close: {
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const
        }
    }
}

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

const Button = ({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div 
        onClick={() => setOpen(prev => !prev)}
        className="h-[40px] w-[90px] fixed z-20 right-4 md:right-8 lg:right-16 top-5 md:top-9 lg:top-12 mt-2 md:mt-0 lg:mt-3 rounded-[25px] monu-regular overflow-hidden cursor-pointer ">
            <motion.div 
            variants={SlideUp}
            animate={open ? "open" : "close"}
            transition={{
                duration: 0.5,
                ease: [0.64, 0, 0.24, 1] as const
            }}
            className="h-full w-full absoulte cursor-pointer">
                <div className="bg-[#D0FF71] h-full w-full uppercase  ">
                    <Perspective lable="Menu" />
                </div>
                <div className="bg-black text-white h-full w-full uppercase flex items-center justify-center ">
                    <Perspective lable="Close" />
                </div>
            </motion.div>
        </div>
    )
}

function Perspective({lable}: {lable: string}) {
    return <motion.div 
    variants={perspectiveTextContainer}
    initial="initial"
    whileHover="hover"
    transition={{duration: 0.75, ease: [0.64, 0, 0.24, 1]}}
    className="perspective-button w-full h-full uppercase relative text-lg lg:text-xl ">
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


export default Button