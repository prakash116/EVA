import { ImageResponse } from "next/og";

export const alt = "EVA ASLAM MEDICO — Your Trusted Pharmacy & Home Healthcare Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0B3B2E",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#0FA36B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            +
          </div>
          <div style={{ fontSize: 28, letterSpacing: 6, color: "#2FBC85" }}>
            LOHARPATTI · KUSHINAGAR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            EVA ASLAM MEDICO
          </div>
          <div style={{ fontSize: 34, color: "#D9F2E6" }}>
            Your Trusted Pharmacy &amp; Home Healthcare Partner
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <svg width="220" height="44" viewBox="0 0 120 24" fill="none">
            <path
              d="M0 12 H28 L34 12 38 8 42 12 H56 L62 12 66 2 70 22 74 12 H120"
              stroke="#0FA36B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 26, color: "#9fc4b4" }}>
            24×7 Service · Home Delivery · Local Healthcare
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
