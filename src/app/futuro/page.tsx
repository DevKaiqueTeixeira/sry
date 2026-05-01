"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import foto1 from "./ChatGPT Image 30 de abr. de 2026, 23_16_18.png";
import foto2 from "./ChatGPT Image 30 de abr. de 2026, 23_18_27.png";
import foto3 from "./ChatGPT Image 30 de abr. de 2026, 23_19_24.png";
import foto4 from "./ChatGPT Image 30 de abr. de 2026, 23_20_56.png";
import foto5 from "./ChatGPT Image 30 de abr. de 2026, 23_21_50.png";
import foto6 from "./ChatGPT Image 30 de abr. de 2026, 23_24_21.png";

const DISCURSO =
  "A princípio, a ideia de fazer este site é uma válvula de escape para transmitir o que eu sinto de forma que você entenda.\n\n" +
  "Não é um ataque, nem um discurso de vitimismo. Eu só queria voltar a ser feliz com você de novo.\n\n" +
  "É muito duro não poder te irritar antes da janta, ou abrir a porta do banheiro do nada e te ver sem graça, das noites de gororobas e filmes ruins.\n\n" +
  "Eu só quero que você entenda, de forma genuína, as coisas que me afetam.\n\n" +
  "Eu sinto que, a cada dia que passa, mesmo estando junto de você, eu te perco.\n\n" +
  "Você sempre opta pelos outros, por decisões que não agregam a nós.\n\n" +
  "Quero que você me faça sentir bem de novo. Eu não consigo sozinho.\n\n" +
  "Preciso que você se empenhe nisso, caso ainda queira.\n\n" +
  "Tentei buscar nossas fotos e, quanto mais eu olhava, mais triste eu ficava.\n\n" +
  "A gente era muito feliz.\n\n" +
  "Nós perdemos quando quisemos impor a vida do outro à nossa.\n\n" +
  "Eu sei o que podemos fazer para funcionar, e você também sabe.\n\n" +
  "Só quero poder acordar tranquilo e dormir sereno, sabendo que você está comigo, focando em construir um futuro e te amar muito.\n\n" +
  "Você é tão linda... tão legal, companheira, inteligente, amorosa, carinhosa.\n\n" +
  "Não sei mais como te fazer entender e amadurecer para dar um basta nessas situações simples.\n\n" +
  "Por favor, baby. Eu te amo mais que tudo. Apenas reflita se vamos conseguir.\n\n" +
  "Te amo.\n\n" +
  "Eu sinto TANTO a sua falta, TODOS OS DIAS, você é um dos motivos de me fazer FELIZ e eu não consigo viver do jeito que está, mas não consigo viver sem você.";

const GALERIA = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
];

const WHATSAPP_MESSAGE =
  "Fico muito feliz de podermos tentar novamente da forma certa, eu te amo meu GIGANTE GOSTOSO SARADO ABSURDO DE HOMEM LINDO PERFEITO DIVO";
