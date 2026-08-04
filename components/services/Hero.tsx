import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAF5] to-white">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-40" />

        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-pink-100 blur-3xl opacity-30" />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* Texto */}
        <div>

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Salud Emocional
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-[#3A6B35]">
            Atención psicológica
            <br />
            para tu bienestar.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            En CBEI ofrecemos atención psicológica profesional enfocada
            en acompañarte con empatía, confidencialidad y estrategias
            adaptadas a tus necesidades.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/#contacto"
              className="flex items-center gap-2 rounded-full bg-[#0F4C81] px-8 py-4 font-semibold text-white transition hover:bg-[#0B3960]"
            >
              <Calendar size={20} />
              Solicitar cita
            </a>

            <a
              href="/#contacto"
              className="flex items-center gap-2 rounded-full border-2 border-[#3A6B35] px-8 py-4 font-semibold text-[#3A6B35] transition hover:bg-[#3A6B35] hover:text-white"
            >
              Contáctanos
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

        {/* Imagen */}
        <div className="flex justify-center">

          <div className="flex h-[450px] w-[450px] items-center justify-center rounded-[40px] bg-gradient-to-br from-[#EAF4E5] to-[#FCE7F3] shadow-2xl">

            <div className="text-center">

              <div className="text-8xl">
                🌿
              </div>

              <h2 className="mt-6 text-3xl font-bold text-[#3A6B35]">
                Bienestar Integral
              </h2>

              <p className="mx-auto mt-4 max-w-xs text-slate-600">
                Atención profesional centrada en el bienestar emocional
                y el crecimiento personal.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}