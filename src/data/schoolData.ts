export const SCHOOL_IMAGES = {
  heroMain: '/src/assets/images/hero_children_learning_1795431594240.jpg',
  heroDetail: '/src/assets/images/hero_creative_detail_1795431615005.jpg',
  welcomeCampus: '/src/assets/images/welcome_rosewood_campus_1795431615688.jpg',
  envStudentLearning: '/src/assets/images/env_student_learning_1795431612525.jpg',
  envClassroom: '/src/assets/images/env_classroom_experiences_1795431616436.jpg',
  envCreativity: '/src/assets/images/env_creativity_exploration_1795431604020.jpg',
  envInclusive: '/src/assets/images/env_inclusive_education_1795431605836.jpg',
  envCommunity: '/src/assets/images/env_school_community_1795431605335.jpg',
  progKindergarten: '/src/assets/images/prog_kindergarten_1795431605685.jpg',
  progBeforeAfter: '/src/assets/images/prog_before_after_care_1795431611433.jpg',
  progEarlyLearning: '/src/assets/images/prog_early_learning_1795431604936.jpg',
  progTransportation: '/src/assets/images/prog_transportation_1795431603805.jpg',
} as const;

export const SCHOOL_INFO = {
  name: 'Colette Bourgonje School',
  shortName: 'Colette Bourgonje',
  division: 'Saskatoon Public Schools',
  neighbourhood: 'Rosewood, Southeast Saskatoon',
  address: '169 Olson Lane West',
  cityPostal: 'Saskatoon, SK S7V 0L1',
  phone: '306-683-7530',
  email: 'ColetteBourgonjeSchool@spsd.sk.ca',
  officeHours: 'Monday to Friday · 8:30 a.m. – 4:00 p.m.',
  grades: 'Kindergarten – Grade 8',
  openedYear: '2017',
};

export interface BellEntry {
  time: string;
  label: string;
  note: string;
}

export const BELL_SCHEDULE: BellEntry[] = [
  { time: '8:52 a.m.', label: 'Supervision Begins', note: 'Outdoor morning supervision on school grounds' },
  { time: '9:07 a.m.', label: 'Morning Bell & Classes Begin', note: 'Students enter designated grade doors' },
  { time: '10:52 a.m.', label: 'Morning Recess', note: '15-minute outdoor play until 11:07 a.m.' },
  { time: '11:57 a.m.', label: 'Lunch Break', note: 'Supervised eating and outdoor recreation until 12:46 p.m.' },
  { time: '12:46 p.m.', label: 'Afternoon Classes Begin', note: 'Afternoon learning block starts' },
  { time: '2:25 p.m.', label: 'Afternoon Recess', note: '15-minute movement break until 2:40 p.m.' },
  { time: '3:35 p.m.', label: 'Dismissal', note: 'After-school supervision until 3:50 p.m.' },
];

export interface LearningPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  fullStory: string[];
  image: string;
  imageAlt: string;
  caption: string;
  accent: 'sun' | 'coral' | 'sage';
  highlightStat: string;
}

