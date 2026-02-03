import { useRef } from "react";
import Perspective from "../../PerspectiveText";
import VideoWrapper from "./VideoWrapper";
import { motion, useInView } from "framer-motion";

const perspectiveText = {
    initial: {
        opacity: 0,
        translateY: 40,
        translateX: -10,
        rotateX: 90
    },
    animate: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        rotateX: 0,
        transition: {
            delay: 0.25,
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const
        }
    },
    exit: {
        opacity: 0,
        translateY: 40,
        translateX: -10,
        rotateX: 90,
        transition: {
            duration: 0.5,
            ease: [0.64, 0, 0.24, 1] as const
        }
    }
}

const Achievements = () => {
    const perspectiveTextRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(perspectiveTextRef, { once: true });
    return (
        <div className="h-auto w-full bg-[#FFFFFF] text-black py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16 relative z-10 ">
            <div className="flex items-center md:items-start justify-between lg:justify-end gap-4 md:gap-6 lg:gap-10">
                <div ref={perspectiveTextRef} className="h-auto w-auto overflow-hidden  perspective-button ">
                    <motion.h1 
                    variants={perspectiveText}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    exit="exit"
                    className="text-[22px] md:text-[65px] lg:text-[100px] monu-medium overflow-hidden  ">Achievements</motion.h1>
                </div>
                <div className="monu-regular bg-[#D0FF71] h-[40px] w-[120px] cursor-pointer rounded-[25px]  ">
                    <Perspective lable="See more" />
                </div>
            </div>

            <div className="content-wraper flex flex-wrap items-center justify-center md:justify-between flex-col md:flex-row gap-4 lg:gap-8 py-10 h-auto w-full ">
                <div className="hidden md:block h-auto mt-32 w-full md:w-[30%]  text-lg lg:text-xl text-start font-medium monu-regular leading-tight text-black ">
                    For us, the only way to achieve success is to create success for our clients. And we've long understood that to achieve this, we need to do things differently.
                </div>
                <div className="h-auto w-full md:w-[42%] text-xl md:text-2xl lg:text-4xl text-start monu-regular font-medium leading-tight text-black ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Influencing our world and yours with creativity. Creating sustainable solutions by combining rigor with the real needs of each brand is what drives us.
                </div>
                <div className="block md:hidden h-auto mt-2 w-full md:w-[30%]  text-lg lg:text-xl text-start font-medium monu-regular leading-tight text-black ">
                    For us, the only way to achieve success is to create success for our clients. And we've long understood that to achieve this, we need to do things differently.
                </div>
                <VideoWrapper src="/videos/achievements-vid1.mp4" text1="Order of Engineers of Quebec" text2="ing.: a strong and ambitious title" text3="A campaign that highlights the engineering profession." />
                <VideoWrapper src="/videos/achievements-vid2.mp4" text1="CDPQ Infra" text2="Within REM range" text3="A new era of mobility for Greater Montreal" />
                <VideoWrapper src="/videos/achievements-vid3.mp4" text1="Quebec Elections" text2="The municipal councilor is speaking to you" text3="With the municipal elections approaching, the city's objects are a topic of discussion for voters." />
                <VideoWrapper src="/videos/achievements-vid4.mp4" text1="Canadian Museum of History" text2="Retro – Popular music in Canada from the 60s, 70s and 80s" text3="A perfect opportunity to bring all generations together around decibels." />
                <VideoWrapper src="/videos/achievements-vid5.mp4" text1="Duceppe" text2="A new identity connected by the stage" text3="A redesign of the visual identity for the 5 to 7 themed theatrical evenings at the Duceppe theatre. " />
                <VideoWrapper src="/videos/achievements-vid6.mp4" text1="Quebec CPA Order" text2="It's not bad for you" text3="It's obvious: the next generation and the CPA qualification are made for each other." />
            </div>
        </div>
    )
}

export default Achievements