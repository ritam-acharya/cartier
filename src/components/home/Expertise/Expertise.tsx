import { useState } from "react";
import VideoOrImageWrapper from "./VideoOrImageWrapper";
import Options from "./Options";



const Expertise = () => {
    const [currentOption, setCurrentOption] = useState(0);    
    return (
        <div className="bg-[#D8D7CB] min-h-screen h-auto w-full py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-12 relative z-10">
            <Options currentOption={currentOption} setCurrentOption={setCurrentOption} />
            <div className="mt-16 mb-6 lg:hidden block h-auto w-full ">
                <p className=" text-[18px] leading-[20px] md:text-[16px] monu-regular md:leading-[18px] text-black/70 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The best decisions are made when you ask the right questions. By thoroughly exploring your challenges and business objectives, you can develop strategies that consistently deliver results. Guaranteed.</p>
            </div>
            <VideoOrImageWrapper currentOption={currentOption} />
        </div>
    )
}

export default Expertise