import { motion, AnimatePresence } from "framer-motion";

const slideUp = {
    initial: { 
        y: '100%'
    },
    animate: {
        y: 0
    },
    exit: {
        y: "-100%",
        transition: { 
            delay: 0.5,
            duration: 0.5, 
            ease: [0.64, 0, 0.24, 1] as const 
        }
    }
};

const LeftContentBox = ({ currentOption }: { currentOption: number }) => {
    return (
        <div className="h-full w-1/2 overflow-hidden cursor-pointer">
            <AnimatePresence mode="wait">
                <motion.div
                key={currentOption} 
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full w-full flex items-center justify-center overflow-hidden"
                >
                {currentOption === 0 && (
                    <img
                    src="/images/Expertise-img1.webp"
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption === 1 && (
                    <img
                    src="/images/Expertise-img3.webp"
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption === 2 && (
                    <img
                    src="/images/Expertise-img4.webp"
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption === 3 && (
                    <img
                    src="/images/Expertise-img5.webp"
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption > 3 && (
                    <img
                    src="/images/Expertise-img6.webp"
                    className="w-full h-full object-cover"
                    />
                )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LeftContentBox;