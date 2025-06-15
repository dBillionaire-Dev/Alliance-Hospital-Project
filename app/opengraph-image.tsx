import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          background: "linear-gradient(90deg, #FF6B00 0%, #4B0082 100%)",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "4px solid #FF6B00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#4B0082",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "#FF6B00" }}>Alliance</span>
          <span style={{ color: "#4B0082" }}>Hospital</span>
        </div>
      </div>
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Quality Healthcare in Côte d&apos;Ivoire
      </div>
    </div>,
    { ...size },
  )
}
