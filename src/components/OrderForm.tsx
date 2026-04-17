import { useState } from "react";

const ORDER_URL = "https://functions.poehali.dev/cbd1e31b-6619-4181-9d32-6e4f059dc278";

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
    <section id="order" className="bg-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
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
    </section>
  );
}
