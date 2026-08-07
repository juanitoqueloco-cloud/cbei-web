import {
  Brain,
  HeartHandshake,
  Sprout,
  Users,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";


const services = [
  {
    icon: Brain,
    title: "Psicología",
    description:
      "Servicios psicológicos profesionales enfocados en el bienestar emocional.",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar emocional",
    description:
      "Acompañamiento para fortalecer la salud mental y la calidad de vida.",
  },
  {
    icon: Sprout,
    title: "Crecimiento personal",
    description:
      "Herramientas para desarrollar habilidades y alcanzar objetivos personales.",
  },
  {
    icon: Users,
    title: "Terapia familiar",
    description:
      "Espacios de apoyo para mejorar relaciones y comunicación.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones psicológicas",
    description:
      "Evaluaciones profesionales adaptadas a tus necesidades.",
  },
  {
    icon: Sparkles,
    title: "Programas de bienestar",
    description:
      "Estrategias integrales para promover transformación personal.",
  },
];


export default function Services() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">


        {/* Encabezado */}

        <div className="text-center">


          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Atención Profesional
          </span>


          <h2 className="mt-6 text-3xl font-bold text-[#3A6B35] sm:text-4xl">

            Cuidamos tu bienestar integral

          </h2>


          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">

            Ofrecemos servicios profesionales diseñados para acompañarte
            en cada etapa de tu crecimiento.

          </p>


        </div>



        {/* Tarjetas */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">


          {services.map((service) => {

            const Icon = service.icon;


            return (

              <div
                key={service.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >


                {/* Icono */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E5] text-[#3A6B35]">

                  <Icon
                    size={38}
                    strokeWidth={1.8}
                  />

                </div>



                {/* Título */}

                <h3 className="mt-6 text-2xl font-bold text-[#3A6B35]">

                  {service.title}

                </h3>



                {/* Descripción */}

                <p className="mt-4 leading-7 text-slate-600">

                  {service.description}

                </p>


              </div>

            );

          })}


        </div>


      </div>


    </section>
  );
}