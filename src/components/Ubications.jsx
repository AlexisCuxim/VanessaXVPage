import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ubications = () => {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

	return (
		<>		
			<section className="bg-secondary">
				<div className="container py-12">
					<div className="mb-12">
						<h2 className="font-rochester text-black text-center text-2xl mb-8 text-text md:text-[2.5rem]">Iglesia</h2>
						<div className="lg:grid lg:grid-cols-2 lg:gap-8">
							<div className="lg:col-span-1">
								<div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center mx-auto
									md:w-[6rem] md:h-[6rem]"
								>
									<i className="material-symbols-outlined text-white md:text-[2.5rem]">church</i>
								</div>
								<div className="text-sm text-center my-6 font-poppins font-light text-text md:text-[1.2rem] md:max-w-[70%] md:mx-auto">
									<p className="mb-6 md:mb-8">Cuasiparroquia Tres Cruces</p>
									<p className="mb-6 md:mb-8">Calle Av.Jacinto Canek & Av. Cecilio Chí, Paseos Kabah, 223, 77517 Cancún</p>
									<p className="mb-6 md:mb-8 font-semibold">19:00</p>
								</div>
								<a 
									className="w-max border px-5 py-2 uppercase font-poppins text-sm text-text font-light flex items-center gap-2 mx-auto mb-6 active:translate-y-0.5 active:translate-x-0.5 md:text-[1.3rem] md:px-8 md:py-4 lg:hidden"
									href="https://maps.app.goo.gl/kyFFMBYC2qVyNUuEA"
									target="blank"
								>
									Ver ubicación
									<i className="material-symbols-outlined text-xs">double_arrow</i>
								</a>
							</div>
							<div className="hidden lg:block lg:col-span-1 lg:p-8">
								<div className="bg-white h-full">
									Maps
								</div>
							</div>
						</div>
						<div className="slider-container">
    				  <Slider {...settings}>
    				    <div>
    				      <img src="/images/church-1.jpeg" alt="" />
    				    </div>
    				    <div>
    				      <img src="/images/church-1.jpeg" alt="" />
    				    </div>
    				  </Slider>
    				</div>
					</div>
					<div>
						<h2 className="font-rochester text-black text-center text-2xl mb-8 text-text md:text-[2.5rem]">Salón</h2>
						<div>
							<div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center mx-auto
								md:w-[6rem] md:h-[6rem]"
							>
								<i className="material-symbols-outlined text-white md:text-[2.5rem]">celebration</i>
							</div>
							<div className="text-sm text-center my-6 font-poppins font-light text-text md:text-[1.2rem] md:max-w-[70%] md:mx-auto">
								<p className="mb-6 md:mb-8">Diamante</p>
								<p className="mb-6 md:mb-8">Niños Héroes, 207, Mz 8, Lt 11 y 12, Cancún, Q.R.</p>
								<p className="mb-6 md:mb-8 font-semibold">21:00</p>
							</div>
							<a 
								className="w-max border px-5 py-2 uppercase font-poppins text-sm text-text font-light flex items-center gap-2 mx-auto mb-6 active:translate-y-0.5 active:translate-x-0.5 md:text-[1.3rem] md:px-8 md:py-4 lg:hidden"
								href="https://maps.app.goo.gl/vjzy7G4JxxuyppWY7"
								target="blank"
							>
								Ver ubicación
								<i className="material-symbols-outlined text-xs">double_arrow</i>
							</a>
						</div>
						<div className="slider-container">
    				  <Slider {...settings}>
    				    <div>
    				      <img src="/images/salon-1.jpg" alt="" />
    				    </div>
    				    <div>
    				      <img src="/images/salon-1.jpg" alt="" />
    				    </div>
    				  </Slider>
    				</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Ubications;