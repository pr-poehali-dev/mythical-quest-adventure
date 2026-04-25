import { useState } from "react";
import Icon from "@/components/ui/icon";

const stores = [
  { name: "Алексеева 111" },
  { name: "Академика Киренского 71" },
  { name: "Семафорная 191" },
];

export default function OrderForm() {
  const [deliveryOpen, setDeliveryOpen] = useState(false);

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
        <div className="w-full h-64 md:h-96 overflow-hidden rounded mb-6">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=92.8545%2C56.0131&z=12&pt=92.897425%2C56.042426%2Cpmrdm1~92.800407%2C56.013663%2Cpmrdm2~92.863657%2C55.982829%2Cpmrdm3"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
        <button
          onClick={() => setDeliveryOpen(true)}
          className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
        >
          Узнать условия доставки
        </button>
      </div>

      {/* Модальное окно доставки */}
      {deliveryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setDeliveryOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-neutral-900 uppercase tracking-wide">Условия доставки</h2>
              <button onClick={() => setDeliveryOpen(false)} className="text-neutral-400 hover:text-black transition-colors">
                <Icon name="X" size={22} />
              </button>
            </div>

            <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-5">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad6b5c57c8ce93861f69932b259269131ff9c02a351448a21a239a6a9ce015fc4&amp;source=constructorLink"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>

            <div className="space-y-4 text-sm text-neutral-700">
              <div className="border-b border-neutral-100 pb-4">
                <p className="font-semibold text-neutral-900 mb-1">Академика Киренского 71</p>
                <p className="text-neutral-500 text-xs mb-2">Зоны: зелёная, серая, чёрная</p>
                <div className="flex gap-4">
                  <span>До подъезда — <strong>400 ₽</strong></span>
                  <span>До квартиры — <strong>500 ₽</strong></span>
                </div>
              </div>
              <div className="border-b border-neutral-100 pb-4">
                <p className="font-semibold text-neutral-900 mb-1">Алексеева 111</p>
                <p className="text-neutral-500 text-xs mb-2">Зоны: голубая, серая, коричневая</p>
                <div className="flex gap-4">
                  <span>До подъезда — <strong>400 ₽</strong></span>
                  <span>До квартиры — <strong>500 ₽</strong></span>
                </div>
              </div>
              <div className="border-b border-neutral-100 pb-4">
                <p className="font-semibold text-neutral-900 mb-1">Семафорная 191</p>
                <p className="text-neutral-500 text-xs mb-2">Зоны: красная, чёрная, коричневая</p>
                <div className="flex gap-4">
                  <span>До подъезда — <strong>400 ₽</strong></span>
                  <span>До квартиры — <strong>500 ₽</strong></span>
                </div>
              </div>
              <p className="text-neutral-500 text-xs pt-1">
                Адреса, не входящие в зону покрытия интересующего вас филиала, рассчитываются в индивидуальном порядке.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
