import {
  GraduationCap,
  Award,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Formación Académica",
    text: "Ph.D. en Psicología Clínica con una sólida preparación orientada al bienestar emocional y la atención integral.",
  },
  {
    icon: Award,
    title: "Licencia Profesional",
    text: "Licencia Profesional 4207, ejerciendo con responsabilidad, ética y compromiso con cada paciente.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experiencia Clínica",
    text: "Experiencia en atención psicológica individual, familiar y procesos orientados al desarrollo personal.",
  },
  {
    icon: BookOpen,
    title: "Actualización Continua",
    text: "Compromiso permanente con la educación continua y las mejores prácticas basadas en evidencia.",
  },
];

export default function Education() {
  return (
    <section className="bg-[#F8FAF5] px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3A6B35] shadow">
            Formación y experiencia
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#234B37]">
            Preparación profesional al servicio de tu bienestar
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            La preparación profesional es parte fundamental de una atención
            psicológica responsable. Mi compromiso es ofrecerte un servicio
            basado en conocimientos actualizados, ética profesional y un
            acompañamiento humano.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E5]">

                  <Icon
                    size={32}
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