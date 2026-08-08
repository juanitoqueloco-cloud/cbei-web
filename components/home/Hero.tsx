import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-24">


      {/* Fondo decorativo */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-40" />

        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-pink-100 blur-3xl opacity-40" />

      </div>





      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">


        {/* Texto */}

        <div>


          <span className="inline-block rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">

            Bienestar • Innovación • Excelencia

          </span>





          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-[#3A6B35] sm:text-5xl lg:text-6xl">

            Tu bienestar
            <br />
            comienza <span className="text-[#C2185B]">aquí.</span>

          </h1>





          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

            En el Centro de Bienestar Éxito e Innovación creemos en un
            enfoque integral, humano y profesional para ayudarte a
            alcanzar una mejor calidad de vida.

          </p>





          {/* Botones */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">


            <Link
              href="/#contacto"
              className="rounded-full bg-[#0F4C81] px-8 py-4 text-center font-semibold text-white transition hover:scale-105 hover:bg-[#0b3960]"
            >

              Agendar cita

            </Link>





            <Link
              href="/servicios"
              className="rounded-full border-2 border-[#3A6B35] px-8 py-4 text-center font-semibold text-[#3A6B35] transition hover:bg-[#3A6B35] hover:text-white"
            >

              Nuestros servicios

            </Link>



          </div>



        </div>







        {/* Imagen principal */}


        <div className="flex justify-center">



          <div className="relative flex h-[500px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-br from-[#EAF4E5] to-[#FCE7F3] shadow-2xl">


            <div className="absolute top-16 h-28 w-28 rounded-full bg-white/60 blur-sm" />





            <div className="relative text-center">


              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-6xl shadow-md">

                🌿

              </div>





              <h2 className="mt-8 text-3xl font-bold text-[#3A6B35]">

                Bienestar Integral

              </h2>





              <p className="mt-4 px-10 text-slate-600">

                Un espacio diseñado para acompañarte
                en tu crecimiento y bienestar.

              </p>





              <div className="mt-8 flex flex-col gap-3 px-10 text-sm">


                <div className="rounded-full bg-white/70 px-4 py-2 text-[#3A6B35]">
                  Psicología
                </div>


                <div className="rounded-full bg-white/70 px-4 py-2 text-[#3A6B35]">
                  Crecimiento personal
                </div>


                <div className="rounded-full bg-white/70 px-4 py-2 text-[#3A6B35]">
                  Calidad de vida
                </div>


              </div>



            </div>



          </div>



        </div>





      </section>



    </main>
  );
}