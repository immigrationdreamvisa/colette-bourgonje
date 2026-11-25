import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SchoolEmblem } from './EditorialMedia';

export type NavSectionId =
  | 'home'
  | 'our-school'
  | 'parents-students'
  | 'programs'
  | 'scc'
  | 'contact'
  | 'registration';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
  onOpenRegistration: (preset?: 'kindergarten' | 'transfer' | 'tour') => void;
}

export const NAV_LINKS: ReadonlyArray<{ id: NavSectionId; label: string; href: string }> = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'our-school', label: 'Our School', href: '#our-school' },
  { id: 'programs', label: 'Programs', href: '#programs' },
  { id: 'registration', label: 'Registration', href: '#registration' },
  { id: 'parents-students', label: 'Parents & Students', href: '#parents-students' },
  { id: 'scc', label: 'Community Council', href: '#scc' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar({ activeSection, onNavigate, onOpenRegistration }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: NavSectionId) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(sectionId);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F4F7FB]/95 backdrop-blur-md border-b border-[#113E6B]/12'
          : 'bg-[#F4F7FB] border-b border-[#113E6B]/8'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 xl:px-8 h-[82px] sm:h-[88px] flex items-center justify-between gap-3 xl:gap-6">
        {/* Zone 1: Single-line School Brand Mark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 sm:gap-3.5 whitespace-nowrap shrink-0 group py-1"
          aria-label="Colette Bourgonje School Home"
        >
          <SchoolEmblem className="w-13 h-13 sm:w-16 sm:h-16 xl:w-[68px] xl:h-[68px] transition-transform duration-200 group-hover:scale-105 drop-shadow-md" />
          <div className="flex flex-col justify-center">
            <span className="font-display text-[16px] sm:text-[18px] xl:text-[20px] font-extrabold tracking-tight text-[#113E6B] leading-tight">
              Colette Bourgonje
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#0284C7] leading-none mt-0.5">
              Trailblazers
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Single-Line Editorial Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 text-[12.5px] xl:text-[14px] font-medium text-[#1E293B]/85"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#113E6B] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#0284C7] after:transition-all after:duration-200 ${
                  isActive
                    ? 'text-[#113E6B] font-semibold after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Prominent Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenRegistration('transfer')}
            aria-current={activeSection === 'registration' ? 'page' : undefined}
            className={`hidden sm:inline-flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl text-[13px] xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] cursor-pointer ${
              activeSection === 'registration'
                ? 'bg-[#0A2544] text-[#F5A623] ring-2 ring-[#F5A623]/60'
                : 'bg-[#113E6B] text-[#F4F7FB] hover:bg-[#0A2544]'
            }`}
          >
            <span>School Registration</span>
            <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#113E6B]/18 text-[#113E6B] hover:bg-[#113E6B]/6 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[82px] sm:top-[88px] bottom-0 z-50 bg-[#F4F7FB] border-t border-[#113E6B]/12 overflow-y-auto">
          <div className="max-w-xl mx-auto px-6 py-8 flex flex-col justify-between min-h-full gap-8">
            <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#113E6B]/10">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`py-4 flex items-baseline justify-between font-display text-xl font-semibold transition-colors ${
                      isActive ? 'text-[#0284C7]' : 'text-[#113E6B] hover:text-[#0284C7]'
                    }`}
                  >
                    <span>
                      {link.label === 'Community Council' ? 'School Community Council' : link.label}
                    </span>
                    <span className="text-xs font-sans font-medium text-[#475569] tabular-nums">
                      0{idx + 1}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#113E6B]/15 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenRegistration('transfer');
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#113E6B] text-[#F4F7FB] font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#0A2544] transition-colors cursor-pointer"
              >
                <span>School Registration</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
              </button>
              <p className="text-sm text-[#475569] text-center">
                169 Olson Lane West · Rosewood, Saskatoon · 306-683-7530
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
