const team = [
  {
    name: "Profesional CBEI",
    role: "Psicología Clínica",
    description:
      "Acompañamiento profesional enfocado en bienestar emocional y crecimiento personal."
  },
  {
    name: "Especialista CBEI",
    role: "Bienestar Integral",
    description:
      "Enfoque humano para apoyar procesos de transformación personal."
  },
  {
    name: "Profesional CBEI",
    role: "Terapia Familiar",
    description:
      "Apoyo para fortalecer relaciones y mejorar la comunicación."
  }
];


export default function Team() {
  return (
    <section className="bg-[#F8FAF5] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Nuestro equipo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Profesionales comprometidos contigo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Conoce a los profesionales que te acompañarán en tu proceso de bienestar.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {team.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2"
            >

              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#EAF4E5] text-5xl">
                👤
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#3A6B35]">
                {person.name}
              </h3>

              <p className="mt-2 font-semibold text-[#C2185B]">
                {person.role}
              </p>

              <p className="mt-4 text-slate-600">
                {person.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}