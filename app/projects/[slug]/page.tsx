import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookifyCaseStudy } from "@/components/BookifyCaseStudy";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { bookifyCaseStudy, getProjectBySlug, projectCaseStudies } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...projectCaseStudies.map((project) => ({ slug: project.slug })), { slug: bookifyCaseStudy.slug }];
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === bookifyCaseStudy.slug) {
    return {
      title: `${bookifyCaseStudy.title} — UI/UX Case Study`,
      description: bookifyCaseStudy.introduction,
    };
  }

  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.introduction,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (slug === bookifyCaseStudy.slug) {
    return <BookifyCaseStudy project={bookifyCaseStudy} />;
  }

  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
