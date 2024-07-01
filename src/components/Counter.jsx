import { useState, useEffect } from "react";

const Counter = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2024-08-10T19:00:00');

    const updateCounter = () => {
      const now = new Date();
      const elapsed = startDate - now;

      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const minutes = Math.floor((elapsed / (1000 * 60)) % 60).toString().padStart(2, '0');
      const seconds = Math.floor((elapsed / 1000) % 60).toString().padStart(2, '0');

      setTime({ days, hours, minutes, seconds });
    };

    updateCounter();

    const intervalId = setInterval(updateCounter, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-primary h-[8rem]
      sm:h-[12rem] md:h-[15rem] lg:h-[18rem] xl:h-[20rem]">
      <div className="container h-full font-poppins flex items-center justify-center gap-8 text-[#EEE7CE]
        sm:gap-12 md:gap-[3.5rem]">
        <div className="flex justify-center gap-4
          sm:gap-8 md:gap-10">
          <div>
            <p className="text-center font-semibold text-[1.5rem]
              sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
              {time.days}
            </p>
            <p className="text-center font-light
              sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem]">
              Días
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4
          sm:gap-8 md:gap-10">
          <div>
            <p className="text-center font-semibold text-[1.5rem]
              sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
              {time.hours}
            </p>
            <p className="text-center font-light
              sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem]">
              Hrs
            </p>
          </div>
          <div>
            <p className="text-center font-semibold text-[1.5rem]
              sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
              {time.minutes}
            </p>
            <p className="text-center font-light
              sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem]">
              Min
            </p>
          </div>
          <div>
            <p className="text-center font-semibold text-[1.5rem]
              sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
              {time.seconds}
            </p>
            <p className="text-center font-light
              sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem]">
              Seg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter;