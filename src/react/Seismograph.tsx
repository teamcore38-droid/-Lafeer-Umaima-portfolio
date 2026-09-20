import { useEffect, useRef } from "react";

/**
 * A slow, quiet seismograph trace drawn on a canvas behind the hero.
 * It nods to the Seismic AI project: a flat line of ground noise, interrupted now and then by a tremor.
 * It pauses when scrolled out of view, and draws a single still frame if the visitor prefers reduced motion.
 */

const STEP_PX = 3; // horizontal distance between samples
const SAMPLE_MS = 40; // time between new samples (25 per second, about 75px/s)

export default function Seismograph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = wrapRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let last = 0;
    let acc = 0;

    const trace: number[] = [];
    let lowPass = 0;
    let tremor = 0;
    let tremorPhase = 0;
    let untilTremor = 0;

    const nextSample = () => {
      lowPass = lowPass * 0.8 + (Math.random() * 2 - 1) * 0.2;
      let value = lowPass * 0.12;

      untilTremor -= 1;
      if (untilTremor <= 0) {
        tremor = 0.7 + Math.random() * 0.3;
        tremorPhase = 0;
        untilTremor = 220 + Math.random() * 260;
      }
      if (tremor > 0.02) {
        tremorPhase += 0.55;
        value +=
          Math.sin(tremorPhase) *
          tremor *
          (0.65 + 0.35 * Math.sin(tremorPhase * 0.13));
        tremor *= 0.965;
      }
      return value;
    };

    const fill = (count: number) => {
      // Start each fresh trace with a tremor about 40% of the way along, so there is something to see straight away.
      untilTremor = Math.floor(count * 0.4);
      trace.length = 0;
      for (let i = 0; i < count; i++) trace.push(nextSample());
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mid = height * 0.6;
      const amp = height * 0.3;

      // faint guide lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      for (const y of [mid - amp, mid, mid + amp]) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // the trace, fading in from the left with purple and cyan neon glow
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(56, 189, 248, 0)");
      gradient.addColorStop(0.3, "rgba(56, 189, 248, 0.65)");
      gradient.addColorStop(0.7, "rgba(139, 92, 246, 0.9)");
      gradient.addColorStop(1, "rgba(192, 132, 252, 1)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.beginPath();
      trace.forEach((value, i) => {
        const x = i * STEP_PX;
        const y = mid + value * amp;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const newW = Math.max(1, Math.floor(rect.width * dpr));
      const newH = Math.max(1, Math.floor(rect.height * dpr));
      if (newW === canvas.width && newH === canvas.height) return;
      width = rect.width;
      height = rect.height;
      canvas.width = newW;
      canvas.height = newH;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fill(Math.ceil(width / STEP_PX) + 2);
      draw();
    };

    const frame = (now: number) => {
      acc = Math.min(acc + (now - last), 400);
      last = now;
      while (acc >= SAMPLE_MS) {
        trace.push(nextSample());
        trace.shift();
        acc -= SAMPLE_MS;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-full w-full" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
