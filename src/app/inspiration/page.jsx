"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  const inspirations = [
    { src: "/God.jpg", title: "" },
    { src: "/nature.jpg", title: "" },
    { src: "/Jey.jpg", title: "" },
    { src: "/tech.jpg", title: "" },
    { src: "/plant.jpg", title: "" },
    { src: "/Titi.jpg", title: "" },
    { src: "/beatiful-sky.jpg", title: "" },
    { src: "/sky.jpg", title: "" },
    { src: "/Adele.jpg", title: "" },
    { src: "/code.jpg", title: "" },
    { src: "/coffee.jpg", title: "" },
    { src: "/sunset.jpg", title: "" },
    { src: "/space.jpg", title: "" },
    { src: "/London.jpg", title: "" },
    { src: "/sea.jpg", title: "" },
    { src: "/family.jpg", title: "" },
    { src: "/son.jpg", title: "" },
    { src: "/animal.jpg", title: "" },
    { src: "/home.jpg", title: "" },
    { src: "/Gijón.jpg", title: "" },
    { src: "/princess.jpg", title: "" },
    { src: "/love.jpg", title: "" },
    { src: "/Stockholm.jpg", title: "" },
    { src: "/passion.jpg", title: "" },
    { src: "/candle.jpg", title: "" },
    { src: "/volley.jpg", title: "" },
    { src: "/read.jpg", title: "" },
    { src: "/sunshine.jpg", title: "" },
    { src: "/office.jpg", title: "" },
  ];

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/beatiful-sky.jpg')" }}
      ></div>

      <h2 className="text-white font-averia font-bold text-4xl md:text-6xl mb-10 z-20">
        Lo que me inspira
      </h2>

      <div className="w-full max-w-6xl z-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          style={{ background: "transparent" }}
        >
          {inspirations.map((item, idx) => (
            <SwiperSlide key={idx} style={{ background: "transparent" }}>
              <div className="overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105">
                <div className="w-full h-[28rem] overflow-hidden rounded-[28px]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-white font-bold text-lg mt-4">
                  {item.title} 
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
