import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import dentedcode from "public/about/dentedcode.svg";
import rebbtech from "public/about/rebbtech.svg";

import universityLogo from "public/about/university.webp";
import nishasrijan from "public/gallery/srijan-nisha-brisbane.jpg";
import srijan from "public/gallery/srijan.jpg";
import Greeting from "./components/Greeting";

export const metadata: Metadata = {
  title: "About | Srijan Dahal",
  description:
    "Australia-based Software Engineer passionate about building scalable systems, backend architecture, and modern web experiences using Java, JavaScript, and TypeScript.",
  keywords: [
    "Srijan Dahal",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Java Developer",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Australia",
  ],
  authors: [{ name: "Srijan Dahal", url: "https://dahalsrijan.com.np" }],
  metadataBase: new URL("https://dahalsrijan.com.np"),
  openGraph: {
    title: "About | Srijan Dahal",
    description:
      "Meet Srijan Dahal — a software engineer based in Australia specializing in scalable backend systems and modern full-stack web apps.",
    url: "https://dahalsrijan.com.np/about",
    siteName: "Srijan Dahal",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Srijan Dahal - Software Engineer",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Srijan Dahal",
    description:
      "Australia-based Software Engineer building fast, scalable systems with Java, JavaScript, and TypeScript.",
    creator: "@srijandahal",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://dahalsrijan.com.np/about",
  },
};

export default async function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into who I am and what I build.
        </p>
      </div>

      {/* Mobile Gallery */}
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={nishasrijan}
            alt={"brisbane"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={srijan}
            alt={"adelaide"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:block">
        <Gallery />
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {/* --- About Section --- */}
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m <strong>Srijan Dahal</strong> — a Software
              Engineer based in Australia. I love designing, building, and
              optimizing systems that scale.
            </p>
            <p>
              My journey in tech began with curiosity about how systems talk to
              each other. That curiosity turned into a passion for backend
              architecture, distributed systems, and product-driven development.
            </p>
            <p>
              I mainly work with <strong>Java</strong> for backend services,
              <strong> TypeScript / Node.js</strong> for APIs and tooling, and{" "}
              <strong>Next.js / React</strong> for front-end development. I’m
              also interested in <strong>DevOps, cloud automation,</strong> and
              improving developer workflows.
            </p>
            <p>
              When I’m not building software, I’m usually exploring tech
              startups, studying scalable system design, or experimenting with
              new technologies.
            </p>
          </div>
        </Section>

        {/* --- Connect Section --- */}
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* --- Work Section --- */}
        <Section heading="Experience" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I’m an aspiring software engineer who enjoys creating efficient
              and intuitive digital products. So far, I’ve honed my skills
              through my internship and university projects, with a focus on
              real-world impact and usability.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Engineer Intern",
    company: "Rebb Tech",
    date: "2024 - 2025",
    imageSrc: rebbtech,
    link: "https://www.rebbtech.com.au/",
  },

  {
    title: "Software Engineering Bootcamp",
    company: "Dented Code ",
    date: "2023",
    imageSrc: dentedcode,
    link: "https://dentedcode.com/",
  },
  {
    title: "Bachelor of  Information Technology",
    company: "King's Own Institute",
    date: "2019 - 2022",
    imageSrc: universityLogo,
    link: "https://koi.edu.au/",
  },
];
