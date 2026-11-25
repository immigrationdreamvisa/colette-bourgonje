import { ArrowUpRight } from 'lucide-react';
import { PARENT_RESOURCES, type ResourceModalId } from '../data/schoolData';

interface ParentsStudentsSectionProps {
  onOpenResource: (id: ResourceModalId) => void;
}

export function ParentsStudentsSection({ onOpenResource }: ParentsStudentsSectionProps) {
  return (
    <section
      id="parents-students"
      className="py-22 lg:py-30 bg-[#FFFFFF] border-y border-[#113E6B]/10"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Editorial Left Introduction */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#113E6B]/70">
              Parents &amp; Students
            </p>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#113E6B]">
              Everything families need, all in one clear place.
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#1E293B]/80">
              Check key dates, browse Grade K–8 supply checklists, connect with teachers on Edsby,
              or report an absence with SchoolMessenger in seconds.
            </p>

            {/* Quick Highlight Callout */}
            <div className="pt-6 border-t border-[#113E6B]/12 space-y-2">
              <p className="text-xs font-semibold text-[#113E6B]">
                Need help logging into Edsby or SchoolCash?
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                Call our front office at{' '}
                <a
                  href="tel:3066837530"
                  className="font-semibold text-[#113E6B] underline underline-offset-4 decoration-[#F5A623] decoration-2 tabular-nums"
                >
                  306-683-7530
                </a>{' '}
                and we will happily send a fresh parent invitation link.
              </p>
            </div>
          </div>

          {/* Right Side: Clean Editorial Directory Index (Zero-Pill, Hairline Dividers) */}
          <div className="lg:col-span-8 divide-y divide-[#113E6B]/14 border-t border-b border-[#113E6B]/14">
            {PARENT_RESOURCES.map((resource) => (
              <button
                key={resource.id}
                type="button"
                onClick={() => onOpenResource(resource.id)}
                className="group w-full py-7 sm:py-8 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-2xl text-left transition-colors duration-150 hover:bg-[#F4F7FB] grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline cursor-pointer"
              >
                <div className="sm:col-span-1">
                  <span className="font-display text-sm font-bold text-[#0284C7] tabular-nums">
                    {resource.number}.
                  </span>
                </div>

                <div className="sm:col-span-7 space-y-1.5">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#113E6B] group-hover:text-[#0A2544] transition-colors">
                      {resource.title}
                    </h3>
                    <span className="text-xs font-medium text-[#475569]">
                      / {resource.category}
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.65] text-[#1E293B]/78">
                    {resource.description}
                  </p>
                </div>

                <div className="sm:col-span-4 sm:text-right flex sm:flex-col sm:items-end justify-between gap-2 pt-1 sm:pt-0">
                  <span className="text-xs font-medium text-[#475569] tabular-nums">
                    {resource.quickDetail}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#113E6B] group-hover:translate-x-0.5 transition-transform whitespace-nowrap shrink-0">
                    <span>{resource.actionText}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#0284C7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
