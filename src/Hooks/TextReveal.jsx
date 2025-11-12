import React, { useRef } from "react";

export default function TextReveal({ children }) {
  const containerRef = useRef(null);

  // Simply render children without animation
  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
