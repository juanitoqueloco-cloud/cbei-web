import {
  Brain,
  HeartHandshake,
  Users,
  Sparkles,
  ClipboardCheck,
  Smile,
} from "lucide-react";

const specialties = [
  {
    icon: Brain,
    title: "Ansiedad y Estrés",
    text: "Aprende herramientas para comprender y manejar la ansiedad, el estrés y sus efectos en tu vida diaria.",
  },
  {
    icon: Smile,
    title: "Depresión",
    text: "Recibe acompañamiento profesional para afrontar momentos difíciles y recuperar tu bienestar emocional.",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar Emocional",
    text: "Fortalece tu autoestima, desarrolla resiliencia y encuentra un mayor equilibrio emocional.",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    text: "Mejora la comunicación, fortalece vínculos y resuelve conflictos dentro del entorno familiar.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones Psicológicas",
    text: "Evaluaciones profesionales adaptadas a las necesidades de cada persona.",
  },
  {
    icon: Sparkles,
    title: "Crecimiento Personal",
    text: "Desarrolla habilidades que te permitan alcanzar tus metas y mejorar tu calidad de vida.",
  },
];

export default function Specialties() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            ¿Cómo puedo ayudarte?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#234B37]">
            Áreas de acompañamiento profesional
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Cada proceso terapéutico es diferente. Estas son algunas de las
            áreas en las que puedo acompañarte para fortalecer tu bienestar
            emocional y ayudarte a alcanzar una mejor calidad de vida.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {specialties.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-[#F8FAF5] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">

                  <Icon
                    size={30}
                    className="text-[#3A6B35]"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#234B37]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}