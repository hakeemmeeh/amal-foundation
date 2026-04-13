/**
 * Decorative Somalia silhouette for initiative heroes — sits behind the photo layer.
 */
export function SomaliaMapBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#1B2A6B]"
      aria-hidden
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[135%] min-h-full w-auto min-w-[115%] -translate-x-1/2 -translate-y-1/2 text-[#D4A843]"
        viewBox="0 0 100 128"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillOpacity={0.22}
          d="M 52 3 C 58 2.5 64 4 70 7.5 C 76 11 81 17 84.5 24 C 88 31 89.5 39.5 89.5 48.5 C 89.5 58 87.5 67.5 83.5 76.5 C 79.5 85.5 73.5 93.5 65.5 100 C 57.5 106.5 47.5 111 36.5 112.5 C 25.5 114 14.5 111.5 7 104.5 C 1 97.5 0 86 3.5 75.5 C 7 65 14 55.5 22.5 47.5 C 31 39.5 41 33 51 28 C 47.5 22 46 15 48 9.5 C 49 6.5 51 4.2 52 3 Z"
        />
      </svg>
    </div>
  );
}
