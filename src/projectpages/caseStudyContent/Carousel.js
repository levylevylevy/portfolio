import React, { useState, useCallback } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "./Carousel.css";

export const CarouselItem = ({ children }) => {
  return (
    <div style={{ minWidth: "100%", boxSizing: "border-box" }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const count = React.Children.count(children);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % count),
    [count]
  );

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Slide track */}
      <div style={{ overflow: "hidden", borderRadius: 10 }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child)
          )}
        </div>
      </div>

      {/* Arrows */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(28,25,23,0.1)",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              color: "#1C1917",
              zIndex: 2,
              padding: 0,
            }}
          >
            <IoChevronBack size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(28,25,23,0.1)",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              color: "#1C1917",
              zIndex: 2,
              padding: 0,
            }}
          >
            <IoChevronForward size={18} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 14,
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === activeIndex ? 20 : 8,
                height: 8,
                borderRadius: 100,
                background: i === activeIndex ? "#1C1917" : "rgba(28,25,23,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
