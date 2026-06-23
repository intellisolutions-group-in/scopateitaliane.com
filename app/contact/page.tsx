"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    inquiryType: "cloud",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request and redirect to thank you
    router.push("/thank-you");
  };

  const inputStyles = "w-full border border-neutral-200/80 bg-neutral-50 py-3 px-4 text-sm text-primary placeholder-neutral-450 focus:border-secondary transition-all outline-none rounded-xl";

  return (
    <>
      <TopNavBar active="Contact" />

      <main className="flex-grow bg-white">
        <section className="px-4 md:px-margin-desktop pt-huge pb-xxl border-b border-neutral-200/80 max-w-container-max mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-md leading-tight">
              Global Reach.<br />Precision Support.
            </h1>
            <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Connect with our enterprise engineering and consulting teams. We provide architect-level guidance across global time zones to ensure continuous operational excellence.
            </p>
          </div>
        </section>

        <section className="w-full max-w-container-max mx-auto border-b border-neutral-200/80 bg-white">
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-3">
            <div className="p-xl border-b md:border-b-0 md:border-r border-neutral-200/80 hover:bg-neutral-50 transition-colors duration-300 text-primary">
              <div className="flex items-center mb-md">
                <span className="material-symbols-outlined mr-sm text-secondary">storefront</span>
                <h3 className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Enterprise Sales</h3>
              </div>
              <p className="font-display text-xl font-bold uppercase text-white mb-sm">Partner</p>
              <p className="font-sans text-sm text-on-surface-variant mb-lg leading-relaxed">Discuss architectural strategy and platform integration for your organization.</p>
              <a className="font-sans text-xs uppercase tracking-widest text-primary border-b-2 border-neutral-200 hover:text-secondary hover:border-secondary pb-1 inline-block font-bold transition-all" href="mailto:info@techsupportsites.com">info@techsupportsites.com</a>
            </div>

            <div className="p-xl border-b md:border-b-0 md:border-r border-neutral-200/80 hover:bg-neutral-50 transition-colors duration-300 text-primary">
              <div className="flex items-center mb-md">
                <span className="material-symbols-outlined mr-sm text-secondary">support_agent</span>
                <h3 className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Technical Support</h3>
              </div>
              <p className="font-display text-xl font-bold uppercase text-white mb-sm">Resolve</p>
              <p className="font-sans text-sm text-on-surface-variant mb-lg leading-relaxed">24/7 access to tier-3 engineering support for critical infrastructure issues.</p>
              <a className="font-sans text-xs uppercase tracking-widest text-primary border-b-2 border-neutral-200 hover:text-secondary hover:border-secondary pb-1 inline-block font-bold transition-all" href="mailto:info@techsupportsites.com">info@techsupportsites.com</a>
            </div>

            <div className="p-xl hover:bg-neutral-50 transition-colors duration-300 text-primary">
              <div className="flex items-center mb-md">
                <span className="material-symbols-outlined mr-sm text-secondary">work</span>
                <h3 className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Careers</h3>
              </div>
              <p className="font-display text-xl font-bold uppercase text-white mb-sm">Join</p>
              <p className="font-sans text-sm text-on-surface-variant mb-lg leading-relaxed">Explore opportunities to build scalable systems with our global engineering team.</p>
              <Link className="font-sans text-xs uppercase tracking-widest text-primary border-b-2 border-neutral-200 hover:text-secondary hover:border-secondary pb-1 inline-block font-bold transition-all" href="/careers">View Open Roles</Link>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 border-b border-neutral-200/80 bg-white">
          <div className="p-margin-mobile md:p-margin-desktop lg:border-r border-neutral-200/80 bg-white text-primary">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary mb-lg">Contact Us</h2>
            <p className="font-sans text-sm text-on-surface-variant mb-xl leading-relaxed">Provide details regarding your technical requirements, and an architect will respond within 4 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-lg">
              <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div>
                  <input 
                    className={inputStyles} 
                    placeholder="First Name" 
                    required 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <input 
                    className={inputStyles} 
                    placeholder="Last Name" 
                    required 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <input 
                  className={inputStyles} 
                  placeholder="Corporate Email Address" 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <input 
                  className={inputStyles} 
                  placeholder="Company Name" 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div className="pt-sm">
                <label className="font-sans text-xs uppercase tracking-widest text-on-surface-variant block mb-sm font-bold">Inquiry Type</label>
                <select 
                  className="w-full border border-neutral-200/80 bg-neutral-50 py-3 px-4 text-sm text-primary appearance-none rounded-xl outline-none focus:border-secondary cursor-pointer"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                >
                  <option value="cloud">Cloud Strategy & Migration</option>
                  <option value="cyber">Cybersecurity Audit</option>
                  <option value="software">Custom Software Engineering</option>
                  <option value="ai">AI Integration</option>
                </select>
              </div>
              <div>
                <textarea 
                  className={`${inputStyles} resize-none`} 
                  placeholder="Technical Requirements Details" 
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>
              <div className="pt-lg">
                <button 
                  className="btn-primary w-full md:w-auto"
                  type="submit"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          <div className="bg-neutral-50 h-full min-h-[500px] relative border-t lg:border-t-0 border-neutral-200/80 overflow-hidden flex flex-col justify-end">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-10 pointer-events-none" 
              style={{backgroundImage: 'url("/images/hero_server_room.png")'}}
            ></div>
            <div className="absolute inset-0 border-[4px] border-transparent pointer-events-none z-20"></div>
            <div className="relative p-xl z-10 self-start m-4 md:m-8">
              <div className="bg-white p-lg border border-neutral-200/80 rounded-2xl max-w-sm shadow-md text-primary">
                <h3 className="font-sans text-xs uppercase tracking-widest text-secondary mb-md font-bold">Global Operations</h3>
                <p className="font-display text-md font-bold uppercase text-primary">Distributed Engineering</p>
                <p className="font-sans text-sm text-on-surface-variant mt-sm leading-relaxed">
                  Our teams operate across multiple time zones to deliver continuous deployment, system monitoring, and rapid architectural support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-huge bg-surface">
          <h2 className="font-display text-3xl font-bold uppercase text-primary mb-xl">Frequent Inquiries</h2>
          <div className="w-full border-t border-neutral-900 flex flex-col gap-md pt-md">
            <details className="group border border-neutral-200/80 bg-white p-md open:bg-neutral-50 text-primary transition-colors duration-200 cursor-pointer select-none rounded-xl">
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>What is the typical SLA for enterprise support?</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-neutral-200/80 pt-md cursor-text">
                Our standard enterprise SLA guarantees an initial response time of 15 minutes for critical (Sev-1) incidents and 4 hours for standard inquiries. Dedicated engineering pods are assigned to all enterprise accounts for continuity.
              </div>
            </details>

            <details className="group border border-neutral-200/80 bg-white p-md open:bg-neutral-50 text-primary transition-colors duration-200 cursor-pointer select-none rounded-xl">
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>Do you provide on-site consultation?</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-neutral-200/80 pt-md cursor-text">
                Yes, for major architectural overhauls and security audits, we deploy our senior architects to your premises globally. Remote hybrid models are also available to optimize cost and efficiency.
              </div>
            </details>

            <details className="group border border-neutral-200/80 bg-white p-md open:bg-neutral-50 text-primary transition-colors duration-200 cursor-pointer select-none rounded-xl">
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>How is billing structured for ongoing engineering support?</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-neutral-200/80 pt-md cursor-text">
                Billing is structured on a retained engineering model based on expected velocity and capacity, billed monthly. Ad-hoc project work is estimated and billed via fixed-price milestone contracts.
              </div>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

