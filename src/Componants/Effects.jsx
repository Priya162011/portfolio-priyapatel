import React, { useEffect, useRef, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Cursor-following glow: put onPointerMove={spotMove} on any element with className "spot". */
export const spotMove = (e) => {
  const el = e.currentTarget;
  const b = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - b.left}px`);
  el.style.setProperty("--my", `${e.clientY - b.top}px`);
};

/** 3D tilt for project cards (mouse only). */
export const tiltMove = (e) => {
  spotMove(e);
  if (e.pointerType !== "mouse" || reduceMotion()) return;
  const el = e.currentTarget;
  const b = el.getBoundingClientRect();
  const x = (e.clientX - b.left) / b.width - 0.5;
  const y = (e.clientY - b.top) / b.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
};
export const tiltLeave = (e) => {
  e.currentTarget.style.transform = "";
};

/** Thin gradient bar along the top that fills as you scroll. */
export function ProgressBar() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div id="bar" ref={ref} aria-hidden="true" />;
}

/** Number that counts up once when it scrolls into view. */
export function CountUp({ to }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion() || !("IntersectionObserver" in window)) {
      setN(to);
      return;
    }
    let raf;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let t0 = null;
      const step = (t) => {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / 1100, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <b ref={ref}>{n}</b>;
}
