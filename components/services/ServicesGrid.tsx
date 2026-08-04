import {
  Brain,
  HeartHandshake,
  Sprout,
  Users,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicología Clínica",
    description:
      "Atención profesional para ayudarte a comprender y manejar los retos emocionales.",
    benefits: ["Ansiedad", "Depresión", "Estrés"],
    href: "/servicios/psicologia-clinica",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar Emocional",
    description:
      "Fortalece tu salud emocional con herramientas personalizadas.",
    benefits: ["Autoestima", "Relaciones", "Manejo emocional"],
    href: "/servicios/bienestar-emocional",
  },
  {
    icon: Sprout,
    title: "Crecimiento Personal",
    description:
      "Desarrolla habilidades para alcanzar tus objetivos personales.",
    benefits: ["Motivación", "Hábitos", "Desarrollo"],
    href: "/servicios/crecimiento-personal",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    description:
      "Mejora la comunicación y fortalece los vínculos familiares.",
    benefits: ["Comunicación", "Conflictos", "Relaciones"],
    href: "/servicios/terapia-familiar",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones Psicológicas",
    description:
      "Evaluaciones adaptadas a las necesidades de cada paciente.",
    benefits: ["Diagnóstico", "Informes", "Valoración"],
    href: "/servicios/evaluaciones",
  },
  {
    icon: Sparkles,
    title: "Programas de Bienestar",
    description:
      "Programas diseñados para mejorar tu calidad de vida.",
    benefits: ["Equilibrio", "Prevención", "Bienestar"],
    href: "/servicios/programas",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Nuestros Servicios
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Encuentra el apoyo que necesitas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Cada servicio está diseñado para acompañarte de forma profesional,
            personalizada y confidencial.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E5]">

                  <Icon
                    size={32}
                    className="text-[#3A6B35]"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#3A6B35]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">

                  {service.benefits.map((item) => (

                    <li
                      key={item}
                      className="text-slate-700"
                    >
                      ✓ {item}
                    </li>

                  ))}

                </ul>

                <a
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition hover:gap-3"
                >
                  Más información

                  <ArrowRight size={18} />

                </a>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}