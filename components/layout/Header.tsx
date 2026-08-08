"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/data";


export default function Header() {

  const [open, setOpen] = useState(false);


  return (

    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">


      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        {/* Logo */}

        <Link
          href="/"
          onClick={() => setOpen(false)}
        >

          <Logo />

        </Link>





        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">


          {navigation.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 transition hover:text-[#3A6B35]"
            >

              {item.label}

            </Link>

          ))}





          <Link
            href="/#contacto"
            className="rounded-full bg-[#0F4C81] px-5 py-3 font-semibold text-white transition hover:bg-[#0B3960]"
          >

            Agendar cita

          </Link>



        </nav>






        {/* Mobile button */}


        <button

          type="button"

          onClick={() => setOpen(!open)}

          className="rounded-lg p-2 text-[#3A6B35] md:hidden"

          aria-label={
            open
              ? "Cerrar menú"
              : "Abrir menú"
          }

          aria-expanded={open}

        >


          {open ? (

            <X
              size={28}
              aria-hidden="true"
            />

          ) : (

            <Menu
              size={28}
              aria-hidden="true"
            />

          )}



        </button>



      </div>







      {/* Mobile menu */}


      {open && (

        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">


          <nav className="flex flex-col gap-5">


            {navigation.map((item) => (


              <Link

                key={item.href}

                href={item.href}

                onClick={() => setOpen(false)}

                className="text-lg font-medium text-slate-700 transition hover:text-[#3A6B35]"

              >

                {item.label}

              </Link>


            ))}






            <Link

              href="/#contacto"

              onClick={() => setOpen(false)}

              className="rounded-full bg-[#0F4C81] px-6 py-3 text-center font-semibold text-white"

            >

              Agendar cita

            </Link>



          </nav>


        </div>


      )}



    </header>

  );
}