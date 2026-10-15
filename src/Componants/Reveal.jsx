import React, { useEffect, useRef, useState } from "react";

/**
 * Fades + lifts its children into view once, the first time they scroll on screen.
 * <Reveal delay={150}>...</Reveal>
 */
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
