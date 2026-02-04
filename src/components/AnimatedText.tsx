import { useInView, motion } from "framer-motion";
import { useRef } from "react"


const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 50,
        translateX: -20
    },
    enter: {
        opacity: 1,
        rotateX: 0,
        translateX: 0,
        translateY: 0,
        transition: {
            duration: 0.65,
            ease: [0.215, 0.61, 0.355, 1] as const
        }
    },
    exit: {
        opacity: 0,
        rotateX: 90,
        translateY: 50,
        translateX: -20,
        transition: {
            duration: 0.65,
            ease: [0.64, 0, 0.24, 1] as const
        }
    }
}


const AnimatedText = ({children}: {children: React.ReactNode}) => {
    const container = useRef<HTMLDivElement>(null);
    const isInView = useInView(container, { once: true });    
    return (
        <div
        ref={container}
        className="perspective h-auto w-auto ">
            <motion.div 
            variants={perspective}
            initial='initial'
            animate={isInView ? 'enter' : 'exit'}
            className="monu-medium inline-block h-auto w-auto text-black tracking-tight ">
                {children}
            </motion.div>
        </div>
    )
}

export default AnimatedText