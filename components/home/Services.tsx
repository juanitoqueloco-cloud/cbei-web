const services = [
  {
    icon: "🧠",
    title: "Psicología",
    description:
      "Servicios psicológicos profesionales enfocados en el bienestar emocional."
  },
  {
    icon: "❤️",
    title: "Bienestar emocional",
    description:
      "Acompañamiento para fortalecer la salud mental y la calidad de vida."
  },
  {
    icon: "🌱",
    title: "Crecimiento personal",
    description:
      "Herramientas para desarrollar habilidades y alcanzar objetivos personales."
  },
  {
    icon: "👥",
    title: "Terapia familiar",
    description:
      "Espacios de apoyo para mejorar relaciones y comunicación."
  },
  {
    icon: "📋",
    title: "Evaluaciones psicológicas",
    description:
      "Evaluaciones profesionales adaptadas a tus necesidades."
  },
  {
    icon: "✨",
    title: "Programas de bienestar",
    description:
      "Estrategias integrales para promover transformación personal."
  }
];


export default function Services() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Nuestros servicios
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Cuidamos tu bienestar integral
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Ofrecemos servicios profesionales diseñados para acompañarte
            en cada etapa de tu crecimiento.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >

              <div className="text-5xl">
                {service.icon}
              </div>


              <h3 className="mt-6 text-2xl font-bold text-[#3A6B35]">
                {service.title}
              </h3>


              <p className="mt-4 text-slate-600">
                {service.description}
              </p>


            </div>

          ))}


        </div>

      </div>

    </section>
  );
}