export const LEARNING_PILLARS: LearningPillar[] = [
  {
    id: 'student-learning',
    number: '01',
    title: 'Student Learning',
    subtitle: 'Curiosity-led literacy, numeracy, and joyful inquiry across Kindergarten to Grade 8.',
    summary:
      'In our sunlit learning commons and collaborative studios, students build strong foundations in reading, writing, and mathematical thinking while learning to ask brave questions.',
    fullStory: [
      'Every learner at Colette Bourgonje School is encouraged to see themselves as a capable thinker, storyteller, and problem solver. Teachers weave Saskatchewan curriculum outcomes into rich, meaningful investigations that connect classroom concepts to everyday life in Saskatoon.',
      'Our bright learning commons serves as the heart of the building—a welcoming gathering space for cozy buddy-reading sessions, independent research, storytelling circles, and student-led inquiry showcases.',
    ],
    image: SCHOOL_IMAGES.envStudentLearning,
    imageAlt: 'Elementary students reading books together on a woven rug in a sunlit wooden school library',
    caption: 'Fig. 01 — Shared reading circles inside the sunlit Learning Commons.',
    accent: 'sun',
    highlightStat: 'Daily literacy & numeracy blocks tailored for Grades K–8',
  },
  {
    id: 'classroom-experiences',
    number: '02',
    title: 'Classroom Experiences',
    subtitle: 'Warm, responsive teaching where every child is known by name and strength.',
    summary:
      'Thoughtful teachers guide small-group discoveries with hands-on manipulatives, flexible seating, and gentle mentorship that meets students right where they are.',
    fullStory: [
      'Walk into any classroom at Colette Bourgonje School and you will hear lively partner conversations, quiet moments of focused sketching, and teachers kneeling beside desks to celebrate a breakthrough.',
      'By blending direct instruction with hands-on exploration, our classrooms cultivate confidence, self-regulation, and genuine excitement for coming to school each morning.',
    ],
    image: SCHOOL_IMAGES.envClassroom,
    imageAlt: 'Elementary teacher kneeling beside a birchwood table guiding two smiling students with geometry blocks',
    caption: 'Fig. 02 — Small-group hands-on mathematics and guided inquiry.',
    accent: 'coral',
    highlightStat: 'Collaborative teaching teams across primary, junior, and middle years',
  },
  {
    id: 'creativity-exploration',
    number: '03',
    title: 'Creativity & Exploration',
    subtitle: 'Where visual arts, prairie nature studies, music, and STEM meet.',
    summary:
      'Students sketch botanical specimens, build prototypes, compose music, and investigate the living world around Rosewood’s parks and wetlands.',
    fullStory: [
      'Creativity is not an extra—it is how children make sense of the world. From watercolour studies of prairie leaves to middle-years robotics, band, and drama, students have room to experiment, revise, and share their voice.',
      'Outdoor learning walks through Rosewood’s neighbourhood pathways turn local seasons, native plants, and habitats into living science journals.',
    ],
    image: SCHOOL_IMAGES.envCreativity,
    imageAlt: 'Three elementary students examining pinecones, leaves, and seedlings with brass magnifying glasses and sketchbooks',
    caption: 'Fig. 03 — Prairie nature journaling and botanical inquiry studio.',
    accent: 'sun',
    highlightStat: 'Integrated arts, outdoor education, band, and hands-on STEM labs',
  },
  {
    id: 'inclusive-education',
    number: '04',
    title: 'Inclusive Education',
    subtitle: 'Inspired by Colette Bourgonje’s legacy of resilience, dignity, and belonging.',
    summary:
      'Every child deserves to feel welcomed, supported, and celebrated. Our accessible spaces, resource teachers, and English as an Additional Language supports champion every learner.',
    fullStory: [
      'Named after 10-time Paralympic medalist, Métis athlete, and former Saskatoon Public Schools teacher Colette Bourgonje, our school places true belonging at the centre of everything we do.',
      'We honour Treaty 6 Territory and Métis heritage through land-based learning, welcoming multilingual families from around the globe, and designing accessible classroom experiences where every student participates with pride.',
    ],
    image: SCHOOL_IMAGES.envInclusive,
    imageAlt: 'Diverse group of elementary students including a smiling child using a wheelchair collaborating on a building model',
    caption: 'Fig. 04 — Accessible, collaborative project tables built for every learner.',
    accent: 'sage',
    highlightStat: 'Dedicated EAL, Resource, Speech-Language & Inclusive Supports',
  },
  {
    id: 'school-community',
    number: '05',
    title: 'School Community',
    subtitle: 'Families, neighbours, and educators growing together in southeast Saskatoon.',
    summary:
      'From seasonal garden days and family literacy nights to shared outdoor celebrations, Colette Bourgonje School is a true neighbourhood gathering place.',
    fullStory: [
      'Because Colette Bourgonje School sits inside Rosewood’s shared community campus, our doors open naturally to neighbourhood friendships. Older middle-years students mentor younger kindergarten buddies, while parents and guardians partner closely through our School Community Council.',
      'Together we celebrate cultural traditions, cheer at track meets, tend schoolyard planters, and ensure every family new to Rosewood feels right at home.',
    ],
    image: SCHOOL_IMAGES.envCommunity,
    imageAlt: 'Students, parents, and teachers gardening together in raised wooden beds in a sunny Canadian schoolyard',
    caption: 'Fig. 05 — Families and students gathering in the outdoor learning garden.',
    accent: 'coral',
    highlightStat: 'Active Rosewood family events, buddy programs & student leadership',
  },
];

