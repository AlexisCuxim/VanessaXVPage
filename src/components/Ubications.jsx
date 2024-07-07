import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import imageChurch from '/images/church-1.jpeg';
import imageHall from '/images/salon-1.jpg';
import flowers from '/images/flowers.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ubications = () => {
	const [settings, setSettings] = useState({});

	useEffect(() => {
		setSettings({
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		let map;
		let mapHall;
		async function initMap() {
			const position = { lat: 21.180410, lng: -86.868056 };
			const positionHall = { lat: 21.162787, lng: -86.887817 };
			const { Map } = await google.maps.importLibrary("maps");
			const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
		
			// The map, centered at Uluru
			map = new Map(document.getElementById("map"), {
				zoom: 18,
				center: position,
				mapId: "DEMO_MAP_ID",
			});
		
			// The marker, positioned at Uluru
			const marker = new AdvancedMarkerElement({
				map: map,
				position: position,
				title: "Uluru",
			});
	
			// The map, centered at Uluru
			mapHall = new Map(document.getElementById("mapHall"), {
				zoom: 18,
				center: positionHall,
				mapId: "DEMO_MAP_ID",
			});
		
			// The marker, positioned at Uluru
			const markerHall = new AdvancedMarkerElement({
				map: mapHall,
				position: positionHall,
				title: "Uluru",
			});
		}
	
		initMap();
	}, [])

	return (
		<>		
			<section className="bg-secondary">
				<div className="container py-12">
					<div className="mb-12">
						<div className="mb-8">
							<h2 className="font-rochester text-black text-center text-[1.7rem] text-text md:text-[2.5rem]">Iglesia</h2>
							<div className="w-full h-[3rem]">
								<img className="w-full h-full object-contain" src={flowers} alt="" />
							</div>
						</div>
						<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
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
							<div className="hidden lg:block lg:col-span-1">
								<div className="h-full rounded-lg overflow-hidden">
									<div className="max-w-[400px] h-full mx-auto" id="map"></div>
								</div>
							</div>
						</div>
						<div className="slider-container">
    				  <Slider {...settings}>
    				    <div>
									<div className="w-full h-[15rem] md:h-[25rem] lg:h-[35rem] px-2">
    				      	<img className="w-full h-full object-cover rounded-[1rem]" src={imageChurch} alt="" />
                  </div>
    				    </div>
    				    <div>
									<div className="w-full h-[15rem] md:h-[25rem] lg:h-[35rem] px-2">
    				      	<img className="w-full h-full object-cover rounded-[1rem]" src={imageChurch} alt="" />
                  </div>
    				    </div>
    				  </Slider>
    				</div>
					</div>
					<div className="mb-12">
						<div className="mb-8">
							<h2 className="font-rochester text-black text-center text-[1.7rem] text-text md:text-[2.5rem]">Salón</h2>
							<div className="w-full h-[3rem]">
								<img className="w-full h-full object-contain" src={flowers} alt="" />
							</div>
						</div>
						<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
							<div className="lg:col-span-1">
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
							<div className="hidden lg:block lg:col-span-1">
								<div className="h-full rounded-lg overflow-hidden">
									<div className="max-w-[400px] h-full mx-auto" id="mapHall"></div>
								</div>
							</div>
						</div>
						<div className="slider-container">
    				  <Slider {...settings}>
    				    <div>
									<div className="w-full h-[15rem] md:h-[25rem] lg:h-[35rem] px-2">
    				      	<img className="w-full h-full object-cover rounded-[1rem]" src={imageHall} alt="" />
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

export default Ubications;