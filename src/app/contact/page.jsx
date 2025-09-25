export default function About() {
  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center items-center px-6 md:px-20 lg:px-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/lion.jpg')" }}
      ></div>

      <h2 className="text-white font-averia font-bold text-2xl md:text-4xl mb-10 z-20">
        “¿Buscas una persona comprometida, organizada y con pasión por el
        Desarrollo Web?
      </h2>
      <h2 className="text-white font-averia font-bold text-2xl md:text-4xl mb-10 z-20 underline">
        <a href="https://www.linkedin.com/in/karina-lorenzo/" target="_blank">
          ¡Contáctame y hablemos!
        </a>
      </h2>
    </section>
  );
}
