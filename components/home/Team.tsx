import Image from "next/image";
import Link from "next/link";

import { BadgeCheck, Calendar } from "lucide-react";

import { specialist } from "@/data";


export default function Team() {
  return (
    <section
      id="equipo"
      className="bg-[#F8FAF5] px-6 py-24"
    >

      <div className="mx-auto max-w-5xl">


        <div className="text-center">


          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">

            Nuestra especialista

          </span>



          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">

            Conoce a la profesional que te acompañará

          </h2>



          <p className="mx-auto mt-4 max-w-2xl text-slate-600">

            Atención personalizada con un enfoque humano,
            ético y basado en evidencia.

          </p>


        </div>





        <div className="mt-16 overflow-hidden rounded-[40px] bg-white shadow-xl">


          <div className="grid lg:grid-cols-2">



            {/* FOTO */}


            <div className="flex items-center justify-center bg-[#EAF4E5] p-12">


              <div className="overflow-hidden rounded-full border-8 border-white shadow-xl">


                <Image
                  src={specialist.image}
                  alt={`${specialist.name}, psicóloga clínica del Centro de Bienestar Éxito e Innovación`}
                  width={320}
                  height={320}
                  sizes="320px"
                  className="object-cover"
                />


              </div>


            </div>







            {/* INFORMACIÓN */}


            <div className="flex flex-col justify-center p-12">


              <h3 className="text-4xl font-bold text-[#3A6B35]">

                {specialist.name}

              </h3>




              <p className="mt-3 text-xl font-semibold text-[#C2185B]">

                {specialist.title}

              </p>





              <div className="mt-8 space-y-4">



                <div className="flex items-center gap-3">

                  <BadgeCheck
                    size={20}
                    className="text-[#3A6B35]"
                  />

                  <span className="text-lg font-medium text-slate-800">

                    {specialist.license}

                  </span>

                </div>





                <div className="flex items-center gap-3">

                  <BadgeCheck
                    size={20}
                    className="text-[#3A6B35]"
                  />

                  <span className="text-lg font-medium text-slate-800">

                    Psicología Clínica

                  </span>

                </div>





                <div className="flex items-center gap-3">

                  <BadgeCheck
                    size={20}
                    className="text-[#3A6B35]"
                  />

                  <span className="text-lg font-medium text-slate-800">

                    Terapia Individual y Familiar

                  </span>

                </div>



              </div>







              <p className="mt-8 leading-8 text-slate-600">

                Mi compromiso es ofrecer un espacio seguro,
                profesional y humano para ayudarte a fortalecer
                tu bienestar emocional y alcanzar una mejor
                calidad de vida.

              </p>







              <Link
                href="/#contacto"
                className="mt-10 flex w-fit items-center gap-2 rounded-full bg-[#0F4C81] px-8 py-4 font-semibold text-white transition hover:bg-[#0b3960]"
              >

                <Calendar size={20} />

                Agendar cita

              </Link>





            </div>



          </div>


        </div>


      </div>


    </section>
  );
}