import { useEffect, useState, type FormEvent } from 'react';
import { X, CheckCircle2, Bus, Calendar, ClipboardList, ExternalLink } from 'lucide-react';
import {
  BELL_SCHEDULE,
  CALENDAR_DATES,
  SUPPLY_LISTS,
  type LearningPillar,
  type NewsItem,
  type ResourceModalId,
} from '../data/schoolData';
import { EditorialPhoto } from './EditorialMedia';

export type ActiveModalState =
  | null
  | { type: 'registration'; preset: 'kindergarten' | 'transfer' | 'tour' }
  | { type: 'resource'; resourceId: ResourceModalId }
  | { type: 'pillar'; pillar: LearningPillar }
  | { type: 'news'; article: NewsItem }
  | { type: 'program-info'; program: 'before-after' | 'early-learning' | 'transportation' }
  | { type: 'scc' };

interface InteractiveModalsProps {
  modal: ActiveModalState;
  onClose: () => void;
  onSwitchToRegistration: (preset: 'kindergarten' | 'transfer' | 'tour') => void;
}

export function InteractiveModals({
  modal,
  onClose,
  onSwitchToRegistration,
}: InteractiveModalsProps) {
  useEffect(() => {
    if (!modal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [modal, onClose]);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A2544]/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[1.75rem] bg-[#FFFFFF] border border-[#113E6B]/15 shadow-2xl p-6 sm:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/12 flex items-center justify-center text-[#113E6B] hover:bg-[#E2EAF2] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {modal.type === 'registration' && (
          <RegistrationContent preset={modal.preset} onClose={onClose} />
        )}

        {modal.type === 'resource' && (
          <ResourceContent resourceId={modal.resourceId} />
        )}

        {modal.type === 'pillar' && (
          <PillarStoryContent
            pillar={modal.pillar}
            onBookTour={() => onSwitchToRegistration('tour')}
          />
        )}

        {modal.type === 'news' && <NewsArticleContent article={modal.article} />}

        {modal.type === 'program-info' && (
          <ProgramInfoContent
            program={modal.program}
            onStartRegistration={() => onSwitchToRegistration('transfer')}
          />
        )}

        {modal.type === 'scc' && <SccContent onClose={onClose} />}
      </div>
    </div>
  );
}

