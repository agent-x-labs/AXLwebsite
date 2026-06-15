"use client";

import { useEffect, useRef } from "react";

interface HyperVideoProps {
  /** human label, used for accessibility */
  label: string;
  /** public basename, e.g. "/agents/reception-agent" → resolves .webm, .mp4, .jpg(poster) */
  src?: string;
}

/**
 * The motion centerpiece — plays a rendered HeyGen HyperFrame clip.
 * Performance + a11y: poster only until in view (IntersectionObserver),
 * `preload="none"`, and poster-only (no playback) under reduced-motion.
 */
export function HyperVideo({ label, src }: HyperVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  if (!src) {
    return (
      <div className="hf-stage hf-stage--pending" role="img" aria-label={`${label} — animation in production`}>
        <span className="hf-pending-tag">Hyperframe</span>
        <span className="hf-pending-label">{label}</span>
      </div>
    );
  }

  return (
    <div className="hf-stage">
      <video
        ref={ref}
        className="hf-video"
        muted
        loop
        playsInline
        preload="none"
        poster={`${src}.jpg`}
        aria-label={label}
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}
