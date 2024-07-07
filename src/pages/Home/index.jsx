import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Counter from "../../components/Counter";
import Parents from "../../components/Parents";
import Ubications from "../../components/Ubications";
import DressCode from "../../components/DressCode";
import "./home.css";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <main className="relative">
      <Header />
      <Counter />
      <Parents />
      <Ubications />
      <DressCode />
      <div className={`container button-confirm ${scrollPosition > 100 && 'btn-confirm'} `}>
        <a 
          className="block w-fullx px-4 py-[.8rem] font-poppins text-md text-center text-white font-normal uppercase bg-primary"
          style={{ boxShadow: '0px 6px 6px 0 rgb(0 0 0 / .3)' }}
          href="https://wa.me/+529982156993?text=Confirmo%20mi%20asistencia"
        >
          Confirmar
          <i className="material-symbols-outlined ml-3 text-sm">arrow_outward</i>
        </a>
      </div>
    </main>
  )
}

export default Home;