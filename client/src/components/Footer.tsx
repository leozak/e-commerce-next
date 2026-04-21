import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-0 md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TrendLama" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-gray-100">
            TrendLama.
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2026 TrendEnzo.</p>
        <p className="text-sm text-gray-400">Todos os direitos reservados.</p>
      </div>
      <div className="flex flex-col gap-4 text-xs text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Termos e condições</Link>
        <Link href="/">Política de privacidade</Link>
      </div>
      <div className="flex flex-col gap-4 text-xs text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Todos os produtos</Link>
        <Link href="/">Novidades</Link>
        <Link href="/">Melhores Avaliados</Link>
        <Link href="/">Mais Vendidos</Link>
      </div>
      <div className="flex flex-col gap-4 text-xs text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Sobre</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Programa de Afiliados</Link>
      </div>
    </div>
  );
};

export default Footer;
