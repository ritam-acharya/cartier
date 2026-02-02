import { motion } from "framer-motion";

const options = [
    'Strategy',
    'Advertising creation',
    'Content and social media',
    'Production studio',
    'Consulting services'
];

const Options = ({currentOption, setCurrentOption}: {currentOption: number, setCurrentOption: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div className="options h-auto lg:h-[510px]  w-full flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-6 lg:gap-10">
                <div className="left-part h-full w-full lg:w-[24%]  flex flex-col justify-between  ">
                    <h4 className="monu-medium text-[38px] md:text-[50px] lg:text-[65px] text-black tracking-tight leading-[35px] md:leading-[48px] lg:leading-[62px]  ">Expertise</h4>
                    <p className="hidden lg:block text-[18px] monu-regular leading-[20px] text-black/70 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The best decisions are made when you ask the right questions. By thoroughly exploring your challenges and business objectives, you can develop strategies that consistently deliver results. Guaranteed.</p>
                </div>
                <div className="right-part flex h-full w-full lg:w-[45%] flex-col items-start gap-3 mt-4 lg:mt-0 ">
                    {
                        options.map((item, i) => (
                            <motion.p
                            whileHover={{
                                translateX: 25
                            }} 
                            transition={{
                                duration: 0.75,
                                ease: [0.64, 0, 0.24, 1] as const
                            }}
                            onClick={() => setCurrentOption(i)}
                            className={`text-[28px] md:text-[42px] lg:text-[62px] tracking-tight leading-[28px] md:leading-[42px] lg:leading-[61px] ${currentOption === i ? 'text-black' : 'text-[#C0BEA8]'} monu-regular cursor-pointer `} key={`option-${i}`}>
                                {i+1}. &nbsp;{item}
                            </motion.p>
                        ))
                    }
                </div>
            </div>
  )
}

export default Options