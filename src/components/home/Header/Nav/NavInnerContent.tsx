import { Link } from "react-router-dom";
import { footerLinks, navLinks } from "./data";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

const slideRight = {
    initial: {
        x: '-45px' 
    },
    enter: {
        x: 0,
        transition: {
            duration: 0.75,
            ease: [0.64, 0, 0.24, 1] as const
        }
    },
    exit: {
        x: '-45px',
        transition: {
            delay: 0.5,
            duration: 0.75,
            ease: [0.64, 0, 0.24, 1] as const
        }
    }
}

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 40,
        translateX: -10
    },
    enter: ({i} : {i: number}) => ({
        opacity: 1,
        rotateX: 0,
        translateX: 0,
        translateY: 0,
        transition: {
            delay: 0.5 + i * 0.1,
            duration: 0.65,
            ease: [0.215, 0.61, 0.355, 1] as const
        }
    }),
    exit: ({i}: {i: number}) => ({
        opacity: 0,
        rotateX: 90,
        translateY: 40,
        translateX: -10,
        transition: {
            duration: 0.65,
            delay: 0.1 * (5 - i),
            ease: [0.64, 0, 0.24, 1] as const
        }
    })
}


const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: ({i} : {i: number}) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5 + i * 0.1,
            duration: 0.65,
            ease: [0.215, 0.61, 0.355, 1] as const
        }
    }),
    exit: ({i}: {i: number}) => ({
        opacity: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.65,
            ease: [0.215, 0.61, 0.355, 1] as const
        }
    })
}

const animateText = {
    initial: {
        opacity: 0,
        translteY: -10
    },
    enter: {
        opacity: 1,
        translateY: 10,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.215, 0.61, 0.355, 1] as const
        }
    },
    exit: {
        opacity: 0,
        translateY: -10,
        transition: {
            duration: 0.5,
            ease: [0.215, 0.61, 0.355, 1] as const
        }
    }
}



const NavInnerContent = () => {
  return (
    <div className="h-full w-full flex flex-col pb-8 md:pb-12 lg:pb-20 justify-between">
        <motion.div
        variants={animateText}
        initial="initial"
        animate="enter"
        exit="exit"
        className="uppercase text-[40px] lg:text-[80px] leading-tight tracking-wide text-black font-medium monu-medium px-2 py-1 block md:hidden ">Cartier</motion.div>
        <div className="pt-2 md:pt-[100px] pl-6 md:pl-12 text-3xl md:text-4xl lg:text-5xl monu-regular flex flex-col gap-1 ">
            {
                navLinks.map((link, i) => {
                    return (
                        <div key={i} className="perspective">
                            <motion.div 
                            variants={perspective}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            custom={{i}}
                            className="cursor-pointer h-auto w-auto overflow-hidden">
                                <motion.div 
                                variants={slideRight}
                                initial="initial"
                                whileHover="enter"
                                exit="exit"
                                animate="initial"
                                className="flex items-center justify-start gap-2 pl-4 md:pl-2 lg:pl-0">
                                    <span><GoArrowRight /></span><p>{link.title}</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    )
                })
            }
        </div>
        <div className="pt-2 md:pt-[40px] pl-6 md:pl-12 text-lg md:text-xl lg:text-2xl monu-regular flex flex-wrap gap- ">
            {
                footerLinks.map((item, i) => {
                    return (
                        <motion.div 
                        variants={slideIn}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        custom={{i}}
                        key={i} className="w-1/2 cursor-pointer mt-1">
                            <p className="w-auto h-auto inline-block relative after:absolute after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:bottom-0 after:left-0 hover:after:transition-all hover:after:duration-700 hover:after:ease-in-out ">
                                <Link to={item.href} >{item.title}</Link>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 hover:w-full bg-black hover:transition-all hover:duration-200 hover:ease-in-out "></div>
                            </p>
                        </motion.div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NavInnerContent