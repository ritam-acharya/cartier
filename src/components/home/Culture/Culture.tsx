import RightPart from "./RightPart"

const Culture = () => {
  return (
    <div className="h-[120vh] w-full relative bg-white  text-black py-8 md:py-12 lg:py-20 flex flex-col lg:flex-row justify-start gap-4 md:gap-6 lg:gap-10 px-4 md:px-8 lg:px-0 z-[4] ">
      <div className="left h-[80vh]  md:h-auto w-[75%] lg:w-auto flex items-center justify-center overflow-hidden">
        <img src="/images/culture-img1.webp" alt="image1" className="h-full w-full object-cover" />
      </div>
      <RightPart />
      <div className="absolute right-0 top-[40%] md:top-[45%] lg:top-[40%] h-[180px] w-[180px] md:h-[200px] md:w-[200px] flex items-center justify-center overflow-hidden -translate-y-[40%] md:-translate-y-[45%] lg:-translate-y-[40%] ">
        <img src="/images/culture-img2.webp" alt="image2" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export default Culture