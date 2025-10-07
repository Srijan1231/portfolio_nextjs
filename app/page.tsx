import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from ".contentlayer/generated";
import Link from "@/app/components/Link";
import ProjectList from "@/app/projects/components/ProjectList";

export default function Home() {
  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Intro Section */}
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            hey, I’m Srijan 👋
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I’m a software engineer from{" "}
            <span className="text-primary">Australia</span>
            who loves building for the web with <strong>TypeScript</strong> and
            <strong> Java</strong>. I focus on creating systems that are simple,
            fast, and built to last. Currently exploring{" "}
            <strong>AI tools</strong> and
            <strong> developer productivity</strong>.
          </p>
        </div>

        {/* Social Links */}
        <div
          className="flex animate-in flex-wrap gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://github.com/Srijan1231"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            GitHub
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/srijan12/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            href="mailto:srijan.pdh12@gmail.com"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Contact
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="/resume.pdf"
            openAndDownload
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Resume
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>

      {/* Pinned Projects */}
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary"> Projects</p>
        <p className="tracking-tight text-secondary"> Still working on it...</p>
        {/* <ProjectList projects={projects} /> */}
      </div>
    </div>
  );
}
