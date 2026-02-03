import { motion } from "framer-motion";
import { useEffect } from "react";

const slideDown = {
    initial: {
        y: 0
    },
    enter: ({i}: {i: number}) => ({
        y: '100%',
        transition: {
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const,
            delay: 0.5 + (0.05 * i)
        }
    })
}

const slideUp = {
    initial: {
        y: 0
    },
    enter: {
        y: '-100%',
        transition: {
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const,
            delay: 1
        }
    }
}

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const clock = setTimeout(() => {
            document.body.style.overflow = 'unset';
        }, 1300);

        return () => {
            clearTimeout(clock);
            document.body.style.overflow = 'unset';
        }
        
    }, []);


    return (
        <motion.div 
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="h-screen w-full absolute inset-0 z-50 bg-[#BFBDA8] text-black monu-medium flex items-center justify-center text-[20px] md:text-[24px] lg:text-[28px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-tight ">
            <h2>
                {
                    "CARTIER".split("").map((char, i) => (
                        <span key={i} className="inline-flex overflow-hidden ">
                            <motion.span
                            variants={slideDown}
                            initial="initial"
                            animate="enter"
                            custom={{i}}
                            className="inline-block"
                            >{char}</motion.span>
                        </span>
                    ))
                }
            </h2>
        </motion.div>
    )
}

export default Loader