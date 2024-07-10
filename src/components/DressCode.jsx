import React from 'react';
import ladyDress from '/images/dama-vestimenta.png';
import menClothing from '/images/caballero-vestimenta.png';

const DressCode = () => {
  return (
    <section className="w-full bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,.5),rgba(0,0,0,.5),rgba(0,0,0,.5)),url(/images/bg-dress-code.jpg)]">
      <div className="container pt-6 pb-24">
        <div className="text-secondary text-center mb-6">
          <h3 className="text-secondary font-rochester text-[1.7rem] md:text-[2.5rem]">Vestimenta</h3>
          <p className="text-secondary font-poppins text-sm md:text-[1rem]">*Omitamos el color verde esmeralda</p>
        </div>
        <div className="flex flex-col justify-between text-secondary md:flex-row md:justify-around">
          <div className="md:w-[300px]">
            <div className="w-full pt-4 pb-[4rem] text-center text-white rounded-lg  border-2 border-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 6px 6px 0px' }}>
              <p className="uppercase text-[1.3rem] font-semibold mb-2 md:text-[1.5rem]">
                Hombres
                <span className="block w-[4rem] h-[.2rem] bg-white mx-auto rounded-lg"></span>
              </p>
              <p className="text-[.9rem] font-light [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1rem]">Traje</p>
            </div>
            <div className="bg-secondary my-6 rounded-lg overflow-hidden relative -top-[4rem] w-[80%] left-1/2 -translate-x-1/2" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 6px 6px 0px' }}>
              <img className="w-full h-[15rem] object-contain p-8" src={menClothing} alt="" />
            </div>
          </div>
          <div className="md:w-[300px]">
            <div className="w-full pt-4 pb-[4rem] text-center text-white rounded-lg border-2 border-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 6px 6px 0px' }}>
              <p className="uppercase text-[1.3rem] font-semibold mb-2 md:text-[1.5rem]">
                Mujeres
                <span className="block w-[4rem] h-[.2rem] bg-white mx-auto rounded-lg"></span>
              </p>
              <p className="text-[.9rem] font-light [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1rem]">Vestido</p>
            </div>
            <div className="bg-secondary my-6 rounded-lg overflow-hidden relative -top-[4rem] w-[80%] left-1/2 -translate-x-1/2" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 6px 6px 0px' }}>
              <img className="w-full h-[15rem] object-contain p-8" src={ladyDress} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DressCode;