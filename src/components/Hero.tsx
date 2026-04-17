import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [showContacts, setShowContacts] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Фон — живые розы */}
        <img
          src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/54f0966a-247d-4207-9b16-4f0b843a5044.jpg"
          alt="Белые розы"
          className="w-full h-full object-cover"
        />
        {/* Лёгкое затемнение для читаемости */}
        <div className="absolute inset-0 bg-white/30" />
      </motion.div>

      {/* Логотип по центру + текст и кнопка */}
      <div className="relative z-10 flex flex-col items-center text-center mt-32">
        <img
          src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/960cc435-35ac-43a6-83e7-03fa115f81a6.jpg"
          alt="Цветы России — логотип"
          className="w-56 md:w-72 lg:w-80 mb-8 rounded-2xl shadow-2xl"
        />
        <p className="text-lg md:text-xl max-w-xl mx-auto px-6 mb-8 font-medium drop-shadow" style={{ color: "#1e3a8a" }}>
          Свежие букеты с любовью — для особых моментов и каждого дня
        </p>
        <button
          onClick={() => setShowContacts(true)}
          className="inline-block px-8 py-3 uppercase text-sm tracking-wide font-medium transition-all duration-300 border-2 rounded cursor-pointer"
          style={{ backgroundColor: "#3D5DAE", color: "#ffffff", borderColor: "#3D5DAE" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#3D5DAE";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3D5DAE";
            (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
          }}
        >
          Заказать букет
        </button>
      </div>

      {/* Модалка с контактами */}
      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setShowContacts(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/960cc435-35ac-43a6-83e7-03fa115f81a6.jpg"
                alt="Цветы России"
                className="w-24 mx-auto mb-4 rounded-xl"
              />
              <h2 className="text-xl font-bold mb-1" style={{ color: "#3D5DAE" }}>Свяжитесь с нами</h2>
              <p className="text-sm text-neutral-500 mb-6">Мы с удовольствием поможем с выбором букета</p>

              <div className="bg-neutral-50 rounded-xl p-4 mb-3 text-left">
                <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Адрес</p>
                <p className="font-semibold text-neutral-800">ул. Академика Киренского, 71</p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left">
                <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Телефон</p>
                <a
                  href="tel:+79951241240"
                  className="font-bold text-lg hover:opacity-80 transition-opacity"
                  style={{ color: "#3D5DAE" }}
                >
                  8-995-124-12-40
                </a>
              </div>

              <button
                onClick={() => setShowContacts(false)}
                className="w-full py-3 rounded-xl text-sm uppercase tracking-wide font-medium text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#3D5DAE" }}
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}