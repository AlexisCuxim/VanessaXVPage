import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Parents = () => {
  // blanchedalmond revisar mejor este color
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <>
      <section className="w-full bg-center bg-cover bg-fixed bg-[linear-gradient(rgba(0,106,106,1),rgba(0,106,106,.5),rgba(0,106,106,.5)),url(/images/bg-parents.jpeg)]">
        <div className="container py-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1 lg:self-center">
            <h2 className="font-rochester text-[1.7rem] text-secondary text-center mb-8 md:text-[2.5rem]">Mis padres</h2>
            <div className="flex justify-center flex-wrap gap-12 mb-12">
              <div className="font-poppins text-base text-secondary">
                <h3 className="text-center uppercase [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.3rem]">
                  Mamá
                </h3>
                <p className="text-center uppercase text-[1.5rem] font-medium [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.8rem]">Susy Uitz Carrillo</p>
              </div>
              <div className="font-poppins text-base text-secondary">
                <h3 className="text-center uppercase [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.3rem]">
                  Papá
                </h3>
                <p className="text-center uppercase text-[1.5rem] font-medium [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.8rem]">Timoteo Sánchez Casas</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:col-span-1">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className="w-full h-[15rem] md:h-[30rem]">
                    <img className="w-full h-full object-cover rounded-[1rem]" src="/images/photos-of-parents/family-1.jpeg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="w-full h-[15rem] md:h-[30rem]">
                    <img className="w-full h-full object-cover rounded-[1rem]" src="/images/photos-of-parents/family-2.jpeg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="w-full h-[15rem] md:h-[30rem]">
                    <img className="w-full h-full object-cover rounded-[1rem]" src="/images/photos-of-parents/family-3.jpeg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="w-full h-[15rem] md:h-[30rem]">
                    <img className="w-full h-full object-cover rounded-[1rem]" src="/images/photos-of-parents/family-4.jpeg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="w-full h-[15rem] md:h-[30rem]">
                    <img className="w-full h-full object-cover rounded-[1rem]" src="/images/photos-of-parents/family-5.jpeg" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Parents;