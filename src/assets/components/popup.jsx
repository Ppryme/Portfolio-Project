import { motion } from "framer-motion";


export default function Popup({popup, setPopup}) {
  

  return (
   
    <motion.div
         initial={{ y: -80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        className="fixed top-12 left-1/2 -translate-x-1/2 z-50 min-w-[300px]"
        transition={{ type: "spring", stiffness: 120, damping: 12, duration: 0.5 }}
    >
      {popup.show && (
        <div>
          <div
            className={`px-6 py-4 rounded-lg shadow-lg text-white 
            ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}`}
          >
            <div className="flex justify-between items-center gap-4">
              <span>{popup.message}</span>
              <button
                onClick={() => setPopup({ ...popup, show: false })}
                className="font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}


