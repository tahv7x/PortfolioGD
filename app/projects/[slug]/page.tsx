import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookifyCaseStudy } from "@/components/BookifyCaseStudy";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { RiseClubCaseStudy } from "@/components/RiseClubCaseStudy";
import { SparkCaseStudy } from "@/components/SparkCaseStudy";
import { bookifyCaseStudy, getProjectBySlug, projectCaseStudies, riseClubCaseStudy, sparkCaseStudy } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...projectCaseStudies.map((project) => ({ slug: project.slug })),
    { slug: bookifyCaseStudy.slug },
    { slug: riseClubCaseStudy.slug },
    { slug: sparkCaseStudy.slug },
  ];
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === bookifyCaseStudy.slug) {
    return {
      title: `${bookifyCaseStudy.title} — UI/UX Case Study`,
      description: bookifyCaseStudy.introduction,
    };
  }

  if (slug === riseClubCaseStudy.slug) {
    return {
      title: `${riseClubCaseStudy.title} — Branding Case Study`,
      description: riseClubCaseStudy.introduction,
    };
  }

  if (slug === sparkCaseStudy.slug) {
    return {
      title: `${sparkCaseStudy.title} — Brand Identity Case Study`,
      description: sparkCaseStudy.introduction,
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

  if (slug === riseClubCaseStudy.slug) {
    return <RiseClubCaseStudy project={riseClubCaseStudy} />;
  }

  if (slug === sparkCaseStudy.slug) {
    return <SparkCaseStudy project={sparkCaseStudy} />;
  }

  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
