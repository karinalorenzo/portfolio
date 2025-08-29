export default function About() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start pt-28 px-6 md:px-20 lg:px-32"
      style={{ backgroundImage: "url('1.jpg')" }}
    >
      <h2 className="text-white font-averia font-bold text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 mt-20 text-center">
        Welcome to my world!
      </h2>

      <div className="w-full h-full overflow-y-auto text-white text-justify text-[18px] font-bold break-words font-['Averia_Serif_Libre'] p-2">
        <p>
          Soy una persona organizada, curiosa y con muchas ganas de crecer en el
          mundo del Desarrollo Web. Aunque aún no tengo experiencia profesional
          todavía, estoy completamente enfocada en conseguir mi primera
          oportunidad para seguir aprendiendo y aportar valor y pasión desde el
          primer día.
        </p>
        <br />
        <p>
          Recientemente completé un Bootcamp Fullstack de 1100 horas en Factoría
          F5, donde aprendí a manejar tecnologías como HTML, CSS, JavaScript,
          React, Java y Spring Boot. Durante esta experiencia también trabajé
          con metodologías ágiles como Scrum y testing con TDD.
        </p>
        <br />
        <p>
          Descubrí que tengo una afinidad especial con la parte del diseño y el
          frontend: disfruto cuidando los detalles visuales, creando interfaces
          intuitivas y transmitiendo emociones a través del código. Aun así, me
          alegra profundamente haber adquirido conocimientos también del
          backend, ya que me permite tener una visión global y comunicarme mejor
          dentro de un equipo técnico.
        </p>
        <p>
          Además, tengo experiencia previa Auxiliar Administrativo,
          donde desarrollé habilidades de comunicación, empatía y resolución de
          problemas. Creo que estas competencias son muy valiosas para
          entender las necesidades del usuario y crear soluciones que realmente
          les aporten valor.
        </p>
        <br />
        <p>
          Me entusiasma enfrentar retos, proponer ideas creativas y formar parte
          de equipos donde se valore tanto el aprendizaje como la colaboración.
          Estoy lista para empezar, crecer y aportar.
          <br />
          <a href="https://www.linkedin.com/in/karina-lorenzo/" target="_blank">
            ¿Conectamos?
          </a>
        </p>
      </div>
    </section>
  );
}
