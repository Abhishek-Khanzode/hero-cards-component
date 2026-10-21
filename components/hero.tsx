
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // Seamless upward movement through the diagonal track.
      gsap.fromTo(
        track,
        { yPercent: 0 },
        {
          yPercent: -50,
          duration: 22,
          ease: "none",
          repeat: -1,
        }
      );
    }, track);

    return () => ctx.revert();
  }, []);

  const cards = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden border-2 border-black/80 bg-[#fbfaf2] text-black">
      {/* FIXED LEFT CONTENT */}
      <div className="relative z-10 w-full max-w-[490px] px-6 py-16 sm:px-10 md:px-14">
        <h1 className="font-serif text-[56px] leading-[0.95] tracking-[-2px] sm:text-[76px] md:text-[100px]">
          Helloworld
        </h1>

        <p className="mt-6 max-w-[370px] font-serif text-sm leading-[1.25] sm:text-base">
          Lorem Ipsum is the industry-standard dummy text used in graphic
          design, publishing, and web development to preview layouts without
          distracting readers with meaningful content.
        </p>

        <button
          type="button"
          className="mt-5 bg-[#111111] px-8 py-3 text-sm text-white transition-colors duration-300 hover:bg-[#51434e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Learn More
        </button>
      </div>

      {/* DIAGONAL CARD ANIMATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "1000px",
            height: "200%",
            left: "70%",
            top: "-50%",
            transform: "rotate(-30deg)",
            transformOrigin: "center center",
          }}
        >
          <div
            ref={trackRef}
            className="flex h-[200%] flex-col gap-7 will-change-transform"
          >
            {/* Duplicate the cards to create an infinite loop */}
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="relative aspect-[1.32/1] w-[230px] shrink-0 overflow-hidden border-[5px] border-[#151116] bg-[#171219] shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:w-[265px]"
              >
                {/* Dark portfolio preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#17131b] via-[#211923] to-[#08080a] p-2 sm:p-3">
                  <div className="flex h-full flex-col border border-white/15 p-2 sm:p-3">
                    {/* Top navigation */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-2">
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#bd82b0]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      </div>

                      <div className="h-1 w-8 bg-white/30" />
                    </div>

                    {/* Main preview layout */}
                    <div className="mt-3 grid flex-1 grid-cols-[0.9fr_1.1fr] gap-2">
                      <div className="flex flex-col gap-2">
                        <div className="h-1 w-4/5 bg-white/50" />
                        <div className="h-1 w-full bg-white/20" />
                        <div className="h-1 w-3/5 bg-white/20" />

                        <div className="mt-auto h-8 border border-[#a96c9b]/60 bg-[#8f527f]/20 sm:h-12" />

                        <div className="h-2 border border-white/15" />
                        <div className="h-2 border border-white/15" />
                      </div>

                      <div className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-[#62445f] via-[#302333] to-black">
                        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#b67aa8]/50 to-transparent" />

                        <div className="absolute bottom-0 left-1/2 h-[75%] w-[45%] -translate-x-1/2 skew-y-[-12deg] border border-[#d6a9cc]/50 bg-gradient-to-r from-[#211923] via-[#80617e] to-[#171219] shadow-[0_0_18px_rgba(183,123,169,0.25)]" />

                        <div className="absolute left-2 top-2 h-1 w-6 bg-white/40" />

                        <div className="absolute right-2 top-2 h-1 w-3 bg-white/20" />
                      </div>
                    </div>

                    {/* Bottom interface elements */}
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <div className="h-3 border border-white/15 bg-white/[0.03] sm:h-4" />
                      <div className="h-3 border border-white/15 bg-white/[0.03] sm:h-4" />
                      <div className="h-3 border border-white/15 bg-white/[0.03] sm:h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
