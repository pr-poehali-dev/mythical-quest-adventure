import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const branches = [
  { name: "ул. Алексеева, 111", phone: "8-995-124-12-44", tel: "+79951241244" },
  { name: "ул. Академика Киренского, 71", phone: "8-995-124-12-40", tel: "+79951241240" },
  { name: "ул. Семафорная, 191", phone: "8-995-124-12-42", tel: "+79951241242" },
];

interface BranchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BranchModal({ open, onClose }: BranchModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm z-10"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
            <h2 className="text-xl font-bold text-neutral-900 mb-1">Какой филиал вас интересует?</h2>
            <p className="text-sm text-neutral-400 mb-6">Выберите удобный для вас</p>
            <div className="flex flex-col gap-3">
              {branches.map((branch, i) => (
                <a
                  key={i}
                  href={`https://vk.com/flowersrf124`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 border border-neutral-200 rounded-xl px-5 py-4 hover:border-black hover:bg-neutral-50 transition-all duration-200 group"
                >
                  <span className="text-xs uppercase tracking-wide text-neutral-400 mb-0.5">Магазин {i + 1}</span>
                  <span className="font-semibold text-neutral-900 group-hover:text-black">{branch.name}</span>
                  <span className="text-sm font-medium" style={{ color: "#3D5DAE" }}>{branch.phone}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
