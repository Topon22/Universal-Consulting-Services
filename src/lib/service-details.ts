import type { LucideIcon } from "lucide-react";
import {
  PlaneTakeoff,
  Repeat2,
  Award,
  Briefcase,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Search,
  Target,
  ClipboardCheck,
  FileCheck2,
  Users,
  Building2,
  Banknote,
  Layers,
  Compass,
  Globe2,
  Languages,
  Scale,
  CalendarClock,
  Sparkles,
  HandCoins,
  Stamp,
  Route,
  Trophy,
  IdCard,
  FileText,
  MessageSquare,
  Wallet,
  Star,
  Plane,
  BookMarked,
  Microscope,
  CalendarCheck,
  FileSearch,
  Network,
} from "lucide-react";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceDetail = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  heroSubtitle: string;
  overview: string[];
  highlight: { stat: string; label: string };
  benefits: Benefit[];
  whoItsFor: string[];
  whatsIncluded: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedServices: string[]; // slugs
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "study-in-usa": {
    slug: "study-in-usa",
    icon: PlaneTakeoff,
    title: "Study in the USA",
    tagline: "End-to-end U.S. admissions guidance",
    heroSubtitle:
      "End-to-end guidance connecting you to affordable, well-ranked U.S. colleges with hybrid programs and real career pathways.",
    overview: [
      "Studying in the United States is a life-changing decision — and the right partner makes all the difference. UCSG has spent years cultivating direct relationships with more than 120 U.S. colleges and universities that welcome international students, offer affordable tuition, and provide the hybrid, CPT, and OPT pathways that turn a degree into a career.",
      "From your very first consultation, our multilingual counselors take the time to understand your budget, English proficiency, career goals, and family situation. We then translate that into a personalized shortlist of 5–8 institutions where you have a genuine chance of admission and a clear path to graduation.",
      "We don't stop at the acceptance letter. Our proprietary CRM tracks every deadline, document, and essay in one place — and our onshore Delaware team is ready the moment you land. From application to arrival, you're never navigating this journey alone.",
    ],
    highlight: { stat: "5,000+", label: "Students placed in U.S. colleges" },
    benefits: [
      {
        icon: Search,
        title: "University Shortlisting",
        desc: "A curated shortlist of 5–8 colleges matched to your budget, English level, and career goals — never a generic list.",
      },
      {
        icon: ClipboardCheck,
        title: "Application Support",
        desc: "End-to-end application packaging, document review, and direct submission to partner universities for fast-tracked decisions.",
      },
      {
        icon: Wallet,
        title: "Low-Tuition Partners",
        desc: "Access to institutions where annual tuition starts below $10,000 — without sacrificing accreditation or outcomes.",
      },
      {
        icon: Layers,
        title: "Hybrid Programs",
        desc: "Online + on-campus schedules that let you work, care for family, or ease into U.S. academic life at your own pace.",
      },
      {
        icon: Compass,
        title: "Career Pathways",
        desc: "Programs chosen with CPT, OPT, and STEM-OPT eligibility in mind — so your degree opens doors to U.S. work experience.",
      },
      {
        icon: Building2,
        title: "Post-Arrival Support",
        desc: "Our Delaware onshore team meets you at the airport and helps with housing, banking, SIM cards, and your first weeks.",
      },
    ],
    whoItsFor: [
      "High school graduates seeking an affordable U.S. undergraduate start",
      "Working professionals pursuing a master's while keeping their job",
      "Transfer students looking for a better-fit institution",
      "Families who want transparent guidance, not high-pressure sales",
    ],
    whatsIncluded: [
      "Free 30-minute profile evaluation",
      "Curated college shortlist (5–8 schools) with rationale",
      "Application packaging and document review",
      "Essay coaching and personal-statement feedback",
      "Interview preparation and mock sessions",
      "Visa support and I-20 walkthrough",
      "Housing guidance and pre-departure briefing",
      "Onshore aftercare on arrival in the U.S.",
    ],
    process: [
      {
        step: "01",
        title: "Profile Evaluation",
        desc: "A free consultation to understand your goals, budget, English level, and timeline. We're honest if the U.S. isn't the right fit.",
      },
      {
        step: "02",
        title: "College Shortlist",
        desc: "We build a personalized shortlist of 5–8 colleges — filtered for CPT/OPT eligibility, hybrid options, scholarships, and tuition.",
      },
      {
        step: "03",
        title: "Apply",
        desc: "Our admissions team manages your case end-to-end in our proprietary CRM — applications, essays, documents, and deadlines.",
      },
      {
        step: "04",
        title: "Admit & Visa",
        desc: "Accept your offer, secure your I-20, and prepare for the F1 visa interview with our counselors by your side.",
      },
      {
        step: "05",
        title: "Enroll & Arrive",
        desc: "Land in the U.S. with our onshore team ready — housing, banking, and aftercare handled from day one.",
      },
    ],
    faqs: [
      {
        q: "How long does the whole process take?",
        a: "From your first consultation to enrolling on a U.S. campus typically takes 8–16 weeks, depending on application deadlines, visa interview availability, and your readiness. We move as fast — or as carefully — as you need.",
      },
      {
        q: "What English level do I need to start?",
        a: "There's no single answer. Some partners require TOEFL 79+ or IELTS 6.5+, but many offer conditional admission, pathway programs, or ESL placement that let you start with lower proficiency and build fluency in your first semester.",
      },
      {
        q: "Do you charge students for this service?",
        a: "Our core counseling and matching services are free for students. We're compensated by our institutional partners, which keeps your interests first — always.",
      },
      {
        q: "What if I'm already in the U.S.?",
        a: "Absolutely. Our onshore Delaware team specializes in transfers, visa extensions, status changes, and aftercare for students already on the ground. Many of our most rewarding cases start with a student already in the U.S. looking for a better fit.",
      },
      {
        q: "Can you help with scholarships?",
        a: "Yes — see our Scholarships & Discounts service for the full breakdown. Many of our partners offer merit and need-based aid exclusively to UCSG applicants, often reducing tuition by 20–40%.",
      },
    ],
    relatedServices: ["scholarships", "cpt-opt", "visa-immigration"],
  },

  "college-transfer": {
    slug: "college-transfer",
    icon: Repeat2,
    title: "College Transfer",
    tagline: "Switch with zero lost credits",
    heroSubtitle:
      "Seamlessly transition to a U.S. institution that better fits your goals — maximize credits, minimize lost time.",
    overview: [
      "Transferring colleges in the U.S. doesn't have to mean starting over. UCSG has helped hundreds of students move between institutions while preserving the credits they've already earned — whether they're switching from a community college to a four-year university, leaving a school that wasn't the right fit, or transitioning from an international institution into the U.S. system.",
      "Our transfer specialists begin with a detailed credit evaluation: we map every course you've taken against the articulation agreements we hold with partner universities, so you know — in writing — which credits will transfer before you ever submit an application. No guesswork, no surprises, no wasted tuition.",
      "For international students, we also handle the SEVIS transfer process end-to-end, ensuring your F1 status remains continuous and your visa stamp stays valid. The result: a smoother transition, a school that fits your goals, and zero lost momentum toward graduation.",
    ],
    highlight: { stat: "Zero", label: "Credits lost on most transfers" },
    benefits: [
      {
        icon: FileSearch,
        title: "Credit Evaluation",
        desc: "A course-by-course evaluation of your transcript before you apply — so you know exactly what will transfer.",
      },
      {
        icon: Route,
        title: "Transfer Mapping",
        desc: "We map your earned credits against each target school's articulation agreement and degree requirements.",
      },
      {
        icon: Building2,
        title: "Partner Colleges",
        desc: "Direct relationships with transfer-friendly universities that publish generous articulation agreements.",
      },
      {
        icon: CalendarClock,
        title: "Lost-Time Minimization",
        desc: "Most UCSG transfers lose zero credits and graduate on their original timeline — sometimes faster.",
      },
      {
        icon: Compass,
        title: "Seamless Onboarding",
        desc: "Housing, course registration, and orientation all handled before your first day on the new campus.",
      },
      {
        icon: Stamp,
        title: "Articulation Agreements",
        desc: "Formal agreements with partners guarantee which courses count — in writing, before you commit.",
      },
    ],
    whoItsFor: [
      "Current U.S. students unhappy with their school or program",
      "Community college students ready to finish a four-year degree",
      "International students wanting to switch to a better-fit U.S. school",
      "Students whose SEVIS record or visa status needs a careful transfer",
    ],
    whatsIncluded: [
      "Official transcript evaluation (course-by-course)",
      "Credit mapping against 3–5 target universities",
      "Partner college matching based on major and goals",
      "Transfer application packaging and submission",
      "SEVIS record transfer and I-20 issuance guidance",
      "Financial aid and scholarship portability review",
      "Housing and course-registration onboarding",
      "Continuous F1 status verification throughout",
    ],
    process: [
      {
        step: "01",
        title: "Transcript Evaluation",
        desc: "Send us your official transcripts. We evaluate every course and tell you exactly what will transfer.",
      },
      {
        step: "02",
        title: "Credit Mapping",
        desc: "We map your credits against 3–5 partner universities and identify the most transfer-friendly fit.",
      },
      {
        step: "03",
        title: "College Match",
        desc: "You receive a personalized transfer shortlist with credit-transfer estimates in writing.",
      },
      {
        step: "04",
        title: "Transfer Apply",
        desc: "Our admissions team packages and submits your transfer applications with all supporting documents.",
      },
      {
        step: "05",
        title: "SEVIS Transfer",
        desc: "We coordinate the SEVIS record transfer between your current and future school — no visa stamping needed.",
      },
      {
        step: "06",
        title: "Enroll",
        desc: "Arrive on your new campus with housing, registration, and orientation all pre-arranged.",
      },
    ],
    faqs: [
      {
        q: "Will I lose credits when I transfer?",
        a: "Most UCSG transfers lose zero credits. Because we work from formal articulation agreements with our partner universities, we can tell you in writing — before you apply — exactly which courses will count toward your degree.",
      },
      {
        q: "Do I need a new visa to transfer?",
        a: "Usually no. If you're transferring between SEVP-certified schools, your F1 visa stamp remains valid — we handle the SEVIS record transfer so your status stays continuous. A new visa is only needed if your current one has expired and you travel abroad.",
      },
      {
        q: "Can I transfer from a school outside the U.S.?",
        a: "Yes. We routinely evaluate international transcripts and match them to U.S. partner programs. A credential evaluation may be required, which we coordinate on your behalf.",
      },
      {
        q: "When is the best time to transfer?",
        a: "Most transfers happen at the end of an academic year (May/June for fall start) or mid-year (December for spring start). We'll align your transfer window with application deadlines and SEVIS processing time.",
      },
      {
        q: "What if my current school is on probation or has lost accreditation?",
        a: "We've helped students in exactly this situation — including cases where their school lost SEVP certification. We can fast-track a transfer to a stable partner institution while protecting your F1 status. Contact us urgently if this is your situation.",
      },
    ],
    relatedServices: ["study-in-usa", "visa-immigration", "cpt-opt"],
  },

  scholarships: {
    slug: "scholarships",
    icon: Award,
    title: "Scholarships & Discounts",
    tagline: "Exclusive partner-funded aid",
    heroSubtitle:
      "Unlock exclusive student discounts and scholarship opportunities negotiated with our institutional partners.",
    overview: [
      "A U.S. degree is one of the most valuable investments you'll ever make — and UCSG exists to make it more affordable. Over years of partnership, we've negotiated exclusive tuition discounts, merit scholarships, and need-based aid packages with more than 120 U.S. colleges and universities, available only to students who apply through UCSG.",
      "Our scholarship team begins with an honest eligibility assessment: we look at your academic record, test scores, country of origin, athletic or artistic background, and financial need — then match you to every form of aid you qualify for, from merit-based waivers to graduate assistantships and athletic scholarships.",
      "We also coach you through the scholarship application itself: personal statements, recommendation strategies, and deadline tracking. Many of our students reduce their annual tuition by 20–40% — and a few have won full-ride packages. Your education shouldn't be a financial burden, and with the right strategy, it doesn't have to be.",
    ],
    highlight: { stat: "40%", label: "Average tuition reduction for scholarship winners" },
    benefits: [
      {
        icon: Trophy,
        title: "Merit Scholarships",
        desc: "Aid for high-achievers — GPA, test scores, and academic awards translated into real tuition reductions.",
      },
      {
        icon: HandCoins,
        title: "Need-Based Aid",
        desc: "Grants and tuition waivers for families with demonstrated financial need, documented and packaged correctly.",
      },
      {
        icon: Building2,
        title: "Partner Discounts",
        desc: "Exclusive tuition discounts negotiated with our partner institutions — only available to UCSG applicants.",
      },
      {
        icon: Wallet,
        title: "Tuition Planning",
        desc: "Multi-year cost projections, payment plans, and a strategy that fits your family's financial reality.",
      },
      {
        icon: Star,
        title: "Athletic Scholarships",
        desc: "Connections to NAIA and NCAA programs for student-athletes, including recruitment video support.",
      },
      {
        icon: GraduationCap,
        title: "Graduate Funding",
        desc: "Assistantships, fellowships, and tuition remission for master's and doctoral applicants.",
      },
    ],
    whoItsFor: [
      "High-achieving students with strong GPAs or test scores",
      "Budget-conscious families seeking maximum value",
      "Graduate applicants pursuing assistantships or fellowships",
      "Student-athletes looking for athletic scholarships",
      "Applicants from underrepresented countries eligible for diversity awards",
    ],
    whatsIncluded: [
      "Comprehensive scholarship eligibility assessment",
      "Search across 120+ partner institutions for matched aid",
      "Scholarship application preparation and review",
      "Personal-statement and essay coaching",
      "Recommendation-letter strategy and templates",
      "Deadline tracking via our proprietary CRM",
      "Award negotiation support when multiple offers arrive",
      "Multi-year tuition planning and renewal guidance",
    ],
    process: [
      {
        step: "01",
        title: "Eligibility",
        desc: "We assess your academic record, background, and financial need to identify every form of aid you qualify for.",
      },
      {
        step: "02",
        title: "Search",
        desc: "Our team searches across 120+ partner institutions for merit, need, athletic, and diversity awards.",
      },
      {
        step: "03",
        title: "Apply",
        desc: "We coach you through personal statements, recommendations, and the application itself — all tracked in our CRM.",
      },
      {
        step: "04",
        title: "Award",
        desc: "Receive your scholarship offers and a clear comparison of net tuition across your accepted schools.",
      },
      {
        step: "05",
        title: "Negotiate",
        desc: "When you have multiple offers, we help you negotiate for the best possible package before you commit.",
      },
    ],
    faqs: [
      {
        q: "Can international students really win U.S. scholarships?",
        a: "Yes — and many do. While federal aid is restricted to U.S. citizens, institutional scholarships, merit waivers, athletic aid, and graduate assistantships are open to international students. Our partner schools alone award millions in aid to UCSG applicants each year.",
      },
      {
        q: "How much can I realistically save?",
        a: "It varies by school and student profile, but our average scholarship winner sees a 20–40% reduction in annual tuition. High-achievers can win full-tuition awards; graduate applicants often secure assistantships that include stipends.",
      },
      {
        q: "Do I need perfect grades to qualify?",
        a: "Not at all. Merit aid rewards strong academics, but need-based aid, athletic scholarships, diversity awards, and partner discounts are awarded on many other factors. Our eligibility assessment identifies every category you qualify for.",
      },
      {
        q: "When should I start applying for scholarships?",
        a: "As early as possible — ideally 9–12 months before your intended start date. Many priority deadlines fall between October and February for the following academic year. We track every deadline so you never miss one.",
      },
      {
        q: "Can you help if I already have an admission offer?",
        a: "Yes. If you've been admitted without aid (or with less aid than you hoped), we can help you negotiate a better package — especially if you have competing offers or have improved your academic profile since applying.",
      },
    ],
    relatedServices: ["study-in-usa", "college-transfer", "cpt-opt"],
  },

  "cpt-opt": {
    slug: "cpt-opt",
    icon: Briefcase,
    title: "CPT / OPT Guidance",
    tagline: "Work-authorized U.S. programs",
    heroSubtitle:
      "Navigate Curricular & Optional Practical Training with programs designed around real-world work authorization.",
    overview: [
      "For many international students, the real value of a U.S. degree isn't just the credential — it's the work experience. Curricular Practical Training (CPT) and Optional Practical Training (OPT) are the two pathways that let F-1 students work in paid roles related to their field of study, and understanding the difference between them is one of the most important decisions of your U.S. journey.",
      "CPT is work authorization tied to a specific course or internship requirement — it can begin as early as your first semester (Day-1 CPT) at qualifying graduate programs. OPT is a separate 12-month work authorization available after graduation (or before, as pre-completion OPT), and STEM-designated programs extend it by an additional 24 months for a total of 36 months of post-graduation work eligibility.",
      "UCSG specializes in matching students to programs that maximize work authorization — Day-1 CPT for working professionals, STEM-designated degrees for tech and analytics careers, and clear OPT-to-H1B transition planning. We guide you through enrollment, CPT authorization, OPT application, STEM extension, and the employer conversations that turn work authorization into a real career.",
    ],
    highlight: { stat: "36 months", label: "STEM OPT work eligibility after graduation" },
    benefits: [
      {
        icon: Briefcase,
        title: "CPT-Eligible Programs",
        desc: "Curated programs where CPT is built into the curriculum — including Day-1 CPT for graduate students.",
      },
      {
        icon: CalendarCheck,
        title: "OPT Planning",
        desc: "A clear 12-month OPT timeline with application prep, employment tracking, and reporting compliance.",
      },
      {
        icon: Microscope,
        title: "STEM OPT Extension",
        desc: "STEM-designated degrees unlock a 24-month extension — 36 total months of U.S. work eligibility.",
      },
      {
        icon: Network,
        title: "Employer Pathways",
        desc: "Connections to employers familiar with CPT/OPT hiring, plus resume and interview coaching.",
      },
      {
        icon: Sparkles,
        title: "Day-1 CPT Options",
        desc: "Programs that authorize paid internships from your first semester — keep your job while you study.",
      },
      {
        icon: Scale,
        title: "Compliance Guidance",
        desc: "Strict adherence to USCIS rules — never put your F1 status at risk with bad advice.",
      },
    ],
    whoItsFor: [
      "Working professionals who want to keep their job while studying",
      "Graduate students seeking U.S. work experience during their program",
      "Career changers pivoting into tech, analytics, or business",
      "International students planning an OPT-to-H1B transition",
      "STEM graduates who want the 24-month extension",
    ],
    whatsIncluded: [
      "Program selection filtered for Day-1 CPT eligibility",
      "Enrollment guidance and SEVIS record coordination",
      "CPT authorization application and document preparation",
      "OPT application (Form I-765) preparation and filing",
      "STEM OPT extension planning and Form I-983 support",
      "Employer conversations and E-Verify verification",
      "Resume, LinkedIn, and interview coaching",
      "Reporting compliance reminders (SEVP Portal)",
    ],
    process: [
      {
        step: "01",
        title: "Program Select",
        desc: "We match you to programs with the right CPT/OPT structure for your career goals and current employment.",
      },
      {
        step: "02",
        title: "Enroll",
        desc: "Apply, get admitted, and enroll — your SEVIS record is updated to reflect your new program.",
      },
      {
        step: "03",
        title: "CPT Authorize",
        desc: "We help you secure CPT authorization from your DSO, including the required offer letter and course enrollment.",
      },
      {
        step: "04",
        title: "OPT Apply",
        desc: "Before graduation, we prepare and file Form I-765 for your 12-month post-completion OPT work permit.",
      },
      {
        step: "05",
        title: "STEM Extend",
        desc: "If your degree is STEM-designated, we file the 24-month extension with Form I-983 and employer verification.",
      },
      {
        step: "06",
        title: "Employment",
        desc: "Coaching on resumes, interviews, and employer conversations — plus H1B transition planning when the time comes.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between CPT and OPT?",
        a: "CPT (Curricular Practical Training) is work authorization tied to a course or internship requirement — it can be used during your program, including Day-1 CPT at qualifying graduate schools. OPT (Optional Practical Training) is a separate 12-month work authorization, typically used after graduation. STEM graduates can extend OPT by 24 months for a total of 36 months.",
      },
      {
        q: "What is Day-1 CPT and is it legal?",
        a: "Day-1 CPT is CPT authorization available from your first semester at qualifying graduate programs where the curriculum requires an internship or practicum. When used correctly at SEVP-certified schools with proper documentation, it is fully legal. We only partner with programs that follow USCIS guidance — your F1 status is never put at risk.",
      },
      {
        q: "Can I keep my current remote job while studying?",
        a: "Often yes — Day-1 CPT at the right graduate program is designed exactly for working professionals who want to keep their remote job while earning a U.S. degree. We'll verify your situation and recommend programs that fit.",
      },
      {
        q: "How does the STEM OPT extension work?",
        a: "If your degree is on the DHS STEM Designated Degree Program List, you can extend your 12-month OPT by an additional 24 months — for a total of 36 months of post-graduation work authorization. Your employer must be E-Verify enrolled, and you'll file Form I-983 with your DSO before applying.",
      },
      {
        q: "What happens when my OPT ends?",
        a: "Common pathways include an H1B specialty-occupation visa (employer-sponsored), an O-1 visa for extraordinary ability, or continued education in a new program. We'll coach you on the timeline and connect you with immigration counsel when needed.",
      },
    ],
    relatedServices: ["study-in-usa", "visa-immigration", "scholarships"],
  },

  "visa-immigration": {
    slug: "visa-immigration",
    icon: ShieldCheck,
    title: "Visa & Immigration",
    tagline: "F1 visas, extensions & status changes",
    heroSubtitle:
      "Work / student visa extension and immigration services handled by trained, multilingual counselors.",
    overview: [
      "The U.S. visa and immigration system is complex — and the stakes are too high to navigate it alone. UCSG's visa team is led by multilingual counselors with years of experience guiding international students through F1 visa applications, SEVIS record management, status changes, and extensions. We don't replace an immigration attorney when one is needed, but we'll get you 95% of the way there with the right preparation.",
      "Our approach begins with the DS-160 walkthrough and SEVIS I-20 issuance, continues through mock visa interviews and document checklists, and follows you all the way through approval. We've sat with hundreds of students the night before their interview, walking them through the questions they'll face and the answers that work.",
      "Beyond the initial F1, we handle visa extensions, status changes (tourist to student, dependent to student, H4 to F1), SEVIS transfers between schools, reinstatement after a status lapse, and dependent visa applications for spouses and children. If you have an immigration scenario that feels complicated, talk to us — we've probably handled it before.",
    ],
    highlight: { stat: "98%", label: "First-time F1 visa approval rate for UCSG students" },
    benefits: [
      {
        icon: Plane,
        title: "F1 Visa Prep",
        desc: "A complete F1 application package: I-20 verification, DS-160 guidance, fee payment, and interview coaching.",
      },
      {
        icon: FileText,
        title: "DS-160 Guidance",
        desc: "Step-by-step walkthrough of the DS-160 form, avoiding common mistakes that lead to denials.",
      },
      {
        icon: MessageSquare,
        title: "Interview Coaching",
        desc: "Mock visa interviews with the actual questions consular officers ask — and the answers that work.",
      },
      {
        icon: IdCard,
        title: "SEVIS Support",
        desc: "I-20 issuance, SEVIS record transfers, reinstatement after a lapse, and continuous status verification.",
      },
      {
        icon: Repeat2,
        title: "Status Changes",
        desc: "Tourist-to-student, H4-to-F1, dependent visas, and other complex status transitions handled correctly.",
      },
      {
        icon: CalendarClock,
        title: "Extensions",
        desc: "Program extensions, OPT STEM extensions, and visa renewal guidance when your stamp expires.",
      },
    ],
    whoItsFor: [
      "First-time F1 visa applicants preparing for a consular interview",
      "Students transferring between SEVP-certified schools",
      "Applicants changing status within the U.S. (B2 to F1, H4 to F1)",
      "Students whose visa or program needs an extension",
      "Families applying for dependent F2 visas for spouse or children",
    ],
    whatsIncluded: [
      "DS-160 form walkthrough and review",
      "SEVIS I-20 issuance and verification",
      "Visa fee payment and appointment scheduling guidance",
      "Mock visa interview sessions with feedback",
      "Document checklist tailored to your country and school",
      "Financial preparation and bank-letter templates",
      "Dependent (F2) visa application support",
      "Status change and reinstatement guidance",
    ],
    process: [
      {
        step: "01",
        title: "I-20",
        desc: "Receive your I-20 from your SEVP-certified school and review the SEVIS record for accuracy.",
      },
      {
        step: "02",
        title: "DS-160",
        desc: "We walk you through the DS-160 application form, ensuring every field is completed correctly.",
      },
      {
        step: "03",
        title: "Fee & SEVIS",
        desc: "Pay the SEVIS I-901 fee and visa application fee, then schedule your consular interview.",
      },
      {
        step: "04",
        title: "Interview Prep",
        desc: "Mock interviews with the actual questions consular officers ask — and the answers that work.",
      },
      {
        step: "05",
        title: "Interview",
        desc: "Attend your visa interview with confidence, all documents organized and reviewed.",
      },
      {
        step: "06",
        title: "Approval",
        desc: "Receive your stamped visa, book your travel, and arrive in the U.S. with our onshore team ready.",
      },
    ],
    faqs: [
      {
        q: "What documents do I need for my F1 visa interview?",
        a: "You'll need a valid passport, your SEVIS I-20, DS-160 confirmation page, visa fee receipt, SEVIS I-901 fee receipt, passport-size photo, financial evidence (bank statements, sponsor letters), academic transcripts, and standardized test scores if applicable. We provide a tailored checklist based on your country and school.",
      },
      {
        q: "What if my F1 visa is denied?",
        a: "F1 denials are usually under section 214(b) — the consular officer wasn't convinced of your non-immigrant intent. We help you understand the reason, strengthen your case (stronger ties to home country, clearer academic plan, better financial evidence), and reapply. Many students are approved on their second interview.",
      },
      {
        q: "Can I change status from B2 (tourist) to F1 without leaving the U.S.?",
        a: "Yes, but it requires careful planning. You must file Form I-539 with USCIS before your B2 status expires, and you cannot begin studying until the change is approved. The process can take 6–12 months. We'll guide you — and honestly tell you if leaving the U.S. to apply for an F1 stamp would be faster.",
      },
      {
        q: "Can my spouse and children come with me on an F1?",
        a: "Yes — eligible dependents (spouse and unmarried children under 21) can apply for F2 visas. They cannot work in the U.S. on F2 status, but they can attend school. We handle the dependent application alongside yours, including financial documentation showing you can support them.",
      },
      {
        q: "My visa stamp expired but my I-20 is still valid — what do I do?",
        a: "Your F1 status remains valid as long as your I-20 is active and you're enrolled full-time — even if your visa stamp expires. You only need a new visa stamp if you leave the U.S. and want to re-enter. We can advise on renewal and the risks of travel while your stamp is expired.",
      },
    ],
    relatedServices: ["study-in-usa", "cpt-opt", "college-transfer"],
  },

  pathway: {
    slug: "pathway",
    icon: BookOpen,
    title: "Pathway Programs",
    tagline: "Bridge to a U.S. degree",
    heroSubtitle:
      "Bridge programs that prepare you academically and linguistically before full degree enrollment.",
    overview: [
      "Not every student is ready to jump straight into a full U.S. degree — and that's perfectly OK. Pathway programs (sometimes called foundation years or bridge programs) are designed exactly for students who need a bit more academic, linguistic, or cultural preparation before enrolling full-time in a U.S. college or university.",
      "A pathway program typically lasts one academic year and combines intensive English, academic-skills coaching, and a few for-credit courses that count toward your eventual degree. You'll earn credits, build confidence, and adjust to U.S. classroom culture — all with conditional admission to your target university already in hand.",
      "When you complete the pathway successfully, you progress directly into your full degree program with guaranteed admission — no re-application required. It's the ideal route for younger students, English learners, applicants whose academic record doesn't yet meet direct-entry requirements, and anyone who wants a softer landing in the U.S. higher-education system.",
    ],
    highlight: { stat: "100%", label: "Progression to full degree on successful completion" },
    benefits: [
      {
        icon: BookOpen,
        title: "Foundation Year",
        desc: "A structured first year that builds the academic skills and study habits U.S. colleges expect.",
      },
      {
        icon: Stamp,
        title: "Conditional Admission",
        desc: "Guaranteed admission to your target university — contingent only on completing the pathway.",
      },
      {
        icon: Layers,
        title: "Credit Bridging",
        desc: "For-credit courses taken during the pathway count toward your eventual degree — no wasted time.",
      },
      {
        icon: Languages,
        title: "English Conditioning",
        desc: "Intensive ESL instruction that builds the academic fluency required to thrive on a U.S. campus.",
      },
      {
        icon: Globe2,
        title: "Cultural Prep",
        desc: "A supportive environment to adjust to U.S. classroom culture, academic integrity, and daily life.",
      },
      {
        icon: GraduationCap,
        title: "Guaranteed Progression",
        desc: "Complete the pathway and you progress directly into your degree program — no re-application.",
      },
    ],
    whoItsFor: [
      "Students who don't yet meet direct-entry academic requirements",
      "English learners building toward TOEFL/IELTS readiness",
      "Younger students seeking a softer landing in the U.S. system",
      "Applicants whose prior education doesn't map cleanly to U.S. admissions",
      "Career changers returning to study after years away from school",
    ],
    whatsIncluded: [
      "Pathway program matching based on your target degree",
      "Conditional admission to your target university",
      "Intensive English language preparation",
      "Academic-skills coaching (writing, research, study habits)",
      "For-credit courses that transfer into your degree",
      "Cultural orientation and student-life support",
      "Guaranteed progression to full degree on completion",
      "Full UCSG onshore aftercare on arrival",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        desc: "We assess your academic background, English level, and target degree to determine if a pathway is right for you.",
      },
      {
        step: "02",
        title: "Match Pathway",
        desc: "We match you to a pathway program aligned with your target university and intended major.",
      },
      {
        step: "03",
        title: "Conditional Admit",
        desc: "You receive conditional admission — guaranteed progression to your degree on completing the pathway.",
      },
      {
        step: "04",
        title: "Complete Pathway",
        desc: "You spend one year building English, academic skills, and credits that transfer into your degree.",
      },
      {
        step: "05",
        title: "Progress to Degree",
        desc: "On successful completion, you transition directly into your full degree program — no re-application required.",
      },
    ],
    faqs: [
      {
        q: "Is a pathway program the same as a foundation year?",
        a: "Essentially yes — the terms are used interchangeably. Both refer to a structured preparatory year (usually one academic year) that combines English, academic-skills coaching, and for-credit courses, with conditional admission to a full degree program upon completion.",
      },
      {
        q: "Do pathway credits count toward my degree?",
        a: "Yes — most pathway programs include for-credit courses that transfer directly into your degree program. The exact number varies by school and major, but typically 12–24 credits carry over. We'll confirm the transfer policy in writing before you enroll.",
      },
      {
        q: "Will I get a visa for a pathway program?",
        a: "Yes — pathway programs at SEVP-certified schools issue a standard F1 I-20, and you apply for an F1 visa exactly as you would for any U.S. degree program. Your conditional admission letter demonstrates your academic intent to the consular officer.",
      },
      {
        q: "What happens if I don't complete the pathway?",
        a: "If you don't meet the pathway's progression requirements, you typically have options: retake the pathway, transfer to a different program, or in some cases appeal. We work with you to get back on track — and we only recommend pathways with strong student-support services.",
      },
      {
        q: "Can I skip the pathway if my English improves before I arrive?",
        a: "Sometimes. If you retake the TOEFL/IELTS and meet the direct-entry requirements before your pathway begins, we can often convert your admission to direct entry. Talk to us as soon as you have new test scores — timing matters.",
      },
    ],
    relatedServices: ["study-in-usa", "scholarships", "visa-immigration"],
  },
};
