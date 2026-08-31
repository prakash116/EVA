/**
 * Hand-drawn duotone SVG illustrations in the brand palette.
 * These replace stock photography — swap for real photos of the
 * pharmacy whenever they're available (see README → "Before you launch").
 */

const P = {
  pine: "#0B3B2E",
  leaf: "#0FA36B",
  leafSoft: "#2FBC85",
  leaf100: "#D9F2E6",
  mint: "#E8F5EE",
  mintBorder: "#D7ECDF",
  blue: "#3E7BFA",
  white: "#FFFFFF",
};

/** Flat storefront of a neighborhood pharmacy. */
export function PharmacyIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="Illustration of the EVA ASLAM MEDICO pharmacy storefront"
    >
      <rect width="480" height="360" rx="24" fill={P.mint} />
      {/* faint pulse thread in the sky */}
      <path
        d="M28 74 H150 l10 0 8-14 10 26 8-12 h116 l8 0 6-9 8 18 6-9 H452"
        stroke={P.leafSoft}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      {/* ground */}
      <rect x="0" y="300" width="480" height="60" fill={P.mintBorder} opacity="0.6" />
      <line x1="32" y1="300" x2="448" y2="300" stroke={P.pine} strokeWidth="3" strokeLinecap="round" />
      {/* building */}
      <rect x="88" y="130" width="304" height="170" fill={P.white} stroke={P.pine} strokeWidth="3" />
      {/* signboard */}
      <rect x="72" y="96" width="336" height="44" rx="8" fill={P.pine} />
      <rect x="88" y="108" width="20" height="20" rx="4" fill={P.leaf} />
      <path d="M98 111 v14 M91 118 h14" stroke={P.white} strokeWidth="4" strokeLinecap="round" />
      <text
        x="120"
        y="124"
        fill={P.white}
        fontFamily="ui-monospace, monospace"
        fontSize="17"
        fontWeight="700"
        letterSpacing="2"
      >
        EVA ASLAM MEDICO
      </text>
      {/* awning */}
      <path d="M84 140 h312 l-10 26 H94 Z" fill={P.leaf} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${98 + i * 42} 140 h21 l-1 26 h-19 Z`} fill={P.white} opacity="0.85" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={i} cx={104 + i * 41} cy="166" r="6" fill={i % 2 ? P.white : P.leaf} />
      ))}
      {/* door */}
      <rect x="212" y="196" width="56" height="104" rx="4" fill={P.leaf100} stroke={P.pine} strokeWidth="3" />
      <line x1="240" y1="196" x2="240" y2="300" stroke={P.pine} strokeWidth="2.5" />
      <circle cx="233" cy="252" r="3" fill={P.pine} />
      <circle cx="247" cy="252" r="3" fill={P.pine} />
      {/* left window with shelves */}
      <rect x="112" y="196" width="80" height="72" rx="4" fill={P.white} stroke={P.pine} strokeWidth="3" />
      <line x1="112" y1="222" x2="192" y2="222" stroke={P.mintBorder} strokeWidth="3" />
      <line x1="112" y1="246" x2="192" y2="246" stroke={P.mintBorder} strokeWidth="3" />
      {[120, 138, 156, 174].map((x, i) => (
        <rect key={x} x={x} y="206" width="10" height="14" rx="2" fill={i % 2 ? P.leaf : P.blue} opacity="0.75" />
      ))}
      {[124, 146, 168].map((x) => (
        <rect key={x} x={x} y="230" width="14" height="14" rx="3" fill={P.leaf100} stroke={P.leaf} strokeWidth="2" />
      ))}
      {[120, 140, 160, 178].map((x) => (
        <circle key={x} cx={x} cy="256" r="5" fill={P.leaf100} stroke={P.pine} strokeWidth="2" />
      ))}
      {/* right window with cross */}
      <rect x="288" y="196" width="80" height="72" rx="4" fill={P.white} stroke={P.pine} strokeWidth="3" />
      <rect x="314" y="212" width="28" height="28" rx="6" fill={P.leaf} />
      <path d="M328 219 v14 M321 226 h14" stroke={P.white} strokeWidth="5" strokeLinecap="round" />
      <text
        x="328"
        y="258"
        textAnchor="middle"
        fill={P.pine}
        fontFamily="ui-monospace, monospace"
        fontSize="10"
        fontWeight="600"
        letterSpacing="1.5"
      >
        OPEN
      </text>
      {/* protruding cross sign */}
      <line x1="392" y1="150" x2="420" y2="150" stroke={P.pine} strokeWidth="3" />
      <rect x="412" y="126" width="48" height="48" rx="10" fill={P.white} stroke={P.pine} strokeWidth="3" />
      <path d="M436 138 v24 M424 150 h24" stroke={P.leaf} strokeWidth="7" strokeLinecap="round" />
      {/* plants */}
      <rect x="76" y="276" width="24" height="24" rx="4" fill={P.leaf100} stroke={P.pine} strokeWidth="2.5" />
      <path d="M88 276 c-10 -8 -12 -18 -4 -26 M88 276 c10 -8 12 -18 4 -26 M88 276 v-22" stroke={P.leaf} strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="380" y="276" width="24" height="24" rx="4" fill={P.leaf100} stroke={P.pine} strokeWidth="2.5" />
      <path d="M392 276 c-10 -8 -12 -18 -4 -26 M392 276 c10 -8 12 -18 4 -26 M392 276 v-22" stroke={P.leaf} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* delivery scooter, small */}
      <g transform="translate(28 254)">
        <circle cx="14" cy="38" r="10" fill={P.white} stroke={P.pine} strokeWidth="3" />
        <circle cx="52" cy="38" r="10" fill={P.white} stroke={P.pine} strokeWidth="3" />
        <path d="M14 38 h14 l8 -18 h10 l6 18" stroke={P.pine} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="4" width="18" height="16" rx="3" fill={P.leaf} />
        <path d="M39 7 v10 M34 12 h10" stroke={P.white} strokeWidth="3" strokeLinecap="round" />
        <path d="M46 20 l6 -8" stroke={P.pine} strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

type TopicProps = { className?: string };

/** Summer heat: sun over rippling heat waves. */
export function SunIllustration({ className }: TopicProps) {
  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true">
      <rect width="320" height="180" fill={P.mint} />
      <circle cx="160" cy="86" r="38" fill={P.leaf100} stroke={P.leaf} strokeWidth="3" />
      <circle cx="160" cy="86" r="22" fill={P.leaf} opacity="0.25" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 160 + Math.cos(a) * 50;
        const y1 = 86 + Math.sin(a) * 50;
        const x2 = 160 + Math.cos(a) * 62;
        const y2 = 86 + Math.sin(a) * 62;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={P.leaf} strokeWidth="3.5" strokeLinecap="round" />
        );
      })}
      <path d="M60 156 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0" stroke={P.blue} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** Hydration: glass of water with a drop. */
export function WaterIllustration({ className }: TopicProps) {
  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true">
      <rect width="320" height="180" fill={P.mint} />
      <path d="M132 42 h56 l-7 104 a8 8 0 0 1 -8 7 h-26 a8 8 0 0 1 -8 -7 Z" fill={P.white} stroke={P.pine} strokeWidth="3" strokeLinejoin="round" />
      <path d="M136 84 h48 l-4.5 62 a8 8 0 0 1 -8 7 h-23 a8 8 0 0 1 -8 -7 Z" fill={P.blue} opacity="0.28" />
      <path d="M136 84 q12 6 24 0 t24 0" stroke={P.blue} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M214 62 c0 10 -7 16 -14 16 s-14 -6 -14 -16 c0 -9 14 -26 14 -26 s14 17 14 26 Z" fill={P.leaf100} stroke={P.leaf} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="104" cy="60" r="4" fill={P.leafSoft} />
      <circle cx="228" cy="118" r="4" fill={P.leafSoft} />
    </svg>
  );
}

/** Blood pressure: gauge with pulse trace. */
export function BpIllustration({ className }: TopicProps) {
  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true">
      <rect width="320" height="180" fill={P.mint} />
      <circle cx="160" cy="92" r="52" fill={P.white} stroke={P.pine} strokeWidth="3" />
      <circle cx="160" cy="92" r="40" fill="none" stroke={P.mintBorder} strokeWidth="3" />
      {[-135, -90, -45, 0, 45].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={160 + Math.cos(a) * 34}
            y1={92 + Math.sin(a) * 34}
            x2={160 + Math.cos(a) * 40}
            y2={92 + Math.sin(a) * 40}
            stroke={P.pine}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
      <path d="M160 92 L134 66" stroke={P.leaf} strokeWidth="4" strokeLinecap="round" />
      <circle cx="160" cy="92" r="6" fill={P.leaf} />
      <path d="M36 150 h60 l8 0 6 -12 8 24 6 -12 h60" stroke={P.leaf} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="252" cy="52" r="14" fill={P.leaf100} stroke={P.leaf} strokeWidth="3" />
      <path d="M252 46 v12 M246 52 h12" stroke={P.leaf} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Blood sugar: glucometer drop and sparkline. */
export function SugarIllustration({ className }: TopicProps) {
  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true">
      <rect width="320" height="180" fill={P.mint} />
      <rect x="120" y="34" width="80" height="112" rx="14" fill={P.white} stroke={P.pine} strokeWidth="3" />
      <rect x="134" y="50" width="52" height="34" rx="6" fill={P.leaf100} />
      <text x="160" y="74" textAnchor="middle" fill={P.pine} fontFamily="ui-monospace, monospace" fontSize="17" fontWeight="700">
        98
      </text>
      <path d="M138 106 h10 l4 -8 5 14 4 -6 h23" stroke={P.leaf} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="128" r="7" fill="none" stroke={P.pine} strokeWidth="3" />
      <path d="M236 84 c0 9 -6.5 15 -13 15 s-13 -6 -13 -15 c0 -8 13 -24 13 -24 s13 16 13 24 Z" fill={P.leaf100} stroke={P.blue} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="92" cy="60" r="4" fill={P.leafSoft} />
      <circle cx="86" cy="128" r="4" fill={P.leafSoft} />
    </svg>
  );
}

/** Abstract street map with a location pin — the "map card". */
export function MapIllustration({ className }: TopicProps) {
  return (
    <svg
      viewBox="0 0 480 300"
      className={className}
      role="img"
      aria-label="Stylized map showing the pharmacy location in Loharpatti"
    >
      <rect width="480" height="300" rx="20" fill={P.mint} />
      {/* streets */}
      <path d="M-10 90 Q140 70 240 110 T500 96" stroke={P.white} strokeWidth="22" fill="none" />
      <path d="M-10 90 Q140 70 240 110 T500 96" stroke={P.mintBorder} strokeWidth="2" fill="none" />
      <path d="M150 -10 Q170 120 130 310" stroke={P.white} strokeWidth="18" fill="none" />
      <path d="M340 -10 Q320 150 372 310" stroke={P.white} strokeWidth="18" fill="none" />
      <path d="M-10 216 Q220 190 500 226" stroke={P.white} strokeWidth="20" fill="none" />
      <path d="M-10 216 Q220 190 500 226" stroke={P.mintBorder} strokeWidth="2" fill="none" />
      {/* blocks */}
      <rect x="52" y="118" width="44" height="32" rx="6" fill={P.leaf100} />
      <rect x="196" y="140" width="52" height="36" rx="6" fill={P.leaf100} />
      <rect x="386" y="128" width="48" height="34" rx="6" fill={P.leaf100} />
      <rect x="210" y="34" width="44" height="30" rx="6" fill={P.leaf100} opacity="0.7" />
      <rect x="60" y="240" width="52" height="32" rx="6" fill={P.leaf100} opacity="0.7" />
      <rect x="396" y="238" width="44" height="30" rx="6" fill={P.leaf100} opacity="0.7" />
      {/* route hint */}
      <path
        d="M100 250 Q170 240 210 200 T262 158"
        stroke={P.blue}
        strokeWidth="3.5"
        strokeDasharray="2 9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="100" cy="250" r="6" fill={P.white} stroke={P.blue} strokeWidth="3" />
      {/* pin */}
      <g transform="translate(262 96)">
        <ellipse cx="0" cy="66" rx="16" ry="5" fill={P.pine} opacity="0.16" />
        <path
          d="M0 62 C-2 46 -30 34 -30 6 a30 30 0 1 1 60 0 c0 28 -28 40 -30 56 Z"
          fill={P.leaf}
          stroke={P.pine}
          strokeWidth="3"
        />
        <circle cx="0" cy="4" r="15" fill={P.white} />
        <path d="M0 -4 v16 M-8 4 h16" stroke={P.leaf} strokeWidth="4.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
