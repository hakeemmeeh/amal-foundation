/**
 * Somalia-only silhouette (approx. Horn shape — excludes Ethiopia).
 * Underlay behind the photo + soft blend on the upper “wall” area of the photo.
 */
function SomaliaMapSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 138"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M 54 1.5 L 62 2.8 71 7 79 15 85 26 88.5 40 89.5 56 87 73 81 90 71.5 105 58.5 118 42.5 128 24.5 133.5 12 129 4 117 1.5 100 3.5 82 9.5 64 19 47 31 33 42 22 48 12 Z"
      />
    </svg>
  );
}

type SomaliaMapBackdropProps = {
  /** `hero` = initiative detail; `card` = listing tiles */
  variant?: "hero" | "card";
};

export function SomaliaMapBackdrop({ variant = "hero" }: SomaliaMapBackdropProps) {
  const isHero = variant === "hero";
  const wallMask = isHero
    ? "linear-gradient(to bottom, black 0%, black 52%, transparent 78%)"
    : "linear-gradient(to bottom, black 0%, black 40%, transparent 70%)";

  return (
    <>
      {/* Layer under photo */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#1B2A6B]"
        aria-hidden
      >
        <SomaliaMapSilhouette
          className={
            isHero
              ? "absolute left-1/2 top-1/2 h-[135%] min-h-full w-auto min-w-[115%] -translate-x-1/2 -translate-y-1/2 text-[#D4A843] opacity-30"
              : "absolute left-1/2 top-1/2 h-[120%] min-h-full w-auto min-w-[110%] -translate-x-1/2 -translate-y-1/2 text-[#D4A843] opacity-25"
          }
        />
      </div>
      {/* Map blended onto light wall area of the photo (opaque PNG hides underlay alone) */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          maskImage: wallMask,
          WebkitMaskImage: wallMask,
        }}
        aria-hidden
      >
        <SomaliaMapSilhouette
          className={
            isHero
              ? "absolute left-1/2 top-[18%] h-[92%] w-auto min-w-[92%] max-w-[125%] -translate-x-1/2 text-[#D4A843] opacity-[0.55] mix-blend-soft-light"
              : "absolute left-1/2 top-[16%] h-[78%] w-auto min-w-[85%] -translate-x-1/2 text-[#D4A843] opacity-[0.48] mix-blend-soft-light"
          }
        />
      </div>
    </>
  );
}
