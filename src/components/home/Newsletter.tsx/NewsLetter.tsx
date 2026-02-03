

const NewsLetter = () => {
  return (
    <div className="w-full h-auto bg-[#D0FF71] text-black py-8 md:py-12 lg:py-20 flex flex-col lg:flex-row justify-start lg:justify-between gap-10 px-4 md:px-8 lg:px-16 ">
        <div className="left w-full lg:w-[65%] h-auto relative  ">
            <div className="w-full h-auto flex flex-col gap-6 ">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] max-w-[50%] md:max-w-[45%] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-tight monu-regular ">Latest trends, inspiring ideas, innovation and technologies.</p>
                <h4 className="text-[24px] md:text-[36px] lg:text-[48px] max-w-[50%] leading-[22px] md:leading-[32px] lg:leading-[44px] tracking-tight monu-regular ">We have much more than just a newsletter.</h4>
            </div>
            <div className="absolute right-1 -top-20 h-[200px] w-[200px] md:h-[400px] md:w-[350px] lg:-right-10 xl:-right-1 md:-top-44  flex items-center justify-center ">
                <img src="/images/newsletter-img1-sm.webp" // fallback
                    srcSet="
                        /images/newsletter-img1-sm.webp 480w,
                        /images/newsletter-img2-md.webp 768w,
                        /images/newsletter-img3-lg.webp 1200w,
                        /images/newsletter-img4-xl.webp 1600w
                        /images/newsletter-img5-2xl.webp 1800w
                    "
                    sizes="
                        (max-width: 480px) 100vw,
                        (max-width: 768px) 100vw,
                        (max-width: 1200px) 100vw,
                        1600px
                    "
                    alt='newsletter image'
                    loading="lazy" className="h-auto w-full object-cover xl:scale-125" />
            </div>
        </div>
        <div className="right w-full lg:w-[35%]  h-auto text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-tight monu-regular flex flex-col items-start justify-between lg:justify-end gap-6 ">
            <input type="text" placeholder="Your email address" className="outline-none bg-transparent border-b border-black placeholder:text-[#95B84F] text-black w-full h-auto px-3 py-2" />
            <p className="h-auto w-auto text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full cursor-pointer after:bg-black hover:after:transition-all hover:after:duration-500 hover:after:ease-out ">Subscribe</p>
        </div>
    </div>
  )
}

export default NewsLetter