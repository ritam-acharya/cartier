import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FooterLinks from "./FooterLinks";
const name = "CARTIER";

const Footer = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.85', 'start start']
    });
    const y = useTransform(scrollYProgress, [0.4, 1], ['-50%', '0%']);
    const y1 = useTransform(scrollYProgress, [0, 1], ['80%', '0%']);
    return (
        <div className="h-screen w-full relative">
            <div ref={container} className="transparent-wraper absolute inset-0 h-screen w-full bg-transparent pointer-events-none"></div>
            <div className="footer fixed inset-0 h-screen w-full bg-black text-white z-[1px] py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-between pointer-events-auto ">
                <h2 className="w-full h-auto flex items-center justify-between text-[18vw] leading-[18vw] md:leading-[16vw] lg:leading-[12vw] monu-bold tracking-tighter ">
                    {
                        name.split("").map((char, i) => (
                            <span key={i} className="inline-flex h-auto w-auto">
                                <motion.span
                                style={{ translateY: y }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.64, 0, 0.24, 1] as const
                                }}
                                >{char}</motion.span>
                            </span>
                        ))
                    }
                </h2>
                <motion.div 
                style={{ translateY: y1 }}
                transition={{
                    duration: 0.5,
                    ease: [0.64, 0, 0.24, 1] as const
                }}
                className="footer-details w-full h-auto flex flex-col-reverse md:flex-col lg:flex-row items-start lg:items-center justify-between gap-16 md:gap-20 lg:gap-12 monu-regular ">
                    <div className=" w-full h-auto flex flex-col items-start justify-between gap-8 md:gap-10 lg:gap-12 ">
                        <div className="w-full h-auto flex flex-wrap items-center justify-start gap-6 md:gap-8 lg:gap-10  ">
                            <p className="w-[40%] md:w-[30%] lg:w-[25%] text-[16px] md:text-[18px] lg:text-[20px] ">
                                801-4446 Saint-Laurent Blvd. Montreal, Quebec H2W 1Z5
                            </p>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] w-[35%] ">
                                info@agencecartier.com
                            </p>
                        </div>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] ">Credits</p>
                        <div className="flex items-center justify-start gap-6 md:gap-8 lg:gap-10 w-full h-auto">
                            <p className="text-[13px] md:text-[15px] lg:text-[17px] w-[40%] md:w-[30%] lg:w-[25%]">Privacy Policy</p>
                            <p className="text-[13px] md:text-[15px] lg:text-[17px] w-[35%] ">Witness preferences</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-between gap-16 md:gap-[100px] lg:gap-28 w-auto h-auto lg:px-6 ">
                        <div className="flex flex-col items-start justify-between gap-3">
                            <FooterLinks linkName="Achievements" />
                            <FooterLinks linkName="Expertise" />
                            <p className="block md:hidden"><FooterLinks linkName="Contact" /></p>
                            <p className="block md:hidden"><FooterLinks linkName="Blog" /></p>
                            <p className="block md:hidden"><FooterLinks linkName="English" /></p>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-3">
                            <FooterLinks linkName="About" />
                            <FooterLinks linkName="Careers" />
                        </div>
                        <div className="hidden md:block">
                            <div className="flex flex-col items-start justify-between gap-3">
                                <FooterLinks linkName="Contact" />
                                <FooterLinks linkName="Blog" />
                                <FooterLinks linkName="English" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer