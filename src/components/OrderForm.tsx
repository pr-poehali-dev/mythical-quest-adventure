const stores = [
  { name: "Алексеева 111" },
  { name: "Академика Киренского 71" },
  { name: "Семафорная 191" },
];

export default function OrderForm() {
  return (
    <section id="order" className="px-6 py-24" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="max-w-4xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Наши магазины</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-8">
          Найдите нас рядом
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          {stores.map((store, i) => (
            <div key={i} className="flex items-start gap-4 border-b border-neutral-200 pb-4">
              <span className="text-2xl font-bold text-neutral-200 leading-none">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-neutral-900 font-medium">{store.name}</p>
                <p className="text-neutral-500 text-sm">г. Красноярск</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-96 overflow-hidden rounded">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=92.8545%2C56.0131&z=12&pt=92.897425%2C56.042426%2Cpmrdm1~92.800407%2C56.013663%2Cpmrdm2~92.863657%2C55.982829%2Cpmrdm3"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
