import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { BELL_SCHEDULE, SCHOOL_IMAGES } from '../data/schoolData';
import { EditorialPhoto } from './EditorialMedia';

interface WelcomeSectionProps {
  onOpenRegistration: (preset?: 'kindergarten' | 'transfer' | 'tour') => void;
}

export function WelcomeSection({ onOpenRegistration }: WelcomeSectionProps) {
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <section id="our-school" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#113E6B]/10">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Asymmetrical Editorial Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 lg:mb-18">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#113E6B]/70 mb-4">
              Welcome to Our School · Rosewood, Southeast Saskatoon
            </p>
            <h2 className="font-display text-[clamp(2.1rem,3.8vw,3.35rem)] font-bold leading-[1.09] tracking-[-0.025em] text-[#113E6B]">
              Rooted in Rosewood, inspired by courage and belonging.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-[17px] leading-[1.7] text-[#1E293B]/82">
              Opened in 2017 in the heart of southeast Saskatoon’s Rosewood neighbourhood, Colette
              Bourgonje School brings together modern sunlit architecture, prairie nature trails,
              and a deeply welcoming K–8 public school family.
            </p>
          </div>
        </div>

        {/* Asymmetrical 2-Column Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side: Offset Architectural Photo + Figure Caption */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -left-4 -bottom-4 w-44 h-44 rounded-3xl bg-[#F5A623]/45 -z-0"
              />
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden border border-[#113E6B]/10 aspect-[4/3]">
                <EditorialPhoto
                  src={SCHOOL_IMAGES.welcomeCampus}
                  alt="Welcoming modern timber and glass elementary school campus in Rosewood Saskatoon with families walking along a sunlit path"
                  className="w-full h-full"
                  fallbackTitle="Rosewood Campus Entrance"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-[#475569]">
                <span>Fig. A — Morning arrival along Olson Lane West in Rosewood.</span>
                <span className="tabular-nums font-medium text-[#113E6B] shrink-0">Est. 2017</span>
              </figcaption>
            </figure>
          </div>

          {/* Right Side: Highlighted School Introduction + Namesake Story */}
          <div className="lg:col-span-6 space-y-9">
            {/* Highlighted Editorial Introduction Box (clean subtle surface, no thick left border) */}
            <div className="rounded-[1.5rem] bg-[#F4F7FB] border border-[#113E6B]/12 p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#113E6B]/70 mb-3">
                Our Namesake &amp; Spirit
              </p>
              <h3 className="font-display text-2xl font-bold text-[#113E6B] leading-snug mb-4">
                Who was Colette Bourgonje?
              </h3>
              <p className="text-[16px] leading-[1.75] text-[#1E293B]/85 mb-4">
                Our school is proudly named after <strong className="font-semibold text-[#113E6B]">Colette Bourgonje</strong> —
                a trailblazing 10-time Paralympic medalist in wheelchair racing and Para-Nordic
                sit-skiing, proud Métis athlete, and former Saskatoon Public Schools teacher.
              </p>
              <p className="text-[16px] leading-[1.75] text-[#1E293B]/85">
                Her warmth, perseverance, and belief in every young person’s potential shape our
                daily culture. Here, students learn to cheer for one another, embrace new
                challenges, and build an inclusive neighbourhood where every voice matters.
              </p>
            </div>

            {/* Editorial Pull Quote with Delicate Hairline Dividers */}
            <blockquote className="py-7 border-y border-[#113E6B]/15">
              <p className="font-display text-xl sm:text-2xl font-semibold text-[#113E6B] leading-[1.4]">
                “When children feel truly seen, safe, and celebrated in their neighbourhood school,
                their curiosity has no limits.”
              </p>
              <footer className="mt-3 text-sm text-[#475569]">
                Our shared commitment across Kindergarten through Grade 8 · Saskatoon Public Schools
              </footer>
            </blockquote>

            {/* Key Facts Row with Tabular Numerals */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#113E6B] tabular-nums">
                  K–8
                </p>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-snug">
                  Full elementary journey under one roof
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#113E6B] tabular-nums">
                  2017
                </p>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-snug">
                  Modern shared Rosewood campus opened
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#113E6B] tabular-nums">
                  10×
                </p>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-snug">
                  Paralympic medals won by our namesake
                </p>
              </div>
            </div>

            {/* Interactive Bell Schedule Accordion & Tour Action */}
            <div className="pt-2 space-y-4">
              <div className="rounded-2xl border border-[#113E6B]/14 bg-[#F4F7FB]/70 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowSchedule((prev) => !prev)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#E2EAF2]/60 transition-colors cursor-pointer"
                  aria-expanded={showSchedule}
                >
                  <div>
                    <p className="font-display text-base font-bold text-[#113E6B]">
                      Daily Bell Schedule at a Glance
                    </p>
                    <p className="text-xs text-[#475569] mt-0.5 tabular-nums">
                      Morning Entry 9:07 a.m. · Lunch 11:57 a.m. · Dismissal 3:35 p.m.
                    </p>
                  </div>
                  {showSchedule ? (
                    <ChevronUp className="w-5 h-5 text-[#113E6B] shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#113E6B] shrink-0" aria-hidden="true" />
                  )}
                </button>

                {showSchedule && (
                  <div className="px-6 pb-5 pt-2 border-t border-[#113E6B]/10 divide-y divide-[#113E6B]/8">
                    {BELL_SCHEDULE.map((item) => (
                      <div
                        key={item.time}
                        className="py-2.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-sm font-bold text-[#113E6B] tabular-nums w-20 shrink-0">
                            {item.time}
                          </span>
                          <span className="text-sm font-semibold text-[#1E293B]">{item.label}</span>
                        </div>
                        <span className="text-xs text-[#475569] sm:text-right">{item.note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => onOpenRegistration('tour')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#113E6B] hover:text-[#0A2544] underline underline-offset-4 decoration-[#0284C7] decoration-2 cursor-pointer"
              >
                <span>New to Rosewood? Book a family welcome tour</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
