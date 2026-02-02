import { GoArrowRight } from "react-icons/go"
import Perspective from "../../PerspectiveText"


const RightPart = () => {
  return (
    <div className="right h-auto lg:h-full w-full lg:w-[75%] flex flex-col items-start lg:justify-between justify-start gap-10 ">
        <div className="flex items-center justify-start gap-2 md:gap-4">
          <span className="text-[45px] md:text-[60px] lg:text-[80px] font-light "><GoArrowRight /></span>
          <p className="text-[34px] md:text-[55px] lg:text-[75px] monu-regular leading-[34px] md:leading-[55px] lg:leading-[70px] tracking-tight">agency culture</p>
        </div>
        <div className="text-[23px] md:text-[36px] lg:text-[44px] monu-regular leading-[23px] md:leading-[36px] lg:leading-[44px] w-full md:max-w-[70%] lg:max-w-[75%] h-auto tracking-tight flex flex-col justify-between gap-4 lg:gap-8">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To be a vector of creativity that brings together a community of talented and innovative people serving transformative ideas.</p>
          <div className="monu-regular bg-[#D0FF71] h-[50px] w-[210px] tracking-normal cursor-pointer rounded-[25px]  ">
            <Perspective lable="Learn more about us" />
          </div>
        </div>
    </div>
  )
}

export default RightPart