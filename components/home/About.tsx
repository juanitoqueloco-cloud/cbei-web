export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#F8FAF5] px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Texto */}
        <div>

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Sobre nosotros
          </span>


          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Un espacio creado para acompañarte
          </h2>


          <p className="mt-6 text-lg leading-8 text-slate-600">
            En el Centro de Bienestar Éxito e Innovación trabajamos
            con un enfoque humano e integral, ofreciendo herramientas
            para fortalecer la salud emocional, el crecimiento personal
            y la calidad de vida.
          </p>


          <p className="mt-4 text-lg leading-8 text-slate-600">
            Nuestro compromiso es crear un ambiente seguro,
            profesional y cercano donde cada persona pueda alcanzar
            su máximo potencial.
          </p>


        </div>


        {/* Valores */}
        <div className="grid gap-6">


          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-bold text-[#3A6B35]">
              🌱 Bienestar Integral
            </h3>

            <p className="mt-3 text-slate-600">
              Consideramos cada dimensión de la persona para
              promover un equilibrio saludable.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-bold text-[#C2185B]">
              🤝 Humanidad y Empatía
            </h3>

            <p className="mt-3 text-slate-600">
              Ofrecemos atención basada en respeto,
              comprensión y confianza.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-bold text-[#3A6B35]">
              ✨ Innovación
            </h3>

            <p className="mt-3 text-slate-600">
              Utilizamos nuevos enfoques para apoyar
              la transformación personal.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}