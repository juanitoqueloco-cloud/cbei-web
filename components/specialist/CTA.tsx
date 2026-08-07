import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0F4C81] to-[#3A6B35] px-6 py-24">

      {/* Decoración */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-4xl text-center">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
          Estamos para ayudarte
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
          Cada proceso comienza
          <br />
          con una conversación.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/90">
          Dar el primer paso puede parecer difícil, pero no tienes que hacerlo
          solo. Si estás listo para comenzar tu proceso de bienestar emocional,
          estaremos encantados de acompañarte.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#0F4C81] transition hover:scale-105"
          >
            <Calendar size={20} />
            Solicitar una cita
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F4C81]"
          >
            Más información
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}