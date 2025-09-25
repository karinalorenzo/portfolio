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
          Soy una persona comprometida, creativa y con gran capacidad de
          aprendizaje. Me considero puntual, organizada y disfruto resolviendo
          problemas de manera práctica y colaborativa. Aunque todavía no cuento
          con experiencia profesional en el mundo del Desarrollo Web, estoy
          enfocada en conseguir mi primera oportunidad laboral para seguir
          creciendo y aportar valor desde el primer día.
        </p>
        <br />
        <p>
          Recientemente completé un Bootcamp Fullstack de 1100 horas (7 meses)
          en Factoría F5, donde trabajé con tecnologías como HTML, CSS,
          JavaScript, React, Java y Spring Boot. También aprendí metodologías
          ágiles como Scrum y prácticas de testing con TDD, lo que me permitió
          desarrollar disciplina, adaptabilidad y capacidad multitarea en
          entornos colaborativos.
        </p>
        <br />
        <p>
          Durante mi formación descubrí que tengo una afinidad especial con el
          diseño y el frontend: disfruto cuidando los detalles visuales, creando
          interfaces intuitivas y transmitiendo emociones a través del código.
          Al mismo tiempo, el aprendizaje del backend me permitió adquirir una
          visión global y mejorar la comunicación con equipos técnicos diversos.
        </p>
        <br />
        <p>
          Además, cuento con experiencia previa como Auxiliar Administrativo,
          donde desarrollé habilidades de comunicación, empatía y resolución de
          problemas. Estoy convencida de que estas competencias son clave para
          comprender las necesidades de los usuarios y crear soluciones
          digitales que realmente les aporten valor.
        </p>

        <br />

        <p>
          Me gusta la fotografía, el diseño, los fondos pasteles, el arte, la
          literatura, historia, la música de otra época, los leones, la
          naturaleza y el mar.
        </p>
        <br />
        <p>
          Me entusiasma enfrentar retos, proponer ideas creativas y formar parte
          de equipos donde se valore tanto el apreandizaje como la colaboración.
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
