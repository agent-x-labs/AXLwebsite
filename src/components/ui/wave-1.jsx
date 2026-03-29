import React from "react"
import { cn } from "../../lib/utils"
import { DitheringShader } from "./dithering-shader"

export function WaveOne({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <DitheringShader
        className="size-full opacity-35"
        style={{ width: "100%", height: "100%" }}
        shape="wave"
        type="8x8"
        colorBack="#000000"
        colorFront="#8E2DE2"
        pxSize={3}
        speed={0.45}
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-black/75 to-black" />
    </div>
  )
}
