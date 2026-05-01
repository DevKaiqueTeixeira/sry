"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import foto1 from "./futuro/ChatGPT Image 30 de abr. de 2026, 23_16_18.png";
import foto2 from "./futuro/ChatGPT Image 30 de abr. de 2026, 23_18_27.png";
import foto3 from "./futuro/ChatGPT Image 30 de abr. de 2026, 23_19_24.png";
import foto4 from "./futuro/ChatGPT Image 30 de abr. de 2026, 23_20_56.png";
import foto5 from "./futuro/ChatGPT Image 30 de abr. de 2026, 23_21_50.png";
import foto6 from "./futuro/ChatGPT Image 30 de abr. de 2026, 23_24_21.png";

const FOTOS = [foto1, foto2, foto3, foto4, foto5, foto6];

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const hearts = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${4 + i * 6.1}%`,
        delay: `${(i % 8) * 0.3}s`,
        duration: `${3.2 + (i % 5) * 0.55}s`,
      })),
    [],
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() === "1802") {
      setShowError(false);
      router.push("/futuro");
      return;
    }
    setShowError(true);
  };

  return (
    <main className="romance-bg relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-6 pb-24 sm:px-8 sm:py-10">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="pixel-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        />
      ))}

      <section className="romance-card relative z-10 w-full max-w-2xl">
        <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-7 sm:grid-cols-3 sm:gap-4">
          {FOTOS.map((foto, index) => (
            <div key={index} className="photo-frame">
              <Image
                src={foto}
                alt={`Foto ${index + 1}`}
                fill
                className="object-cover blur-[12px]"
              />
            </div>
          ))}
        </div>

        {showError ? (
          <p className="mb-4 rounded-md border-2 border-[#ff4f9a] bg-[#ff8ebf] px-4 py-2 text-center text-sm font-semibold text-[#7a0f41]">
            não acredito que errou
          </p>
        ) : null}

        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:gap-4">
          <label
            htmlFor="date-key"
            className="text-center text-base font-black uppercase tracking-[0.12em] text-[#7a0f41] sm:text-lg sm:tracking-[0.16em]"
          >
            data de namoro
          </label>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-[#a70b58]">
            dia e mes exemplo xxyy
          </p>
          <input
            id="date-key"
            type="password"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="1802"
            className="w-full rounded-md border-2 border-[#ff5ba8] bg-[#fff3fa] px-4 py-3 text-center text-base font-bold tracking-[0.18em] text-[#7a0f41] outline-none transition focus:border-[#d61b77] focus:ring-4 focus:ring-[#ff9bc9] sm:text-lg sm:tracking-[0.2em]"
          />
          <button
            type="submit"
            className="rounded-md border-2 border-[#a70b58] bg-[#ff3f96] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-[#ea2a84]"
          >
            entrar
          </button>
        </form>
      </section>
    </main>
  );
}
