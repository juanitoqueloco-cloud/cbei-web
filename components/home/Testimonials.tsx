import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María R.",
    text: "Desde la primera consulta me sentí escuchada y comprendida. Recomiendo completamente los servicios de CBEI."
  },
  {
    name: "Carlos M.",
    text: "La atención fue muy profesional y el ambiente transmite mucha tranquilidad. Excelente experiencia."
  },
  {
    name: "Ana P.",
    text: "Encontré un espacio seguro para trabajar en mi bienestar emocional. Muy agradecida por el apoyo recibido."
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-[#F8FAF5] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3A6B35] shadow">
            Testimonios
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Lo que dicen nuestros pacientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Nuestro mayor compromiso es brindar una atención humana,
            profesional y cercana.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 flex gap-1 text-yellow-500">

                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />

              </div>

              <p className="leading-8 text-slate-600 italic">
                "{item.text}"
              </p>

              <h3 className="mt-8 font-bold text-[#3A6B35]">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}