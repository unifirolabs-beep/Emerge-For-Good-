import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center select-none group">
      <div className="relative w-48 sm:w-64 h-auto flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]">
        <Image
          src="/logo.webp"
          alt="Emerge for Good Logo"
          width={600}
          height={200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
