interface RoseSectionProps {
  name: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function RoseSection({ name, description, imageUrl, reverse = false }: RoseSectionProps) {
  return (
    <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white`}>
      <div className={`flex justify-end mb-8 lg:mb-0 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={imageUrl}
          alt={`Розы ${name}`}
          className="w-[200px] md:w-[280px] lg:w-[360px] object-contain"
        />
      </div>
      <div className={`flex-1 text-left lg:h-[800px] flex flex-col justify-center ${reverse ? "lg:ml-12 lg:order-2" : "lg:mr-12 lg:order-1"}`}>
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-400">Сорт роз</h3>
        <p className="text-5xl lg:text-7xl font-bold mb-6 text-neutral-900 italic">{name}</p>
        <p className="text-lg lg:text-xl mb-8 text-neutral-600 leading-relaxed max-w-md">
          {description}
        </p>
        <a
          href="https://vk.com/flowersrf124"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide inline-block"
        >
          Заказать
        </a>
      </div>
    </div>
  );
}
