"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes completar el formulario de contacto de esta página o comunicarte por teléfono para coordinar la fecha y hora que mejor se adapte a ti.",
  },
  {
    question: "¿Atienden niños, adolescentes y adultos?",
    answer:
      "Sí. Nuestros servicios están dirigidos a niños, adolescentes, adultos y familias, adaptando el proceso terapéutico a las necesidades de cada persona.",
  },
  {
    question: "¿Las consultas son presenciales o virtuales?",
    answer:
      "Ofrecemos consultas presenciales y, cuando sea apropiado, también podemos coordinar sesiones virtuales.",
  },
  {
    question: "¿Qué sucede durante la primera consulta?",
    answer:
      "La primera consulta está orientada a conocerte, comprender tu situación, identificar tus necesidades y definir un plan de trabajo personalizado.",
  },
  {
    question: "¿Aceptan planes médicos?",
    answer:
      "Comunícate con nosotros para conocer los planes médicos aceptados y las opciones de pago disponibles.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F8FAF5] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3A6B35] shadow">
            Preguntas Frecuentes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Resolvemos tus dudas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-slate-100 px-8 pb-6 pt-4">

                  <p className="leading-8 text-slate-600">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}