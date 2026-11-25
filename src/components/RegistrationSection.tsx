import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  HeartHandshake,
  MapPin,
  Phone,
  Sparkles,
  UserPlus,
} from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SCHOOL_IMAGES, SCHOOL_INFO } from '../data/schoolData';
import { BotanicalSprig, EditorialPhoto } from './EditorialMedia';

export type RegistrationPreset = 'kindergarten' | 'transfer' | 'tour';

interface RegistrationSectionProps {
  preset?: RegistrationPreset;
  onBackHome?: () => void;
}

const HEADLINE_WORDS = ['Every', 'great', 'story', 'begins', 'with', 'an'];

const KIDS_SPIRIT_WORDS = [
  'Curious Readers',
  'Brave Explorers',
  'Creative Makers',
  'Kind Neighbours',
];

const PATHWAYS: ReadonlyArray<{
  id: RegistrationPreset;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: typeof Sparkles;
}> = [
  {
    id: 'kindergarten',
    number: '01',
    title: 'Kindergarten',
    tagline: 'First Steps in Rosewood',
    badge: 'Age 5 by Jan 31',
    description:
      'Play-based discovery, early literacy, and warm friendships in sunlit studios.',
    highlights: ['Half-day & alternating full-day rhythms', 'Gentle September gradual entry'],
    icon: Sparkles,
  },
  {
    id: 'transfer',
    number: '02',
    title: 'Grades 1–8 Enrollment',
    tagline: 'Join Our K–8 Community',
    badge: 'Open Year-Round',
    description:
      'Seamless neighbourhood transfers into collaborative, inclusive K–8 classrooms.',
    highlights: ['Personalized teacher welcome', 'Before & After School Care info'],
    icon: UserPlus,
  },
  {
    id: 'tour',
    number: '03',
    title: 'Book a School Tour',
    tagline: 'Walk the Halls With Us',
    badge: '25-Min Visit',
    description:
      'Explore the Learning Commons, meet school leadership, and feel our campus spirit.',
    highlights: ['Guided by our Principal & office team', 'Ask about busing & programs'],
    icon: Compass,
  },
];

const REGISTRATION_STEPS = [
  {
    number: '01',
    title: 'Share Your Family Story',
    detail:
      'Choose your pathway and tell us about your child’s grade, interests, and any support they will love.',
  },
  {
    number: '02',
    title: 'Tick Off Two Simple Documents',
    detail:
      'Keep your child’s proof of age and proof of Rosewood or Saskatoon address ready for office verification.',
  },
  {
    number: '03',
    title: 'Hear Back Within 1–2 School Days',
    detail:
      'Our front office team reaches out personally to confirm placement, answer questions, or host your tour.',
  },
];

const CHECKLIST_ITEMS = [
  {
    id: 'age',
    label: 'Child’s proof of age (birth certificate, passport, or PR card)',
  },
  {
    id: 'address',
    label: 'Proof of Rosewood / Saskatoon address (utility bill or lease)',
  },
  {
    id: 'previous',
    label: 'Previous school name & grade (for Grades 1–8 transfers)',
  },
] as const;

const TOUR_WINDOWS = [
  'Morning · 9:15 a.m.',
  'Mid-Day · 1:15 p.m.',
  'After School · 3:45 p.m.',
] as const;

function PlayfulPaperPlane({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 58C24 44 42 52 58 38"
        stroke="#0284C7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <path
        d="M64 31L108 14L86 52L76 38L64 31Z"
        fill="#F5A623"
        stroke="#113E6B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M108 14L76 38L77 50L86 42"
        stroke="#113E6B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayfulKidsBlocks({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="32" width="22" height="22" rx="5" fill="#0284C7" stroke="#113E6B" strokeWidth="2" />
      <rect x="34" y="32" width="22" height="22" rx="5" fill="#6BA4D9" stroke="#113E6B" strokeWidth="2" />
      <rect x="21" y="10" width="22" height="22" rx="5" fill="#F5A623" stroke="#113E6B" strokeWidth="2" />
      <path d="M29 21H35M32 18V24" stroke="#113E6B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="19" cy="43" r="3" fill="#F4F7FB" />
      <path d="M41 46L45 40L49 46H41Z" fill="#F4F7FB" />
    </svg>
  );
}

