import { useEffect, useRef } from "react"


const VideoContainer = ({src, currentIndex, idx}: {src: string, currentIndex: number, idx: number}) => {

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { 
    if(currentIndex === idx ) {
      videoRef.current?.play();
    }else {
      videoRef.current?.pause();
    }
  }, [currentIndex])

  return (
    <div className="h-[400px] md:h-[100%] w-full flex-shrink-0 rounded-t-[100%] relative flex items-center justify-center overflow-hidden ">
        <video ref={videoRef} src={src}  muted loop className="absolute inset-0 h-[100%] w-[100%] object-cover "></video>
        {
          currentIndex !== idx && <div className="absolute inset-0 bg-black/70 "></div>
        }
    </div>
  )
}

export default VideoContainer