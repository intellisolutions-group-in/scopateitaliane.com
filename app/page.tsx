"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ThreeHeroBg from "@/components/ui/ThreeHeroBg";
import ThreeTelemetrySandbox from "@/components/ui/ThreeTelemetrySandbox";

const techStackData = {
  frontend: [
    {
      name: "Next.js",
      desc: "React Framework for web apps",
      level: "Production",
      color: "from-black to-neutral-800",
    },
    {
      name: "React 19",
      desc: "UI Library with Server Actions",
      level: "Production",
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "TypeScript",
      desc: "Type-safe JavaScript dialect",
      level: "Standard",
      color: "from-blue-700 to-indigo-600",
    },
    {
      name: "Tailwind CSS v4",
      desc: "Utility-first layout engine",
      level: "Standard",
      color: "from-teal-500 to-cyan-400",
    },
  ],
  backend: [
    {
      name: "Go (Golang)",
      desc: "High-performance systems language",
      level: "Production",
      color: "from-cyan-600 to-blue-500",
    },
    {
      name: "Node.js",
      desc: "Asynchronous runtime engine",
      level: "Production",
      color: "from-green-600 to-emerald-500",
    },
    {
      name: "gRPC / Protobuf",
      desc: "Sub-millisecond microservice RPC",
      level: "Standard",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Python",
      desc: "ML analytics and script orchestration",
      level: "Standard",
      color: "from-yellow-600 to-amber-500",
    },
  ],
  cloud: [
    {
      name: "AWS",
      desc: "Amazon Cloud Web Infrastructure",
      level: "Multi-Region",
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Google Cloud",
      desc: "GCP BigQuery & Compute Engines",
      level: "Hybrid",
      color: "from-blue-500 to-red-500",
    },
    {
      name: "Kubernetes",
      desc: "Containerized node orchestration",
      level: "Scale-Out",
      color: "from-blue-600 to-indigo-500",
    },
    {
      name: "Terraform",
      desc: "Declarative Infrastructure as Code",
      level: "Standard",
      color: "from-purple-700 to-violet-600",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      desc: "Relational database consistency",
      level: "High-Availability",
      color: "from-blue-800 to-indigo-700",
    },
    {
      name: "Redis",
      desc: "In-memory cache & pub/sub broker",
      level: "Sub-millisecond",
      color: "from-red-600 to-rose-500",
    },
    {
      name: "MongoDB",
      desc: "Document-store flexible schemas",
      level: "Standard",
      color: "from-green-600 to-emerald-500",
    },
    {
      name: "Apache Kafka",
      desc: "Distributed event streaming log",
      level: "Event-Sourced",
      color: "from-neutral-700 to-black",
    },
  ],
};

const processSteps = [
  {
    phase: "01",
    name: "Telemetry Audit",
    metric: "100+ Indicators Analyzed",
    details:
      "We deploy passive telemetry probes to analyze throughput bottleneck metrics, database lock patterns, and memory allocations of your legacy servers.",
    icon: "analytics",
  },
  {
    phase: "02",
    name: "Architecture Drafting",
    metric: "Zero Single Points of Failure",
    details:
      "Our principal architects draft an eventually consistent microservices architecture, mapping state machines to low-latency message buses.",
    icon: "architecture",
  },
  {
    phase: "03",
    name: "Distributed Engineering",
    metric: "Pure Typed Verification",
    details:
      "Engineers build microservices in Go and TypeScript, implementing automated integration suites and end-to-end type safety tests.",
    icon: "code",
  },
  {
    phase: "04",
    name: "SLA Verification",
    metric: "99.99% Uptime Verified",
    details:
      "We launch load tests simulating 10x peak traffic patterns and verify sub-45ms responses before pushing production DNS records.",
    icon: "verified",
  },
];

const stepImages = [
  "/images/systems_architect_board.png",
  "/images/team_collaboration.png",
  "/images/frontend_dev_workspace.png",
  "/images/cyber_security_shield.png",
];

