import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Configure for static export
export const dynamic = "force-static";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Changed background to a soft, clean circle (or transparent if preferred)
          // Using a very dark green to contrast with pink petals
          background: "#1a2e1f", 
          borderRadius: "30%", // Squircle shape looks modern for favicons
        }}
      >
        {/* Container for the flower */}
        <div
          style={{
            position: "relative",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Back Petals (Darker Pink) */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
             <div style={{ position: 'absolute', top: 0, width: '10px', height: '10px', background: '#d946ef', borderRadius: '50% 50% 0 0', transform: 'rotate(-45deg) translate(-4px, 6px)' }} />
             <div style={{ position: 'absolute', top: 0, width: '10px', height: '10px', background: '#d946ef', borderRadius: '50% 50% 0 0', transform: 'rotate(45deg) translate(4px, 6px)' }} />
             <div style={{ position: 'absolute', bottom: 2, width: '10px', height: '10px', background: '#c026d3', borderRadius: '50%', transform: 'scale(1.2)' }} />
          </div>

          {/* Front/Side Petals (Lighter Pink) */}
          <div style={{ position: 'absolute', left: 0, top: '8px', width: '10px', height: '10px', background: '#f0abfc', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: 0, top: '8px', width: '10px', height: '10px', background: '#f0abfc', borderRadius: '50%' }} />

          {/* Center (Yellow/Gold) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#facc15", // Bright yellow center
              border: "1px solid #a16207", // Slight border to define it
              transform: "translate(-50%, -20%)",
              zIndex: 10,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}