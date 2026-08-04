import {
  CalendarDays,
  ClipboardList,
  HeartHandshake,
  Smile,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Agenda tu cita",
    description:
      "Comunícate con nosotros o completa el formulario para solicitar una cita.",
  },
  {
    icon: ClipboardList,
    title: "Evaluación inicial",
    description:
      "Conoceremos tu situación, necesidades y objetivos para comenzar el proceso.",
  },
  {
    icon: HeartHandshake,
    title: "Plan personalizado",
    description:
      "Diseñaremos un plan de acompañamiento adaptado a tu bienestar emocional.",
  },
  {
    icon: Smile,
    title: "Seguimiento",
    description:
      "Te acompañaremos durante todo el proceso para favorecer un cambio positivo y duradero.",
  },
];

export default function Process() {
  return (
    <section className="bg-white px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-[#EAF4E5] px-5 py-2 text-sm font-semibold text-[#3A6B35]">
            Nuestro Proceso
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#3A6B35]">
            Así te acompañamos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Queremos que desde el primer contacto tengas claridad sobre
            cómo trabajaremos contigo para alcanzar tus objetivos.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-100 bg-[#F8FAF5] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Número */}

                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#0F4C81] text-lg font-bold text-white">
                  {index + 1}
                </div>

                {/* Icono */}

                <div className="mt-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow">

                  <Icon
                    size={36}
                    className="text-[#3A6B35]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#3A6B35]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}