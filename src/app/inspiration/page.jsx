"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  const inspirations = [
    { src: "/God.jpg", title: "God" },
    { src: "/nature.jpg", title: "Nature" },
    { src: "/tech.jpg", title: "Tecnology" },
    { src: "/photo.jpg", title: "Photo" },
    { src: "/Titi.jpg", title: "Titi" },
    { src: "/sky.jpg", title: "Sky" },
    { src: "/sea.jpg", title: "Sea" },
    { src: "/Adele.jpg", title: "Adele" },
    { src: "/code.jpg", title: "Code" },
    { src: "/sunset.jpg", title: "Sunset" },
    { src: "/text.jpg", title: "Text" },
    { src: "/son.jpg", title: "Son" },
    { src: "/animal.jpg", title: "Animal" },
    { src: "/home.jpg", title: "Home" },
    { src: "/Gijón.jpg", title: "Gijón" },
    { src: "/princess.jpg", title: "Princess" },
    { src: "/love.jpg", title: "Love" },
    { src: "/passion.jpg", title: "Passion" },
    { src: "/nobad-days.jpg", title: "Good days" },
    { src: "/sunshine.jpg", title: "Sunshine" },
    { src: "/design.jpg", title: "Design" },
    { src: "/office.jpg", title: "Oficce" },
  ];

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/lion.jpg')" }}
      >
      </div>

      <h2 className="text-white font-averia font-bold text-4xl md:text-6xl mb-10 z-20">
        Lo que me inspira
      </h2>

      <div className="w-full max-w-6xl z-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          spaceBetween={20}
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
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
