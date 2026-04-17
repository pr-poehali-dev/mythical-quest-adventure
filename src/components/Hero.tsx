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
        <img
          src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/8168b092-0748-4217-9668-9ea8173d9812.jpg"
          alt="Цветы России"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          ЦВЕТЫ РОССИИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 mb-8 drop-shadow" style={{ color: "#e8edf8" }}>
          Свежие букеты с любовью — для особых моментов и каждого дня
        </p>
        <a
          href="https://vk.com/flowersrf124"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 uppercase text-sm tracking-wide font-medium transition-all duration-300 border-2"
          style={{ backgroundColor: "#ffffff", color: "#3D5DAE", borderColor: "#ffffff" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#3D5DAE";
          }}
        >
          Заказать букет
        </a>
      </div>
    </div>
  );
}