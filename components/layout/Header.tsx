import Logo from "@/components/ui/Logo";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo />


        {/* Menú */}
        <nav className="hidden items-center gap-8 md:flex">

          <a href="#" className="text-slate-600 transition hover:text-[#3A6B35]">
            Inicio
          </a>

          <a href="#" className="text-slate-600 transition hover:text-[#3A6B35]">
            Nosotros
          </a>

          <a href="#" className="text-slate-600 transition hover:text-[#3A6B35]">
            Servicios
          </a>

          <a href="#" className="text-slate-600 transition hover:text-[#3A6B35]">
            Especialistas
          </a>

          <a href="#" className="text-slate-600 transition hover:text-[#3A6B35]">
            Contacto
          </a>

          <button className="rounded-full bg-[#0F4C81] px-5 py-3 font-semibold text-white transition hover:bg-[#0b3960]">
            Agendar cita
          </button>

        </nav>

      </div>
    </header>
  );
}