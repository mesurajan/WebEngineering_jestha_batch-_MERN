import Herobanner from "../Data/Heroslider";
import { useState, useEffect } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Herobanner.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + Herobanner.length) % Herobanner.length);
  };

  const name = [
    {
      name: "surajan",
      age: 25,
    },
    {
      name: "prabin",
      age: 200,
    },
  ];
  localStorage.setItem("names", "surajan");
  localStorage.setItem("age", 25);
  localStorage.setItem("name", JSON.stringify(name));
  localStorage.getItem("name");
  localStorage.removeItem("names");
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const clearcount = () => {
    localStorage.removeItem("count");
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div></div>
      <div>
        <p>{time.toLocaleTimeString()}</p>

        <h1 className="primary-color" style={{ color: "blue" }}>
          Welcome to the Home Page
        </h1>
        <p>This is the home page content.</p>
        <button className="primary-btn">Click Me</button>
      </div>

      <p>{localStorage.getItem("count")}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={clearcount}>clear count</button>

      <section>
        <div>
          {Herobanner.map((slide, index) => (
            <div
              key={slide.id}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
          <button
            onClick={handlePrevSlide}
            className="border-2 border-amber-500 rounded-[5px]"
          >
            previous
          </button>
          <button
            onClick={handleNextSlide}
            className="border-2 border-amber-500 "
          >
            next
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
