import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", backgroundColor: "#faf7f4" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full flex items-center justify-center md:justify-start" style={{ backgroundColor: "#faf7f4" }}>
        <motion.div style={{ y }} className="relative h-full w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="relative h-3/4">
            <img
              src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/3e30d022-8a96-439a-87be-25f2cff8bf3d.jpg"
              alt="Уход за розами"
              className="h-full w-auto object-contain"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 95%, #faf7f4 100%), linear-gradient(to bottom, #faf7f4 0%, transparent 2%, transparent 98%, #faf7f4 100%)" }} />
          </div>
        </motion.div>

        <div className="absolute right-0 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-sm px-6 md:px-0 flex flex-col gap-5">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold italic text-neutral-900 leading-tight">
            Розы — живые.<br/>Почти как мы.
          </h2>
          <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
            Они тоже хотят пить, не любят сквозняки и обижаются, если их ставят рядом с бананами. Да-да, бананы выделяют газ, который заставляет розы стареть быстрее. 🍌
          </p>
          <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
            Меняйте воду каждые 2 дня, подрезайте стебли под углом и держите подальше от батареи — и розы отблагодарят вас неделей, а то и двумя. 🌹
          </p>
          <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed italic">
            Ну и не забывайте говорить им комплименты. Учёные пока спорят, но мы уверены — помогает. 💬
          </p>
        </div>
      </div>
    </div>
  );
}