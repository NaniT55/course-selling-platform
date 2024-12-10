import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroCarousel = () => {
  const imageWidth = 200; 
  const rowImages = [
    ["/images/image1.avif", "/images/image2.avif", "/images/image3.jpg", "/images/image4.avif"], // Row 1
    ["/images/image5.avif", "/images/image6.avif", "/images/image7.avif", "/images/image8.avif"], // Row 2
    ["/images/image9.avif", "/images/image10.avif", "/images/image11.jpg", "/images/image12.avif"], // Row 3
  ];

  const [offsets, setOffsets] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsets((prevOffsets) => [
        prevOffsets[0] - imageWidth, // Row 1 moves left
        prevOffsets[1] + imageWidth, // Row 2 moves right
        prevOffsets[2] - imageWidth, // Row 3 moves left
      ]);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const resetOffset = (row, totalImages) => {
    setOffsets((prevOffsets) =>
      prevOffsets.map((offset, idx) => {
        if (idx === row) {
          const maxOffset = totalImages * imageWidth; // Total scrollable width
          if (offset <= -maxOffset || offset >= maxOffset) {
            return 0; // Reset when the row scrolls past all images
          }
        }
        return offset;
      })
    );
  };

  return (
    <section className="flex items-center justify-center h-screen bg-white-100 overflow-hidden">
      <div className="w-3/4 max-w-4xl overflow-hidden">
        <div className="grid grid-rows-3 gap-4">
          {rowImages.map((images, row) => (
            <motion.div
              key={row}
              className="flex gap-4"
              style={{ transform: `translateX(${offsets[row]}px)` }}
              animate={{ x: offsets[row] }}
              transition={{ ease: "linear", duration: 1 }}
              onUpdate={() => resetOffset(row, images.length)}
            >
              {[...images, ...images].map((image, index) => (
                <div
                  key={`${row}-${index}`}
                  className="relative flex-none w-[200px] h-40 bg-gray-200 rounded-lg shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
