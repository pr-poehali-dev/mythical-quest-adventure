import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
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
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/960cc435-35ac-43a6-83e7-03fa115f81a6.jpg"
          alt="Цветы России — логотип"
          className="w-56 md:w-72 lg:w-80 mb-8 rounded-2xl shadow-2xl"
        />
        <p className="text-lg md:text-xl max-w-xl mx-auto px-6 mb-8 font-medium drop-shadow" style={{ color: "#1e3a8a" }}>
          Свежие букеты с любовью — для особых моментов и каждого дня
        </p>
        <a
          href="https://vk.com/flowersrf124"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 uppercase text-sm tracking-wide font-medium transition-all duration-300 border-2 rounded"
          style={{ backgroundColor: "#3D5DAE", color: "#ffffff", borderColor: "#3D5DAE" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#3D5DAE";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3D5DAE";
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
          }}
        >
          Заказать букет
        </a>
      </div>
    </div>
  );
}