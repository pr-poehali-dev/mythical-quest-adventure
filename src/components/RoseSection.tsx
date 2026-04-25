import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import BranchModal from "@/components/BranchModal";

interface RoseSectionProps {
  name: string;
  description: string;
  fullDescription?: string[];
  imageUrl: string;
  photos?: string[];
  reverse?: boolean;
}

const PRICE_DATA = [
  { count: 15,  prices: { "40": 2175, "50": 2325, "60": 2475, "70": 2625 } },
  { count: 29,  prices: { "40": 3915, "50": 4205, "60": 4495, "70": 4785 } },
  { count: 45,  prices: { "40": 6075, "50": 6525, "60": 6975, "70": 7425 } },
  { count: 51,  prices: { "40": 6885, "50": 7395, "60": 7905, "70": 8415 } },
  { count: 75,  prices: { "40": 9750, "50": 10500, "60": 11250, "70": 12000 } },
  { count: 101, prices: { "40": 13130, "50": 14140, "60": 15150, "70": 16160 } },
];

const STEMS = ["40", "50", "60", "70"];

export default function RoseSection({ name, description, fullDescription, imageUrl, photos = [], reverse = false }: RoseSectionProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-4 md:px-6 py-10 lg:py-0" style={{ backgroundColor: "#faf7f4" }}>
      <div className={`relative flex flex-col items-center lg:items-end mb-6 lg:mb-0 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative w-[240px] md:w-[280px] lg:w-[360px] -mt-10">
          <img
            src={imageUrl}
            alt={`Розы ${name}`}
            className="w-full object-contain"
          />
          <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, #faf7f4, transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, #faf7f4, transparent)" }} />
          <div className="absolute inset-y-0 left-0 w-8 pointer-events-none" style={{ background: `linear-gradient(to right, #faf7f4, transparent)` }} />
          <div className="absolute inset-y-0 right-0 w-8 pointer-events-none" style={{ background: `linear-gradient(to left, #faf7f4, transparent)` }} />
        </div>
        <div className="flex gap-2 mt-4 relative z-10">
          <button
            onClick={() => { setActiveIdx(0); setGalleryOpen(true); }}
            className="bg-white text-black border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white cursor-pointer uppercase tracking-wide"
          >
            Живые фото
          </button>
          <button
            onClick={() => setPriceOpen(true)}
            className="bg-white text-black border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white cursor-pointer uppercase tracking-wide"
          >
            Прайс
          </button>
        </div>
      </div>

      <div className={`flex-1 text-left lg:h-[800px] flex flex-col justify-start lg:-mt-[556px] ${reverse ? "lg:ml-12 lg:order-2" : "lg:mr-12 lg:order-1"}`}>
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-400 lg:mt-[100px]">Сорт роз</h3>
        <div className="flex items-center gap-4 mb-4 lg:mb-6">
          <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 italic">{name}</p>
        </div>
        {fullDescription ? (
          <div className="mb-6 lg:mb-8 flex flex-col gap-3 lg:gap-4 max-w-md lg:mt-[100px]">
            {fullDescription.map((para, i) => (
              <p key={i} className="text-base lg:text-lg text-neutral-600 leading-relaxed">{para}</p>
            ))}
          </div>
        ) : (
          <p className="text-base lg:text-xl mb-6 lg:mb-8 text-neutral-600 leading-relaxed max-w-md">
            {description}
          </p>
        )}
        <div className="flex flex-wrap gap-3 relative z-10">
          <button
            onClick={() => setBranchOpen(true)}
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide inline-block"
          >
            Заказать
          </button>
        </div>
        <BranchModal open={branchOpen} onClose={() => setBranchOpen(false)} roseName={name} />
      </div>

      {/* Модальное окно прайса */}
      <AnimatePresence>
        {priceOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
            onClick={() => setPriceOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 uppercase tracking-wide">Прайс — {name}</h2>
                  <p className="text-xs text-neutral-400 mt-0.5">Цена зависит от количества и длины стебля</p>
                </div>
                <button onClick={() => setPriceOpen(false)} className="text-neutral-400 hover:text-black transition-colors ml-4">
                  <Icon name="X" size={22} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-2 pr-4 font-semibold text-neutral-500 uppercase text-xs tracking-wide">Букет</th>
                      {STEMS.map(s => (
                        <th key={s} className="text-right py-2 px-2 font-semibold text-neutral-500 uppercase text-xs tracking-wide">{s} см</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_DATA.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <td className="py-3 pr-4 font-semibold text-neutral-900">{row.count} шт</td>
                        {STEMS.map(s => (
                          <td key={s} className="py-3 px-2 text-right text-neutral-700">
                            {row.prices[s as keyof typeof row.prices].toLocaleString("ru-RU")} ₽
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                onClick={() => { setPriceOpen(false); setTimeout(() => setBranchOpen(true), 200); }}
                className="mt-5 w-full bg-black text-white py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors rounded cursor-pointer"
              >
                Заказать
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Галерея */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
            onClick={() => setGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold italic text-neutral-900">{name} — живые фото</h2>
                <button onClick={() => setGalleryOpen(false)} className="text-neutral-400 hover:text-black transition-colors">
                  <Icon name="X" size={22} />
                </button>
              </div>

              {photos.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-neutral-400 gap-3">
                  <Icon name="ImageOff" size={40} />
                  <p className="text-sm">Фото скоро появятся — мы их добавляем!</p>
                </div>
              ) : (
                <>
                  <div className="relative mb-3 rounded-xl overflow-hidden bg-neutral-50" style={{ height: 360 }}>
                    <img
                      src={photos[activeIdx]}
                      alt={`${name} фото ${activeIdx + 1}`}
                      className="w-full h-full object-contain"
                    />
                    {photos.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveIdx(i => (i - 1 + photos.length) % photos.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={() => setActiveIdx(i => (i + 1) % photos.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {photos.map((p, i) => (
                      <img
                        key={i}
                        src={p}
                        alt={`миниатюра ${i + 1}`}
                        onClick={() => setActiveIdx(i)}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer flex-shrink-0 border-2 transition-all ${activeIdx === i ? "border-black" : "border-transparent opacity-60 hover:opacity-100"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}