export interface ProgramItem {
  id: string;
  index: string;
  title: string;
  ageOrScope: string;
  headline: string;
  description: string;
  highlights: string[];
  practicalNote: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  actionType: 'register-k' | 'before-after' | 'early-learning' | 'transportation';
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'kindergarten',
    index: 'Program 01',
    title: 'Kindergarten',
    ageOrScope: 'Age 5 by December 31 · Alternating Full Days',
    headline: 'Playful first steps into a lifelong love of learning.',
    description:
      'Our welcoming Kindergarten studios nurture curiosity through guided play, storytelling, music, outdoor discovery, and early literacy. Children learn friendship skills and classroom joy in an unhurried, warm environment.',
    highlights: [
      'Alternating full-day schedule (Monday/Wednesday or Tuesday/Thursday plus alternating Fridays)',
      'Play-based Saskatchewan Kindergarten curriculum rich in sensory, art, and literacy centres',
      'Gentle spring orientation evenings so little learners meet teachers and explore classrooms early',
    ],
    practicalNote: 'Registration for the upcoming school year opens every January through Saskatoon Public Schools.',
    image: SCHOOL_IMAGES.progKindergarten,
    imageAlt: 'Five-year-old kindergarten children happily playing with natural wooden blocks and botanical sensory trays',
    ctaLabel: 'Register for Kindergarten',
    actionType: 'register-k',
  },
  {
    id: 'before-after-care',
    index: 'Program 02',
    title: 'Before & After School Care',
    ageOrScope: 'Grades K–6 · On-Site School-Age Program',
    headline: 'Trusted morning welcomes and joyful afternoons under one roof.',
    description:
      'Conveniently hosted right inside our Rosewood school facility in partnership with KidsTime Child Care, school-age care gives busy families peace of mind with seamless transitions to and from the classroom bell.',
    highlights: [
      'Morning drop-off starting at 7:00 a.m. and evening pickup until 6:00 p.m.',
      'Nutritious afternoon snacks, cooperative games, creative crafts, and outdoor playground time',
      'Full-day care options available on many non-instructional PD days and school breaks',
    ],
    practicalNote: 'Families register directly with our on-site care coordinator; waitlist inquiries welcome year-round.',
    image: SCHOOL_IMAGES.progBeforeAfter,
    imageAlt: 'Elementary school children laughing while playing board games and making paper crafts after school',
    ctaLabel: 'View Care Schedule & Inquiry',
    actionType: 'before-after',
  },
  {
    id: 'early-learning',
    index: 'Program 03',
    title: 'Early Learning & Child Care',
    ageOrScope: 'Ages 18 Months – 5 Years · Licensed On-Site Centre',
    headline: 'Nurturing the earliest years right inside our neighbourhood school.',
    description:
      'Our bright, purpose-built Early Learning & Child Care centre supports Rosewood’s youngest children with warm early childhood educators, natural play materials, and a gentle bridge into Kindergarten.',
    highlights: [
      'Licensed full-day early childhood education spaces located within the shared Rosewood campus',
      'Calm, natural wooden learning spaces inspired by play, outdoor exploration, and early language',
      'Seamless sibling drop-off for families with both preschool and K–8 elementary children',
    ],
    practicalNote: 'Supported by Saskatchewan’s Early Learning and Child Care framework for accessible family care.',
    image: SCHOOL_IMAGES.progEarlyLearning,
    imageAlt: 'Young preschool children exploring wooden toys and storybooks with a warm educator on a woven rug',
    ctaLabel: 'Explore Early Learning',
    actionType: 'early-learning',
  },
  {
    id: 'transportation',
    index: 'Program 04',
    title: 'School Transportation',
    ageOrScope: 'Rosewood & Lakewood Suburban Centre · SPSD Busing',
    headline: 'Safe, reliable daily busing connecting our growing neighbourhood.',
    description:
      'Saskatoon Public Schools provides dedicated school bus service for eligible Colette Bourgonje School students living in designated busing zones, helping mornings run smoothly and safely in every Saskatchewan season.',
    highlights: [
      'Eligibility generally applies to students residing more than 1.2 km from the school within our attendance area',
      'Dedicated routes serving designated zones in Rosewood and the Lakewood Suburban Centre',
      'Real-time weather advisories and route updates shared directly through Saskatoon Public Schools alerts',
    ],
    practicalNote: 'Apply for busing prior to June 15 for September routes, or anytime through the school office when moving to Rosewood.',
    image: SCHOOL_IMAGES.progTransportation,
    imageAlt: 'Yellow Canadian school bus parked along a sunlit tree-lined residential street with students walking safely',
    ctaLabel: 'Check Busing Eligibility',
    actionType: 'transportation',
  },
];

