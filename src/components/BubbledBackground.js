import React from "react";
// import "./BubbleBackground.css"; // Add the CSS here

export default function BubbleBackground() {
  const bubbles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {bubbles.map((_, index) => {
        const size = Math.random() * 80 + 20; // Random size between 20px and 100px
        const position = Math.random() * 100; // Random horizontal position (0% to 100%)
        const duration = Math.random() * 5 + 5; // Random animation duration (5s to 10s)
        const delay = Math.random() * 5; // Random animation delay (0s to 5s)

        return (
          <div
            key={index}
            className="bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${position}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
