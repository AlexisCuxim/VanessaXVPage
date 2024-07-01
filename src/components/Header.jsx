const Header = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center relative bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(191,42,82,.5),rgba(191,42,82,1)),url(/images/mobile/header.jpeg)]
      md:bg-[linear-gradient(to_left,rgba(255,255,255,0),rgba(191,42,82,.5),rgba(191,42,82,1)),url(/images/mobile/header.jpeg)]"
    >
      <div className="container absolute bottom-0 left-1/2 -translate-x-1/2
        md:top-1/2 md:bottom-[unset] md:left-[unset] md:translate-x-[unset] md:-translate-y-1/2">
        <h1 className="font-rochester text-center text-white text-[2.5rem] leading-none mb-6
          md:text-left md:text-[2.8rem] md:ml-4 md:mb-12
          lg:text-[5rem] lg:mb-[4rem]">
          Vanessa Alejandra 
          <span className="block text-[#00BD37]">
            Sánchez Uitz
          </span>
        </h1>
        <p className="font-poppins text-white text-center mb-6
          md:max-w-[20rem] md:text-left md:text-[1.1rem] md:leading-5 md:ml-4 md:mb-12
          lg:max-w-[30rem] lg:text-[1.3rem] lg:mb-[4rem]">
          La vida es un regalo y hoy celebro con ustedes mis xv años.
        </p>
        <div className="mb-6 md:ml-4">
          <div className="w-full text-white bg-primary border border-[#00BD37] p-4 flex justify-center gap-4 rounded-md
            md:w-max">
            <i className="material-symbols-outlined">event</i>
            <p className="font-poppins uppercase md:text-[1.1rem] lg:text-[1.2rem]">10 agosto, 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;