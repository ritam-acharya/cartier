import { motion } from "framer-motion";
import NavInnerContent from "./NavInnerContent";

const navVariant = {
    initial: {
        height: '40px',
        width: '90px',
        x: 0,
        y: 0
    },
    enter: {
        height: '100%',
        width: '100%',
        y: '-10px',
        x: '10px',
        transition: {
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const
        }
    },
    exit: {
        height: '40px',
        width: '90px',
        x: 0,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 1,
            ease: [0.64, 0, 0.24, 1] as const
        }
    }
}

const Nav = () => {
  return (
    <div className="fixed z-10 right-4 md:right-8 lg:right-16 top-5 md:top-9 lg:top-12 w-[96%] md:w-[400px] lg:w-[480px] h-[400px] md:h-[540px] rounded-[25px] ">
        <motion.div 
        variants={navVariant}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" bg-[#D0FF71] w-full h-full absolute z-10 top-0 right-0 rounded-[25px] ">
            <NavInnerContent />
        </motion.div>
    </div>
  )
}

export default Nav