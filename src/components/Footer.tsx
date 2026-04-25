import { useState } from "react";
import BranchModal from "@/components/BranchModal";
import Icon from "@/components/ui/icon";

export default function Footer() {
  const [branchOpen, setBranchOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  return (
    <>
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Магазин</h3>
                <a
                  href="https://vk.com/flowersrf124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  ВКонтакте
                </a>
                <a
                  href="https://vk.com/flowersrf124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Каталог
                </a>
                <button
                  onClick={() => setBranchOpen(true)}
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base text-left cursor-pointer"
                >
                  Заказать
                </button>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Контакты</h3>
                <a
                  href="https://vk.com/flowersrf124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  ВКонтакте
                </a>
                <a
                  href="https://t.me/flowersRF24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Telegram
                </a>
                <button
                  onClick={() => setDeliveryOpen(true)}
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base text-left cursor-pointer"
                >
                  Узнать условия доставки
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                ЦВЕТЫ РОССИИ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Цветы России</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BranchModal open={branchOpen} onClose={() => setBranchOpen(false)} roseName="не указан" />

    {/* Модальное окно доставки */}
    {deliveryOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        onClick={() => setDeliveryOpen(false)}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg w-full"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-neutral-900 uppercase tracking-wide">Условия доставки</h2>
            <button onClick={() => setDeliveryOpen(false)} className="text-neutral-400 hover:text-black transition-colors">
              <Icon name="X" size={22} />
            </button>
          </div>
          <div className="text-neutral-600 text-base leading-relaxed space-y-3">
            <p>Здесь появится описание условий доставки.</p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
