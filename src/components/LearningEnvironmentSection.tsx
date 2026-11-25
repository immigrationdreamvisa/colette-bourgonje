import { ArrowUpRight } from 'lucide-react';
import { LEARNING_PILLARS, type LearningPillar } from '../data/schoolData';
import { BotanicalSprig, EditorialPhoto } from './EditorialMedia';

interface LearningEnvironmentSectionProps {
  onSelectPillar: (pillar: LearningPillar) => void;
}

export function LearningEnvironmentSection({ onSelectPillar }: LearningEnvironmentSectionProps) {
  const [studentLearning, classroomExp, creativity, inclusiveEd, community] = LEARNING_PILLARS;

  return (
    <section
      id="learning-environment"
      className="relative py-22 lg:py-32 bg-[#113E6B] text-[#F4F7FB] overflow-hidden"
    >
      {/* Subtle Decorative Botanical Flourish */}
      <BotanicalSprig
        className="hidden lg:block absolute top-14 right-10 w-32 h-32 opacity-30 pointer-events-none"
        color="#6BA4D9"
      />

      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Editorial Chapter Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 border-b border-[#F4F7FB]/15">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#F5A623] mb-4">
              Our Learning Environment
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#F4F7FB]">
              Inside every classroom, hallway, and sunny schoolyard.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#F4F7FB]/82">
              Learning at Colette Bourgonje School is hands-on, joyful, and deeply human. Explore
              the five pillars that shape our students’ days from Kindergarten through Grade 8.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Composition — 5 Distinct Story Formats */}
        <div className="mt-14 space-y-16 lg:space-y-24">
          {/* 01. Student Learning — Full-Width Lead Feature Spread */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <button
                type="button"
                onClick={() => onSelectPillar(studentLearning)}
                className="group block w-full text-left cursor-pointer"
              >
                <div className="rounded-[1.75rem] overflow-hidden aspect-[16/10] border border-[#F4F7FB]/12">
                  <EditorialPhoto
                    src={studentLearning.image}
                    alt={studentLearning.imageAlt}
                    className="w-full h-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    fallbackTitle={studentLearning.title}
                  />
                </div>
              </button>
              <p className="mt-3 text-xs text-[#6BA4D9]">{studentLearning.caption}</p>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#F5A623] tabular-nums">
                {studentLearning.number} · Pillar One
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F7FB] leading-tight">
                {studentLearning.title}
              </h3>
              <p className="text-lg font-medium text-[#6BA4D9] leading-snug">
                {studentLearning.subtitle}
              </p>
              <p className="text-[15.5px] leading-[1.75] text-[#F4F7FB]/82">
                {studentLearning.summary}
              </p>
              <div className="pt-3 border-t border-[#F4F7FB]/15 flex items-center justify-between gap-4">
                <span className="text-xs text-[#F4F7FB]/70">{studentLearning.highlightStat}</span>
                <button
                  type="button"
                  onClick={() => onSelectPillar(studentLearning)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F5A623] hover:text-[#F4F7FB] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                >
                  <span>Read story</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>

          {/* 02 & 03. Staggered Asymmetrical Pair: Classroom Experiences (Portrait) + Creativity & Exploration (Offset) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* 02. Classroom Experiences — Tall Editorial Portrait */}
            <article className="lg:col-span-5 space-y-5">
              <button
                type="button"
                onClick={() => onSelectPillar(classroomExp)}
                className="group block w-full text-left cursor-pointer"
              >
                <div className="rounded-[1.75rem] overflow-hidden aspect-[4/5] border border-[#F4F7FB]/12">
                  <EditorialPhoto
                    src={classroomExp.image}
                    alt={classroomExp.imageAlt}
                    className="w-full h-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    fallbackTitle={classroomExp.title}
                  />
                </div>
              </button>
              <p className="text-xs text-[#6BA4D9]">{classroomExp.caption}</p>
              <div className="pt-2 space-y-3">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0284C7] tabular-nums">
                  {classroomExp.number} · Pillar Two
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F7FB]">
                  {classroomExp.title}
                </h3>
                <p className="text-[15.5px] leading-[1.7] text-[#F4F7FB]/82">
                  {classroomExp.summary}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectPillar(classroomExp)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F5A623] hover:text-[#F4F7FB] transition-colors pt-1 cursor-pointer"
                >
                  <span>Explore classroom life</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* 03. Creativity & Exploration — Offset Top Padding for Magazine Stagger */}
            <article className="lg:col-span-7 lg:mt-20 space-y-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -top-5 -right-5 w-36 h-36 rounded-full bg-[#0284C7]/25 pointer-events-none"
                />
                <button
                  type="button"
                  onClick={() => onSelectPillar(creativity)}
                  className="group relative z-10 block w-full text-left cursor-pointer"
                >
                  <div className="rounded-[1.75rem] overflow-hidden aspect-[4/3] border border-[#F4F7FB]/12">
                    <EditorialPhoto
                      src={creativity.image}
                      alt={creativity.imageAlt}
                      className="w-full h-full"
                      imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                      fallbackTitle={creativity.title}
                    />
                  </div>
                </button>
              </div>
              <p className="text-xs text-[#6BA4D9]">{creativity.caption}</p>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2 items-start">
                <div className="sm:col-span-5">
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#F5A623] tabular-nums mb-2">
                    {creativity.number} · Pillar Three
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F7FB] leading-tight">
                    {creativity.title}
                  </h3>
                </div>
                <div className="sm:col-span-7 space-y-3">
                  <p className="text-[15.5px] leading-[1.7] text-[#F4F7FB]/82">
                    {creativity.summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectPillar(creativity)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F5A623] hover:text-[#F4F7FB] transition-colors cursor-pointer"
                  >
                    <span>See arts &amp; outdoor inquiry</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* 04. Inclusive Education — Warm Cream Editorial Spotlight Framed Inside Forest Chapter */}
          <article className="rounded-[2rem] bg-[#F4F7FB] text-[#1E293B] p-7 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#113E6B]/75 tabular-nums">
                {inclusiveEd.number} · Pillar Four
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#113E6B] leading-tight">
                {inclusiveEd.title}
              </h3>
              <p className="text-base font-medium text-[#113E6B]/85 leading-snug">
                {inclusiveEd.subtitle}
              </p>
              <p className="text-[15.5px] leading-[1.75] text-[#1E293B]/82">
                {inclusiveEd.summary}
              </p>
              <div className="pt-4 border-t border-[#113E6B]/12 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#475569]">
                  {inclusiveEd.highlightStat}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectPillar(inclusiveEd)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Our inclusion commitment</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <button
                type="button"
                onClick={() => onSelectPillar(inclusiveEd)}
                className="group block w-full text-left cursor-pointer"
              >
                <div className="rounded-[1.4rem] overflow-hidden aspect-[4/3] border border-[#113E6B]/10">
                  <EditorialPhoto
                    src={inclusiveEd.image}
                    alt={inclusiveEd.imageAlt}
                    className="w-full h-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    fallbackTitle={inclusiveEd.title}
                  />
                </div>
              </button>
              <p className="mt-3 text-xs text-[#475569]">{inclusiveEd.caption}</p>
            </div>
          </article>

          {/* 05. School Community — Panoramic Closing Feature */}
          <article className="space-y-6">
            <button
              type="button"
              onClick={() => onSelectPillar(community)}
              className="group block w-full text-left cursor-pointer"
            >
              <div className="rounded-[1.75rem] overflow-hidden aspect-[16/9] lg:aspect-[21/9] border border-[#F4F7FB]/12">
                <EditorialPhoto
                  src={community.image}
                  alt={community.imageAlt}
                  className="w-full h-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.02]"
                  fallbackTitle={community.title}
                />
              </div>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0284C7] tabular-nums mb-2">
                  {community.number} · Pillar Five
                </p>
                <h3 className="font-display text-3xl font-bold text-[#F4F7FB]">
                  {community.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[15.5px] leading-[1.75] text-[#F4F7FB]/82">
                  {community.summary}
                </p>
              </div>
              <div className="lg:col-span-3 lg:text-right flex lg:flex-col lg:items-end justify-between gap-3">
                <p className="text-xs text-[#6BA4D9]">{community.caption}</p>
                <button
                  type="button"
                  onClick={() => onSelectPillar(community)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F5A623] hover:text-[#F4F7FB] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                >
                  <span>Read community story</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