function RegistrationContent({
  preset,
  onClose,
}: {
  preset: 'kindergarten' | 'transfer' | 'tour';
  onClose: () => void;
}) {
  const [selectedType, setSelectedType] = useState<'kindergarten' | 'transfer' | 'tour'>(preset);
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [childGrade, setChildGrade] = useState(
    preset === 'kindergarten' ? 'Kindergarten' : 'Grade 1'
  );
  const [address, setAddress] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !email.trim()) return;
    setDone(true);
  };

  if (done) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-[#DCE8F5] text-[#113E6B] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#113E6B]">
          Registration Request Received
        </h3>
        <p className="text-sm leading-relaxed text-[#475569] max-w-md mx-auto">
          Welcome to Rosewood, <strong className="text-[#113E6B]">{parentName}</strong>! Our front
          office team will reach out to <strong className="text-[#113E6B]">{email}</strong> with
          next steps for <strong className="text-[#113E6B]">{childGrade}</strong> and your
          Saskatoon Public Schools registration package.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] cursor-pointer"
        >
          Back to website
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pr-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#113E6B]/70 mb-2">
          Saskatoon Public Schools · Rosewood
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
          School Registration &amp; Welcome Tour
        </h3>
        <p className="text-sm text-[#475569] mt-1.5">
          Begin your child’s journey at Colette Bourgonje School. Choose the option that best fits
          your family.
        </p>
      </div>

      <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#E2EAF2]">
        {[
          { id: 'kindergarten' as const, label: 'Kindergarten' },
          { id: 'transfer' as const, label: 'Grades 1–8 Enrollment' },
          { id: 'tour' as const, label: 'Book a School Tour' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setSelectedType(tab.id);
              if (tab.id === 'kindergarten') setChildGrade('Kindergarten');
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              selectedType === tab.id
                ? 'bg-[#113E6B] text-[#F4F7FB]'
                : 'text-[#1E293B]/75 hover:text-[#113E6B]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="reg-parent" className="block text-xs font-semibold text-[#113E6B] mb-1">
              Parent / Guardian Name
            </label>
            <input
              id="reg-parent"
              type="text"
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Samira Al-Mansoor"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm"
            />
          </div>
          <div>
            <label htmlFor="reg-email" className="block text-xs font-semibold text-[#113E6B] mb-1">
              Email Address
            </label>
            <input
              id="reg-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="parent@example.ca"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="reg-grade" className="block text-xs font-semibold text-[#113E6B] mb-1">
              Entering Grade
            </label>
            <select
              id="reg-grade"
              value={childGrade}
              onChange={(e) => setChildGrade(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm"
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
              htmlFor="reg-address"
              className="block text-xs font-semibold text-[#113E6B] mb-1"
            >
              Rosewood / Saskatoon Street Address
            </label>
            <input
              id="reg-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g., Rosewood Blvd W."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm"
            />
          </div>
        </div>

        <p className="text-xs text-[#475569] leading-relaxed">
          Please have your child’s proof of age and proof of Saskatoon address ready when finalizing
          registration with our office (306-683-7530).
        </p>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors cursor-pointer"
        >
          {selectedType === 'tour' ? 'Request Family Tour' : 'Submit Registration Inquiry'}
        </button>
      </form>
    </div>
  );
}

function ResourceContent({ resourceId }: { resourceId: ResourceModalId }) {
  const [supplyGrade, setSupplyGrade] = useState<string>('kindergarten');

  if (resourceId === 'calendar') {
    return (
      <div className="space-y-5 pr-6">
        <div className="flex items-center gap-2.5 text-[#113E6B]">
          <Calendar className="w-5 h-5" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em]">2026–2027 Key Dates</p>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
          School Year Calendar
        </h3>
        <div className="divide-y divide-[#113E6B]/12 border-y border-[#113E6B]/12">
          {CALENDAR_DATES.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
            >
              <div>
                <p className="font-display text-sm font-bold text-[#113E6B]">{item.title}</p>
                <p className="text-xs text-[#475569]">{item.type}</p>
              </div>
              <span className="text-xs font-bold text-[#0284C7] tabular-nums shrink-0">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (resourceId === 'supplies') {
    const activeList = SUPPLY_LISTS[supplyGrade];
    return (
      <div className="space-y-5 pr-6">
        <div className="flex items-center gap-2.5 text-[#113E6B]">
          <ClipboardList className="w-5 h-5" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em]">
            Student Supply Checklists
          </p>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
          School Supplies by Grade
        </h3>

        <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#E2EAF2]">
          {Object.entries(SUPPLY_LISTS).map(([key, val]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSupplyGrade(key)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                supplyGrade === key
                  ? 'bg-[#113E6B] text-[#F4F7FB]'
                  : 'text-[#1E293B]/75 hover:text-[#113E6B]'
              }`}
            >
              {val.label}
            </button>
          ))}
        </div>

        <ul className="space-y-2.5 pt-2">
          {activeList.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-[#1E293B]/85 py-2 border-b border-[#113E6B]/8 last:border-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (resourceId === 'bell-schedule') {
    return (
      <div className="space-y-5 pr-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#113E6B]/70">
          Daily Routines
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
          Bell Schedule &amp; Supervision
        </h3>
        <div className="divide-y divide-[#113E6B]/12 border-y border-[#113E6B]/12">
          {BELL_SCHEDULE.map((row) => (
            <div
              key={row.time}
              className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-bold text-[#113E6B] tabular-nums w-20 shrink-0">
                  {row.time}
                </span>
                <span className="text-sm font-semibold text-[#1E293B]">{row.label}</span>
              </div>
              <span className="text-xs text-[#475569]">{row.note}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const portalGuides: Record<
    'schoolcash' | 'schoolmessenger' | 'edsby',
    { title: string; subtitle: string; steps: string[]; portalUrl: string; cta: string }
  > = {
    schoolcash: {
      title: 'SchoolCash Online',
      subtitle: 'Convenient online payments for field trips, band fees, and special school events.',
      steps: [
        'Visit spsd.schoolcashonline.com and select "Register" if you are new to Saskatoon Public Schools.',
        'Attach your student using their legal name and birth date (or student number from the office).',
        'Receive automatic email alerts whenever new field trip forms or optional items open for your child’s class.',
      ],
      portalUrl: 'https://spsd.schoolcashonline.com/',
      cta: 'Open SchoolCash Portal',
    },
    schoolmessenger: {
      title: 'SchoolMessenger SafeArrival',
      subtitle: 'Report an absence, late arrival, or early pickup quickly 24/7.',
      steps: [
        'Use the SchoolMessenger mobile app (iOS/Android) or go.schoolmessenger.ca using the email registered with the school.',
        'Or call the toll-free SafeArrival automated line at 1-844-478-2598 prior to 9:07 a.m.',
        'You can also receive urgent winter bus cancellations and school-wide announcements via email or SMS.',
      ],
      portalUrl: 'https://go.schoolmessenger.ca/',
      cta: 'Open SchoolMessenger',
    },
    edsby: {
      title: 'Edsby Family Portal',
      subtitle: 'Your daily window into classroom updates, learning stories, report cards, and teacher messaging.',
      steps: [
        'Watch for your parent invitation email from Colette Bourgonje School after registering.',
        'Sign in at spsd.edsby.com or download the Edsby app (Server Address: spsd).',
        'View class calendars, send direct notes to teachers, and book Student-Led Conference times in November and March.',
      ],
      portalUrl: 'https://spsd.edsby.com/',
      cta: 'Open Edsby Portal',
    },
  };

  const guide = portalGuides[resourceId];
  return (
    <div className="space-y-5 pr-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#113E6B]/70">
        Parent &amp; Student Portal Guide
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">{guide.title}</h3>
      <p className="text-sm leading-relaxed text-[#475569]">{guide.subtitle}</p>
      <ol className="space-y-3 pt-2">
        {guide.steps.map((step, i) => (
          <li key={step} className="flex items-start gap-3 text-sm text-[#1E293B]/85">
            <span className="font-display text-xs font-bold text-[#0284C7] tabular-nums mt-0.5">
              0{i + 1}.
            </span>
            <span className="leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
      <div className="pt-4 border-t border-[#113E6B]/12 flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs text-[#475569]">Need an account reset? Call 306-683-7530.</span>
        <a
          href={guide.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors"
        >
          <span>{guide.cta}</span>
          <ExternalLink className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function PillarStoryContent({
  pillar,
  onBookTour,
}: {
  pillar: LearningPillar;
  onBookTour: () => void;
}) {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-[#113E6B]/10 mr-8 sm:mr-0">
        <EditorialPhoto src={pillar.image} alt={pillar.imageAlt} className="w-full h-full" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0284C7] tabular-nums">
        {pillar.number} · Our Learning Environment
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">{pillar.title}</h3>
      <p className="font-display text-base font-semibold text-[#1E293B]/90">{pillar.subtitle}</p>
      <div className="space-y-3.5 text-[15px] leading-[1.75] text-[#1E293B]/82">
        {pillar.fullStory.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="pt-4 border-t border-[#113E6B]/12 flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs font-medium text-[#475569]">{pillar.highlightStat}</span>
        <button
          type="button"
          onClick={onBookTour}
          className="px-5 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] cursor-pointer"
        >
          Book a School Visit
        </button>
      </div>
    </div>
  );
}

function NewsArticleContent({ article }: { article: NewsItem }) {
  return (
    <div className="space-y-5">
      {article.image && (
        <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-[#113E6B]/10">
          <EditorialPhoto
            src={article.image}
            alt={article.imageAlt || article.title}
            className="w-full h-full"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569] pr-8">
        <span className="font-semibold text-[#113E6B]">{article.category}</span>
        <span aria-hidden="true">·</span>
        <span className="tabular-nums">{article.date}</span>
        <span aria-hidden="true">·</span>
        <span>{article.author}</span>
      </div>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B] leading-tight">
        {article.title}
      </h3>
      <div className="space-y-4 text-[15.5px] leading-[1.75] text-[#1E293B]/85">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function ProgramInfoContent({
  program,
  onStartRegistration,
}: {
  program: 'before-after' | 'early-learning' | 'transportation';
  onStartRegistration: () => void;
}) {
  const [distanceKm, setDistanceKm] = useState<'under' | 'over'>('over');

  if (program === 'transportation') {
    return (
      <div className="space-y-5 pr-6">
        <div className="flex items-center gap-2 text-[#113E6B]">
          <Bus className="w-5 h-5" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em]">
            SPSD Transportation Guide
          </p>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
          Check Busing Eligibility
        </h3>
        <p className="text-sm leading-relaxed text-[#475569]">
          Saskatoon Public Schools provides bus transportation for eligible students living within
          Colette Bourgonje School’s designated attendance boundaries in Rosewood and Lakewood
          Suburban Centre.
        </p>

        <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-[#113E6B]/12 space-y-4">
          <p className="text-xs font-semibold text-[#113E6B]">
            How far is your Rosewood / Lakewood home from 169 Olson Lane West?
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setDistanceKm('over')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                distanceKm === 'over'
                  ? 'bg-[#113E6B] text-[#F4F7FB]'
                  : 'bg-[#FFFFFF] text-[#1E293B] border border-[#113E6B]/18'
              }`}
            >
              More than 1.2 km
            </button>
            <button
              type="button"
              onClick={() => setDistanceKm('under')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                distanceKm === 'under'
                  ? 'bg-[#113E6B] text-[#F4F7FB]'
                  : 'bg-[#FFFFFF] text-[#1E293B] border border-[#113E6B]/18'
              }`}
            >
              1.2 km or closer (Walk Zone)
            </button>
          </div>
          <p className="text-sm text-[#1E293B]/85 leading-relaxed">
            {distanceKm === 'over'
              ? 'Your family is generally eligible for Saskatoon Public Schools neighbourhood busing! Submit your transportation application through the school office at 306-683-7530.'
              : 'Homes within 1.2 km are part of our walkable Rosewood community zone with paved multi-use pathways leading directly to Olson Lane West. Please call our office if your child requires accessible transportation accommodations.'}
          </p>
        </div>
      </div>
    );
  }

  const isBeforeAfter = program === 'before-after';
  return (
    <div className="space-y-5 pr-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#113E6B]/70">
        {isBeforeAfter ? 'On-Site School-Age Care' : 'Licensed Early Childhood Centre'}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
        {isBeforeAfter ? 'Before & After School Care' : 'Early Learning & Child Care'}
      </h3>
      <p className="text-sm leading-relaxed text-[#1E293B]/82">
        {isBeforeAfter
          ? 'Hosted directly inside Colette Bourgonje School in partnership with KidsTime Child Care, our Before & After School Care program supports K–6 families with trusted morning drop-off (7:00 a.m.) and afternoon care until 6:00 p.m.'
          : 'Located within our shared Rosewood school facility, the licensed Early Learning & Child Care centre nurtures children ages 18 months to 5 years with play-based early childhood educators and seamless transitions toward Kindergarten.'}
      </p>
      <div className="p-4 rounded-xl bg-[#DCE8F5]/70 text-sm text-[#113E6B] space-y-1">
        <p className="font-semibold">Hours &amp; Waitlist Inquiries</p>
        <p className="text-xs text-[#113E6B]/85">
          Monday – Friday · 7:00 a.m. – 6:00 p.m. · Call our school office at 306-683-7530 for
          current space availability and direct coordinator contact details.
        </p>
      </div>
      <button
        type="button"
        onClick={onStartRegistration}
        className="px-6 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] cursor-pointer"
      >
        Include Care Inquiry with School Registration
      </button>
    </div>
  );
}

function SccContent({ onClose }: { onClose: () => void }) {
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [childcare, setChildcare] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleRsvp = (e: FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim()) return;
    setSaved(true);
  };

  if (saved) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-[#DCE8F5] text-[#113E6B] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#113E6B]">See You at SCC!</h3>
        <p className="text-sm text-[#475569] max-w-md mx-auto">
          Thank you, {rsvpName}. We have noted your interest for our next School Community Council
          evening on Tuesday, December 1 at 6:30 p.m. in the Learning Commons
          {childcare ? ' (including on-site childcare).' : '.'}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold cursor-pointer"
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5 pr-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#113E6B]/70">
        School Community Council
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B]">
        Join Our Next SCC Gathering
      </h3>
      <p className="text-sm text-[#475569] leading-relaxed">
        Every parent, guardian, and Rosewood community member is warmly welcome—no prior committee
        experience needed. Next meeting: <strong className="text-[#113E6B]">Tuesday, December 1 at 6:30 p.m.</strong>
      </p>
      <form onSubmit={handleRsvp} className="space-y-4">
        <div>
          <label htmlFor="scc-name" className="block text-xs font-semibold text-[#113E6B] mb-1">
            Your Name
          </label>
          <input
            id="scc-name"
            type="text"
            required
            value={rsvpName}
            onChange={(e) => setRsvpName(e.target.value)}
            placeholder="Alex Tremblay"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm"
          />
        </div>
        <div>
          <label htmlFor="scc-email" className="block text-xs font-semibold text-[#113E6B] mb-1">
            Email for Agenda &amp; Updates
          </label>
          <input
            id="scc-email"
            type="email"
            required
            value={rsvpEmail}
            onChange={(e) => setRsvpEmail(e.target.value)}
            placeholder="alex@example.ca"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm"
          />
        </div>
        <label className="flex items-center gap-2.5 text-sm text-[#1E293B] cursor-pointer">
          <input
            type="checkbox"
            checked={childcare}
            onChange={(e) => setChildcare(e.target.checked)}
            className="w-4 h-4 accent-[#113E6B] rounded"
          />
          <span>I would like complimentary on-site childcare during the meeting</span>
        </label>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] cursor-pointer"
        >
          RSVP &amp; Receive SCC Agenda
        </button>
      </form>
    </div>
  );
}
