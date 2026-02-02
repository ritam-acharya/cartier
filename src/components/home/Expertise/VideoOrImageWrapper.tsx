import LeftContentBox from "./LeftContentBox"
import RightContentBox from "./RightContentBox"


const VideoOrImageWrapper = ({currentOption}: {currentOption: number}) => {
  return (
    <div className="images aspect-[16/9] w-full flex items-center justify-between gap-4 lg:gap-6 ">
        <LeftContentBox currentOption={currentOption} />
        <RightContentBox currentOption={currentOption} /> 
    </div>
  )
}

export default VideoOrImageWrapper