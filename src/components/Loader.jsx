import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-amber-400">
      <motion.div
        className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <p className="mt-4 text-lg font-semibold tracking-wide">
        Rustic Designs Ltd
      </p>
    </div>
  );
}
