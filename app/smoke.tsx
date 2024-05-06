import React, { useEffect } from "react";
import { initializeWebGL } from "./helpers/smoke";
import { config } from "./helpers/config";

export default function Smoke() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    initializeWebGL(canvasRef.current, config);
  });

  return (
    <canvas
      className="absolute top-0 left-0 w-full min-h-screen"
      id="smoke-canvas"
      ref={canvasRef}
    ></canvas>
  );
}
