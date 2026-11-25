import { useState } from 'react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import {
  CALENDAR_DATES,
  NEWS_ITEMS,
  SCC_HIGHLIGHTS,
  type NewsItem,
  type ResourceModalId,
} from '../data/schoolData';
import { BotanicalSprig, EditorialPhoto } from './EditorialMedia';

interface CommunityAndNewsSectionProps {
  onOpenSccModal: () => void;
  onSelectNews: (item: NewsItem) => void;
  onOpenResource: (id: ResourceModalId) => void;
}

const CATEGORIES = ['All', 'School News', 'Events', 'Community'] as const;
type NewsFilter = (typeof CATEGORIES)[number];

export function CommunityCouncilSection({ onOpenSccModal }: { onOpenSccModal: () => void }) {
  return (
    <section id="scc" className="py-20 lg:py-26 bg-[#F4F7FB]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <div className="rounded-[2.25rem] bg-[#113E6B] text-[#F4F7FB] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <BotanicalSprig
            className="hidden md:block absolute -bottom-6 right-10 w-36 h-36 opacity-35 pointer-events-none"
            color="#F5A623"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#F5A623]">
                School Community Council (SCC)
              </p>
              <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#F4F7FB]">
                Parents, guardians &amp; neighbours shaping our school together.
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#F4F7FB]/82">
                Our volunteer School Community Council strengthens student learning and wellbeing
                through family engagement events, Healthy Hunger lunches, outdoor space
                improvements, and open monthly conversations with school leadership.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenSccModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5A623] text-[#113E6B] text-sm font-bold hover:bg-[#ecbc4d] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Join an SCC Meeting</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="text-xs text-[#6BA4D9]">
                  Next meeting: Tue, Dec 1 · 6:30 p.m.
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-2">
              {SCC_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={item.title}
                  className="pt-5 border-t border-[#F4F7FB]/18 space-y-2"
                >
                  <p className="font-display text-xs font-bold text-[#0284C7] tabular-nums">
                    0{idx + 1}.
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#F4F7FB]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#F4F7FB]/78">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsAndEventsSection({
  onSelectNews,
  onOpenResource,
}: {
  onSelectNews: (item: NewsItem) => void;
  onOpenResource: (id: ResourceModalId) => void;
}) {
  const [filter, setFilter] = useState<NewsFilter>('All');

  const filteredNews =
    filter === 'All' ? NEWS_ITEMS : NEWS_ITEMS.filter((item) => item.category === filter);

  const leadStory = filteredNews[0];
  const secondaryStories = filteredNews.slice(1);

  return (
    <section
      id="news-events"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#113E6B]/10"
    >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
          {/* Header + Functional Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#113E6B]/14">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#113E6B]/70 mb-3">
                News &amp; Events
              </p>
              <h2 className="font-display text-[clamp(2.1rem,3.8vw,3.3rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#113E6B]">
                Stories &amp; dates from our Rosewood campus.
              </h2>
            </div>

            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter school news"
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#E2EAF2] self-start md:self-auto"
            >
              {CATEGORIES.map((category) => {
                const active = filter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(category)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#113E6B] text-[#F4F7FB]'
                        : 'text-[#1E293B]/75 hover:text-[#113E6B]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Editorial 3-Tier Content Grid */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Column: Lead Story + Secondary Stories */}
            <div className="lg:col-span-8 space-y-12">
              {leadStory && (
                <article className="group">
                  {leadStory.image && (
                    <button
                      type="button"
                      onClick={() => onSelectNews(leadStory)}
                      className="block w-full text-left mb-6 cursor-pointer"
                    >
                      <div className="rounded-[1.75rem] overflow-hidden aspect-[16/9] border border-[#113E6B]/10">
                        <EditorialPhoto
                          src={leadStory.image}
                          alt={leadStory.imageAlt || leadStory.title}
                          className="w-full h-full"
                          imgClassName="transition-transform duration-500 group-hover:scale-[1.02]"
                          fallbackTitle={leadStory.title}
                        />
                      </div>
                    </button>
                  )}

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#475569] mb-3">
                    <span className="font-semibold text-[#113E6B]">{leadStory.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{leadStory.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadStory.readTime}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#113E6B] leading-tight mb-3">
                    <button
                      type="button"
                      onClick={() => onSelectNews(leadStory)}
                      className="text-left hover:text-[#0A2544] transition-colors cursor-pointer"
                    >
                      {leadStory.title}
                    </button>
                  </h3>

                  <p className="text-[16px] leading-[1.7] text-[#1E293B]/82 mb-4 max-w-2xl">
                    {leadStory.deck}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectNews(leadStory)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#113E6B] underline underline-offset-4 decoration-[#0284C7] decoration-2 hover:text-[#0A2544] cursor-pointer"
                  >
                    <span>Read full story</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </article>
              )}

              {/* Secondary Stories */}
              {secondaryStories.length > 0 && (
                <div className="pt-10 border-t border-[#113E6B]/14 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {secondaryStories.map((story) => (
                    <article key={story.id} className="group flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        {story.image && (
                          <button
                            type="button"
                            onClick={() => onSelectNews(story)}
                            className="block w-full text-left cursor-pointer"
                          >
                            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#113E6B]/10 mb-4">
                              <EditorialPhoto
                                src={story.image}
                                alt={story.imageAlt || story.title}
                                className="w-full h-full"
                                imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                                fallbackTitle={story.title}
                              />
                            </div>
                          </button>
                        )}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
                          <span className="font-semibold text-[#113E6B]">{story.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{story.date}</span>
                        </div>
                        <h4 className="font-display text-xl font-bold text-[#113E6B] leading-snug">
                          <button
                            type="button"
                            onClick={() => onSelectNews(story)}
                            className="text-left hover:underline decoration-[#F5A623] decoration-2 underline-offset-4 cursor-pointer"
                          >
                            {story.title}
                          </button>
                        </h4>
                        <p className="text-sm leading-relaxed text-[#1E293B]/80">{story.deck}</p>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => onSelectNews(story)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#113E6B] hover:text-[#0284C7] transition-colors cursor-pointer"
                        >
                          <span>Read article</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar: Chronological Upcoming Calendar Dates */}
            <aside className="lg:col-span-4 lg:border-l lg:border-[#113E6B]/12 lg:pl-10">
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="w-5 h-5 text-[#113E6B]" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-[#113E6B]">Upcoming Dates</h3>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenResource('calendar')}
                  className="text-xs font-semibold text-[#113E6B] underline underline-offset-4 decoration-[#F5A623] decoration-2 hover:text-[#0A2544] cursor-pointer"
                >
                  Full calendar
                </button>
              </div>

              <div className="divide-y divide-[#113E6B]/12">
                {CALENDAR_DATES.slice(0, 6).map((ev) => (
                  <div key={`${ev.date}-${ev.title}`} className="py-4 first:pt-0 space-y-1">
                    <p className="text-xs font-bold text-[#0284C7] tabular-nums">{ev.date}</p>
                    <p className="font-display text-[15px] font-bold text-[#113E6B] leading-snug">
                      {ev.title}
                    </p>
                    <p className="text-xs text-[#475569]">{ev.type}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#F4F7FB] border border-[#113E6B]/12 p-5 space-y-2">
                <p className="font-display text-sm font-bold text-[#113E6B]">
                  Stay updated all year
                </p>
                <p className="text-xs leading-relaxed text-[#475569]">
                  Classroom newsletters, field trip notices, and snow-day announcements are shared
                  directly through Edsby and SchoolMessenger.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenResource('edsby')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#113E6B] hover:underline pt-1 cursor-pointer"
                >
                  <span>Set up Edsby alerts</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
  );
}

export function CommunityAndNewsSection({
  onOpenSccModal,
  onSelectNews,
  onOpenResource,
}: CommunityAndNewsSectionProps) {
  return (
    <>
      <CommunityCouncilSection onOpenSccModal={onOpenSccModal} />
      <NewsAndEventsSection onSelectNews={onSelectNews} onOpenResource={onOpenResource} />
    </>
  );
}
