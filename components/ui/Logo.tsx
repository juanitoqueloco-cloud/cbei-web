import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-5">

      <Image
        src="/logo/logo-3-final.webp"
        alt="Centro de Bienestar Éxito e Innovación"
        width={80}
        height={80}
        priority
      />


      <div>

        <h1 className="text-2xl font-bold text-[#3A6B35]">
          CBEI
        </h1>


        <p className="text-sm font-medium text-[#3A6B35]">
          Centro de Bienestar
          <br />
          <span className="text-[#C2185B]">
            Éxito e Innovación
          </span>
        </p>

      </div>

    </div>
  );
}