export type ResourceModalId =
  | 'calendar'
  | 'supplies'
  | 'schoolcash'
  | 'schoolmessenger'
  | 'edsby'
  | 'bell-schedule';

export interface ParentResource {
  id: ResourceModalId;
  number: string;
  title: string;
  category: string;
  description: string;
  actionText: string;
  quickDetail: string;
}

export const PARENT_RESOURCES: ParentResource[] = [
  {
    id: 'calendar',
    number: '01',
    title: 'School Year Calendar',
    category: 'Key Dates & Breaks',
    description: 'View instructional days, Kindergarten alternating days, PD days, holidays, and student-led conference dates for 2026–2027.',
    actionText: 'Browse Key Dates',
    quickDetail: '2026–2027 SPSD Calendar',
  },
  {
    id: 'supplies',
    number: '02',
    title: 'School Supplies',
    category: 'Grade K–8 Checklists',
    description: 'Browse ready-to-shop classroom supply checklists organized by grade level, including indoor running shoes and backpack essentials.',
    actionText: 'Open Supply Lists',
    quickDetail: 'Kindergarten to Grade 8',
  },
  {
    id: 'schoolcash',
    number: '03',
    title: 'SchoolCash Online',
    category: 'Fees & Field Trips',
    description: 'Securely pay for classroom excursions, band rentals, spirit wear, and special school activities without sending cash in backpacks.',
    actionText: 'Portal Guide',
    quickDetail: 'spsd.schoolcashonline.com',
  },
  {
    id: 'schoolmessenger',
    number: '04',
    title: 'SchoolMessenger',
    category: 'Attendance & Alerts',
    description: 'Report student absences quickly 24/7 via the app, web, or phone—and receive timely school notices and winter weather alerts.',
    actionText: 'Report Absence Guide',
    quickDetail: 'Safe Arrival 24/7',
  },
  {
    id: 'edsby',
    number: '05',
    title: 'Edsby',
    category: 'Classroom & Progress',
    description: 'Stay connected with classroom teachers, view daily learning stories, review progress reports, and book family conferences.',
    actionText: 'Edsby Family Guide',
    quickDetail: 'spsd.edsby.com',
  },
  {
    id: 'bell-schedule',
    number: '06',
    title: 'Bell Schedule & Routines',
    category: 'Daily Timetable',
    description: 'Check morning entry times (9:07 a.m.), recess periods, lunch supervision hours, and afternoon dismissal at 3:35 p.m.',
    actionText: 'View Daily Bells',
    quickDetail: '9:07 a.m. – 3:35 p.m.',
  },
];

