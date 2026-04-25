import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

const VkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.598-.19 1.365 1.26 2.179 1.818.615.422 1.082.33 1.082.33l2.175-.03s1.137-.071.598-1.735c-.044-.138-.312-.662-1.6-1.865-1.348-1.258-1.167-1.055.456-3.231.99-1.322 1.385-2.129 1.261-2.475-.118-.33-.84-.243-.84-.243l-2.447.015s-.181-.025-.316.056c-.132.079-.216.262-.216.262s-.383 1.026-.894 1.898c-1.079 1.836-1.51 1.934-1.686 1.82-.41-.267-.307-1.07-.307-1.64 0-1.782.269-2.524-.524-2.716-.265-.064-.459-.107-1.135-.114-.867-.009-1.602.003-2.018.207-.277.135-.49.437-.36.454.161.021.525.099.719.363.25.341.241 1.107.241 1.107s.144 2.098-.335 2.359c-.327.18-.776-.187-1.739-1.865-.494-.855-.867-1.8-.867-1.8s-.072-.176-.202-.271c-.157-.115-.376-.151-.376-.151l-2.322.015s-.349.01-.477.163c-.114.136-.009.417-.009.417s1.816 4.27 3.872 6.422c1.886 1.974 4.028 1.845 4.028 1.845h.97z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const shops = [
  { address: "Ул. Академика Киренского 71", phone: "8-995-124-12-40", tel: "+79951241240" },
  { address: "Ул. Семафорная 191", phone: "8-995-124-12-42", tel: "+79951241242" },
  { address: "Ул. Алексеева 111", phone: "8-995-124-12-44", tel: "+79951241244" },
];

export default function Header({ className }: HeaderProps) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-end items-center">
        <nav className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setAboutOpen(true)}
            className="text-black hover:text-neutral-600 transition-colors duration-300 uppercase text-sm font-medium cursor-pointer"
          >
            О нас
          </button>
          <a href="https://vk.com/flowersrf124" target="_blank" rel="noopener noreferrer" className="text-black hover:text-neutral-600 transition-colors duration-300" title="ВКонтакте">
            <VkIcon />
          </a>
          <a href="https://t.me/flowersRF24" target="_blank" rel="noopener noreferrer" className="text-black hover:text-neutral-600 transition-colors duration-300" title="Telegram">
            <TelegramIcon />
          </a>
          <a href="https://www.instagram.com/cvetyikrasnoyarsk?igsh=Z3B1bTF6Mmpmbjdn" target="_blank" rel="noopener noreferrer" className="text-black hover:text-neutral-600 transition-colors duration-300" title="Instagram">
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </header>

    <AnimatePresence>
      {aboutOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setAboutOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-5">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">Цветы России 🌹</h2>
                <p className="text-sm text-neutral-500 mt-0.5">Сеть оптово-розничных магазинов</p>
              </div>
              <button onClick={() => setAboutOpen(false)} className="text-neutral-400 hover:text-black transition-colors ml-4 mt-1">
                <Icon name="X" size={22} />
              </button>
            </div>

            {/* Режим работы */}
            <div className="flex items-center gap-2 bg-neutral-50 rounded-xl px-4 py-3 mb-5">
              <span className="text-lg">⌚️</span>
              <p className="text-sm font-medium text-neutral-700">Режим работы: <strong>с 9:00 до 21:00</strong></p>
            </div>

            {/* Магазины */}
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-3">Наши магазины</p>
            <div className="flex flex-col gap-3 mb-5">
              {shops.map((s, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-neutral-100 pb-3">
                  <span className="text-lg mt-0.5">🏡</span>
                  <div>
                    <p className="font-medium text-neutral-900 text-sm">{s.address}</p>
                    <a href={`tel:${s.tel}`} className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#3D5DAE" }}>{s.phone}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Доставка */}
            <div className="bg-neutral-50 rounded-xl px-4 py-3 mb-5">
              <p className="text-sm text-neutral-700 mb-1">🚕 <strong>Доставка</strong> курьерской службой Яндекс Такси</p>
              <a href="https://clck.ru/3EPrXf" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-70 transition-opacity" style={{ color: "#3D5DAE" }}>
                Рассчитать стоимость доставки →
              </a>
            </div>

            {/* Ссылки */}
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-3">Мы в соцсетях</p>
            <div className="flex flex-col gap-2">
              <a href="https://vk.com/flowersrf124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                🤍 ВКонтакте — Красноярск
              </a>
              <a href="https://www.instagram.com/p/C4r8uPLiuUq/?igsh=MXgzcWNoc29qdjFpdw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                💙 Instagram
              </a>
              <a href="https://t.me/flowersRF24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                ❤️ Telegram
              </a>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}