import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";
export const dynamic = "force-static";

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
          background: "#2F4639",
          borderRadius: "14px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "46px",
            height: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1.5px solid rgba(255,253,248,0.72)",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "12px",
              width: "22px",
              height: "2px",
              background: "#B8914A",
              borderRadius: "999px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "12px",
              width: "22px",
              height: "2px",
              background: "#B8914A",
              borderRadius: "999px",
            }}
          />
          <div
            style={{
              color: "#FFFDF8",
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: 1,
              marginTop: "-1px",
            }}
          >
            E
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
