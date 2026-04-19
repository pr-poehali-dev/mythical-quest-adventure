import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

interface RoseSectionProps {
  name: string;
  description: string;
  fullDescription?: string[];
  imageUrl: string;
  photos?: string[];
  reverse?: boolean;
}

export default function RoseSection({ name, description, fullDescription, imageUrl, photos = [], reverse = false }: RoseSectionProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: "#f5f0eb" }}>
      <div className={`relative flex flex-col items-end mb-8 lg:mb-0 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative w-[200px] md:w-[280px] lg:w-[360px]">
          <img
            src={imageUrl}
            alt={`Розы ${name}`}
            className="w-full object-contain"
          />
          {/* Градиент сверху */}
          <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, #f5f0eb, transparent)" }} />
          {/* Градиент снизу */}
          <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, #f5f0eb, transparent)" }} />
          {/* Градиент слева */}
          <div className="absolute inset-y-0 left-0 w-8 pointer-events-none" style={{ background: `linear-gradient(to right, #f5f0eb, transparent)` }} />
          {/* Градиент справа */}
          <div className="absolute inset-y-0 right-0 w-8 pointer-events-none" style={{ background: `linear-gradient(to left, #f5f0eb, transparent)` }} />
        </div>
        <div className="mt-4 flex items-center gap-2">
          {/* Ветка слева */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
            <path d="M44 44 Q32 36 28 24 Q24 12 36 8" stroke="#7a5c3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M28 24 Q20 20 18 12" stroke="#7a5c3a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M34 16 Q30 14 29 10" stroke="#7a5c3a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            {/* листья */}
            <ellipse cx="18" cy="11" rx="4" ry="2.5" fill="#6aab5e" transform="rotate(-30 18 11)" opacity="0.85"/>
            <ellipse cx="29" cy="9" rx="3.5" ry="2" fill="#5a9b4e" transform="rotate(-50 29 9)" opacity="0.8"/>
            <ellipse cx="25" cy="20" rx="4" ry="2" fill="#6aab5e" transform="rotate(10 25 20)" opacity="0.75"/>
            <ellipse cx="38" cy="10" rx="3" ry="1.8" fill="#5a9b4e" transform="rotate(-60 38 10)" opacity="0.8"/>
            {/* бутон */}
            <circle cx="36" cy="8" r="3" fill="#d45f5f" opacity="0.9"/>
            <path d="M34 7 Q36 4 38 7" stroke="#b84040" strokeWidth="0.8" fill="none"/>
          </svg>

          <button
            onClick={() => { setActiveIdx(0); setGalleryOpen(true); }}
            className="bg-white text-black border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white cursor-pointer uppercase tracking-wide"
          >
            Живые фото
          </button>

          {/* Ветка справа */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 44 Q32 36 28 24 Q24 12 36 8" stroke="#7a5c3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M28 24 Q20 20 18 12" stroke="#7a5c3a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M34 16 Q30 14 29 10" stroke="#7a5c3a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <ellipse cx="18" cy="11" rx="4" ry="2.5" fill="#6aab5e" transform="rotate(-30 18 11)" opacity="0.85"/>
            <ellipse cx="29" cy="9" rx="3.5" ry="2" fill="#5a9b4e" transform="rotate(-50 29 9)" opacity="0.8"/>
            <ellipse cx="25" cy="20" rx="4" ry="2" fill="#6aab5e" transform="rotate(10 25 20)" opacity="0.75"/>
            <ellipse cx="38" cy="10" rx="3" ry="1.8" fill="#5a9b4e" transform="rotate(-60 38 10)" opacity="0.8"/>
            <circle cx="36" cy="8" r="3" fill="#d45f5f" opacity="0.9"/>
            <path d="M34 7 Q36 4 38 7" stroke="#b84040" strokeWidth="0.8" fill="none"/>
          </svg>
        </div>
      </div>
      <div className={`flex-1 text-left lg:h-[800px] flex flex-col justify-start -mt-[556px] ${reverse ? "lg:ml-12 lg:order-2" : "lg:mr-12 lg:order-1"}`}>
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-400">Сорт роз</h3>
        <div className="flex items-center gap-4 mb-6">
          <p className="text-5xl lg:text-7xl font-bold text-neutral-900 italic">{name}</p>
        </div>
        {fullDescription ? (
          <div className="mb-8 flex flex-col gap-4 max-w-md">
            {fullDescription.map((para, i) => (
              <p key={i} className="text-base lg:text-lg text-neutral-600 leading-relaxed">{para}</p>
            ))}
          </div>
        ) : (
          <p className="text-lg lg:text-xl mb-8 text-neutral-600 leading-relaxed max-w-md">
            {description}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://vk.com/flowersrf124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide inline-block"
          >
            Заказать
          </a>
        </div>
      </div>

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