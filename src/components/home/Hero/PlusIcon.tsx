import { motion, useScroll, useTransform } from "framer-motion";
import { IoAddOutline } from "react-icons/io5";


const PlusIcon = ({container}: {container: React.RefObject<HTMLDivElement | null>}) => {

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['end end', 'end 0.2']
    });
    const y = useTransform(scrollYProgress, [0,1], [0, -700]);

    return (
        <motion.div 
        style={{translateY: y }}
        transition={{
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const
        }}
        className="add md:h-10 h-8 md:w-10 w-8 rounded-[100%] bg-[#D0FF71] z-10 fixed right-6 md:right-12 lg:right-16 bottom-[80px] lg:bottom-[50px] ">
            <motion.p
            className="h-full w-full flex items-center justify-center text-lg md:text-2xl cursor-pointer "
            whileHover={{
                rotate: '180deg',
                transition: {
                    duration: 0.5,
                    ease: [0.64, 0, 0.24, 1] as const
                }
            }}
            >
                <IoAddOutline />
            </motion.p>
        </motion.div>
    )
}

export default PlusIcon