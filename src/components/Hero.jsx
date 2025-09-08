import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold">
          Elegant Interiors, Timeless Designs
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Rustic Designs Ltd – Transforming spaces with style & trust.
        </p>
        <a
          href="#portfolio"
          className="inline-block mt-6 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg shadow hover:bg-amber-700 cursor-pointer transition"
        >
          View Our Work
        </a>
      </motion.div>
    </div>
  );
}
