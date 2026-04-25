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
                  href="#catalog"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer"
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
                <div className="flex gap-4 mt-1">
                  <a href="https://vk.com/flowersrf124" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300" title="ВКонтакте">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.598-.19 1.365 1.26 2.179 1.818.615.422 1.082.33 1.082.33l2.175-.03s1.137-.071.598-1.735c-.044-.138-.312-.662-1.6-1.865-1.348-1.258-1.167-1.055.456-3.231.99-1.322 1.385-2.129 1.261-2.475-.118-.33-.84-.243-.84-.243l-2.447.015s-.181-.025-.316.056c-.132.079-.216.262-.216.262s-.383 1.026-.894 1.898c-1.079 1.836-1.51 1.934-1.686 1.82-.41-.267-.307-1.07-.307-1.64 0-1.782.269-2.524-.524-2.716-.265-.064-.459-.107-1.135-.114-.867-.009-1.602.003-2.018.207-.277.135-.49.437-.36.454.161.021.525.099.719.363.25.341.241 1.107.241 1.107s.144 2.098-.335 2.359c-.327.18-.776-.187-1.739-1.865-.494-.855-.867-1.8-.867-1.8s-.072-.176-.202-.271c-.157-.115-.376-.151-.376-.151l-2.322.015s-.349.01-.477.163c-.114.136-.009.417-.009.417s1.816 4.27 3.872 6.422c1.886 1.974 4.028 1.845 4.028 1.845h.97z"/></svg>
                  </a>
                  <a href="https://t.me/flowersRF24" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300" title="Telegram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/cvetyikrasnoyarsk?igsh=Z3B1bTF6Mmpmbjdn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300" title="Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </a>
                </div>
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
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-neutral-900 uppercase tracking-wide">Условия доставки</h2>
            <button onClick={() => setDeliveryOpen(false)} className="text-neutral-400 hover:text-black transition-colors">
              <Icon name="X" size={22} />
            </button>
          </div>

          {/* Карта */}
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

          {/* Филиалы */}
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
    </>
  );
}