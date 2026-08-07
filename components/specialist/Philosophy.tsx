import {
  MessageCircleHeart,
  Search,
  ClipboardList,
  Sprout,
} from "lucide-react";

import { specialist } from "@/data";

const icons = [
  MessageCircleHeart,
  Search,
  ClipboardList,
  Sprout,
];

export default function Philosophy() {
  return (
    <section className="bg-[#F8FAF5] px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3A6B35] shadow">
            Primera consulta
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#234B37]">
            {specialist.philosophy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {specialist.philosophy.description}
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {specialist.philosophy.steps.map((step, index) => {

            const Icon = icons[index];

            return (

              <div
                key={step.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E5]">

                  <Icon
                    size={30}
                    className="text-[#3A6B35]"
                  />

                </div>


                <h3 className="mt-6 text-2xl font-bold text-[#234B37]">
                  {step.title}
                </h3>


                <p className="mt-4 leading-8 text-slate-600">
                  {step.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}