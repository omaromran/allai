import { useEffect, useRef, useState } from "react";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true">
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  );
}

export function HowCardMedia({
  active,
  poster,
  src,
  playLabel,
  onEnded,
}: {
  active: boolean;
  poster: string;
  src: string;
  playLabel: string;
  onEnded?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!active || !video) {
      setPlaying(false);
      setLoaded(false);
      setNeedsManualPlay(false);
      return;
    }

    setPlaying(false);
    setLoaded(false);
    setNeedsManualPlay(false);

    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.load();

    const tryAutoplay = () => {
      void video.play().catch(() => setNeedsManualPlay(true));
    };

    const onCanPlay = () => {
      setLoaded(true);
      tryAutoplay();
    };

    const onPlay = () => {
      setPlaying(true);
      setNeedsManualPlay(false);
    };

    const onPause = () => setPlaying(false);
    const onWaiting = () => setLoaded(false);
    const handleEnded = () => onEnded?.();

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      onCanPlay();
    }

    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("ended", handleEnded);
    };
  }, [active, src, onEnded]);

  return (
    <div className="how-card__media">
      <img
        src={poster}
        alt=""
        className={`how-card__poster${active && playing ? " how-card__poster--hidden" : ""}`}
        loading={active ? "eager" : "lazy"}
      />
      {active ? (
        <video
          ref={videoRef}
          className={`how-card__video${playing ? " how-card__video--playing" : loaded ? " how-card__video--loaded" : ""}`}
          poster={poster}
          autoPlay
          playsInline
          muted
          preload="auto"
        />
      ) : null}
      {active && !playing && needsManualPlay ? (
        <button
          type="button"
          className={`how-card__play${loaded ? " how-card__play--ready" : ""}`}
          aria-label={playLabel}
          onClick={(e) => {
            e.stopPropagation();
            void videoRef.current?.play();
          }}
        >
          <PlayIcon />
        </button>
      ) : null}
    </div>
  );
}
