import { Calendar, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#3A6B35] via-[#467742] to-[#5A8C54] px-6 py-28">

      {/* Círculos decorativos */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
          Comienza hoy
        </span>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white">
          Tu bienestar merece
          <br />
          el primer paso.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-50">
          Nuestro equipo está preparado para acompañarte con una atención
          profesional, cercana y personalizada. Agenda tu primera consulta
          y comienza tu camino hacia una mejor calidad de vida.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="/#contacto"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#3A6B35] transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Calendar size={20} />
            Solicitar cita
          </a>

          <a
            href="/contacto"
            className="flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#3A6B35]"
          >
            Contáctanos
            <ArrowRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}