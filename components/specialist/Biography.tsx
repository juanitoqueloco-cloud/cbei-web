import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Brain,
} from "lucide-react";

export default function Biography() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Mi compromiso contigo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#234B37]">
            Un espacio seguro para comenzar tu proceso de bienestar.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Cada persona vive experiencias únicas y merece ser escuchada
            con respeto, empatía y profesionalismo.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mi compromiso es acompañarte durante tu proceso terapéutico
            brindándote un ambiente seguro, confidencial y libre de juicios,
            donde puedas expresar tus emociones y trabajar hacia una mejor
            calidad de vida.
          </p>

        </div>

        {/* Tarjeta */}

        <div className="rounded-[32px] bg-[#F8FAF5] p-10 shadow-xl">

          <h3 className="text-2xl font-bold text-[#3A6B35]">
            ¿Qué puedes esperar?
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex gap-4">

              <HeartHandshake className="mt-1 text-[#3A6B35]" />

              <div>

                <h4 className="font-semibold text-slate-800">
                  Atención personalizada
                </h4>

                <p className="mt-1 text-slate-600">
                  Cada proceso terapéutico es único y adaptado a tus necesidades.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <ShieldCheck className="mt-1 text-[#3A6B35]" />

              <div>

                <h4 className="font-semibold text-slate-800">
                  Confidencialidad
                </h4>

                <p className="mt-1 text-slate-600">
                  Tu privacidad y confianza siempre serán una prioridad.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Brain className="mt-1 text-[#3A6B35]" />

              <div>

                <h4 className="font-semibold text-slate-800">
                  Enfoque profesional
                </h4>

                <p className="mt-1 text-slate-600">
                  Intervenciones fundamentadas en conocimientos y buenas prácticas.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Sparkles className="mt-1 text-[#3A6B35]" />

              <div>

                <h4 className="font-semibold text-slate-800">
                  Crecimiento personal
                </h4>

                <p className="mt-1 text-slate-600">
                  Un acompañamiento orientado a fortalecer tu bienestar emocional.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}