import React, { useState, useRef } from 'react';
import CreeYAtrevete from '/audio/Cree-y-atrevete-Ha-Ash.mp3';
import flowersBg from '/images/fondo-floral-verde.png';
import butterflies from '/images/mariposas-verdes.png';

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioControl = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full h-svh bg-cover bg-center relative bg-[linear-gradient(to_bottom,rgba(0,0,0,.5),rgba(0,0,0,.3),rgba(0,0,0,.5)),url(/images/mobile/header.jpeg)]">
      <audio className="hidden" ref={audioRef} controls loop>
        <source src={CreeYAtrevete} type="audio/mpeg"/>
      </audio>
      <span 
        className="material-symbols-outlined text-white relative left-1/2 -translate-x-1/2 text-[3rem] top-8 cursor-pointer"
        onClick={handleAudioControl}
      >
        { isPlaying ? 'pause_circle' : 'play_circle' }
      </span>
      {/* Marco top */}
      <img className="absolute top-0 w-[15rem] md:w-[30rem]" src={flowersBg} alt="" />
      <img className="absolute top-0 w-[15rem] right-0 md:w-[30rem]" src={flowersBg} alt="" style={{ transform: 'rotateY(180deg)' }} />
      <img className="absolute w-[5rem] top-[2rem] right-[3rem] md:w-[8rem] md:top-[5rem] md:right-[6rem]" src={butterflies} alt="" style={{ transform: 'rotate(45deg)' }} />

      {/* Marco bottom */}
      <img className="absolute bottom-0 w-[15rem] md:w-[30rem]" src={flowersBg} alt="" style={{ transform: 'rotateX(180deg)' }}/>
      <img className="absolute bottom-0 w-[15rem] right-0 md:w-[30rem]" src={flowersBg} alt="" style={{ transform: 'rotate(180deg)' }} />
      <img className="absolute w-[5rem] bottom-[2rem] left-[3rem] md:w-[8rem] md:bottom-[5rem] md:left-[6rem]" src={butterflies} alt="" style={{ transform: 'rotate(45deg)' }} />

      <div className="container absolute bottom-0 left-1/2 -translate-x-1/2 mb-[6rem]
        md:top-1/2 md:bottom-[unset] md:left-[unset] md:translate-x-[unset] md:-translate-y-1/2 md:mb-0">
        <h1 className="font-rochester text-center text-secondary text-[2.5rem] leading-none mb-6 shadow-black
          md:text-left md:text-[2.8rem] md:ml-4 md:mb-10
          lg:text-[5rem] lg:mb-[4rem]">
          Vanessa Alejandra 
          <span className="block">
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