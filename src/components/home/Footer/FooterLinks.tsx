

const FooterLinks = ({linkName}: {linkName: string}) => {
  return (
    <p className="text-[16px] h-auto w-auto md:text-[18px] lg:text-[20px] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-tight relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:transition-all hover:after:duration-700 hover:after:ease-in-out cursor-pointer ">{linkName}</p>
  )
}

export default FooterLinks