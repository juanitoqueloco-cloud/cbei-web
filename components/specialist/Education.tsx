import {
  GraduationCap,
  Award,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

import { specialist } from "@/data";


const icons = [
  GraduationCap,
  Award,
  BriefcaseBusiness,
  BookOpen,
];


export default function Education() {
  return (
    <section className="bg-[#F8FAF5] px-6 py-24">


      <div className="mx-auto max-w-7xl">


        {/* Encabezado */}

        <div className="text-center">


          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3A6B35] shadow">

            Formación y experiencia

          </span>




          <h2 className="mt-6 text-3xl font-bold text-[#234B37] sm:text-4xl">

            Preparación profesional al servicio de tu bienestar

          </h2>




          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">

            La preparación profesional es parte fundamental de una atención
            psicológica responsable. Mi compromiso es ofrecerte un servicio
            basado en conocimientos actualizados, ética profesional y un
            acompañamiento humano.

          </p>


        </div>





        {/* Tarjetas */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">



          {specialist.education.map((item, index) => {


            const Icon = icons[index];



            return (


              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8"
              >



                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E5]">


                  <Icon
                    size={32}
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