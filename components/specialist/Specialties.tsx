import {
  Brain,
  HeartHandshake,
  Users,
  Sparkles,
  ClipboardCheck,
  Smile,
} from "lucide-react";

import { specialist } from "@/data";


const icons = [
  Brain,
  Smile,
  HeartHandshake,
  Users,
  ClipboardCheck,
  Sparkles,
];


export default function Specialties() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">


        {/* Encabezado */}

        <div className="text-center">


          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">

            ¿Cómo puedo ayudarte?

          </span>




          <h2 className="mt-6 text-3xl font-bold text-[#234B37] sm:text-4xl">

            Áreas de acompañamiento profesional

          </h2>





          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">

            Cada proceso terapéutico es diferente. Estas son algunas de las
            áreas en las que puedo acompañarte para fortalecer tu bienestar
            emocional y ayudarte a alcanzar una mejor calidad de vida.

          </p>



        </div>





        {/* Especialidades */}


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">



          {specialist.specialties.map((item, index) => {


            const Icon = icons[index];



            return (


              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-[#F8FAF5] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8"
              >



                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">


                  <Icon
                    size={30}
                    className="text-[#3A6B35]"
                  />


                </div>





                <h3 className="mt-6 text-xl font-bold text-[#234B37] sm:text-2xl">

                  {item.title}

                </h3>





                <p className="mt-4 leading-7 text-slate-600">

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