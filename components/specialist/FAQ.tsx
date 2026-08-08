"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";


const faqs = [
  {
    question: "¿Cómo es la primera consulta?",
    answer:
      "La primera sesión es un espacio para conocernos, comprender tu situación y definir juntos los objetivos del proceso terapéutico.",
  },
  {
    question: "¿Las sesiones son confidenciales?",
    answer:
      "Sí. Toda la información compartida durante las sesiones se maneja con absoluta confidencialidad, conforme a la ética profesional y la legislación aplicable.",
  },
  {
    question: "¿Atienden adolescentes y adultos?",
    answer:
      "Sí. Los servicios pueden adaptarse según la edad y las necesidades de cada paciente.",
  },
  {
    question: "¿Las consultas pueden ser virtuales?",
    answer:
      "Sí, cuando sea apropiado y de acuerdo con las necesidades del paciente, se pueden ofrecer consultas virtuales.",
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes comunicarte mediante el formulario de contacto, por teléfono o por correo electrónico para coordinar tu primera cita.",
  },
];


export default function FAQ() {

  const [open, setOpen] = useState<number | null>(0);


  return (
    <section className="bg-white px-6 py-24">


      <div className="mx-auto max-w-4xl">


        {/* Encabezado */}

        <div className="text-center">


          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">

            Preguntas frecuentes

          </span>




          <h2 className="mt-6 text-3xl font-bold text-[#234B37] sm:text-4xl">

            Resolvemos tus dudas

          </h2>




          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

            Sabemos que comenzar terapia puede generar preguntas.
            Aquí encontrarás respuestas a algunas de las más frecuentes.

          </p>


        </div>





        {/* Preguntas */}


        <div className="mt-12 space-y-4">


          {faqs.map((faq, index) => (


            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >



              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >


                <span className="font-semibold text-slate-800">

                  {faq.question}

                </span>




                <ChevronDown
                  className={`shrink-0 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />


              </button>





              {open === index && (


                <div className="border-t border-slate-100 px-6 py-5 leading-8 text-slate-600">

                  {faq.answer}

                </div>


              )}



            </div>


          ))}


        </div>



      </div>


    </section>
  );
}