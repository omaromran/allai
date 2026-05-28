type SectionVisualProps = {
  src: string;
  alt: string;
  frame?: "beige" | "cream" | "green" | "dark";
  aspect?: "4-3" | "16-10" | "1-1" | "3-4";
  className?: string;
};

export function SectionVisual({
  src,
  alt,
  frame = "beige",
  aspect = "4-3",
  className = "",
}: SectionVisualProps) {
  return (
    <div
      className={`casa-visual casa-visual--frame-${frame} casa-visual--aspect-${aspect} ${className}`.trim()}
    >
      <div className="casa-visual__inner">
        <img src={src} alt={alt} loading="lazy" />
        <span className="casa-visual__glow" aria-hidden />
        <span className="casa-visual__shine" aria-hidden />
      </div>
    </div>
  );
}