const domainVerticals = [
  {
    title: "Fintech & High-Frequency Ledgers",
    metric: "Sub-2ms Reconciliation",
    image: "/images/systems_architect_board.png",
    themeColor: "text-secondary",
    desc: "Deploying deterministic ledger architectures capable of handling 100k+ TPS with synchronous audit trails and risk-mitigation layers.",
    features: [
      "Double-entry ledger engines",
      "PCI-DSS compliance pipelines",
      "Anti-money laundering detection engines",
    ],
    link: "/industries/fintech",
  },
  {
    title: "Healthcare Digital Infrastructures",
    metric: "FHIR-Compliant Secure Mesh",
    image: "/images/systems_architect.png",
    themeColor: "text-blue-500",
    desc: "Unifying legacy healthcare databases into encrypted, HIPAA-compliant patient record meshes with granular telemetry.",
    features: [
      "End-to-end payload encryption",
      "HL7 / FHIR compatibility integrations",
      "Audit-trail validation logs",
    ],
    link: "/industries/healthcare",
  },
  {
    title: "Smart Logistics & Edge Routing",
    metric: "100k+ Connected Devices",
    image: "/images/cloud_ops_engineer.png",
    themeColor: "text-emerald-500",
    desc: "Orchestrating real-time GPS telemetry streams and dynamic delivery route solving systems for multi-modal carrier fleets.",
    features: [
      "Dynamic routing heuristics",
      "Edge node offline synchronization",
      "Geo-fencing push trigger systems",
    ],
    link: "/industries/logistics",
  },
  {
    title: "Manufacturing & Industrial Twins",
    metric: "35% Asset Downtime Reduction",
    image: "/images/erp_operations_control.png",
    themeColor: "text-amber-500",
    desc: "Streaming industrial IIoT timeseries sensor points into predictive digital twin simulations to forecast machinery breakdown.",
    features: [
      "Vibration anomaly alert triggers",
      "Continuous MTBF analytics loops",
      "Industrial SCADA link aggregators",
    ],
    link: "/industries/manufacturing",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "cloud" | "databases"
  >("frontend");
  const [activeStep, setActiveStep] = useState(0);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    const rotX = -normalizedY * 8; // Max 8 degrees tilt
    const rotY = normalizedX * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition =
      "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };

  useEffect(() => {
    // Register GSAP ScrollTrigger inside useEffect safely
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop: Active step highlighting + overlapping stacked transitions
    mm.add("(min-width: 1024px)", () => {
      processSteps.forEach((step, idx) => {
        // Active indicator on scroll
        ScrollTrigger.create({
          trigger: `#step-card-${idx}`,
          start: "top 220px",
          end: "bottom 220px",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStep(idx);
            }
          },
          onEnterBack: () => {
            setActiveStep(idx);
          },
        });

        // Layered overlapping animation: scale down and fade previous card as next card enters
        if (idx < processSteps.length - 1) {
          gsap.to(`#step-card-${idx}`, {
            scrollTrigger: {
              trigger: `#step-card-${idx + 1}`,
              start: "top 95%",
              end: "top 180px",
              scrub: true,
            },
            opacity: 0.15,
            scale: 0.9,
            y: -50,
            ease: "none",
          });
        }
      });

      // Horizontal Scroll Case Studies Showcase Pinning
      const container = document.querySelector(
        ".horizontal-scroll-content",
      ) as HTMLElement;
      if (container) {
        gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-scroll-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }

      // Horizontal Scroll Domain Verticals Pinning
      const container2 = document.querySelector(
        ".horizontal-scroll-content-2",
      ) as HTMLElement;
      if (container2) {
        gsap.to(container2, {
          x: () => -(container2.scrollWidth - window.innerWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-scroll-section-2",
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${container2.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    // Mobile: Highlight vertical card as it enters focus
    mm.add("(max-width: 1023px)", () => {
      processSteps.forEach((step, idx) => {
        ScrollTrigger.create({
          trigger: `#step-card-${idx}`,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStep(idx);
            }
          },
          onEnterBack: () => {
            setActiveStep(idx);
          },
        });
      });
    });

    // Parallax Typography Banner Animations
    gsap.to(".parallax-text-left", {
      x: "-250px",
      scrollTrigger: {
        trigger: ".parallax-text-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".parallax-text-right", {
      x: "250px",
      scrollTrigger: {
        trigger: ".parallax-text-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      mm.revert();
    };
  }, []);

  const scrollToStep = (idx: number) => {
    const el = document.getElementById(`step-card-${idx}`);
    if (el) {
      const yOffset = -150; // account for sticky navbar header
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis.scrollTo(el, { offset: yOffset });
      } else {
        const originalPosition = el.style.position;
        el.style.position = "relative"; // Reset sticky temporarily to calculate natural offsetTop

        let top = 0;
        let curr: HTMLElement | null = el;
        while (curr) {
          top += curr.offsetTop;
          curr = curr.offsetParent as HTMLElement | null;
        }

        el.style.position = originalPosition; // Restore original sticky setting

        const y = top + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setActiveStep(idx);
    }
  };

  return (
    <>
      <TopNavBar />
      <main className="flex-grow flex flex-col gap-0 pb-12 bg-surface-container/10">
        {/* Hero Section with Vibrant Gradients, Three.js Particle BG & Micro-interactions */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-12 md:pt-36 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative overflow-hidden">
          {/* Interactive Three.js WebGL Particle Network */}
          <ThreeHeroBg />

          <div className="absolute top-10 left-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full filter blur-[80px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-[#6366F1]/10 rounded-full filter blur-[70px] -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>

          <div className="col-span-1 lg:col-span-7 flex flex-col gap-lg z-10">
            <span className="gsap-hero-animate font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-secondary to-[#6366F1] text-transparent bg-clip-text font-bold block mb-xs">
              Systems Architect & Developer Operations
            </span>
            <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary leading-none">
              Precision Engineering for <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-[#6366F1] text-transparent bg-clip-text">
                Enterprise Scale
              </span>
              .
            </h1>
            <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl mt-md">
              We architecture, build, and optimize high-performance software
              systems. Delivering robust technological foundations that drive
              operational excellence and market dominance.
            </p>

            <div className="gsap-hero-animate flex flex-wrap gap-md mt-lg">
              <Link
                className="gsap-scale-in bg-primary text-white px-[32px] py-[16px] font-sans text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all border border-primary font-bold rounded-full shadow-md hover:shadow-lg duration-300"
                href="/services"
              >
                Explore Solutions
              </Link>
              <Link
                className="gsap-scale-in bg-transparent text-primary px-[32px] py-[16px] font-sans text-xs uppercase tracking-widest hover:bg-neutral-100/80 transition-all border border-neutral-200/80 flex items-center gap-2 font-bold rounded-full shadow-sm duration-300"
                href="/technologies"
              >
                View Technology Stack
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 mt-xxl lg:mt-0 z-10">
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="w-full aspect-[4/3] border border-neutral-200/80 rounded-2xl relative overflow-hidden bg-surface-container-low group shadow-lg hover:shadow-2xl transition-all duration-500 gsap-image-reveal"
            >
              <img
                alt="Team collaboration operations"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                src="/images/team_collaboration.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Section Divider drawing horizontally on scroll */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Trust Indicators */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <p className="font-sans text-xs uppercase tracking-widest text-on-surface-variant mb-lg text-center md:text-left font-bold gsap-fade-in">
            Trusted Infrastructure Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-md justify-center items-center">
            {[
              {
                name: "CORPNET",
                icon: "dns",
                color: "hover:text-secondary hover:border-secondary/30",
              },
              {
                name: "GLOBALSYS",
                icon: "language",
                color: "hover:text-blue-500 hover:border-blue-500/30",
              },
              {
                name: "DATACORE",
                icon: "database",
                color: "hover:text-amber-500 hover:border-amber-500/30",
              },
              {
                name: "NEXUSIT",
                icon: "hub",
                color: "hover:text-teal-500 hover:border-teal-500/30",
              },
              {
                name: "OMNITECH",
                icon: "terminal",
                color: "hover:text-purple-500 hover:border-purple-500/30",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className={`gsap-scale-in flex items-center justify-center gap-sm bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-2xl py-4 px-md shadow-sm transition-[border-color,box-shadow] duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-default ${partner.color}`}
              >
                <span className="material-symbols-outlined text-neutral-400 group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </span>
                <span className="font-display text-sm font-bold tracking-tighter text-primary">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Parallax Typography Scrolling Banner */}
        <section className="parallax-text-section w-full overflow-hidden py-16 bg-neutral-900 text-white relative border-y border-neutral-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          <div className="flex flex-col gap-md select-none">
            <div className="parallax-text-left whitespace-nowrap font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-neutral-800/40 flex gap-xxl items-center">
              <span>System Architecture</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>Distributed Systems</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>Load Balancing</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>High Availability</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>System Architecture</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>Distributed Systems</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>Load Balancing</span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span>High Availability</span>
            </div>
            <div className="parallax-text-right whitespace-nowrap font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white/10 flex gap-xxl items-center self-end">
              <span>Predictive Telemetry</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>Zero Trust Security</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>Cloud Deployments</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>IIoT Digital Twins</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>Predictive Telemetry</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>Zero Trust Security</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>Cloud Deployments</span>
              <span className="w-3 h-3 rounded-full bg-[#6366F1]"></span>
              <span>IIoT Digital Twins</span>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Core Competencies Bento Grid */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 bg-surface rounded-3xl shadow-sm border border-neutral-200/40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xxl gap-lg px-4 gsap-slide-up">
            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">
                01 // Engineering Solutions
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary mb-md">
                Core Competencies
              </h2>
              <p className="font-sans text-sm md:text-body-lg text-on-surface-variant">
                Strategic engineering services designed to solve complex
                architectural challenges and scale enterprise operations.
              </p>
            </div>
            <Link
              className="font-sans text-xs uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors inline-flex items-center gap-2 font-bold"
              href="/services"
            >
              All Services{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="gsap-stagger-scale grid grid-cols-1 md:grid-cols-12 gap-md p-2">
            {/* 1. Cloud Architecture (col-span-8) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="gsap-stagger-item col-span-1 md:col-span-8 border border-neutral-200/80 p-lg bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 hover:-translate-y-1 transition-[border-color,box-shadow,background-color] duration-300 group relative overflow-hidden flex flex-col md:flex-row gap-lg justify-between"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-sm mb-lg">
                    <span className="material-symbols-outlined text-[32px] text-secondary">
                      architecture
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest border border-neutral-200 px-3 py-1 bg-neutral-50 font-bold rounded-full shadow-sm text-secondary">
                      Primary
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-primary mb-sm">
                    Cloud Architecture & Migration
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant mb-md leading-relaxed">
                    Designing resilient, scalable cloud infrastructures.
                    Seamlessly migrating legacy systems to modern distributed
                    environments while minimizing downtime.
                  </p>
                  <ul className="space-y-2 mb-lg">
                    {[
                      "Multi-Region High Availability Clusters",
                      "Declarative Infrastructure as Code (IaC)",
                      "Self-Healing Container Orchestration",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 font-sans text-xs text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-xs text-secondary">
                          check
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/services/cloud-infrastructure"
                  className="font-sans text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary inline-flex items-center gap-1 mt-auto"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
              <div className="w-full md:w-[280px] h-[220px] md:h-auto relative overflow-hidden rounded-xl border border-neutral-200/80 shadow-sm bg-white shrink-0 gsap-image-reveal">
                <img
                  alt="Modern datacenter server racks with glowing lights"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-xl"
                  src="/images/cloud_ops_engineer.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>

            {/* 2. Cybersecurity (col-span-4) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="gsap-stagger-item col-span-1 md:col-span-4 border border-neutral-200/80 p-lg bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 hover:-translate-y-1 transition-[border-color,box-shadow,background-color] duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="w-full h-[160px] relative overflow-hidden rounded-xl border border-neutral-200/80 shadow-sm bg-white mb-lg gsap-image-reveal">
                <img
                  alt="Secure corporate server room environment"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-xl"
                  src="/images/cyber_security_shield.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[32px] text-secondary mb-md block">
                    security
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-primary mb-sm">
                    Cybersecurity
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-md">
                    Implementing zero-trust frameworks, strict multi-factor
                    authentication, and proactive threat mitigation protocols
                    for absolute data sovereignty.
                  </p>
                </div>
                <Link
                  href="/services/cybersecurity"
                  className="font-sans text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary inline-flex items-center gap-1 mt-auto"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>

            {/* 3. AI Integration (col-span-4) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="gsap-stagger-item col-span-1 md:col-span-4 border border-neutral-200/80 p-lg bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 hover:-translate-y-1 transition-[border-color,box-shadow,background-color] duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="w-full h-[160px] relative overflow-hidden rounded-xl border border-neutral-200/80 shadow-sm bg-white mb-lg gsap-image-reveal">
                <img
                  alt="Systems consultant sketching a neural architecture on a whiteboard"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-xl"
                  src="/images/systems_architect_board.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[32px] text-[#6366F1] mb-md block">
                    memory
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-primary mb-sm">
                    AI & Machine Learning
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-md">
                    Embedding custom fine-tuned predictive models and autonomous
                    multi-agent loops into operational workflows for data-driven
                    telemetry.
                  </p>
                </div>
                <Link
                  href="/services/ai-machine-learning"
                  className="font-sans text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary inline-flex items-center gap-1 mt-auto"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>

            {/* 4. Custom Software Engineering (col-span-8) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="gsap-stagger-item col-span-1 md:col-span-8 border border-neutral-200/80 p-lg bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 hover:-translate-y-1 transition-[border-color,box-shadow,background-color] duration-300 group relative overflow-hidden flex flex-col md:flex-row gap-lg justify-between"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-sm mb-lg">
                    <span className="material-symbols-outlined text-[32px] text-secondary">
                      code_blocks
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-primary mb-sm">
                    Custom Software Engineering
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant mb-md leading-relaxed">
                    Full-stack engineering of bespoke enterprise systems.
                    Designing scalable, maintainable, and type-safe systems
                    mapped to specific business processes.
                  </p>
                  <ul className="space-y-2 mb-lg">
                    {[
                      "Enterprise CRM & ERP Systems",
                      "High-Throughput Relational Databases",
                      "Custom API & Integration Gateways",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 font-sans text-xs text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-xs text-secondary">
                          check
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/services/website-development"
                  className="font-sans text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary inline-flex items-center gap-1 mt-auto"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
              <div className="w-full md:w-[280px] h-[220px] md:h-auto relative overflow-hidden rounded-xl border border-neutral-200/80 shadow-sm bg-white shrink-0 gsap-image-reveal">
                <img
                  alt="Developer working at a desk with multiple monitors showing code"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-xl"
                  src="/images/frontend_dev_workspace.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Process Blueprint Timeline (Interactive & Scroll-linked Parallax) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="max-w-3xl mb-xxl gsap-slide-up">
            <span className="font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-secondary to-[#6366F1] text-transparent bg-clip-text font-bold block mb-xs">
              Execution Roadmap
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary">
              Process Blueprint
            </h2>
            <p className="font-sans text-sm md:text-body-lg text-on-surface-variant mt-sm">
              A structured engineering process guarantees delivery alignment,
              removing single points of failure at every execution milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            {/* Steps Left List (Sticky Navigation) */}
            <div className="hidden lg:flex col-span-12 lg:col-span-5 lg:sticky lg:top-[160px] self-start flex-col gap-md gsap-stagger-scale relative pl-1">
              {processSteps.map((step, idx) => (
                <button
                  key={step.phase}
                  onClick={() => scrollToStep(idx)}
                  className={`gsap-stagger-item flex items-center gap-lg border-y border-r border-l-4 p-md text-left transition-[border-color,background-color,box-shadow] duration-300 w-full rounded-2xl cursor-pointer ${
                    activeStep === idx
                      ? "border-l-secondary border-y-neutral-200 border-r-neutral-200 bg-white shadow-[0_10px_30px_rgba(203,41,87,0.06)] scale-[1.02] text-primary"
                      : "border-l-transparent border-y-neutral-200/50 border-r-neutral-200/50 bg-white/40 hover:bg-white text-primary"
                  }`}
                >
                  <span
                    className={`font-display text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${
                      activeStep === idx
                        ? "bg-secondary text-white shadow-[0_4px_12px_rgba(203,41,87,0.3)] scale-110"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {step.phase}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase text-primary leading-tight tracking-wide transition-colors duration-300">
                      {step.name}
                    </h4>
                    <span className="font-sans text-[10px] text-secondary font-semibold uppercase tracking-wider">
                      {step.metric}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Details Right Panel Stack (Sticky Overlapping Cards Stack) */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-md lg:gap-[80vh] w-full pb-8 lg:pb-12">
              {processSteps.map((step, idx) => (
                <div
                  key={step.phase}
                  id={`step-card-${idx}`}
                  style={{
                    zIndex: 10 + idx,
                  }}
                  className={`lg:top-[160px] border border-neutral-200/50 text-primary p-xl rounded-3xl min-h-[420px] flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.03)] relative overflow-hidden transition-[border-color,box-shadow] duration-500 ease-out lg:sticky w-full ${
                    activeStep === idx
                      ? "border-secondary/40 ring-1 ring-secondary/10 shadow-[0_20px_45px_rgba(203,41,87,0.05)]"
                      : "border-neutral-200/60"
                  }`}
                >
                  {/* Background cover image */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden rounded-3xl">
                    <img
                      src={stepImages[idx]}
                      alt={step.name}
                      className={`w-full h-full object-cover transition-all duration-1000 ${
                        activeStep === idx
                          ? "scale-105 opacity-100"
                          : "opacity-90"
                      }`}
                    />
                    <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none" />
                  </div>

                  {/* Glowing background orb for premium depth */}
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-secondary/10 to-indigo-500/5 rounded-full filter blur-2xl pointer-events-none z-0"></div>

                  {/* Content Container Overlay */}
                  <div className="relative z-10 flex flex-col justify-between flex-grow h-full gap-lg">
                    {/* Glassmorphic Text Container Box */}
                    <div className="bg-white/80 backdrop-blur-md border border-white/60 p-lg rounded-2xl max-w-xl shadow-lg relative z-10 flex flex-col gap-md">
                      <div className="flex items-center gap-md">
                        <span className="material-symbols-outlined text-[32px] text-secondary bg-secondary/5 p-2 rounded-xl border border-secondary/10 shadow-sm">
                          {step.icon}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-[#6366F1] font-extrabold bg-[#6366F1]/10 px-3 py-1 rounded-full border border-[#6366F1]/20">
                          PHASE {step.phase}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold uppercase text-primary border-b border-neutral-100 pb-sm mt-xs tracking-tight">
                        {step.name}
                      </h3>
                      <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Glassmorphic Footer Overlay docked at the bottom */}
                  <div className="mt-xl pt-md flex justify-between items-center relative z-10 bg-white/80 backdrop-blur-md -mx-xl -mb-xl p-md px-xl rounded-b-3xl border-t border-neutral-200/40">
                    <div className="flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        verified_user
                      </span>
                      <span className="font-sans text-[10px] uppercase text-secondary font-bold tracking-widest">
                        Metric Verification Indicator
                      </span>
                    </div>
                    <span className="font-sans text-[10px] bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {step.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Horizontal Scroll Case Studies Showcase */}
        <div>
          <section className="horizontal-scroll-section w-full h-screen overflow-hidden bg-neutral-950 text-white relative flex flex-col justify-center select-none py-12">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            {/* Subtle glowing color blobs for rich aesthetics */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[6000ms]" />

            {/* Section Header */}
            <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-lg relative z-10 shrink-0">
              <span className="font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-secondary to-[#6366F1] text-transparent bg-clip-text font-bold block mb-xs">
                02 // Proof of Execution
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-none">
                Featured Case Studies
              </h2>
              <p className="font-sans text-sm text-neutral-400 mt-xs max-w-xl">
                Observe real-world implementations of our high-throughput
                systems, zero-latency API ledgers, and predictive twins.
              </p>
            </div>

            {/* Horizontal scroll container (using flex-row overflow-x-auto on mobile, and GSAP sticky on desktop) */}
            <div className="w-full overflow-x-auto lg:overflow-x-hidden relative z-10 py-md scrollbar-none">
              <div className="horizontal-scroll-content flex gap-xl px-margin-mobile md:px-[8vw] w-max items-center h-full">
                {[
                  {
                    title: "Cloud Infrastructure Migration",
                    metric: "45% Cloud Cost Reduction",
                    image: "/images/cloud_ops_engineer.png",
                    tags: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
                    desc: "Designing and executing a zero-downtime migration of a legacy enterprise core network cluster into multi-region Kubernetes nodes.",
                    bg: "from-[#111215] to-[#181a20]",
                    accent: "border-secondary/25",
                  },
                  {
                    title: "Fintech Real-Time Telemetry Hub",
                    metric: "Sub-2ms Processing Bounds",
                    image: "/images/systems_architect_board.png",
                    tags: ["Go (Golang)", "Apache Kafka", "gRPC", "Redis"],
                    desc: "Engineering a transaction processing ledger scaling to 10B+ daily requests with synchronous auditing tracks and risk checks.",
                    bg: "from-[#111215] to-[#1a1820]",
                    accent: "border-indigo-500/20",
                  },
                  {
                    title: "Industrial IIoT Digital Twin",
                    metric: "35% Asset Downtime Reduction",
                    image: "/images/erp_operations_control.png",
                    tags: ["C++", "TimescaleDB", "MQTT", "Python ML"],
                    desc: "Mapping a factory floor to simulated timeseries engines, predicting machine component wear hours before structural breakdown.",
                    bg: "from-[#111215] to-[#18201b]",
                    accent: "border-emerald-500/20",
                  },
                  {
                    title: "Enterprise CRM & ERP Systems",
                    metric: "99.999% SLA Uptime Verified",
                    image: "/images/systems_architect.png",
                    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
                    desc: "Consolidating siloed corporate databases into unified FHIR-compliant record logs running under active load warning loops.",
                    bg: "from-[#111215] to-[#201c18]",
                    accent: "border-amber-500/25",
                  },
                ].map((panel, index) => (
                  <div
                    key={index}
                    className={`horizontal-scroll-panel w-[85vw] md:w-[45vw] lg:w-[36vw] shrink-0 h-[50vh] min-h-[360px] border border-neutral-800/80 rounded-3xl p-lg md:p-xl bg-gradient-to-br ${panel.bg} flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:border-secondary/40 transition-colors duration-500 group relative overflow-hidden`}
                  >
                    {/* Subtle color highlight in card corner */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/5 to-transparent rounded-bl-full pointer-events-none`}
                    ></div>

                    <div className="flex flex-col gap-md">
                      <div className="flex justify-between items-center border-b border-neutral-800 pb-sm">
                        <span className="font-mono text-xs text-neutral-500 font-semibold">
                          PROJECT_{index + 1}
                        </span>
                        <span className="font-sans text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          {panel.metric}
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-white tracking-tight mt-xs group-hover:text-secondary transition-colors">
                        {panel.title}
                      </h3>

                      <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mt-2">
                        {panel.desc}
                      </p>
                    </div>

                    {/* Decorative dynamic code preview image element */}
                    <div className="w-full h-[16vh] relative rounded-2xl overflow-hidden border border-neutral-800/85 mt-md group-hover:border-neutral-700/60 transition-colors duration-500 z-10">
                      <img
                        src={panel.image}
                        alt={panel.title}
                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl" />
                    </div>

                    <div className="flex flex-wrap gap-xs mt-lg pt-sm z-10">
                      {panel.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-sans text-[9px] uppercase tracking-wider font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Interactive Filterable Tech Stack Explorer */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xxl gap-lg gsap-slide-up">
            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-secondary to-[#6366F1] text-transparent bg-clip-text font-bold block mb-xs">
                Our Engineering Core
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary">
                Technology Catalog
              </h2>
              <p className="font-sans text-sm md:text-body-lg text-on-surface-variant mt-sm">
                Filter our verified system catalog modules by architectural
                stack domains.
              </p>
            </div>

            {/* Filter Pill Tab Buttons */}
            <div className="flex flex-wrap gap-xs bg-neutral-900/10 p-1 rounded-full border border-neutral-200/60 shadow-inner max-md:w-full max-md:justify-center">
              {(
                Object.keys(techStackData) as Array<keyof typeof techStackData>
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 font-sans text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-bold cursor-pointer ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-md"
                      : "text-primary hover:bg-neutral-200/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid nodes */}
          <div className="gsap-stagger-scale grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md transition-all duration-300">
            {techStackData[activeTab].map((node) => (
              <div
                key={node.name}
                className="gsap-stagger-item border border-neutral-200/80 p-lg rounded-2xl bg-white text-primary shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 hover:-translate-y-1 transition-[border-color,box-shadow] duration-300 flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary to-[#6366F1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div>
                  <div className="flex justify-between items-center mb-md">
                    <span className="font-display text-lg font-bold text-primary">
                      {node.name}
                    </span>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-secondary border border-secondary/20 px-2 py-0.5 rounded-full font-bold bg-secondary/5">
                      {node.level}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
                <div className="mt-lg pt-md border-t border-neutral-200/80 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    Standard Spec
                  </span>
                  <span className="material-symbols-outlined text-sm text-neutral-700 group-hover:text-secondary transition-colors">
                    check_circle
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Domain Verticals Horizontal Scroll Showcase (Light/Glassmorphic themed) */}
        <div>
          <section className="horizontal-scroll-section-2 w-full h-screen overflow-hidden bg-white text-primary relative flex flex-col justify-center select-none py-12 border-t border-b border-neutral-200/60 shadow-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6366F1]/5 rounded-full filter blur-[80px] pointer-events-none" />

            {/* Section Header */}
            <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-lg relative z-10 shrink-0">
              <span className="font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-secondary to-[#6366F1] text-transparent bg-clip-text font-bold block mb-xs">
                03 // Domain Expertise
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary leading-none">
                Industries We Transform
              </h2>
              <p className="font-sans text-sm text-on-surface-variant mt-xs max-w-xl">
                We build specialized, compliant technology architectures
                tailored to scale vertical-specific business modules.
              </p>
            </div>

            {/* Horizontal scroll container (overflow-x-auto fallback for mobile, GSAP pin on desktop) */}
            <div className="w-full overflow-x-auto lg:overflow-x-hidden relative z-10 py-md scrollbar-none">
              <div className="horizontal-scroll-content-2 flex gap-xl px-margin-mobile md:px-[8vw] w-max items-center h-full">
                {domainVerticals.map((vertical, index) => (
                  <div
                    key={index}
                    className="horizontal-scroll-panel-2 w-[85vw] md:w-[45vw] lg:w-[36vw] shrink-0 h-[50vh] min-h-[360px] border border-neutral-200/80 rounded-3xl p-lg md:p-xl bg-white flex flex-col justify-between shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-secondary/40 transition-colors duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/5 to-transparent rounded-bl-full pointer-events-none"></div>

                    <div className="flex flex-col gap-md">
                      <div className="flex justify-between items-center border-b border-neutral-100 pb-sm">
                        <span className="font-mono text-xs text-neutral-400 font-semibold">
                          VERTICAL_{index + 1}
                        </span>
                        <span
                          className={`font-sans text-[10px] bg-neutral-150 ${vertical.themeColor} border border-neutral-200/60 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider`}
                        >
                          {vertical.metric}
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-primary tracking-tight mt-xs group-hover:text-secondary transition-colors">
                        {vertical.title}
                      </h3>

                      <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-md mt-xs">
                        {vertical.desc}
                      </p>
                    </div>

                    {/* Image asset container */}
                    <div className="w-full h-[16vh] relative rounded-2xl overflow-hidden border border-neutral-200/80 mt-md z-10">
                      <img
                        src={vertical.image}
                        alt={vertical.title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
                    </div>

                    <div className="flex justify-between items-center mt-lg pt-sm z-10">
                      <div className="flex flex-wrap gap-xs">
                        {vertical.features.slice(0, 1).map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className="font-sans text-[9px] uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-50 border border-neutral-100 px-2.5 py-0.5 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={vertical.link}
                        className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-primary hover:text-secondary inline-flex items-center gap-1"
                      >
                        Explore Vertical{" "}
                        <span className="material-symbols-outlined text-[12px]">
                          arrow_right_alt
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Enterprise Engineering Divisions Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 rounded-3xl bg-white shadow-sm border border-neutral-200/60">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xxl gap-lg px-4 gsap-slide-up">
            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">
                04 // Engineering Divisions
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary font-bold">
                Enterprise Engineering Divisions
              </h2>
              <p className="font-sans text-sm md:text-body-lg text-on-surface-variant">
                Our specialized technical teams audit active server clusters and
                deploy resilient scaling models.
              </p>
            </div>
            <Link
              className="font-sans text-xs uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors inline-flex items-center gap-2 font-bold"
              href="/about"
            >
              Our Operations{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="gsap-stagger-scale grid grid-cols-1 md:grid-cols-3 gap-md p-2">
            {[
              {
                name: "Systems Architecture Division",
                role: "Core Technical Competency",
                image: "/images/systems_architect.png",
                spec: "Data Replication Models",
                desc: "Designing active-active databases, transactional replication logs, and high-throughput low-latency cache layers for zero-downtime operations.",
              },
              {
                name: "Distributed Cloud Operations",
                role: "Core Cloud Infrastructure",
                image: "/images/cloud_ops_engineer.png",
                spec: "Self-Healing Kubernetes Clusters",
                desc: "Orchestrating multi-region scaling platforms using declarative pipelines, container mesh nodes, and zero-trust secured topology.",
              },
              {
                name: "Systems Integration & Delivery",
                role: "Core Deployment Pipelines",
                image: "/images/integration_lead.png",
                spec: "Parallel Telemetry Audits",
                desc: "Deploying directly with enterprise DevOps channels to eliminate performance bottlenecks and guarantee schema parity.",
              },
            ].map((member, index) => (
              <div
                key={index}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="gsap-stagger-item border border-neutral-200/80 p-lg bg-white rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 hover:-translate-y-1 transition-[border-color,box-shadow,background-color] duration-300 group overflow-hidden relative flex flex-col justify-between"
              >
                <div className="w-full aspect-square relative overflow-hidden rounded-xl border border-neutral-200/85 shadow-sm mb-lg bg-neutral-50">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 rounded-xl"
                    src={member.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-xl" />
                  <div className="absolute bottom-3 left-3 bg-surface/95 backdrop-blur-md px-3 py-1 border border-neutral-200/60 font-sans text-[9px] uppercase font-bold rounded-full shadow-sm">
                    {member.spec}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">
                    {member.name}
                  </h3>
                  <span className="font-sans text-xs text-secondary font-bold uppercase tracking-wider block mb-sm">
                    {member.role}
                  </span>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-md">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-sm border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-450 font-bold">
                    VERIFIED_SPECIALIST
                  </span>
                  <span className="material-symbols-outlined text-sm text-neutral-450 group-hover:text-secondary transition-colors">
                    verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Operational Statistics */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 bg-white/60 backdrop-blur-md rounded-3xl shadow-md border border-neutral-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              {
                value: "99.99%",
                label: "Uptime SLA Delivered",
                icon: "cloud_done",
                desc: "Guaranteed high availability clusters",
              },
              {
                value: "150+",
                label: "Enterprise Deployments",
                icon: "rocket_launch",
                desc: "Validated production infrastructures",
              },
              {
                value: "<45ms",
                label: "Avg Latency Reduction",
                icon: "speed",
                desc: "Sub-millisecond API execution times",
              },
              {
                value: "24/7",
                label: "Continuous Monitoring",
                icon: "monitoring",
                desc: "Active telemetry and warning sensors",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="gsap-scale-in flex flex-col items-center p-lg text-center bg-white border border-neutral-200/80 hover:border-secondary/40 text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:-translate-y-1 transition-[border-color,box-shadow] duration-300"
              >
                <span className="material-symbols-outlined text-secondary text-2xl mb-sm">
                  {stat.icon}
                </span>
                <span className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-xs">
                  {stat.value}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-primary font-bold mb-xs">
                  {stat.label}
                </span>
                <span className="font-sans text-[10px] text-on-surface-variant">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* Telemetry Node Sandbox Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="max-w-3xl mb-xxl gsap-slide-up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">
              05 // Architectural Simulator
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary">
              Systems Telemetry Sandbox
            </h2>
            <p className="font-sans text-sm md:text-body-lg text-on-surface-variant">
              Observe live packet forwarding routes and node health warnings
              across our simulated high-throughput load balancer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-stretch">
            {/* Left box: Live node simulation */}
            <div className="col-span-12 lg:col-span-7 bg-neutral-950 text-white rounded-3xl p-lg border border-neutral-800 flex flex-col justify-between shadow-xl min-h-[380px] group relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

              <div>
                <div className="flex justify-between items-center border-b border-neutral-800 pb-sm mb-lg">
                  <div className="flex items-center gap-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <span className="font-mono text-xs text-neutral-450 ml-sm font-semibold">
                      load-balancer-routing.config
                    </span>
                  </div>
                  <span className="font-sans text-[10px] bg-secondary/15 text-secondary px-3 py-0.5 rounded-full font-bold tracking-widest uppercase animate-pulse">
                    Running
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-white mb-sm">
                  Active Packet Forwarding Topology
                </h3>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-lg max-w-md">
                  Observe the distribution of simulated ingress requests
                  directed into secondary failover databases. Heavy loads
                  automatically trigger dynamic balancing vectors to prevent
                  memory starvation.
                </p>
              </div>

              {/* Connected interactive 3D WebGL simulator */}
              <ThreeTelemetrySandbox />
            </div>

            {/* Right column: Stat grid & information */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-md">
              <div className="border border-neutral-200/80 p-lg bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between flex-grow">
                <div>
                  <span className="material-symbols-outlined text-secondary text-[36px] mb-md block">
                    schema
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-primary mb-xs">
                    Deterministic Load Balancer
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Our routing engines evaluate real-time queue lengths at edge
                    nodes and dynamically forward incoming streams to lower load
                    clusters.
                  </p>
                </div>
                <div className="mt-lg pt-sm border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">
                    ALGORITHM // round-robin-telemetry
                  </span>
                  <span className="font-sans text-[10px] bg-secondary/5 text-secondary border border-secondary/15 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Active
                  </span>
                </div>
              </div>

              <div className="border border-neutral-200/80 p-lg bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between flex-grow">
                <div>
                  <span className="material-symbols-outlined text-[#6366F1] text-[36px] mb-md block">
                    network_node
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-primary mb-xs">
                    State Machine Reconciliation
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Zero single points of failure. If any server node fails
                    health checks, DNS records instantly direct incoming traffic
                    to active standby targets.
                  </p>
                </div>
                <div className="mt-lg pt-sm border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">
                    RECOVERY // instant-failover-dns
                  </span>
                  <span className="font-sans text-[10px] bg-secondary/5 text-secondary border border-secondary/15 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* CTA Section Card Island */}
        <section className="mx-4 md:mx-margin-desktop max-w-container-max md:w-[calc(100%-128px)] bg-primary text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-xl p-lg md:p-[64px] rounded-3xl shadow-xl my-4 border border-neutral-800 relative overflow-hidden self-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <div className="max-w-2xl relative z-10 gsap-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-md">
              Ready to optimize your infrastructure?
            </h2>
            <p className="font-sans text-md text-surface-dim">
              Engage with our senior engineering team to audit your current
              architecture and chart a path to scalable efficiency.
            </p>
          </div>
          <div className="relative z-10 shrink-0 gsap-scale-in">
            <Link
              className="accent-bg px-[32px] py-[16px] font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all border border-transparent hover:border-primary inline-flex items-center gap-2 font-bold text-center rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98]"
              href="/contact"
            >
              Request Architecture Audit{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
