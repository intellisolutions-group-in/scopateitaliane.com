import { Metadata } from "next";
import React from "react";
import { getJobBySlug, jobRequisitions } from "../../careersData";
import JobDetailClient from "./JobDetailClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} - Careers`,
    description: `Apply for the ${job.title} position at Scopate Italiane Digital. ${job.summary.slice(0, 120)}...`,
    alternates: {
      canonical: `/careers/jobs/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return jobRequisitions.map((job) => ({
    slug: job.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
