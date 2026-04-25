import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import BranchModal from "@/components/BranchModal";

const ROSES = ["🌹", "🌸", "🌺", "🌷", "🌹", "🌸", "🌺", "🌷", "🌹", "🌸", "🌺", "🌷", "🌹", "🌸", "🌺", "🌷", "🌹", "🌸", "🌺", "🌷"];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [showContacts, setShowContacts] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);
  const [burst, setBurst] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const handleLogoClick = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 1200);
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/54f0966a-247d-4207-9b16-4f0b843a5044.jpg"
          alt="Белые розы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center mt-16 md:mt-32 px-4">

        {/* Логотип с анимацией */}
        <div className="relative cursor-pointer mb-6 md:mb-8" onClick={handleLogoClick}>
          <motion.img
            src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/960cc435-35ac-43a6-83e7-03fa115f81a6.jpg"
            alt="Цветы России — логотип"
            className="w-40 md:w-72 lg:w-80 rounded-2xl shadow-2xl select-none"
            animate={burst ? { scale: [1, 1.08, 0], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
          />

          {/* Розы разлетаются */}
          <AnimatePresence>
            {burst && ROSES.map((rose, i) => {
              const angle = (i / ROSES.length) * 360;
              const dist = 120 + Math.random() * 100;
              const rad = (angle * Math.PI) / 180;
              const tx = Math.cos(rad) * dist;
              const ty = Math.sin(rad) * dist;
              return (
                <motion.span
                  key={i}
                  className="absolute text-2xl pointer-events-none select-none"
                  style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
                  initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0.5 }}
                  animate={{ opacity: 0, x: `calc(-50% + ${tx}px)`, y: `calc(-50% + ${ty}px)`, scale: 1.4, rotate: angle }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.02 }}
                >
                  {rose}
                </motion.span>
              );
            })}
          </AnimatePresence>

          {/* Логотип появляется обратно */}
          <AnimatePresence>
            {burst && (
              <motion.img
                key="logo-back"
                src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/960cc435-35ac-43a6-83e7-03fa115f81a6.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4, type: "spring", stiffness: 200 }}
              />
            )}
          </AnimatePresence>
        </div>

        <p className="text-base md:text-xl max-w-xl mx-auto mb-6 md:mb-8 font-medium drop-shadow" style={{ color: "#1e3a8a" }}>
          Свежие розы с любовью — для особых моментов и каждого дня
        </p>
        <button
          onClick={() => setBranchOpen(true)}
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
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <img
                src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/960cc435-35ac-43a6-83e7-03fa115f81a6.jpg"
                alt="Цветы России"
                className="w-24 mx-auto mb-4 rounded-xl"
              />
              <h2 className="text-xl font-bold mb-1" style={{ color: "#3D5DAE" }}>Свяжитесь с нами</h2>
              <p className="text-sm text-neutral-500 mb-6">Мы с удовольствием поможем с выбором букета</p>

              {[
                { address: "ул. Академика Киренского, 71", phone: "8-995-124-12-40", tel: "+79951241240" },
                { address: "ул. Семафорная, 191", phone: "8-995-124-12-42", tel: "+79951241242" },
                { address: "ул. Алексеева, 111", phone: "8-995-124-12-44", tel: "+79951241244" },
              ].map((shop, i) => (
                <div key={i} className="bg-neutral-50 rounded-xl p-4 mb-3 text-left">
                  <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Магазин {i + 1}</p>
                  <p className="font-semibold text-neutral-800 mb-1">{shop.address}</p>
                  <a
                    href={`tel:${shop.tel}`}
                    className="font-bold text-base hover:opacity-80 transition-opacity"
                    style={{ color: "#3D5DAE" }}
                  >
                    {shop.phone}
                  </a>
                </div>
              ))}

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
      <BranchModal open={branchOpen} onClose={() => setBranchOpen(false)} roseName="не указан" />
    </div>
  );
}
