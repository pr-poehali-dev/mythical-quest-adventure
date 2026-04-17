import { useState } from "react";

const ORDER_URL = "https://functions.poehali.dev/cbd1e31b-6619-4181-9d32-6e4f059dc278";

const stores = [
  { name: "Алексеева 111" },
  { name: "Академика Киренского 71" },
  { name: "Семафорная 191" },
];

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="order" className="px-6 py-24" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
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
            <div className="w-full h-72 overflow-hidden rounded">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=92.8283%2C56.0171&z=12&pt=92.8672%2C56.0184%2Cpmrdm1~92.8234%2C56.0452%2Cpmrdm2~92.7943%2C55.9876%2Cpmrdm3"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div>
            <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Оформить заказ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-12">
              Закажите свежий букет
            </h2>

            {status === "success" ? (
              <div className="border border-neutral-200 p-10 text-center">
                <p className="text-2xl font-semibold text-neutral-900 mb-2">Заявка принята!</p>
                <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 bg-black text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors"
                >
                  Оформить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="uppercase text-xs tracking-wide text-neutral-500">Ваше имя *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Иван Иванов"
                    className="border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="uppercase text-xs tracking-wide text-neutral-500">Телефон *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+7 900 000 00 00"
                    className="border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-black transition-colors bg-transparent"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="uppercase text-xs tracking-wide text-neutral-500">Пожелания к букету</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Розы красные, бюджет до 3000 руб., к 14:00..."
                    className="border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-300 outline-none focus:border-black transition-colors bg-transparent resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-4 bg-black text-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-50 w-full md:w-fit"
                >
                  {status === "loading" ? "Отправляем..." : "Заказать букет"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