export const CALENDAR_DATES = [
  { date: 'Nov 26, 2026', title: 'Student-Led Learning Conferences', type: 'Evening · 4:00 p.m. – 7:30 p.m.' },
  { date: 'Nov 27, 2026', title: 'No Classes — Conference Day', type: 'No School for Students' },
  { date: 'Dec 09, 2026', title: 'Winter Choral & Band Showcase', type: 'School Community Event · 6:30 p.m.' },
  { date: 'Dec 18, 2026', title: 'Last Day of Classes Before Winter Break', type: 'Regular Dismissal · 3:35 p.m.' },
  { date: 'Jan 04, 2027', title: 'Classes Resume After Winter Break', type: 'Welcome Back · 9:07 a.m.' },
  { date: 'Jan 15, 2027', title: 'Kindergarten Registration Opens (2027–28)', type: 'New Families Welcome' },
  { date: 'Jan 29, 2027', title: 'Professional Learning Day', type: 'No School for Students' },
  { date: 'Feb 15–19, 2027', title: 'February Mid-Winter Break', type: 'School Closed' },
  { date: 'Mar 12, 2027', title: 'Kindergarten Open House & Tour', type: 'Incoming Families · 5:30 p.m.' },
];

export const SUPPLY_LISTS: Record<string, { label: string; items: string[] }> = {
  kindergarten: {
    label: 'Kindergarten',
    items: [
      '1 full-sized backpack (large enough for a library book & lunch kit)',
      '1 pair of non-marking indoor Velcro running shoes (kept at school)',
      '1 reusable leak-proof water bottle labelled with child’s name',
      '2 boxes of Crayola thick washable markers (10-pack)',
      '2 large Elmer’s washable glue sticks (40g)',
      '1 complete spare change of comfortable clothes in a labelled zip bag',
    ],
  },
  'grades-1-3': {
    label: 'Grades 1 – 3',
    items: [
      '24 HB sharpened wooden pencils (Staedtler or Dixon preferred)',
      '4 white vinyl erasers & 1 covered handheld pencil sharpener',
      '1 pack of 24 pencil crayons & 1 pack of 12 washable markers',
      '4 Hilroy exercise books (half-interlined / half-plain for Gr. 1–2; lined for Gr. 3)',
      '4 duotangs (red, blue, green, yellow) & 1 plastic pencil box',
      '1 pair of student blunt-tip scissors & 4 large glue sticks',
      '1 pair of non-marking indoor running shoes & wired headphones in labelled bag',
    ],
  },
  'grades-4-5': {
    label: 'Grades 4 – 5',
    items: [
      '24 HB pencils, 2 blue pens, 2 highlighters & 4 white erasers',
      '2 packages of 4-pack Hilroy 32-page lined notebooks',
      '8 assorted duotangs & 1 package of 200-sheet loose-leaf lined paper',
      '1 metric ruler (30 cm), 1 pair of pointed student scissors & 2 glue sticks',
      '1 set of 24 pencil crayons & 1 set of fine-tip markers',
      '1 pair of indoor gym running shoes, gym shorts/shirt & labelled headphones',
    ],
  },
  'grades-6-8': {
    label: 'Grades 6 – 8',
    items: [
      '2 two-inch zippered binders with 8 tab dividers & 400 sheets lined loose-leaf',
      '1 package of 1 cm graph paper & 1 basic scientific calculator',
      '1 geometry set (compass, protractor, metric ruler)',
      '24 HB pencils, 4 blue/black pens, 2 red pens & 3 highlighters',
      '1 sketchbook for visual art & 1 set of 24 pencil crayons',
      'Indoor gym shoes, athletic attire, reusable water bottle & personal headphones',
    ],
  },
};

