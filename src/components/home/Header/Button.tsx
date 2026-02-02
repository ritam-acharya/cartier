
import { motion } from "framer-motion";
import Perspective from "../../PerspectiveText";

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

export default Button