export function RegistrationSection({
  preset = 'transfer',
  onBackHome,
}: RegistrationSectionProps) {
  const [selectedType, setSelectedType] = useState<RegistrationPreset>(preset);
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childGrade, setChildGrade] = useState(
    preset === 'kindergarten' ? 'Kindergarten' : 'Grade 1'
  );
  const [address, setAddress] = useState('');
  const [tourWindow, setTourWindow] = useState<string>(TOUR_WINDOWS[0]);
  const [notes, setNotes] = useState('');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [spiritIdx, setSpiritIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setSelectedType(preset);
    if (preset === 'kindergarten') {
      setChildGrade('Kindergarten');
    }
    setDone(false);
  }, [preset]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpiritIdx((prev) => (prev + 1) % KIDS_SPIRIT_WORDS.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = CHECKLIST_ITEMS.filter((item) => checkedDocs[item.id]).length;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !email.trim()) return;
    setDone(true);
  };

  const resetForm = () => {
    setParentName('');
    setStudentName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setNotes('');
    setDone(false);
  };

  const activePathway = PATHWAYS.find((p) => p.id === selectedType) ?? PATHWAYS[1];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="registration"
        className="relative overflow-hidden py-14 lg:py-22 bg-[#F4F7FB]"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 relative z-10">
          {/* Top Editorial Split Banner with Kinetic Typography & Kids Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 lg:mb-18">
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#DCE8F5] text-[#113E6B] text-xs font-semibold tracking-[0.12em] uppercase"
              >
                <motion.span
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-[#0284C7]"
                />
                <span>Admissions &amp; Welcome · Home of</span>
                <span className="relative inline-flex min-w-[132px] h-4 overflow-hidden items-center text-[#0A2544] font-bold">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={KIDS_SPIRIT_WORDS[spiritIdx]}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="inline-block"
                    >
                      {KIDS_SPIRIT_WORDS[spiritIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>

              {/* Animated Kinetic Headline */}
              <h1 className="font-display text-[clamp(2.3rem,4.3vw,3.75rem)] font-bold leading-[1.07] tracking-[-0.025em] text-[#113E6B]">
                {HEADLINE_WORDS.map((word, idx) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.055,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.26em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative inline-block"
                >
                  <span className="relative z-10">open classroom door.</span>
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                    className="absolute left-0 right-0 bottom-1.5 h-3.5 bg-[#F5A623]/75 -z-0 rounded-sm"
                  />
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="text-base sm:text-[17px] leading-[1.75] text-[#1E293B]/82 max-w-2xl"
              >
                Inspired by Paralympian and educator Colette Bourgonje, our Rosewood school is a
                sunlit home for Kindergarten–Grade 8 learners—where every child is known by name,
                cheered on with courage, and welcomed into a caring neighbourhood community.
              </motion.p>

              {/* Quick Trust & Speed Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1 text-xs sm:text-sm font-medium text-[#113E6B]"
              >
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
                  Takes ~2 minutes · No account needed
                </span>
                <span className="inline-flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
                  Personal reply from our Rosewood office
                </span>
              </motion.div>
            </div>

            {/* Layered Dual-Photo Editorial Collage + Playful Kids Animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative pb-6 sm:pb-8"
            >
              <BotanicalSprig
                className="hidden sm:block absolute -top-9 -right-6 w-32 h-32 opacity-45 pointer-events-none"
                color="#6BA4D9"
              />

              {/* Gliding Paper Plane Doodle */}
              <motion.div
                animate={{ y: [0, -7, 0], x: [0, 5, 0], rotate: [-2, 3, -2] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute -top-7 -left-6 z-20 pointer-events-none"
              >
                <PlayfulPaperPlane className="w-24 h-16 drop-shadow-sm" />
              </motion.div>

              {/* Twinkling Sparkle Stars */}
              <motion.div
                animate={{ scale: [0.9, 1.2, 0.9], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute top-6 -right-4 z-20 w-9 h-9 rounded-full bg-[#F5A623] text-[#113E6B] items-center justify-center shadow-md pointer-events-none"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
              </motion.div>

              <div className="relative rounded-[2rem] overflow-hidden border border-[#113E6B]/12 aspect-[16/11] shadow-sm">
                <EditorialPhoto
                  src={SCHOOL_IMAGES.progKindergarten}
                  alt="Young learners exploring hands-on materials in a bright sunlit Kindergarten classroom at Colette Bourgonje School"
                  className="w-full h-full"
                  fallbackTitle="Welcome to Colette Bourgonje School"
                />
              </div>

              {/* Secondary Overlapping Campus Detail */}
              <motion.div
                whileHover={{ y: -4, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                className="hidden sm:block absolute -bottom-2 -right-3 w-40 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#F4F7FB] shadow-md"
              >
                <EditorialPhoto
                  src={SCHOOL_IMAGES.envClassroom}
                  alt="Teacher guiding elementary students at a birchwood table"
                  className="w-full h-full"
                  fallbackTitle="Rosewood Classrooms"
                />
              </motion.div>

              {/* Floating Welcome Card with Playful Kids Blocks */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-4 sm:mt-0 sm:absolute sm:-bottom-3 sm:left-4 rounded-2xl bg-[#113E6B] text-[#F4F7FB] px-4 py-3 shadow-lg flex items-center gap-3 max-w-[285px]"
              >
                <PlayfulKidsBlocks className="w-10 h-10 shrink-0" />
                <div>
                  <p className="font-display text-xs font-bold text-[#F5A623] uppercase tracking-wider">
                    Now Welcoming K–8
                  </p>
                  <p className="text-xs text-[#F4F7FB]/85">
                    Saskatoon Public Schools · Est. 2017
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Step 1: Tactile Pathway Selector Cards */}
          <div className="mb-10 lg:mb-12">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#475569]">
                Step 1 — Choose Your Family Pathway
              </p>
              <p className="text-xs text-[#475569]">
                Select a card below to tailor the form for your family
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Registration pathway"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
            >
              {PATHWAYS.map((pathway) => {
                const Icon = pathway.icon;
                const isSelected = selectedType === pathway.id;
                return (
                  <motion.button
                    key={pathway.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    onClick={() => {
                      setSelectedType(pathway.id);
                      if (pathway.id === 'kindergarten') setChildGrade('Kindergarten');
                      setDone(false);
                    }}
                    className={`group text-left rounded-[1.65rem] p-6 border transition-colors duration-200 cursor-pointer flex flex-col justify-between gap-5 ${
                      isSelected
                        ? 'bg-[#113E6B] text-[#F4F7FB] border-[#113E6B] shadow-lg'
                        : 'bg-[#FFFFFF] text-[#1E293B] border-[#113E6B]/12 hover:border-[#113E6B]/40 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <motion.div
                        animate={isSelected ? { rotate: [0, -6, 6, 0] } : undefined}
                        transition={{ duration: 0.45 }}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#F5A623] text-[#113E6B]'
                            : 'bg-[#DCE8F5] text-[#113E6B] group-hover:bg-[#F5A623]/60'
                        }`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </motion.div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                          isSelected
                            ? 'bg-[#F4F7FB]/14 text-[#F5A623]'
                            : 'bg-[#E2EAF2] text-[#113E6B]'
                        }`}
                      >
                        {pathway.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          isSelected ? 'text-[#6BA4D9]' : 'text-[#475569]'
                        }`}
                      >
                        {pathway.number} · {pathway.tagline}
                      </p>
                      <h2
                        className={`font-display text-xl font-bold leading-snug ${
                          isSelected ? 'text-[#F4F7FB]' : 'text-[#113E6B]'
                        }`}
                      >
                        {pathway.title}
                      </h2>
                      <p
                        className={`text-xs leading-relaxed ${
                          isSelected ? 'text-[#F4F7FB]/82' : 'text-[#475569]'
                        }`}
                      >
                        {pathway.description}
                      </p>
                    </div>

                    <ul
                      className={`pt-3 border-t space-y-1.5 text-xs ${
                        isSelected
                          ? 'border-[#F4F7FB]/15 text-[#F4F7FB]/85'
                          : 'border-[#113E6B]/10 text-[#475569]'
                      }`}
                    >
                      {pathway.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isSelected ? 'bg-[#F5A623]' : 'bg-[#0284C7]'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Main 2-Column Studio: Left Guide & Interactive Checklist | Right Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Three-Step Welcome Timeline */}
              <div className="rounded-[1.75rem] bg-[#FFFFFF] border border-[#113E6B]/12 p-7 sm:p-8 space-y-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0284C7] mb-1">
                    Simple &amp; Supportive
                  </p>
                  <h2 className="font-display text-xl font-bold text-[#113E6B]">
                    Your Three-Step Welcome
                  </h2>
                </div>

                <div className="space-y-5">
                  {REGISTRATION_STEPS.map((step, idx) => (
                    <div key={step.number} className="relative flex gap-4 items-start">
                      {idx < REGISTRATION_STEPS.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[15px] top-9 bottom-[-18px] w-[1.5px] bg-[#113E6B]/12"
                        />
                      )}
                      <span className="w-8 h-8 rounded-full bg-[#DCE8F5] text-[#113E6B] font-display text-xs font-bold flex items-center justify-center shrink-0 tabular-nums relative z-10">
                        {step.number}
                      </span>
                      <div className="space-y-1 pt-0.5">
                        <h3 className="font-display text-[15px] font-bold text-[#113E6B]">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#475569]">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Forest Green Checklist & Office Concierge Card */}
              <div className="rounded-[1.75rem] bg-[#113E6B] text-[#F4F7FB] p-7 sm:p-8 relative overflow-hidden space-y-5">
                <BotanicalSprig
                  className="absolute -bottom-6 -right-4 w-32 h-32 opacity-25 pointer-events-none"
                  color="#F5A623"
                />
                <div className="flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <FileCheck2 className="w-5 h-5 text-[#F5A623]" aria-hidden="true" />
                    <h2 className="font-display text-lg font-bold">
                      Interactive Family Checklist
                    </h2>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F4F7FB]/12 text-[#F5A623] tabular-nums">
                    {checkedCount}/{CHECKLIST_ITEMS.length} ready
                  </span>
                </div>

                <div className="space-y-2.5 relative z-10">
                  {CHECKLIST_ITEMS.map((item) => {
                    const checked = !!checkedDocs[item.id];
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleDoc(item.id)}
                        aria-pressed={checked}
                        className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                          checked
                            ? 'bg-[#F4F7FB]/12 border-[#F5A623]/50 text-[#F4F7FB]'
                            : 'bg-[#0A2544]/50 border-[#F4F7FB]/12 text-[#F4F7FB]/85 hover:border-[#F4F7FB]/25'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            checked
                              ? 'bg-[#F5A623] text-[#113E6B]'
                              : 'border border-[#F4F7FB]/35'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        </span>
                        <span className={`text-xs sm:text-sm leading-snug ${checked ? 'line-through opacity-80' : ''}`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-[#F4F7FB]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#F4F7FB]/80 relative z-10">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      {SCHOOL_INFO.address}
                      <br />
                      {SCHOOL_INFO.cityPostal}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <a
                        href="tel:3066837530"
                        className="font-semibold text-[#F4F7FB] hover:text-[#F5A623] transition-colors tabular-nums"
                      >
                        {SCHOOL_INFO.phone}
                      </a>
                      <br />
                      Mon–Fri · 8:30 a.m.–4:00 p.m.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enrollment Studio Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-[#FFFFFF] border border-[#113E6B]/14 p-7 sm:p-10 shadow-sm">
                {done ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="py-8 sm:py-10 text-center space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 16, delay: 0.1 }}
                      className="w-16 h-16 rounded-2xl bg-[#DCE8F5] text-[#113E6B] flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <div className="space-y-2.5">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#E2EAF2] text-xs font-semibold uppercase tracking-[0.12em] text-[#0284C7]">
                        {activePathway.title}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
                        {selectedType === 'tour'
                          ? 'We Cannot Wait to Show You Around!'
                          : 'Welcome to the Rosewood School Family!'}
                      </h2>
                      <p className="text-sm sm:text-base leading-relaxed text-[#475569] max-w-lg mx-auto">
                        Thank you, <strong className="text-[#113E6B]">{parentName}</strong>. Our
                        front office team has received your inquiry
                        {studentName.trim() ? (
                          <>
                            {' '}
                            for <strong className="text-[#113E6B]">{studentName}</strong>
                          </>
                        ) : null}{' '}
                        (<strong className="text-[#113E6B]">{childGrade}</strong>
                        {selectedType === 'tour' ? ` · ${tourWindow}` : ''}) and will reach out to{' '}
                        <strong className="text-[#113E6B]">{email}</strong> within 1–2 school days.
                      </p>
                    </div>

                    <div className="max-w-md mx-auto rounded-2xl bg-[#F4F7FB] border border-[#113E6B]/12 p-4 text-xs text-[#475569]">
                      Need immediate assistance? Call our Rosewood office at{' '}
                      <a
                        href="tel:3066837530"
                        className="font-semibold text-[#113E6B] underline decoration-[#F5A623] decoration-2 underline-offset-4 tabular-nums"
                      >
                        {SCHOOL_INFO.phone}
                      </a>
                      .
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-5 py-2.5 rounded-xl border border-[#113E6B]/20 text-[#113E6B] text-sm font-semibold hover:bg-[#113E6B]/6 transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                      {onBackHome && (
                        <button
                          type="button"
                          onClick={onBackHome}
                          className="px-6 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors cursor-pointer"
                        >
                          Return to Home
                        </button>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedType}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="space-y-6"
                    >
                      <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#113E6B]/10">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0284C7] mb-1">
                            Step 2 — Family Details
                          </p>
                          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#113E6B]">
                            {activePathway.title} · {activePathway.tagline}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#475569] mt-1">
                            {activePathway.description}
                          </p>
                        </div>
                        <CalendarCheck
                          className="w-6 h-6 text-[#113E6B]/55 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {selectedType === 'tour' && (
                          <div className="rounded-2xl bg-[#F4F7FB] border border-[#113E6B]/12 p-4 space-y-2.5">
                            <p className="text-xs font-semibold text-[#113E6B]">
                              Preferred Campus Tour Window
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {TOUR_WINDOWS.map((slot) => {
                                const active = tourWindow === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setTourWindow(slot)}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                                      active
                                        ? 'bg-[#113E6B] text-[#F4F7FB]'
                                        : 'bg-[#FFFFFF] text-[#113E6B] border border-[#113E6B]/15 hover:border-[#113E6B]/35'
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="sec-reg-parent"
                              className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                            >
                              Parent / Guardian Name <span className="text-[#0284C7]">*</span>
                            </label>
                            <input
                              id="sec-reg-parent"
                              type="text"
                              required
                              value={parentName}
                              onChange={(e) => setParentName(e.target.value)}
                              placeholder="Samira Al-Mansoor"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sec-reg-student"
                              className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                            >
                              Child’s First Name
                            </label>
                            <input
                              id="sec-reg-student"
                              type="text"
                              value={studentName}
                              onChange={(e) => setStudentName(e.target.value)}
                              placeholder="e.g., Leo"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="sec-reg-email"
                              className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                            >
                              Email Address <span className="text-[#0284C7]">*</span>
                            </label>
                            <input
                              id="sec-reg-email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="parent@example.ca"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sec-reg-phone"
                              className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                            >
                              Phone Number
                            </label>
                            <input
                              id="sec-reg-phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="306-555-0192"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="sec-reg-grade"
                              className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                            >
                              Entering Grade
                            </label>
                            <select
                              id="sec-reg-grade"
                              value={childGrade}
                              onChange={(e) => setChildGrade(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B]"
                            >
                              <option>Kindergarten</option>
                              <option>Grade 1</option>
                              <option>Grade 2</option>
                              <option>Grade 3</option>
                              <option>Grade 4</option>
                              <option>Grade 5</option>
                              <option>Grade 6</option>
                              <option>Grade 7</option>
                              <option>Grade 8</option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="sec-reg-address"
                              className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                            >
                              Rosewood / Saskatoon Street Address
                            </label>
                            <input
                              id="sec-reg-address"
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="e.g., Rosewood Blvd W."
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="sec-reg-notes"
                            className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                          >
                            {selectedType === 'tour'
                              ? 'Questions or Highlights You Would Like to See'
                              : 'Notes for Our Office (Busing, Before & After Care, Learning Needs)'}
                          </label>
                          <textarea
                            id="sec-reg-notes"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder={
                              selectedType === 'tour'
                                ? 'Share preferred days or anything your family would love to explore on campus...'
                                : 'Tell us if you need busing information, Before & After School Care, or any support...'
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60"
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.985 }}
                          className="w-full py-3.5 px-6 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#0A2544] transition-colors cursor-pointer"
                        >
                          <span>
                            {selectedType === 'tour'
                              ? 'Request Family Welcome Tour'
                              : 'Submit Registration Inquiry'}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
                        </motion.button>
                      </form>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
