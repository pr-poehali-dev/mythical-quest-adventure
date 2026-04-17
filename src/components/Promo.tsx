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
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full flex items-center">
        <motion.div style={{ y }} className="relative h-full w-1/2 flex items-center justify-start pl-8">
          <img
            src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/3e30d022-8a96-439a-87be-25f2cff8bf3d.jpg"
            alt="Уход за розами"
            className="h-3/4 w-auto object-contain"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Ассортимент
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        Розы, пионы, тюльпаны, полевые цветы — сотни видов для любого повода. От нежного утреннего букета до торжественной композиции.
      </p>
    </div>
  );
}