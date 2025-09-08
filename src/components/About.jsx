import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Rustic Designs Ltd
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At <span className="text-amber-600 font-semibold">Rustic Designs Ltd</span>, 
          we specialize in blending elegance and comfort to create timeless interiors. 
          Our team transforms houses into dream homes with a touch of class and modern aesthetics.
        </motion.p>
      </div>
    </section>
  );
}
