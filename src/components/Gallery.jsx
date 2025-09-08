import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200",
    alt: "Modern Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200",
    alt: "Elegant Office",
  },
  {
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200",
    alt: "Rustic Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    alt: "Minimalist Bedroom",
  },
//   {
//     src: "https://images.unsplash.com/photo-1586105251261-72a756497a12?w=1200",
//     alt: "Luxury Lounge",
//   },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
    alt: "Creative Workspace",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          Gallery
        </h2>

        {/* Featured image */}
        <div className="mb-8">
          <motion.img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-96 object-cover rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setOpen(true)}
          />
          <p className="mt-4 text-gray-600 dark:text-gray-300">{images[index].alt}</p>
        </div>

        {/* Thumbnail row */}
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`w-28 h-20 object-cover rounded-lg shadow-md cursor-pointer transition 
              ${i === index ? "ring-4 ring-amber-600 scale-105" : "hover:scale-105"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox for fullscreen view */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img.src }))}
        index={index}
      />
    </section>
  );
}
