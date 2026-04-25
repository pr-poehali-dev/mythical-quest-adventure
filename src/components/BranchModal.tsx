import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const branches = [
  { name: "ул. Алексеева, 111", phone: "8-995-124-12-44", tel: "+79951241244", telegram: "https://t.me/flowersrf124", max: "https://max.ru/flowersrf124" },
  { name: "ул. Академика Киренского, 71", phone: "8-995-124-12-40", tel: "+79951241240", telegram: "https://t.me/flowersrf124", max: "https://max.ru/flowersrf124" },
  { name: "ул. Семафорная, 191", phone: "8-995-124-12-42", tel: "+79951241242", telegram: "https://t.me/flowersrf124", max: "https://max.ru/flowersrf124" },
];

interface BranchModalProps {
  open: boolean;
  onClose: () => void;
  roseName?: string;
}

export default function BranchModal({ open, onClose, roseName }: BranchModalProps) {
  const [selectedBranch, setSelectedBranch] = useState<typeof branches[0] | null>(null);

  function handleClose() {
    setSelectedBranch(null);
    onClose();
  }

  function buildMessage(branch: typeof branches[0]) {
    return encodeURIComponent(
      `Здравствуйте, хочу заказать розы (сорт: ${roseName ?? "не указан"}) с филиала ${branch.name}`
    );
  }

  function telegramUrl(branch: typeof branches[0]) {
    const username = branch.telegram.replace("https://t.me/", "");
    return `https://t.me/${username}?text=${buildMessage(branch)}`;
  }

  function maxUrl(branch: typeof branches[0]) {
    return `${branch.max}?text=${buildMessage(branch)}`;
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          <motion.div
            className="relative bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl p-6 sm:p-8 w-full sm:max-w-sm z-10 max-h-[92vh] overflow-y-auto"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="w-10 h-1 bg-neutral-200 rounded-full mx-auto mb-5 sm:hidden" />
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <AnimatePresence mode="wait">
              {!selectedBranch ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                >
                  <h2 className="text-xl font-bold text-neutral-900 mb-1">Какой филиал вас интересует?</h2>
                  <p className="text-sm text-neutral-400 mb-6">Выберите удобный для вас</p>
                  <div className="flex flex-col gap-3">
                    {branches.map((branch, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedBranch(branch)}
                        className="flex flex-col gap-0.5 border border-neutral-200 rounded-xl px-5 py-4 hover:border-black hover:bg-neutral-50 active:bg-neutral-100 transition-all duration-200 group text-left"
                      >
                        <span className="text-xs uppercase tracking-wide text-neutral-400 mb-0.5">Магазин {i + 1}</span>
                        <span className="font-semibold text-neutral-900 group-hover:text-black">{branch.name}</span>
                        <span className="text-sm font-medium" style={{ color: "#3D5DAE" }}>{branch.phone}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.18 }}
                >
                  <button
                    onClick={() => setSelectedBranch(null)}
                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-700 transition-colors mb-5"
                  >
                    <Icon name="ChevronLeft" size={16} />
                    Назад
                  </button>
                  <h2 className="text-xl font-bold text-neutral-900 mb-1">Как удобно связаться?</h2>
                  <p className="text-sm text-neutral-400 mb-1">{selectedBranch.name}</p>
                  <p className="text-sm font-medium mb-6" style={{ color: "#3D5DAE" }}>{selectedBranch.phone}</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={telegramUrl(selectedBranch)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-neutral-200 rounded-xl px-5 py-4 hover:border-[#229ED9] hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#229ED9" }}>
                        <Icon name="Send" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">Telegram</p>
                        <p className="text-xs text-neutral-400">Написать в Telegram</p>
                      </div>
                    </a>
                    <a
                      href={maxUrl(selectedBranch)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-neutral-200 rounded-xl px-5 py-4 hover:border-[#0077FF] hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#0077FF" }}>
                        M
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">Max</p>
                        <p className="text-xs text-neutral-400">Написать в Max</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
