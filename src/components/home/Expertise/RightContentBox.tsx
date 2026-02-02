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

const RightContentBox = ({ currentOption }: { currentOption: number }) => {
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
                    src="/images/Expertise-img2.webp"
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption === 1 && (
                    <video
                    src="/videos/Expertise-vid1.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption === 2 && (
                    <video
                    src="/videos/Expertise-vid2.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption === 3 && (
                    <video
                    src="/videos/Expertise-vid3.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    />
                )}

                {currentOption > 3 && (
                    <img
                    src="/images/Expertise-img7.webp"
                    className="w-full h-full object-cover"
                    />
                )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default RightContentBox;