const WHATSAPP_URL = `https://wa.me/5511964917419?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const WHATSAPP_BLOCK_URL = "https://wa.me/5511964917419";

export default function FuturoPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedNoRepeat, setAcceptedNoRepeat] = useState(false);
  const [acceptedRestart, setAcceptedRestart] = useState(false);
  const allTermsAccepted = acceptedTerms && acceptedNoRepeat && acceptedRestart;

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

  useEffect(() => {
    if (!started || typedText.length >= DISCURSO.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(DISCURSO.slice(0, typedText.length + 1));
    }, 34);

    return () => clearTimeout(timeout);
  }, [started, typedText]);

  return (
    <main className="romance-bg relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-6 pb-24 sm:px-8 sm:py-10">
      {!unlocked ? (
        <button
          type="button"
          onClick={() => setUnlocked(true)}
          className="fixed inset-0 z-50 cursor-pointer"
          aria-label="Abrir galeria"
        >
          <Image src={foto4} alt="Abrir futuro" fill className="object-cover" priority />
          <span className="absolute inset-0 bg-black/25" />
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-[#ff3f96] px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white sm:bottom-10 sm:px-6 sm:text-xs sm:tracking-[0.2em]">
            clique para entrar
          </span>
        </button>
      ) : null}

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

      <section className="romance-card relative z-10 w-full max-w-5xl">
        <span className="orbit-ring orbit-ring-outer hidden sm:block" aria-hidden="true" />
        <span className="orbit-ring orbit-ring-inner hidden sm:block" aria-hidden="true" />
        <span className="center-spark hidden sm:block" aria-hidden="true" />

        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 sm:gap-5">
          {GALERIA.map((photo, index) => (
            <article
              key={index}
              className="relative w-full animate-[float_4.2s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`photo-frame ghibli-variant-${(index % 6) + 1}`}>
                <Image
                  src={photo}
                  alt={`Lembranca ${index + 1}`}
                  className="h-full w-full object-cover photo-square-aspect"
                  priority={index < 2}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 min-h-36 w-full rounded-2xl border-2 border-[#ff78b7] bg-[#fff4fa]/90 p-4 text-center text-base leading-relaxed text-[#7a0f41] shadow-inner whitespace-pre-line sm:p-7 sm:text-lg">
          {started ? (
            <>
              {typedText}
              {typedText.length < DISCURSO.length ? (
                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-[#7a0f41] align-middle" />
              ) : (
                <span className="mt-6 block text-center text-2xl font-black uppercase tracking-[0.16em] text-[#ff2f93] sm:text-3xl">
                  VOCÊ É TUDO PRA MIM
                </span>
              )}
            </>
          ) : (
            <div className="flex min-h-24 items-center justify-center">
              <button
                type="button"
                onClick={() => setStarted(true)}
                className="rounded-full border-2 border-[#a70b58] bg-[#ff3f96] px-8 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[#ea2a84] sm:px-10 sm:tracking-[0.2em]"
              >
                começar...
              </button>
            </div>
          )}
        </div>

        {started && typedText.length >= DISCURSO.length ? (
          <div className="mt-5 flex w-full flex-col items-center gap-3">
            <label className="flex w-full max-w-md items-center gap-3 rounded-xl border-2 border-[#a70b58] bg-[#ffe8f4] px-4 py-3 text-[#7a0f41] shadow-md">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="h-5 w-5 accent-[#ff3f96]"
              />
              <span className="text-left">
                <strong className="block text-sm uppercase tracking-[0.14em]">
                  termos e condições
                </strong>
                <span className="block text-sm">Eu entendo e genuinamente compreendo</span>
              </span>
            </label>

            <label className="flex w-full max-w-md items-center gap-3 rounded-xl border-2 border-[#a70b58] bg-[#ffe8f4] px-4 py-3 text-[#7a0f41] shadow-md">
              <input
                type="checkbox"
                checked={acceptedNoRepeat}
                onChange={(event) => setAcceptedNoRepeat(event.target.checked)}
                className="h-5 w-5 accent-[#ff3f96]"
              />
              <span className="block text-left text-sm">Não vou repetir os mesmos erros</span>
            </label>

            <label className="flex w-full max-w-md items-center gap-3 rounded-xl border-2 border-[#a70b58] bg-[#ffe8f4] px-4 py-3 text-[#7a0f41] shadow-md">
              <input
                type="checkbox"
                checked={acceptedRestart}
                onChange={(event) => setAcceptedRestart(event.target.checked)}
                className="h-5 w-5 accent-[#ff3f96]"
              />
              <span className="block text-left text-sm">Esquecermos o passado e recomeçeremos</span>
            </label>

            {allTermsAccepted ? (
              <>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border-2 border-[#128c7e] bg-[#25d366] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-lg transition hover:bg-[#1fb958]"
                >
                  responder no whats
                </a>
              </>
            ) : (
              <>
                <p className="text-center text-xs font-semibold text-[#7a0f41]">
                  se não concordar com as checkbox por favor me bloqueie
                </p>

                <a
                  href={WHATSAPP_BLOCK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border-2 border-[#a70b58] bg-[#ff77b7] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-lg transition hover:bg-[#ff5ea8]"
                >
                  bloquear no whats
                </a>

                <p className="text-center text-xs text-[#7a0f41]">
                  Abra o contato e toque em bloquear manualmente.
                </p>
              </>
            )}
          </div>
        ) : null}
      </section>
    </main>
  );
}
