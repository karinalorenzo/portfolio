export default function Home() {
  return (
    <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center px-6 md:px-20 lg:px-32" style={{ backgroundImage: "url('/me.jpg')" }}>
      <h1 className="text-white font-averia font-bold text-2xl md:text-3xl mb-2">¡Hola, soy Karina!</h1>

      <h2 className="text-white font-averia font-bold text-6xl md:text-7xl lg:text-9xl leading-tight mb-4 break-words">
        Frontend Developer
      </h2>

      <p className="text-white font-averia font-bold md:text-2xl mb-6">
        En evolución
      </p>

      <p className="text-white font-averia font-bold text-lg md:text-2xl lg:text-3xl max-w-xl">
        Hago lo que amo para que otros encuentren algo que amar también
      </p>
    </section>
  );
}
