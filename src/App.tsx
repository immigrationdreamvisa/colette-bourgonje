import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { NAV_LINKS, Navbar, type NavSectionId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { LearningEnvironmentSection } from './components/LearningEnvironmentSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ParentsStudentsSection } from './components/ParentsStudentsSection';
import {
  CommunityCouncilSection,
} from './components/CommunityAndNewsSection';
import {
  ContactAndFooter,
  ContactSection,
  SchoolFooter,
} from './components/ContactAndFooter';
import {
  RegistrationSection,
  type RegistrationPreset,
} from './components/RegistrationSection';
import { InteractiveModals, type ActiveModalState } from './components/InteractiveModals';
import type { ProgramItem, ResourceModalId } from './data/schoolData';

const VALID_SECTIONS = new Set<NavSectionId>([
  ...NAV_LINKS.map((link) => link.id),
  'registration',
]);

function getSectionFromHash(): NavSectionId {
  const raw = window.location.hash.replace('#', '') as NavSectionId;
  return VALID_SECTIONS.has(raw) ? raw : 'home';
}

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModalState>(null);
  const [activeSection, setActiveSection] = useState<NavSectionId>(getSectionFromHash);
  const [registrationPreset, setRegistrationPreset] = useState<RegistrationPreset>('transfer');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onHashChange = () => {
      const section = getSectionFromHash();
      setActiveSection(section);
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToSection(section);
      }
    };

    window.addEventListener('hashchange', onHashChange);

    // Initial hash scroll if present
    const initialSection = getSectionFromHash();
    if (initialSection !== 'home') {
      setTimeout(() => scrollToSection(initialSection), 100);
    }

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // IntersectionObserver to highlight current active navbar button on scroll
  useEffect(() => {
    const sectionIds: NavSectionId[] = [
      'home',
      'our-school',
      'programs',
      'registration',
      'parents-students',
      'scc',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            const id = entry.target.id as NavSectionId;
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: NavSectionId) => {
    setActiveSection(section);
    const targetHash = `#${section}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(section);
    }
  };

  const openRegistration = (preset: RegistrationPreset = 'transfer') => {
    setActiveModal(null);
    setRegistrationPreset(preset);
    handleNavigate('registration');
  };

  const openResource = (resourceId: ResourceModalId) => {
    setActiveModal({ type: 'resource', resourceId });
  };

  const handleProgramAction = (actionType: ProgramItem['actionType']) => {
    if (actionType === 'register-k') {
      openRegistration('kindergarten');
    } else {
      setActiveModal({ type: 'program-info', program: actionType });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#1E293B] flex flex-col">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenRegistration={openRegistration}
      />

      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <HeroSection onOpenResource={openResource} />

        {/* Section 2: Our School & Learning Environment */}
        <WelcomeSection onOpenRegistration={openRegistration} />
        <LearningEnvironmentSection
          onSelectPillar={(pillar) => setActiveModal({ type: 'pillar', pillar })}
        />

        {/* Section 3: Programs */}
        <ProgramsSection onProgramAction={handleProgramAction} />

        {/* Section 4: Dedicated School Registration Section with Kinetic Typography & Kids Animation */}
        <RegistrationSection
          preset={registrationPreset}
          onBackHome={() => handleNavigate('home')}
        />

        {/* Section 5: Parents & Students */}
        <ParentsStudentsSection onOpenResource={openResource} />

        {/* Section 6: School Community Council */}
        <CommunityCouncilSection onOpenSccModal={() => setActiveModal({ type: 'scc' })} />

        {/* Section 7: Contact */}
        <ContactSection />
      </main>

      <SchoolFooter
        onOpenRegistration={openRegistration}
        onOpenResource={openResource}
        onNavigate={handleNavigate}
      />

      <InteractiveModals
        modal={activeModal}
        onClose={() => setActiveModal(null)}
        onSwitchToRegistration={(preset) => openRegistration(preset)}
      />
    </div>
  );
}
