"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import ThreeHeroBg from "@/components/ui/ThreeHeroBg";
import { BlogPost } from "../blogData";

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    const rotX = -normalizedY * 8; // Max 8 degrees tilt
    const rotY = normalizedX * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };

  return (
    <>
      <Navbar />

      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-surface-container/10">
        <ThreeHeroBg />

        <header className="max-w-[800px] mx-auto mb-huge z-10 relative">
          <div className="flex items-center space-x-md mb-lg">
            <span className="font-label-sm text-label-sm uppercase text-secondary px-sm py-xs border border-secondary bg-white font-bold">{post.category}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">{post.readTime}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">{post.date}</span>
          </div>
          <h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-xl leading-tight">{post.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl border-l-2 border-neutral-200/80 pl-md">
            {post.desc}
          </p>
          <div className="flex items-center space-x-md border-t border-neutral-200/80 pt-md">
            <img 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full border border-neutral-200/80" 
              src={post.author.image} 
            />
            <div>
              <p className="font-label-sm text-label-sm text-primary">{post.author.name}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant font-normal">{post.author.role}</p>
            </div>
          </div>
        </header>

        <figure className="w-full mb-huge max-w-[1000px] mx-auto z-10 relative cursor-pointer">
          <div 
            className="w-full"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <img 
              alt={post.title} 
              className="w-full aspect-video object-cover border border-neutral-200/80 rounded-2xl shadow-md transition-transform duration-500 hover:scale-[1.01]" 
              src={post.image} 
            />
          </div>
          <figcaption className="font-label-sm text-label-sm text-on-surface-variant mt-sm text-center">Fig 1. Systems architecture visualization.</figcaption>
        </figure>

        <article className="max-w-[700px] mx-auto font-body-lg text-body-lg text-primary leading-relaxed space-y-xl z-10 relative">
          <p className="">{post.introduction}</p>

          {post.sections.map((section, idx) => {
            if (section.type === "heading") {
              return (
                <h2 key={idx} className="font-headline-md text-headline-md text-primary mt-huge mb-lg">
                  {section.value}
                </h2>
              );
            }
            if (section.type === "paragraph") {
              return (
                <p key={idx} className="">
                  {section.value}
                </p>
              );
            }
            if (section.type === "blockquote") {
              return (
                <blockquote key={idx} className="border-l-4 border-secondary pl-xl py-md my-xxl bg-surface-container-high">
                  <p className="font-headline-md text-headline-md italic text-primary">"{section.value}"</p>
                  {section.authorName && (
                    <footer className="font-label-sm text-label-sm text-on-surface-variant mt-md">— {section.authorName}</footer>
                  )}
                </blockquote>
              );
            }
            if (section.type === "code") {
              return (
                <div key={idx} className="bg-primary text-on-primary p-md my-xl border border-neutral-200/80 overflow-x-auto rounded-xl shadow-sm text-xs font-mono">
                  <pre><code>{section.value}</code></pre>
                </div>
              );
            }
            if (section.type === "list") {
              return (
                <ul key={idx} className="list-disc pl-lg space-y-md my-lg border-l border-neutral-200/80 ml-sm">
                  {section.items?.map((item, itemIdx) => (
                    <li key={itemIdx} className="pl-md">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>

        <div className="max-w-[700px] mx-auto mt-huge pt-xl border-t border-neutral-200/80 flex flex-col md:flex-row justify-between items-center gap-lg z-10 relative">
          <div className="flex flex-wrap gap-sm">
            <span className="px-md py-xs border border-neutral-200/80 font-label-sm text-label-sm rounded-2xl bg-white">{post.category}</span>
            <span className="px-md py-xs border border-neutral-200/80 font-label-sm text-label-sm rounded-2xl bg-white">Systems Engineering</span>
            <span className="px-md py-xs border border-neutral-200/80 font-label-sm text-label-sm rounded-2xl bg-white">Automation</span>
          </div>
          <div className="flex items-center space-x-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Share</span>
            <button className="w-8 h-8 flex items-center justify-center border border-neutral-200/80 rounded-full hover:bg-primary hover:text-white transition-colors bg-white cursor-pointer"><span className="material-symbols-outlined text-[20px]">share</span></button>
            <button className="w-8 h-8 flex items-center justify-center border border-neutral-200/80 rounded-full hover:bg-primary hover:text-white transition-colors bg-white cursor-pointer"><span className="material-symbols-outlined text-[20px]">bookmark</span></button>
          </div>
        </div>

        <div className="max-w-[700px] mx-auto mt-huge bg-white p-xl border border-neutral-200/80 rounded-2xl flex flex-col md:flex-row gap-xl items-start shadow-sm z-10 relative">
          <img 
            alt={post.author.name} 
            className="w-24 h-24 rounded-full shrink-0 border border-neutral-200/80 shadow-md" 
            src={post.author.image} 
          />
          <div>
            <h4 className="font-headline-md text-[24px] text-primary mb-sm">{post.author.name}</h4>
            <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-md">{post.author.role}</p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">{post.author.bio}</p>
            <Link className="font-label-sm text-label-sm text-primary underline decoration-2 hover:text-secondary transition-colors" href="/blog">View all articles</Link>
          </div>
        </div>

        <section className="mt-huge pt-huge border-t border-neutral-200/80 z-10 relative">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-xl">Related Insights</h2>
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">

            {relatedPosts[0] && (
              <Link 
                className="md:col-span-8 group block border border-neutral-200/80 rounded-2xl bg-white hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer" 
                href={relatedPosts[0].link}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="min-h-[16rem] h-auto overflow-hidden relative border-b border-neutral-200/80 w-full">
                  <img 
                    alt={relatedPosts[0].title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                    src={relatedPosts[0].image} 
                  />
                  <div className="absolute top-md left-md bg-white px-sm py-xs border border-neutral-200/80 font-label-sm text-label-sm text-primary rounded-2xl">{relatedPosts[0].category}</div>
                </div>
                <div className="p-lg flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-[24px] text-primary mb-sm group-hover:text-secondary transition-colors">{relatedPosts[0].title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{relatedPosts[0].desc}</p>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-lg uppercase font-bold">{relatedPosts[0].readTime}</span>
                </div>
              </Link>
            )}

            <div className="md:col-span-4 flex flex-col gap-gutter">
              {relatedPosts.slice(1, 3).map((rel) => (
                <Link 
                  key={rel.slug}
                  className="group block border border-neutral-200/80 rounded-2xl bg-white hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 flex-1 p-lg flex flex-col justify-between overflow-hidden cursor-pointer" 
                  href={rel.link}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div>
                    <div className="mb-md"><span className="px-sm py-xs border border-neutral-200/80 font-label-sm text-label-sm text-on-surface-variant rounded-2xl bg-surface-container-low font-bold">{rel.category}</span></div>
                    <h3 className="font-headline-md text-[20px] text-primary mb-sm group-hover:text-secondary transition-colors">{rel.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{rel.desc}</p>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-md uppercase font-bold">{rel.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-huge bg-primary text-on-primary p-xl md:p-xxl flex flex-col md:flex-row justify-between items-center gap-xl border border-neutral-800 rounded-3xl shadow-xl z-10 relative">
          <div className="max-w-[500px]">
            <h2 className="font-headline-xl text-[36px] mb-md text-white">Engineering Insights, Delivered.</h2>
            <p className="font-body-lg text-body-lg text-inverse-primary">Join 15,000+ technical leaders receiving our monthly architecture deep-dives and systems analysis.</p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-sm">
            <input className="bg-transparent border border-inverse-primary text-white font-body-md px-md py-[12px] focus:outline-none focus:border-secondary focus:ring-0 placeholder:text-outline w-full sm:w-[300px] rounded-xl outline-none" placeholder="Enter your corporate email" type="email" />
            <button className="btn-accent whitespace-nowrap" type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
