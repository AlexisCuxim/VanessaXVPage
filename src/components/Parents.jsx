import React, { useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import imageFamily1 from '/images/photos-of-parents/image-family-1.jpeg';
import imageFamily2 from '/images/photos-of-parents/image-family-2.jpeg';
import imageFamily3 from '/images/photos-of-parents/image-family-3.jpeg';
import imageFamily4 from '/images/photos-of-parents/image-family-4.jpeg';
import imageFamily5 from '/images/photos-of-parents/image-family-5.jpeg';
import imageFamily6 from '/images/photos-of-parents/image-family-6.jpeg';
import imageGodparents1 from '/images/photos-of-parents/image-godparents-1.jpeg';
import imageGodparents2 from '/images/photos-of-parents/image-godparents-2.jpeg';
import flowers from '/images/flowers.png';

const Parents = () => {
  const photosFathers = [imageFamily4, imageFamily5, imageFamily6, imageFamily1, imageFamily2, imageFamily3];
  const photosGodparents = [imageGodparents1, imageGodparents2];

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery-a']", {});
    Fancybox.bind("[data-fancybox='gallery-b']", {});
  }, []);

  // blanchedalmond revisar mejor este color
  const settingsFathers = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ],
  };

  const settingsGodparents = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <>
      <section className="w-full bg-center bg-cover bg-fixed bg-[linear-gradient(rgba(0,106,106,1),rgba(0,106,106,.8),rgba(0,106,106,.5))]">
        <div className="container py-8 md:py-12">
          <div>
            <div className="mb-8">
              <h2 className="font-rochester text-[1.7rem] text-secondary text-center md:text-[2.5rem]">Mis padres</h2>
              <div className="w-full h-[3rem]">
                <img className="w-full h-full object-contain" src={flowers} alt="" />
              </div>
            </div>
            <div className="flex justify-center flex-col gap-8 mb-12">
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
          <div className="w-full">
            <div className="slider-container">
              <Slider {...settingsFathers}>
                { photosFathers.map((item, index) => (
                  <div key={index} data-fancybox="gallery-a" data-src={item}>
                    <div className="w-full h-[15rem] md:h-[25rem] lg:h-[20rem] px-2">
                      <img className="w-full h-full object-cover rounded-[1rem]" src={item} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="container py-8 md:py-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1 lg:self-center">
            <div className="mb-8">
              <h2 className="font-rochester text-[1.7rem] text-secondary text-center md:text-[2.5rem]">Mis padrinos</h2>
              <div className="w-full h-[3rem]">
                <img className="w-full h-full object-contain" src={flowers} alt="" />
              </div>
            </div>
            <div className="flex justify-center flex-col gap-8 mb-12">
              <div className="font-poppins text-base text-secondary">
                <h3 className="text-center uppercase [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.3rem]">
                  Madrina
                </h3>
                <p className="text-center uppercase text-[1.5rem] font-medium [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.8rem]">Rossana Pool Carrillo</p>
              </div>
              <div className="font-poppins text-base text-secondary">
                <h3 className="text-center uppercase [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.3rem]">
                  Padrino
                </h3>
                <p className="text-center uppercase text-[1.5rem] font-medium [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] md:text-[1.8rem]">Francisco Uitz Carrillo</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:col-span-1">
            <div className="slider-container">
              <Slider {...settingsGodparents}>
                { photosGodparents.map((godparent, indexGodparent) => (
                  <div key={indexGodparent} data-fancybox="gallery-b" data-src={godparent}>
                    <div className="w-full h-[15rem] md:h-[25rem] lg:h-[20rem] px-2">
                      <img className="w-full h-full object-cover rounded-[1rem]" src={godparent} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Parents;