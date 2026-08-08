import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#2F5D3A] text-white">


      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">


        {/* Logo */}

        <div>

          <div className="flex items-center gap-4">


            <Image
              src="/logo/logo-3-final.webp"
              alt="Logo Centro de Bienestar Éxito e Innovación"
              width={125}
              height={125}
            />


            <div>

              <h3 className="text-2xl font-bold">
                CBEI
              </h3>


              <p className="text-green-100">
                Centro de Bienestar
              </p>


            </div>


          </div>



          <p className="mt-6 leading-7 text-green-100">
            Brindamos atención psicológica profesional con un enfoque humano,
            ético y comprometido con el bienestar integral de cada persona.
          </p>


        </div>





        {/* Navegación */}

        <div>


          <h3 className="text-xl font-semibold">
            Navegación
          </h3>



          <ul className="mt-6 space-y-3 text-green-100">


            <li>
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Inicio
              </Link>
            </li>



            <li>
              <Link
                href="/servicios"
                className="transition hover:text-white"
              >
                Servicios
              </Link>
            </li>



            <li>
              <Link
                href="/#nosotros"
                className="transition hover:text-white"
              >
                Nosotros
              </Link>
            </li>



            <li>
              <Link
                href="/specialist"
                className="transition hover:text-white"
              >
                Equipo
              </Link>
            </li>



            <li>
              <Link
                href="/#contacto"
                className="transition hover:text-white"
              >
                Contacto
              </Link>
            </li>


          </ul>


        </div>






        {/* Contacto */}

        <div>


          <h3 className="text-xl font-semibold">
            Contacto
          </h3>



          <div className="mt-6 space-y-4 text-green-100">


            <div className="flex items-center gap-3">

              <Phone size={18} />

              <span>
                (787) 000-0000
              </span>

            </div>




            <div className="flex items-center gap-3">

              <Mail size={18} />

              <span>
                info@cbeipr.com
              </span>

            </div>





            <div className="flex items-center gap-3">

              <MapPin size={18} />

              <span>
                Avenida Emilio Fagot 2928 STE 1, Ponce, PR 00716
              </span>

            </div>



          </div>


        </div>



      </div>






      <div className="border-t border-green-700">


        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-green-100 md:flex-row">


          <p>
            © 2026 Centro de Bienestar Éxito e Innovación.
          </p>


          <p>
            Todos los derechos reservados.
          </p>


        </div>


      </div>



    </footer>
  );
}