export interface NewsItem {
  id: string;
  category: 'School News' | 'Events' | 'Community';
  date: string;
  readTime: string;
  title: string;
  deck: string;
  author: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  body: string[];
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'winter-inquiry-showcase',
    category: 'School News',
    date: 'November 19, 2026',
    readTime: '3 min read',
    title: 'Celebrating Curiosity: Student-Led Conferences & Winter Learning Gallery',
    deck: 'Next week our hallways transform into an open exhibition of student stories, prairie ecosystems research, and collaborative art from Kindergarten to Grade 8.',
    author: 'Colette Bourgonje School Office',
    image: SCHOOL_IMAGES.envStudentLearning,
    imageAlt: 'Students reading and sharing books inside the Colette Bourgonje School learning commons',
    featured: true,
    body: [
      'Families are warmly invited into classrooms on Thursday, November 26 from 4:00 p.m. to 7:30 p.m. for our autumn Student-Led Learning Conferences. Rather than a traditional sit-down meeting, students take the lead—guiding parents and guardians through their favourite notebooks, math discoveries, and creative projects.',
      'Booking slots remain open through Edsby until Tuesday evening. While visiting, be sure to stroll through the main Learning Commons where our Grades 4–8 visual arts classes have curated an exhibition inspired by Saskatchewan’s winter skies and native flora.',
      'Reminder: There are no regular classes on Friday, November 27 to accommodate daytime family conference appointments.',
    ],
  },
  {
    id: 'kindergarten-2027-preview',
    category: 'Events',
    date: 'November 14, 2026',
    readTime: '2 min read',
    title: 'Welcome Little Learners: Preparing for 2027–2028 Kindergarten Registration',
    deck: 'Do you have a child turning five on or before December 31, 2027? Discover how our play-based Kindergarten studios welcome Rosewood families.',
    author: 'Early Years Teaching Team',
    image: SCHOOL_IMAGES.progKindergarten,
    imageAlt: 'Kindergarten children playing with wooden blocks and storybooks',
    body: [
      'Starting Kindergarten is one of childhood’s most joyful milestones. Registration for the 2027–2028 school year opens across Saskatoon Public Schools on January 15, 2027.',
      'Families living in Rosewood are welcome to submit an early interest inquiry using our School Registration button right on this website. Our team will share orientation dates, alternating full-day calendar previews, and tips for helping your child feel excited for their first day.',
    ],
  },
  {
    id: 'scc-healthy-hunger',
    category: 'Community',
    date: 'November 08, 2026',
    readTime: '2 min read',
    title: 'School Community Council Launches Winter Family Literacy & Healthy Hunger Dates',
    deck: 'Thank you to every Rosewood volunteer who helped raise funds for new outdoor play equipment and cozy reading nooks this autumn.',
    author: 'Colette Bourgonje SCC',
    image: SCHOOL_IMAGES.envCommunity,
    imageAlt: 'Families and students smiling outdoors in the school garden',
    body: [
      'Our School Community Council (SCC) had a wonderful fall kickoff! Thanks to strong family participation in our monthly Healthy Hunger lunches and community book fair, the SCC approved funding for new winter snowshoes for physical education and fresh bilingual picture books for our Learning Commons.',
      'Our next SCC gathering takes place Tuesday, December 1 at 6:30 p.m. in the Learning Commons—childcare is provided on-site and all parents, guardians, and Rosewood community members are welcome.',
    ],
  },
  {
    id: 'winter-bus-safety',
    category: 'School News',
    date: 'November 02, 2026',
    readTime: '2 min read',
    title: 'Prairie Winter Readiness: Dressing for Outdoor Recess & Bus Alerts',
    deck: 'Helpful reminders for bundling up warmly for our morning and afternoon recesses and checking SchoolMessenger during frosty mornings.',
    author: 'Student Safety & Operations',
    body: [
      'Fresh Saskatchewan air keeps young minds energized! Students head outdoors for recess unless the temperature with wind chill drops to -27°C or colder. Please label snow pants, mitts, toques, and winter boots clearly with your child’s name.',
      'When extreme cold or snowfall affects bus routes, Saskatoon Public Schools posts updates by 6:30 a.m. and sends direct notifications through SchoolMessenger.',
    ],
  },
];

export const SCC_HIGHLIGHTS = [
  {
    title: 'Monthly Community Meetings',
    detail: 'First Tuesday of each month at 6:30 p.m. in the Learning Commons. Free on-site childcare for attending parents.',
  },
  {
    title: 'Healthy Hunger Fun Lunches',
    detail: 'Scheduled twice monthly to give families a break from packing lunches while funding classroom literacy & play gear.',
  },
  {
    title: 'Outdoor Campus & Garden Care',
    detail: 'Parent volunteers partner with students to tend raised wildflower beds, shade trees, and inclusive play zones.',
  },
  {
    title: 'Family Engagement Nights',
    detail: 'Annual Fall Welcome BBQ, Winter Literacy Pajama Night, and Spring Cultural Celebration in Rosewood.',
  },
];
