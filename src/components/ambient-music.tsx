"use client";

import { useEffect, useMemo, useState } from "react";

const VIDEO_ID = "fuWq4RZnc6U";

export function AmbientMusic() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const enable = () => setActive(true);
    window.addEventListener("pointerdown", enable, { once: true });
    return () => window.removeEventListener("pointerdown", enable);
  }, []);

  const src = useMemo(
    () =>
      `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0`,
    [],
  );

  return (
    <>
      {active ? (
        <iframe
          title="musica de fundo"
          src={src}
          allow="autoplay"
          className="music-frame"
        />
      ) : null}

      <button
        type="button"
        onClick={() => setActive((prev) => !prev)}
        className="music-toggle"
      >
        {active ? "pausar musica" : "tocar musica"}
      </button>
    </>
  );
}
