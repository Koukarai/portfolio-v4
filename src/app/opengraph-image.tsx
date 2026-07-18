import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Terrence — Creative Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geist = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
    ),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          color: "#f2f2f0",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#c9ff3c",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#8a8a86" }}>
            OPEN TO WORK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 160,
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: -4,
              display: "flex",
            }}
          >
            Terrence
          </div>
          <div style={{ fontSize: 34, color: "#8a8a86", marginTop: 24, display: "flex" }}>
            Creative Frontend Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: geist, style: "normal", weight: 500 }],
    },
  );
}
