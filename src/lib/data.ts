import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Repeat2,
  Award,
  Briefcase,
  PlaneTakeoff,
  BookOpen,
  Languages,
  ShieldCheck,
  Search,
  ClipboardCheck,
  Target,
  Plane,
  HeartHandshake,
  Network,
  Lightbulb,
  Users,
  Trophy,
  Globe2,
  Building2,
  CalendarCheck,
} from "lucide-react";

export const COMPANY = {
  name: "Universal Consulting Services Group",
  short: "UCSG",
  tagline: "Your Gateway to U.S. Education",
  founded: 2022,
  founder: "Joy Chowdhury",
  phone: "+1 (302) 893-5594",
  phoneHref: "tel:+13028935594",
  email: "info@universalconsultingservices.com",
  address: "Delaware, USA",
  quote: "The biggest risk is not taking any risk…",
  quoteAuthor: "Mark Zuckerberg",
  heroHeadline: "Need a college with low tuition, CPT / OPT options & hybrid classes?",
  heroHighlight: "We've got you covered.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Students", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  tag: string;
};

export const SERVICES: Service[] = [
  {
    icon: PlaneTakeoff,
    title: "Study in the USA",
    description:
      "End-to-end guidance connecting you to affordable, well-ranked U.S. colleges with hybrid programs and real career pathways.",
    features: ["University shortlisting", "Application support", "Admission strategy"],
    tag: "Most Popular",
  },
  {
    icon: Repeat2,
    title: "College Transfer",
    description:
      "Seamlessly transition to a U.S. institution that better fits your goals — maximize credits, minimize lost time.",
    features: ["Credit evaluation", "Transfer mapping", "Seamless onboarding"],
    tag: "",
  },
  {
    icon: Award,
    title: "Scholarships & Discounts",
    description:
      "Unlock exclusive student discounts and scholarship opportunities negotiated with our institutional partners.",
    features: ["Merit scholarships", "Partner discounts", "Tuition planning"],
    tag: "",
  },
  {
    icon: Briefcase,
    title: "CPT / OPT Guidance",
    description:
      "Navigate Curricular & Optional Practical Training with programs designed around real-world work authorization.",
    features: ["CPT-eligible programs", "OPT planning", "Employer pathways"],
    tag: "",
  },
  {
    icon: ShieldCheck,
    title: "Visa & Immigration",
    description:
      "Work / student visa extension and immigration services handled by trained, multilingual counselors.",
    features: ["Visa extensions", "Status changes", "Immigration advisory"],
    tag: "",
  },
  {
    icon: BookOpen,
    title: "Pathway Programs",
    description:
      "Bridge programs that prepare you academically and linguistically before full degree enrollment.",
    features: ["Foundation year", "Conditional admission", "Credit bridging"],
    tag: "",
  },
  {
    icon: GraduationCap,
    title: "College Admission",
    description:
      "From high school to graduate admission — application essays, interviews, and document prep done right.",
    features: ["Essay coaching", "Interview prep", "Document review"],
    tag: "",
  },
  {
    icon: Languages,
    title: "English School",
    description:
      "Intensive English programs that build the fluency and confidence required to thrive on a U.S. campus.",
    features: ["ESL placement", "Test prep (IELTS/TOEFL)", "Conversation fluency"],
    tag: "",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHY_US: Feature[] = [
  {
    icon: HeartHandshake,
    title: "Students Always Come First",
    description:
      "We put student happiness and success ahead of profit — every decision is made with your future in mind.",
  },
  {
    icon: Network,
    title: "Relationships That Last",
    description:
      "A strong focus on relationship building with institutional partners, students, and their families.",
  },
  {
    icon: ClipboardCheck,
    title: "Proprietary CRM Tool",
    description:
      "Our own CRM manages your case end-to-end — ensuring a smooth transition from application to arrival.",
  },
  {
    icon: Building2,
    title: "Onshore U.S. Office",
    description:
      "An onshore office in the USA ensures continued support and aftercare the moment you arrive.",
  },
  {
    icon: Languages,
    title: "Multilingual Counselors",
    description:
      "Fully trained counselors available online and onsite in Bangladesh — speaking your language.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "Thousands of students guided through their U.S. educational journey with transparent, trusted advice.",
  },
];

export type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { icon: Users, value: 5000, suffix: "+", label: "Students Guided" },
  { icon: Building2, value: 120, suffix: "+", label: "Partner Institutions" },
  { icon: Globe2, value: 40, suffix: "+", label: "Countries Reached" },
  { icon: CalendarCheck, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export type Mission = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const MISSIONS: Mission[] = [
  {
    icon: Network,
    title: "Partnerships of Mutual Benefit",
    description:
      "Build an extensive network of institutional partnerships grounded in mutual benefits and long-term trust.",
  },
  {
    icon: Lightbulb,
    title: "Continual Innovation",
    description:
      "Continually develop new ideas and projects to improve and surpass our partners' evolving needs.",
  },
  {
    icon: HeartHandshake,
    title: "Students & Families First",
    description:
      "Always put the students and their families first — their success is the measure of ours.",
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "A free consultation to understand your goals, budget, English level, and dream U.S. pathway.",
  },
  {
    icon: Target,
    step: "02",
    title: "Match",
    description:
      "We shortlist affordable, well-ranked colleges with the right CPT/OPT and hybrid options for you.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Apply",
    description:
      "Our counselors manage your case end-to-end in our proprietary CRM — applications, essays, documents.",
  },
  {
    icon: Plane,
    step: "04",
    title: "Arrive & Thrive",
    description:
      "Land in the USA with our onshore team ready — aftercare, support, and mentorship every step forward.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "UCSG matched me with a hybrid program that fit my budget perfectly and got me a CPT-eligible admission within weeks. Their team was with me from application all the way to landing in Delaware.",
    name: "Ayesha Rahman",
    role: "MS Information Systems Student",
    location: "Dhaka → Delaware",
    initials: "AR",
  },
  {
    quote:
      "I was nervous about transferring colleges and losing credits. UCSG's CRM made the whole process transparent — every document, every deadline tracked. I lost zero credits.",
    name: "Mohammed Tanvir",
    role: "BS Computer Science Transfer",
    location: "Chittagong → Texas",
    initials: "MT",
  },
  {
    quote:
      "The multilingual counselors spoke my language and understood my family's concerns. The scholarship they secured covered nearly 40% of my tuition. Truly student-first.",
    name: "Priya Sharma",
    role: "MBA Candidate",
    location: "Kathmandu → New York",
    initials: "PS",
  },
  {
    quote:
      "Their onshore U.S. office was a lifesaver. The moment I landed, someone was there to help with aftercare. That kind of support is rare and it made all the difference.",
    name: "Daniel Okoye",
    role: "Pathway Program Graduate",
    location: "Lagos → California",
    initials: "DO",
  },
  {
    quote:
      "From visa prep to landing — UCSG handled every detail. My F1 was approved on the first try and I had housing sorted before I boarded the plane.",
    name: "Ling Wei",
    role: "MS Cybersecurity",
    location: "Shanghai → Boston",
    initials: "LW",
  },
  {
    quote:
      "Day-1 CPT changed everything. I kept my remote SWE job while studying and UCSG knew exactly which programs qualified. Genuinely life-changing advice.",
    name: "Fatima Al-Sayed",
    role: "BS Aviation Graduate",
    location: "Dubai → Florida",
    initials: "FA",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  highlights: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Joy Chowdhury",
    role: "Founder & Managing Director",
    bio: "Multilingual U.S. Army veteran, former student government president, and respected community leader who founded UCSG in 2022 to make U.S. education accessible to every international student.",
    initials: "JC",
    highlights: ["U.S. Army Veteran", "Multilingual", "Community Leader"],
  },
  {
    name: "Sadia Karim",
    role: "Director of Admissions",
    bio: "Leads our admissions team with deep expertise in U.S. university requirements, crafting personalized pathways that maximize acceptance and scholarship outcomes.",
    initials: "SK",
    highlights: ["Admissions Strategy", "Essay Coaching", "10+ Years"],
  },
  {
    name: "Marcus Bennett",
    role: "Head of U.S. Operations",
    bio: "Runs our Delaware onshore office, ensuring every student receives seamless aftercare, housing guidance, and on-the-ground support the moment they arrive.",
    initials: "MB",
    highlights: ["Onshore Support", "Aftercare", "Logistics"],
  },
  {
    name: "Ling Wei",
    role: "Senior Visa & Immigration Counselor",
    bio: "Specializes in F1 visas, CPT/OPT transitions, and status changes — guiding families through the most complex immigration scenarios with clarity.",
    initials: "LW",
    highlights: ["F1 & OPT", "Immigration Law", "Multilingual"],
  },
];

export const PARTNER_UNIVERSITIES: string[] = [
  "Harrisburg University",
  "Trine University",
  "Daytona State College",
  "Campbellsville University",
  "University of Cumberlands",
  "Stevens Institute",
  "Westcliff University",
  "New England College",
  "Merrimack College",
  "Monroe College",
];

export type OfficeLocation = {
  city: string;
  country: string;
  label: string;
  role: string;
  flag: string;
};

export const LOCATIONS: OfficeLocation[] = [
  {
    city: "Delaware",
    country: "USA",
    label: "Delaware, USA",
    role: "Global Headquarters",
    flag: "🇺🇸",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    label: "Dhaka, Bangladesh",
    role: "Regional Partner Office",
    flag: "🇧🇩",
  },
];

export const FAQS = [
  {
    q: "Do you charge students for your services?",
    a: "Our core counseling and matching services are free for students. We're compensated by our institutional partners, which keeps your interests squarely first.",
  },
  {
    q: "What is CPT and why does it matter?",
    a: "Curricular Practical Training (CPT) lets F-1 students work in paid internships related to their field of study while enrolled. Programs with day-1 CPT can be life-changing for working professionals.",
  },
  {
    q: "Can you help if I'm already in the U.S.?",
    a: "Absolutely. Our onshore Delaware team specializes in transfers, visa extensions, status changes, and aftercare for students already on the ground.",
  },
  {
    q: "What English level do I need?",
    a: "It varies by institution. We match you to programs aligned with your current proficiency and arrange pathway or ESL options if you need to build fluency first.",
  },
];

export const INTEREST_OPTIONS = [
  "High School",
  "College Admission",
  "Pathway Programs",
  "English School",
  "Work / Student Visa Extension",
  "Immigration Services",
  "Other",
] as const;

export const ENGLISH_LEVELS = [
  "Beginner",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
  "Fluent / Native",
] as const;
