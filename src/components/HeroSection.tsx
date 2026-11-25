import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { SCHOOL_IMAGES, SCHOOL_INFO, type ResourceModalId } from '../data/schoolData';
import {
  BotanicalSprig,
  EditorialPhoto,
  PlayfulDottedLoop,
  SunArcAccent,
} from './EditorialMedia';

interface HeroSectionProps {
  onOpenResource: (id: ResourceModalId) => void;
}

export function HeroSection({ onOpenResource }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F4F7FB] pt-8 pb-14 lg:pt-14 lg:pb-20">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Main Asymmetric Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Welcoming Story */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-10">
            <p className="text-[13px] font-medium text-[#475569] tracking-wide mb-5 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#113E6B]">{SCHOOL_INFO.division}</span>
              <span aria-hidden="true">·</span>
              <span>Rosewood, Saskatoon</span>
              <span aria-hidden="true">·</span>
              <span>Grades K–8</span>
            </p>

            <h1 className="font-display text-[clamp(2.65rem,5vw,4.35rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#113E6B] mb-6">
              A Place to Learn,{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Grow</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-1.5 h-3.5 bg-[#F5A623]/75 -z-0 rounded-sm"
                />
              </span>{' '}
              &amp; Belong.
            </h1>

            <p className="text-[17px] sm:text-lg leading-[1.7] text-[#1E293B]/85 max-w-[50ch] mb-9">
              Welcome to Colette Bourgonje School — a vibrant Kindergarten to Grade 8 community in
              southeast Saskatoon where curious minds explore, creativity flourishes, and every
              child is celebrated for who they are.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#our-school"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] font-semibold text-[15px] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#0A2544] active:scale-[0.98]"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#113E6B]/28 text-[#113E6B] bg-[#FFFFFF] font-semibold text-[15px] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#113E6B] hover:bg-[#E2EAF2]/60"
              >
                <span>Discover Our Programs</span>
              </a>
            </div>

            {/* Subtle editorial flourish below CTAs */}
            <div className="hidden lg:flex items-center gap-5 mt-11 pt-8 border-t border-[#113E6B]/12">
              <PlayfulDottedLoop className="w-24 h-10 shrink-0" />
              <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
                Honouring Paralympian and Saskatoon educator{' '}
                <strong className="font-semibold text-[#113E6B]">Colette Bourgonje</strong> —
                inspiring courage, joy, and inclusion every day.
              </p>
            </div>
          </div>

          {/* Right Column: Overlapping Authentic Photography Composition */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative pt-4 pb-10 sm:pb-14 lg:pl-8">
              {/* Decorative Organic Shapes Behind Photo */}
              <SunArcAccent className="hidden sm:block absolute -top-6 right-2 lg:right-6 w-28 h-28 z-0 opacity-95" />
              <div
                aria-hidden="true"
                className="absolute top-12 right-0 sm:right-6 w-3/4 h-[82%] rounded-[2rem] bg-[#6BA4D9]/35 -z-0 translate-x-3 translate-y-3"
              />

              {/* Primary Hero Photograph */}
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden shadow-[0_24px_60px_-24px_rgba(35,75,60,0.28)] border border-[#113E6B]/10 aspect-[4/3]">
                <EditorialPhoto
                  src={SCHOOL_IMAGES.heroMain}
                  alt="Elementary students gathered around a warm wooden table smiling and learning together in a sunlit classroom"
                  priority
                  className="w-full h-full"
                  fallbackTitle="Inspiring Learning at Colette Bourgonje"
                />
              </div>

              {/* Overlapping Secondary Creative Vignette Photo */}
              <div className="relative sm:absolute sm:-bottom-2 sm:left-0 lg:left-2 z-20 mt-5 sm:mt-0 w-44 sm:w-52 md:w-56 rounded-[1.4rem] p-2 bg-[#F4F7FB] shadow-[0_18px_40px_-14px_rgba(35,75,60,0.28)] border border-[#113E6B]/10">
                <div className="aspect-square rounded-[1rem] overflow-hidden">
                  <EditorialPhoto
                    src={SCHOOL_IMAGES.heroDetail}
                    alt="Elementary students painting autumn leaves with watercolours and crafting at a sunny art table"
                    priority
                    className="w-full h-full"
                    fallbackTitle="Creative Discovery"
                  />
                </div>
              </div>

              {/* Subtle Floating Editorial Typography Callout */}
              <div className="hidden sm:flex items-center gap-3 absolute top-10 -left-2 lg:left-0 z-20 bg-[#FFFFFF]/95 backdrop-blur-sm px-5 py-3 rounded-2xl border border-[#113E6B]/12 shadow-[0_12px_32px_-12px_rgba(35,75,60,0.2)]">
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-lg bg-[#F5A623] flex items-center justify-center font-display text-sm font-extrabold text-[#113E6B]"
                >
                  K–8
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-[#113E6B] leading-tight">
                    Inspiring Learning
                  </p>
                  <p className="text-xs text-[#475569] mt-0.5">Rosewood Community Campus</p>
                </div>
              </div>

              {/* Botanical Sprig Accent Bottom Right */}
              <BotanicalSprig
                className="hidden md:block absolute -bottom-8 right-6 w-24 h-24 z-20 pointer-events-none"
                color="#113E6B"
              />
            </div>
          </div>
        </div>

        {/* Clean Full-Width Operational Utility Strip Below Hero Split */}
        <div className="mt-10 lg:mt-16 pt-7 border-t border-[#113E6B]/14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#475569]">School Day Hours</p>
              <p className="font-display text-[15px] font-bold text-[#113E6B] tabular-nums mt-0.5">
                9:07 a.m. – 3:35 p.m.
              </p>
              <button
                type="button"
                onClick={() => onOpenResource('bell-schedule')}
                className="text-xs font-semibold text-[#113E6B] underline underline-offset-4 decoration-[#0284C7] hover:text-[#0A2544] mt-1 cursor-pointer"
              >
                View full bell schedule
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#475569]">Rosewood Location</p>
              <p className="font-display text-[15px] font-bold text-[#113E6B] mt-0.5">
                169 Olson Lane West
              </p>
              <p className="text-xs text-[#475569] mt-0.5">Saskatoon, SK · S7V 0L1</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Phone className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#475569]">Main School Office</p>
              <a
                href="tel:3066837530"
                className="font-display text-[15px] font-bold text-[#113E6B] tabular-nums hover:underline mt-0.5 block"
              >
                306-683-7530
              </a>
              <p className="text-xs text-[#475569] mt-0.5">Office open 8:30 a.m. – 4:00 p.m.</p>
            </div>
          </div>

          <div className="flex items-start justify-between lg:justify-end gap-3">
            <div className="lg:text-right">
              <p className="text-xs font-medium text-[#475569]">Need to report an absence?</p>
              <p className="font-display text-[15px] font-bold text-[#113E6B] mt-0.5">
                SchoolMessenger SafeArrival
              </p>
              <button
                type="button"
                onClick={() => onOpenResource('schoolmessenger')}
                className="text-xs font-semibold text-[#113E6B] underline underline-offset-4 decoration-[#F5A623] decoration-2 hover:text-[#0A2544] mt-1 cursor-pointer"
              >
                How to report an absence
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
