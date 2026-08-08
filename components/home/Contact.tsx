import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";


export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-white px-6 py-24"
    >

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">


        {/* Información */}

        <div>


          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Contacto
          </span>




          <h2 className="mt-6 text-3xl font-bold text-[#3A6B35] sm:text-4xl">
            Comienza tu proceso de bienestar hoy
          </h2>




          <p className="mt-6 text-lg leading-8 text-slate-600">
            Estamos aquí para acompañarte. Comunícate con nosotros
            y agenda tu primera cita.
          </p>





          <div className="mt-10 grid gap-5">



            {/* Teléfono */}

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">


              <a
                href="tel:+17870000000"
                className="flex items-center gap-4"
              >

                <div className="rounded-xl bg-[#EAF4E5] p-3">

                  <Phone className="text-[#3A6B35]" />

                </div>


                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Teléfono
                  </p>


                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    (787) 000-0000
                  </p>


                </div>


              </a>


            </div>







            {/* Email */}

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">


              <a
                href="mailto:info@cbeipr.com"
                className="flex items-center gap-4"
              >

                <div className="rounded-xl bg-[#EAF4E5] p-3">

                  <Mail className="text-[#3A6B35]" />

                </div>



                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Correo electrónico
                  </p>


                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    info@cbeipr.com
                  </p>


                </div>


              </a>


            </div>







            {/* Dirección */}

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">


              <div className="flex items-center gap-4">


                <div className="rounded-xl bg-[#EAF4E5] p-3">

                  <MapPin className="text-[#3A6B35]" />

                </div>




                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Ubicación
                  </p>


                  <p className="mt-1 text-base font-semibold leading-7 text-slate-800 sm:text-lg">
                    Avenida Emilio Fagot 2928 STE 1
                  </p>


                  <p className="text-slate-600">
                    Ponce, Puerto Rico 00716
                  </p>


                </div>


              </div>


            </div>







            {/* Horario */}

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">


              <div className="flex items-center gap-4">


                <div className="rounded-xl bg-[#EAF4E5] p-3">

                  <Clock className="text-[#3A6B35]" />

                </div>




                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Horario
                  </p>


                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    Lunes - Sábado
                  </p>


                  <p className="text-slate-600">
                    8:00 AM - 5:00 PM
                  </p>


                </div>


              </div>


            </div>



          </div>


        </div>








        {/* Formulario */}


        <div className="rounded-[32px] bg-[#F8FAF5] p-6 shadow-xl sm:p-10">


          <h3 className="text-3xl font-bold text-[#3A6B35]">
            Agenda tu cita
          </h3>



          <p className="mt-2 leading-7 text-slate-600">
            Completa el formulario y nos comunicaremos contigo lo antes posible.
          </p>





          <form className="mt-8 space-y-5">





            <div>

              <label
                htmlFor="nombre"
                className="mb-2 block font-medium text-slate-700"
              >
                Nombre completo
              </label>


              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre completo"
                className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-500 shadow-sm transition focus:border-[#3A6B35] focus:outline-none focus:ring-4 focus:ring-[#3A6B35]/10"
              />

            </div>





            <div>

              <label
                htmlFor="telefono"
                className="mb-2 block font-medium text-slate-700"
              >
                Teléfono
              </label>


              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="Teléfono"
                className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-500 shadow-sm transition focus:border-[#3A6B35] focus:outline-none focus:ring-4 focus:ring-[#3A6B35]/10"
              />

            </div>





            <div>

              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-700"
              >
                Correo electrónico
              </label>


              <input
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-500 shadow-sm transition focus:border-[#3A6B35] focus:outline-none focus:ring-4 focus:ring-[#3A6B35]/10"
              />

            </div>





            <div>

              <label
                htmlFor="mensaje"
                className="mb-2 block font-medium text-slate-700"
              >
                Mensaje
              </label>


              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="¿Cómo podemos ayudarte?"
                className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-500 shadow-sm transition focus:border-[#3A6B35] focus:outline-none focus:ring-4 focus:ring-[#3A6B35]/10"
              />

            </div>





            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F4C81] py-4 font-semibold text-white transition hover:bg-[#0b3960]"
            >

              <Send size={20} />

              Solicitar cita

            </button>



          </form>


        </div>


      </div>


    </section>
  );
}