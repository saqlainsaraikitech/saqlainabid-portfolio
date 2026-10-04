/* Cinematic scroll motion: aurora backgrounds, scroll-linked parallax,
   scroll-velocity marquee, pointer tilt. Transform/opacity only (GPU). */
import { useRef } from "react";
import {
  motion, useScroll, useVelocity, useSpring, useTransform,
  useMotionValue, useAnimationFrame, useReducedMotion,
} from "framer-motion";

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/* Drifting aurora gradient blobs (CSS-animated, GPU-friendly) */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="a1" />
      <span className="a2" />
      <span className="a3" />
    </div>
  );
}

/* Scroll-linked parallax wrapper: moves `from` -> `to` px as its target scrolls past */
export function Parallax({ children, from = 0, to = 90, className = "", targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/* Subtle pointer tilt for the hero card (desktop only, disabled on touch/reduced motion) */
export function Tilt({ children, className = "", max = 6 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 22 });
  const sry = useSpring(ry, { stiffness: 180, damping: 22 });

  const onMove = (e) => {
    if (reduce || e.pointerType === "touch" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max);
    rx.set(-py * max);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 950 }}
    >
      {children}
    </motion.div>
  );
}

/* Marquee that reacts to scroll velocity — speeds up & flips with fast scrolls */
export function VelocityMarquee({ items }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const vFactor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);
  const dir = useRef(-1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const vf = vFactor.get();
    if (vf < -0.15) dir.current = 1;
    else if (vf > 0.15) dir.current = -1;
    const speed = 2.4 * (1 + Math.min(Math.abs(vf), 5));
    baseX.set(baseX.get() + dir.current * speed * (delta / 1000));
  });

  const row = (key) => (
    <div className="vmarquee-group" key={key} aria-hidden={key > 0}>
      {items.map((t, i) => (
        <span key={i}>{t} ✦</span>
      ))}
    </div>
  );

  if (reduce) {
    return (
      <div className="marquee"><div className="marquee-track">
        {items.concat(items).map((t, i) => <span key={i}>{t} ✦</span>)}
      </div></div>
    );
  }
  return (
    <div className="marquee vmarquee">
      <motion.div className="vmarquee-track" style={{ x }}>
        {row(0)}{row(1)}
      </motion.div>
    </div>
  );
}
