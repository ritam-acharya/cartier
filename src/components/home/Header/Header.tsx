import { useState } from "react";
import Button from "./Button";
import {AnimatePresence, useScroll, useTransform} from "framer-motion";
import Nav from "./Nav/Nav";
import { motion } from "framer-motion";



const Header = ({container}: {container: React.RefObject<HTMLDivElement | null>}) => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.2', 'end 0.3']
  });

  const opacity = useTransform(scrollYProgress, [0,1], [1,0]);
  return (
    <div className="h-auto w-full flex items-center justify-between bg-black relative z-10 px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8  ">
        {
          !open && <motion.div 
          style={{opacity}}
          transition={{duration: 0.5, ease: [0.64, 0, 0.24, 1] as const}}
          className=" uppercase text-[40px] lg:text-[80px] mt-2 md:mt-0 lg:mt-3 leading-tight tracking-wide text-white font-medium monu-medium ">
            Cartier
          </motion.div>
        }
        <Button open={open} setOpen={setOpen} />
        <AnimatePresence mode="wait">
          {
            open && <Nav />
          }
        </AnimatePresence>
    </div>
  )
}

export default Header