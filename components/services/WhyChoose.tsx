import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Confidencialidad",
    description:
      "Cada consulta se desarrolla en un ambiente seguro, privado y respetuoso para brindarte la confianza que necesitas.",
  },
  {
    icon: HeartHandshake,
    title: "Atención Personalizada",
    description:
      "Diseñamos un plan de atención adaptado a tus necesidades, objetivos y proceso personal.",
  },
  {
    icon: GraduationCap,
    title: "Profesionales Cualificados",
    description:
      "Nuestro compromiso es ofrecer un servicio ético, profesional y basado en las mejores prácticas de la psicología.",
  },
  {
    icon: Leaf,
    title: "Bienestar Integral",
    description:
      "Trabajamos contigo para fortalecer tu bienestar emocional y mejorar tu calidad de vida de forma integral.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#F8FAF5] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}

        <div className="text-center">

          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#3A6B35] shadow">
            ¿Por qué elegir CBEI?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#3A6B35]">
            Un enfoque profesional y humano
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            En CBEI creemos que cada persona merece una atención cercana,
            respetuosa y basada en la confianza. Nuestro compromiso es
            acompañarte durante todo tu proceso hacia una mejor calidad de vida.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF4E5] to-[#D9F5D3] transition group-hover:scale-110">

                  <Icon
                    size={38}
                    className="text-[#3A6B35]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#3A6B35]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}