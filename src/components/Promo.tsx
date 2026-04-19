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
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", backgroundColor: "#f5f0eb" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full flex items-center" style={{ backgroundColor: "#f5f0eb" }}>
        <motion.div style={{ y }} className="relative h-full w-1/2 flex items-center justify-start pl-0">
          <div className="relative h-3/4">
            <img
              src="https://cdn.poehali.dev/projects/87f72a13-069f-4ee6-a57f-5a577d3f14ab/bucket/3e30d022-8a96-439a-87be-25f2cff8bf3d.jpg"
              alt="Уход за розами"
              className="h-full w-auto object-contain"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 95%, #f5f0eb 100%), linear-gradient(to bottom, #f5f0eb 0%, transparent 2%, transparent 98%, #f5f0eb 100%)" }} />
          </div>
        </motion.div>
      </div>




    </div>
  );
}