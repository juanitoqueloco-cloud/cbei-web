import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  Award,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import { specialist } from "@/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FBF7] via-white to-white">

      <div className="absolute inset-0 -z-10">

        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[420px]/h-[420px] rounded-full bg-pink-100/50 blur-3xl" />

      </div>


      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">


        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Psicóloga Clínica
          </span>


          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-[#234B37] lg:text-6xl">
            {specialist.name}
          </h1>


          <p className="mt-5 text-2xl font-semibold text-[#C2185B]">
            {specialist.title}
          </p>


          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            {specialist.description}
          </p>


          {/* Credenciales */}

          <div className="mt-10 grid gap-4">


            <div className="flex items-center gap-3">

              <Award className="text-[#3A6B35]" />

              <span className="text-slate-700">
                {specialist.license}
              </span>

            </div>


            <div className="flex items-center gap-3">

              <HeartHandshake className="text-[#3A6B35]" />

              <span className="text-slate-700">
                {specialist.credentials[1]}
              </span>

            </div>


            <div className="flex items-center gap-3">

              <ShieldCheck className="text-[#3A6B35]" />

              <span className="text-slate-700">
                Atención confidencial y personalizada
              </span>

            </div>


          </div>


          {/* Botones */}

          <div className="mt-12 flex flex-wrap gap-4">


            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F4C81] px-8 py-4 font-semibold text-white transition hover:bg-[#0B3960]"
            >

              <Calendar size={20} />

              Agendar cita

            </Link>


            <Link
              href="/servicios"
              className="rounded-full border-2 border-[#3A6B35] px-8 py-4 font-semibold text-[#3A6B35] transition hover:bg-[#3A6B35] hover:text-white"
            >

              Ver servicios

            </Link>


          </div>

        </div>


        {/* Imagen */}

        <div className="relative flex justify-center">


          {/* Tarjeta especialidades */}

          <div className="absolute -left-8 top-12 hidden rounded-3xl bg-white p-6 shadow-xl lg:block">


            <p className="text-sm font-semibold text-[#3A6B35]">
              Especialidades
            </p>


            <ul className="mt-3 space-y-2 text-slate-600">

              {specialist.specialties.slice(0, 4).map((item) => (

                <li
                  key={item.title}
                >
                  ✓ {item.title}
                </li>

              ))}

            </ul>


          </div>


          <div className="overflow-hidden rounded-[36px] bg-white p-3 shadow-2xl">


            <Image
              src={specialist.image}
              alt={specialist.name}
              width={560}
              height={700}
              priority
              className="rounded-[28px] object-cover transition duration-500 hover:scale-105"
            />


          </div>


        </div>


      </div>


      {/* Banda inferior */}

      <div className="border-t border-slate-200 bg-white">


        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 text-center md:grid-cols-3">


          <div>

            <h3 className="text-3xl font-bold text-[#3A6B35]">
              Atención
            </h3>

            <p className="mt-2 text-slate-600">
              Profesional y personalizada.
            </p>

          </div>


          <div>

            <h3 className="text-3xl font-bold text-[#3A6B35]">
              Confianza
            </h3>

            <p className="mt-2 text-slate-600">
              Un espacio seguro y confidencial.
            </p>

          </div>


          <div>

            <h3 className="text-3xl font-bold text-[#3A6B35]">
              Bienestar
            </h3>

            <p className="mt-2 text-slate-600">
              Acompañamiento para tu crecimiento.
            </p>

          </div>


        </div>


      </div>


    </section>
  );
}