export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex justify-end lg:order-2 mb-8 lg:mb-0">
        <img
          src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/f80295f4-a61b-48ca-a6ee-5c664d90ec33.jpg"
          alt="Розы Bellini"
          className="w-[200px] md:w-[280px] lg:w-[360px] object-contain"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Только свежие цветы от российских производителей. Каждый букет собирается вручную с заботой — чтобы ваши чувства были переданы идеально.
        </p>
        <a
          href="https://vk.com/flowersrf124"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide inline-block"
        >
          Наши работы ВКонтакте
        </a>
      </div>
    </div>
  );
}