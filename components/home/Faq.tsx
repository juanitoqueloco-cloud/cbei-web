"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faq } from "@/data";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/ui";


export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);


  return (
    <Section
      id="faq"
      className="bg-[#F8FAF5]"
    >

      <Container size="md">


        <SectionHeader
          badge="Preguntas Frecuentes"
          title="Resolvemos tus dudas"
          description="Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios."
        />



        <div className="mt-16 space-y-5">


          {faq.map((item, index) => (

            <div
              key={item.question}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
            >


              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >


                <span className="text-lg font-semibold text-slate-800">
                  {item.question}
                </span>



                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />


              </button>




              {open === index && (

                <div
                  id={`faq-answer-${index}`}
                  className="border-t border-slate-100 px-8 pb-6 pt-4"
                >

                  <p className="leading-8 text-slate-600">
                    {item.answer}
                  </p>


                </div>

              )}


            </div>

          ))}


        </div>


      </Container>


    </Section>
  );
}