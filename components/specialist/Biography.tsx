import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Brain,
} from "lucide-react";

import { specialist } from "@/data";


const icons = [
  HeartHandshake,
  ShieldCheck,
  Brain,
  Sparkles,
];


export default function Biography() {
  return (
    <section className="bg-white px-6 py-24">


      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">



        {/* Texto */}

        <div>


          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">

            Mi compromiso contigo

          </span>




          <h2 className="mt-6 text-3xl font-bold text-[#234B37] sm:text-4xl">

            {specialist.biography.title}

          </h2>





          {specialist.biography.paragraphs.map((paragraph) => (

            <p
              key={paragraph}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >

              {paragraph}

            </p>

          ))}



        </div>






        {/* Expectativas */}


        <div className="rounded-[32px] bg-[#F8FAF5] p-6 shadow-xl sm:p-10">


          <h3 className="text-2xl font-bold text-[#3A6B35]">

            ¿Qué puedes esperar?

          </h3>




          <div className="mt-8 space-y-6">


            {specialist.biography.expectations.map((item, index) => {


              const Icon = icons[index];


              return (

                <div
                  key={item.title}
                  className="flex gap-4"
                >


                  <Icon
                    className="mt-1 shrink-0 text-[#3A6B35]"
                  />



                  <div>


                    <h4 className="font-semibold text-slate-800">

                      {item.title}

                    </h4>



                    <p className="mt-1 leading-7 text-slate-600">

                      {item.description}

                    </p>



                  </div>


                </div>

              );


            })}



          </div>



        </div>



      </div>


    </section>
  );
}