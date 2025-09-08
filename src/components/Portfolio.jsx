import { useState } from "react";

export default function Portfolio() {
  const [slider, setSlider] = useState(50);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Portfolio</h2>

        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Before Image */}
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
            alt="Before"
            className="w-full h-96 object-cover"
          />
          {/* After Image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${slider}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200"
              alt="After"
              className="w-full h-96 object-cover"
            />
          </div>
          {/* Slider input */}
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 cursor-pointer"
          />
          <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm bg-amber-600 text-white px-3 py-1 rounded">
            Drag slider → Before / After
          </span>
        </div>
      </div>
    </section>
  );
}
