const Heading = ({children ,containerClass}) => {
  return (
    <h1 className={`font-zentry font-extralight text-center leading-tight scale-y-[1.5] ${containerClass}`}>{children}</h1>
  )
}

export default Heading