interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-end items-center">
        <nav className="flex gap-4 md:gap-8">
          <a
            href="#about"
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium"
          >
            О нас
          </a>
          <a
            href="https://vk.com/flowersrf124"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium"
          >
            ВКонтакте
          </a>
          <a
            href="https://t.me/flowersRF24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium"
          >
            Telegram
          </a>
          <a
            href="https://www.instagram.com/cvetyikrasnoyarsk?igsh=Z3B1bTF6Mmpmbjdn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}