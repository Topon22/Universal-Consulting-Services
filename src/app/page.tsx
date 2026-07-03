import type { Metadata } from "next";
import { LandingPage } from "@/components/pages/landing-page";
import { ServicesPage } from "@/components/pages/services-page";
import { AboutPage } from "@/components/pages/about-page";
import { WhyUsPage } from "@/components/pages/why-us-page";
import { ProcessPage } from "@/components/pages/process-page";
import { StudentsPage } from "@/components/pages/students-page";
import { ContactPage } from "@/components/pages/contact-page";
import { ServicePage } from "@/components/pages/service-page";
import { SERVICE_DETAILS } from "@/lib/service-details";

/**
 * Single user-visible route ("/") with query-param view routing.
 *
 *  /                      → landing page
 *  /?view=services        → Services overview
 *  /?view=about           → About
 *  /?view=why-us          → Why Us
 *  /?view=process         → Process
 *  /?view=students        → Students
 *  /?view=contact         → Contact
 *  /?view=<service-slug>  → individual service detail page
 */

const SERVICE_SLUGS = Object.keys(SERVICE_DETAILS);

const VIEW_META: Record<string, { title: string; description: string }> = {
  services: {
    title: "Services | Universal Consulting Services Group",
    description:
      "End-to-end U.S. education services: Study in the USA, College Transfer, Scholarships, CPT/OPT Guidance, Visa & Immigration, and Pathway Programs.",
  },
  about: {
    title: "About UCSG | Universal Consulting Services Group",
    description:
      "Founded in 2022 by U.S. Army veteran Joy Chowdhury, UCSG helps international students study in the USA with trust, transparency, and student-first guidance.",
  },
  "why-us": {
    title: "Why Choose UCSG | Universal Consulting Services Group",
    description:
      "Veteran-led integrity, low-tuition partnerships, CPT/OPT expertise, multilingual counselors, end-to-end support, and a proven track record.",
  },
  process: {
    title: "How We Work | Universal Consulting Services Group",
    description:
      "Our transparent four-step process — Discover, Match, Apply, Arrive & Thrive — guides every student from first call to campus arrival.",
  },
  students: {
    title: "Who We Serve | Universal Consulting Services Group",
    description:
      "UCSG serves high school graduates, working professionals, transfer students, international students, English learners, and career changers.",
  },
  contact: {
    title: "Contact | Universal Consulting Services Group",
    description:
      "Book a free consultation with a multilingual UCSG counselor. Phone, email, WhatsApp — we reply within 24 hours.",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}): Promise<Metadata> {
  const { view } = await searchParams;

  if (!view) {
    return {
      title:
        "Universal Consulting Services Group | Study in the USA with Confidence",
      description:
        "UCSG guides international students to affordable, well-ranked U.S. colleges with CPT/OPT, hybrid programs, scholarships, and full visa & immigration support.",
    };
  }

  // Service detail page
  if (SERVICE_SLUGS.includes(view)) {
    const s = SERVICE_DETAILS[view];
    return {
      title: `${s.title} | Universal Consulting Services Group`,
      description: s.heroSubtitle,
    };
  }

  // Named view page
  const meta = VIEW_META[view];
  if (meta) {
    return { title: meta.title, description: meta.description };
  }

  // Unknown view — default
  return {
    title:
      "Universal Consulting Services Group | Study in the USA with Confidence",
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const { view } = await searchParams;

  switch (view) {
    case "services":
      return <ServicesPage />;
    case "about":
      return <AboutPage />;
    case "why-us":
      return <WhyUsPage />;
    case "process":
      return <ProcessPage />;
    case "students":
      return <StudentsPage />;
    case "contact":
      return <ContactPage />;
    case "study-in-usa":
    case "college-transfer":
    case "scholarships":
    case "cpt-opt":
    case "visa-immigration":
    case "pathway":
      return <ServicePage slug={view} />;
    default:
      return <LandingPage />;
  }
}
