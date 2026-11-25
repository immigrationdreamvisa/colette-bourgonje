import { ArrowUpRight, Check } from 'lucide-react';
import { PROGRAMS, type ProgramItem } from '../data/schoolData';
import { EditorialPhoto, SunArcAccent } from './EditorialMedia';

interface ProgramsSectionProps {
  onProgramAction: (actionType: ProgramItem['actionType']) => void;
}

export function ProgramsSection({ onProgramAction }: ProgramsSectionProps) {
  const [kindergarten, beforeAfter, earlyLearning, transportation] = PROGRAMS;

  return (
    <section id="programs" className="py-22 lg:py-32 bg-[#F4F7FB]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Section Editorial Heading */}
        <div className="max-w-3xl mb-16 lg:mb-22">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#113E6B]/70 mb-4">
            Programs &amp; Opportunities
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#113E6B] mb-5">
            Thoughtful care and pathways for every stage of growing up.
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#1E293B]/80">
            From your child’s earliest days in Rosewood through Grade 8 graduation, Colette
            Bourgonje School connects families with play-based Kindergarten, on-site child care, and
            safe neighbourhood transportation.
          </p>
        </div>

        {/* 4 Programs — Each with its own distinct editorial architecture */}
        <div className="space-y-20 lg:space-y-28">
          {/* Program 01: Kindergarten — Sunny Yellow Architectural Offset */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 relative">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-5 -left-5 w-44 h-44 rounded-[2rem] bg-[#F5A623]/55 -z-0"
              />
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden aspect-[4/3] border border-[#113E6B]/10 shadow-[0_20px_50px_-24px_rgba(35,75,60,0.22)]">
                <EditorialPhoto
                  src={kindergarten.image}
                  alt={kindergarten.imageAlt}
                  className="w-full h-full"
                  fallbackTitle={kindergarten.title}
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#475569]">
                <span className="text-[#113E6B] uppercase tracking-[0.12em]">
                  {kindergarten.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{kindergarten.ageOrScope}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#113E6B] leading-tight">
                {kindergarten.title}
              </h3>
              <p className="font-display text-lg font-semibold text-[#1E293B]/90">
                {kindergarten.headline}
              </p>
              <p className="text-[15.5px] leading-[1.75] text-[#1E293B]/80">
                {kindergarten.description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {kindergarten.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/85">
                    <Check
                      className="w-4 h-4 text-[#113E6B] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onProgramAction(kindergarten.actionType)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{kindergarten.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
                </button>
                <p className="text-xs text-[#475569] max-w-xs">{kindergarten.practicalNote}</p>
              </div>
            </div>
          </article>

          {/* Program 02: Before & After School Care — Reversed Coral-Framed Editorial Spread */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-16 border-t border-[#113E6B]/12">
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#475569]">
                <span className="text-[#113E6B] uppercase tracking-[0.12em]">
                  {beforeAfter.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{beforeAfter.ageOrScope}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#113E6B] leading-tight">
                {beforeAfter.title}
              </h3>
              <p className="font-display text-lg font-semibold text-[#1E293B]/90">
                {beforeAfter.headline}
              </p>
              <p className="text-[15.5px] leading-[1.75] text-[#1E293B]/80">
                {beforeAfter.description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {beforeAfter.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1E293B]/85">
                    <Check
                      className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onProgramAction(beforeAfter.actionType)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#113E6B] text-[#113E6B] bg-[#FFFFFF] text-sm font-semibold hover:bg-[#113E6B] hover:text-[#F4F7FB] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{beforeAfter.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <p className="text-xs text-[#475569] max-w-xs">{beforeAfter.practicalNote}</p>
              </div>
            </div>

            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-5 -right-5 w-48 h-48 rounded-[2rem] bg-[#0284C7]/40 -z-0"
              />
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden aspect-[4/3] border border-[#113E6B]/10 shadow-[0_20px_50px_-24px_rgba(35,75,60,0.22)]">
                <EditorialPhoto
                  src={beforeAfter.image}
                  alt={beforeAfter.imageAlt}
                  className="w-full h-full"
                  fallbackTitle={beforeAfter.title}
                />
              </div>
            </div>
          </article>

          {/* Program 03: Early Learning & Child Care — Soft Sage Tinted Editorial Band */}
          <article className="rounded-[2.25rem] bg-[#DCE8F5] border border-[#113E6B]/10 p-7 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
            <SunArcAccent className="hidden lg:block absolute -bottom-10 -right-8 w-36 h-36 opacity-50 pointer-events-none" />

            <div className="lg:col-span-5 relative z-10">
              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] border border-[#113E6B]/10">
                <EditorialPhoto
                  src={earlyLearning.image}
                  alt={earlyLearning.imageAlt}
                  className="w-full h-full"
                  fallbackTitle={earlyLearning.title}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 relative z-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#113E6B]/75">
                <span className="uppercase tracking-[0.12em]">{earlyLearning.index}</span>
                <span aria-hidden="true">·</span>
                <span>{earlyLearning.ageOrScope}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#113E6B] leading-tight">
                {earlyLearning.title}
              </h3>
              <p className="font-display text-lg font-semibold text-[#113E6B]/90">
                {earlyLearning.headline}
              </p>
              <p className="text-[15.5px] leading-[1.75] text-[#1E293B]/85">
                {earlyLearning.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#113E6B]/14">
                {earlyLearning.highlights.map((item, idx) => (
                  <p key={item} className="text-xs sm:text-[13px] leading-relaxed text-[#1E293B]/85">
                    <span className="font-display font-bold text-[#113E6B] block mb-1 tabular-nums">
                      0{idx + 1}.
                    </span>
                    {item}
                  </p>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onProgramAction(earlyLearning.actionType)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{earlyLearning.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
                </button>
                <p className="text-xs text-[#113E6B]/80 max-w-xs">{earlyLearning.practicalNote}</p>
              </div>
            </div>
          </article>

          {/* Program 04: School Transportation — Crisp Structured Split with Key Distance Callout */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#475569]">
                <span className="text-[#113E6B] uppercase tracking-[0.12em]">
                  {transportation.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{transportation.ageOrScope}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#113E6B] leading-tight">
                {transportation.title}
              </h3>
              <p className="text-[15.5px] leading-[1.75] text-[#1E293B]/82">
                {transportation.description}
              </p>

              {/* Tabular Busing Quick Specs */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#113E6B]/14">
                <div>
                  <p className="font-display text-2xl font-extrabold text-[#113E6B] tabular-nums">
                    &gt; 1.2 km
                  </p>
                  <p className="text-xs text-[#475569] mt-0.5">Standard eligibility distance</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-[#113E6B] tabular-nums">
                    June 15
                  </p>
                  <p className="text-xs text-[#475569] mt-0.5">Annual route priority deadline</p>
                </div>
              </div>

              <ul className="space-y-2">
                {transportation.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1E293B]/85">
                    <Check
                      className="w-4 h-4 text-[#113E6B] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onProgramAction(transportation.actionType)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5A623] text-[#113E6B] text-sm font-bold hover:bg-[#ecbc4d] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{transportation.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[1.75rem] overflow-hidden aspect-[4/3] border border-[#113E6B]/10 shadow-[0_20px_50px_-24px_rgba(35,75,60,0.2)]">
                <EditorialPhoto
                  src={transportation.image}
                  alt={transportation.imageAlt}
                  className="w-full h-full"
                  fallbackTitle={transportation.title}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
