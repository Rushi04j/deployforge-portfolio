"use client";

import { Check, Info } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$499",
    tagline: "Ideal for single-page MVPs and landing page systems.",
    features: [
      "High-speed Next.js & Tailwind build",
      "Fully responsive mobile layout",
      "1-click cloud host deployment setup",
      "Custom domain & SSL configurations",
      "Git-triggered automatic updates",
      "7 days of post-launch active support",
    ],
    cta: "Deploy Starter MVP",
    popular: false,
    glow: "rgba(59,130,246,0.05)"
  },
  {
    name: "Growth",
    price: "$1,499",
    tagline: "Best for high-traffic apps needing custom cloud scaling.",
    features: [
      "Complex multi-page custom Web App",
      "Dedicated Database (PostgreSQL/MongoDB)",
      "Docker containerized local & prod environments",
      "GitHub Actions automated CI/CD pipelines",
      "Reverse proxy configurations (Nginx/SSL)",
      "30 days of post-launch active support",
    ],
    cta: "Scale with Growth",
    popular: true,
    glow: "rgba(6,182,212,0.1)"
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "Complete custom infrastructure & ongoing support.",
    features: [
      "Unlimited page complex SaaS platforms",
      "Auto-scaling AWS cluster (ECS / ECS Fargate)",
      "Terraform Infrastructure-as-Code definitions",
      "Hardened VPC subnets & firewall policies",
      "Real-time central logging & metrics dashboards",
      "24/7 SLA uptime support & active updates",
    ],
    cta: "Request Custom Quote",
    popular: false,
    glow: "rgba(139,92,246,0.05)"
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-background border-b border-slate-950">
      {/* Background neon orb decoration */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[250px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-blue uppercase tracking-wider">
            <span>Pricing plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Transparent Pricing. Built for Scaling.
          </h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
            Select the plan that matches your current development roadmap. All pricing is transparent and backed by guaranteed delivery milestones.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl border backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                plan.popular 
                  ? "border-brand-blue bg-slate-950/60 -translate-y-2 md:-translate-y-3"
                  : "border-slate-800/80 bg-slate-950/40"
              }`}
            >
              {/* Radial glow backdrop */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" 
                style={{ background: `radial-gradient(200px circle at top center, ${plan.glow}, transparent 80%)` }}
              />

              {/* Popular banner indicator */}
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md z-20">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-[11px] font-medium text-slate-400 mt-1 leading-normal">{plan.tagline}</p>
                </div>
                
                <div className="flex items-baseline space-x-1 text-white">
                  <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-xs font-medium text-slate-500">/ flat rate</span>}
                </div>
                
                <hr className="border-slate-900" />

                {/* Features list */}
                <ul className="space-y-3.5 pt-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3 text-xs">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-slate-300 font-semibold leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <div className="pt-8">
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:opacity-95 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Pricing notice disclaimer */}
        <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 mt-12 text-center max-w-md mx-auto">
          <Info className="h-4 w-4 text-brand-blue shrink-0 animate-pulse" />
          <span>{"Need customized scopes or long-term retainer SLAs? We build tailored infrastructure. Let's chat directly."}</span>
        </div>

      </div>
    </section>
  );
}
