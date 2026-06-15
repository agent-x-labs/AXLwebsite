interface HyperVideoProps {
  /** human label, used for the pending placeholder + accessibility */
  label: string;
  /** public basename, e.g. "/agents/reception" → resolves .webm then .mp4 */
  src?: string;
  /** poster frame shown before/instead of playback */
  poster?: string;
  /** flip to true once the HeyGen HyperFrame has been rendered into /public */
  ready?: boolean;
}

/**
 * The motion centerpiece. Until the HeyGen HyperFrame clips are authored
 * (Phase 3), this renders an on-brand pending stage so the layout reads true.
 * When `ready`, it plays the rendered video (muted, looping, reduced-motion safe).
 */
export function HyperVideo({ label, src, poster, ready = false }: HyperVideoProps) {
  if (ready && src) {
    return (
      <div className="hf-stage">
        <video
          className="hf-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={label}
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="hf-stage hf-stage--pending" role="img" aria-label={`${label} — animation in production`}>
      <span className="hf-pending-tag">Hyperframe</span>
      <span className="hf-pending-label">{label}</span>
    </div>
  );
}
