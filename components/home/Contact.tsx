import {
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";


export default function Contact() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">


        {/* Información */}
        <div>

          <span className="rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
            Contacto
          </span>


          <h2 className="mt-6 text-4xl font-bold text-[#3A6B35]">
            Comienza tu proceso de bienestar hoy
          </h2>


          <p className="mt-6 text-lg text-slate-600">
            Estamos aquí para acompañarte. Comunícate con nosotros
            y agenda tu cita.
          </p>


          <div className="mt-8 space-y-5">


            <div className="flex items-center gap-4">
              <Phone className="text-[#3A6B35]" />
              <span>
                (787) 000-0000
              </span>
            </div>


            <div className="flex items-center gap-4">
              <Mail className="text-[#3A6B35]" />
              <span>
                info@cbeipr.com
              </span>
            </div>


            <div className="flex items-center gap-4">
              <MapPin className="text-[#3A6B35]" />
              <span>
                Puerto Rico
              </span>
            </div>


            <div className="flex items-center gap-4">
              <Clock className="text-[#3A6B35]" />
              <span>
                Lunes - Viernes 8:00 AM - 5:00 PM
              </span>
            </div>


          </div>

        </div>



        {/* Formulario */}
        <div className="rounded-3xl bg-[#F8FAF5] p-8 shadow-lg">


          <h3 className="text-2xl font-bold text-[#3A6B35]">
            Agendar cita
          </h3>


          <form className="mt-6 space-y-4">


            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#3A6B35]"
            />


            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#3A6B35]"
            />


            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#3A6B35]"
            />


            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#3A6B35]"
            />


            <button
              type="submit"
              className="w-full rounded-full bg-[#0F4C81] py-3 font-semibold text-white transition hover:bg-[#0b3960]"
            >
              Solicitar cita
            </button>


          </form>

        </div>


      </div>

    </section>
  );
}