import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { SCHOOL_INFO, type ResourceModalId } from '../data/schoolData';
import { RosewoodMiniMap, SchoolEmblem } from './EditorialMedia';
import type { NavSectionId } from './Navbar';

interface ContactAndFooterProps {
  onOpenRegistration: (preset?: 'kindergarten' | 'transfer' | 'tour') => void;
  onOpenResource: (id: ResourceModalId) => void;
  onNavigate?: (section: NavSectionId) => void;
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-22 lg:py-30 bg-[#F4F7FB] border-t border-[#113E6B]/10">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Side: Rosewood Address, Phone, Hours & Illustrated Map */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#113E6B]/70">
                  Contact &amp; Visit Us
                </p>
                <h2 className="font-display text-[clamp(2.1rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#113E6B]">
                  We would love to welcome your family to Rosewood.
                </h2>
                <p className="text-[16px] leading-[1.7] text-[#1E293B]/80 max-w-xl">
                  Have a question about Kindergarten registration, busing zones, or moving to our
                  neighbourhood? Our front office team is here to help Monday through Friday.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#113E6B]/14">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#475569]">School Address</p>
                    <p className="font-display text-sm font-bold text-[#113E6B] mt-0.5">
                      {SCHOOL_INFO.address}
                    </p>
                    <p className="text-sm text-[#1E293B]/80">{SCHOOL_INFO.cityPostal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#475569]">Telephone</p>
                    <a
                      href="tel:3066837530"
                      className="font-display text-sm font-bold text-[#113E6B] hover:underline tabular-nums mt-0.5 block"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                    <p className="text-xs text-[#475569] mt-0.5">Main Reception &amp; Attendance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#475569]">Email</p>
                    <a
                      href={`mailto:${SCHOOL_INFO.email}`}
                      className="font-display text-sm font-bold text-[#113E6B] hover:underline break-all mt-0.5 block"
                    >
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#113E6B] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#475569]">Office Hours</p>
                    <p className="font-display text-sm font-bold text-[#113E6B] mt-0.5">
                      8:30 a.m. – 4:00 p.m.
                    </p>
                    <p className="text-xs text-[#475569] mt-0.5">Monday to Friday</p>
                  </div>
                </div>
              </div>

              {/* Illustrated Rosewood Neighbourhood Map */}
              <div className="rounded-[1.5rem] overflow-hidden border border-[#113E6B]/12 bg-[#E2EAF2] aspect-[7/4]">
                <RosewoodMiniMap />
              </div>
            </div>

            {/* Right Side: Interactive Office Message Form */}
            <div className="lg:col-span-6">
              <div className="rounded-[2rem] bg-[#FFFFFF] border border-[#113E6B]/12 p-7 sm:p-10">
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#DCE8F5] text-[#113E6B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#113E6B]">
                      Thank you, {name}!
                    </h3>
                    <p className="text-sm leading-relaxed text-[#475569] max-w-md mx-auto">
                      Your message regarding <strong className="text-[#113E6B]">{topic}</strong> has
                      been prepared for the Colette Bourgonje School office. Our staff typically
                      responds within one school day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="mt-2 inline-flex items-center px-5 py-2.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5 pb-2 border-b border-[#113E6B]/10">
                      <h3 className="font-display text-2xl font-bold text-[#113E6B]">
                        Send a Message to the Office
                      </h3>
                      <p className="text-sm text-[#475569]">
                        For student absences, please use SchoolMessenger SafeArrival.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                        >
                          Parent / Guardian Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jordan Patel"
                          className="w-full px-4 py-3 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60 focus:border-[#113E6B]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="family@example.ca"
                          className="w-full px-4 py-3 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60 focus:border-[#113E6B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-topic"
                        className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                      >
                        How can we help?
                      </label>
                      <select
                        id="contact-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] focus:border-[#113E6B]"
                      >
                        <option value="General Inquiry">General School Inquiry</option>
                        <option value="Kindergarten Registration">Kindergarten Registration</option>
                        <option value="Moving to Rosewood (Grades 1–8)">
                          Moving to Rosewood (Grades 1–8)
                        </option>
                        <option value="Before & After School Care">
                          Before &amp; After School Care
                        </option>
                        <option value="Transportation & Busing">Transportation &amp; Busing</option>
                        <option value="Edsby / SchoolCash Support">
                          Edsby / SchoolCash Support
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#113E6B] mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your question or preferred time for a callback..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F7FB] border border-[#113E6B]/18 text-sm text-[#1E293B] placeholder:text-[#475569]/60 focus:border-[#113E6B] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#113E6B] text-[#F4F7FB] text-sm font-semibold hover:bg-[#0A2544] transition-colors cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F5A623]" aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export function SchoolFooter({
  onOpenRegistration,
  onOpenResource,
  onNavigate,
}: ContactAndFooterProps) {
  const handleFooterNav = (e: React.MouseEvent<HTMLAnchorElement>, id: NavSectionId) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <footer className="bg-[#0A2544] text-[#F4F7FB] pt-16 pb-10">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F4F7FB]/14">
            {/* Brand & Treaty 6 Land Acknowledgement */}
            <div className="md:col-span-6 space-y-4">
              <a
                href="#home"
                onClick={(e) => handleFooterNav(e, 'home')}
                className="inline-flex items-center gap-4 group"
              >
                <SchoolEmblem className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] transition-transform duration-200 group-hover:scale-105 drop-shadow-md" />
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#F4F7FB] leading-snug">
                    Colette Bourgonje School
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#F5A623] mt-0.5">
                    Home of the Trailblazers
                  </span>
                </div>
              </a>
              <p className="text-sm leading-relaxed text-[#F4F7FB]/78 max-w-md">
                A proud Kindergarten to Grade 8 community school in Saskatoon Public Schools,
                serving Rosewood in southeast Saskatoon.
              </p>
              <p className="text-xs leading-relaxed text-[#6BA4D9] max-w-md pt-2">
                We acknowledge that we learn and gather on Treaty 6 Territory and the Traditional
                Homeland of the Métis. We pay our respects to the First Nations and Métis ancestors
                of this place and reaffirm our relationship with one another.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3 space-y-3">
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#F5A623]">
                Explore
              </p>
              <ul className="space-y-2.5 text-sm text-[#F4F7FB]/82">
                <li>
                  <a
                    href="#our-school"
                    onClick={(e) => handleFooterNav(e, 'our-school')}
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    Our School
                  </a>
                </li>
                <li>
                  <a
                    href="#parents-students"
                    onClick={(e) => handleFooterNav(e, 'parents-students')}
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    Parents &amp; Students
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    onClick={(e) => handleFooterNav(e, 'programs')}
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    Programs &amp; Child Care
                  </a>
                </li>
                <li>
                  <a
                    href="#scc"
                    onClick={(e) => handleFooterNav(e, 'scc')}
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    School Community Council
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleFooterNav(e, 'contact')}
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Registration CTA */}
            <div className="md:col-span-3 space-y-3">
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#F5A623]">
                Join Us
              </p>
              <p className="text-xs leading-relaxed text-[#F4F7FB]/75">
                169 Olson Lane West
                <br />
                Saskatoon, SK S7V 0L1
                <br />
                <span className="tabular-nums">306-683-7530</span>
              </p>
              <button
                type="button"
                onClick={() => onOpenRegistration('transfer')}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F5A623] text-[#113E6B] text-xs font-bold hover:bg-[#ecbc4d] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F4F7FB]/60">
            <p>© {new Date().getFullYear()} Colette Bourgonje School · Saskatoon Public Schools.</p>
            <p>Inspiring Learning in Rosewood, Saskatoon.</p>
          </div>
        </div>
      </footer>
  );
}

export function ContactAndFooter({
  onOpenRegistration,
  onOpenResource,
  onNavigate,
}: ContactAndFooterProps) {
  return (
    <>
      <ContactSection />
      <SchoolFooter
        onOpenRegistration={onOpenRegistration}
        onOpenResource={onOpenResource}
        onNavigate={onNavigate}
      />
    </>
  );
}
