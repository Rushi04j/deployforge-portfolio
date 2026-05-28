"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = ["All", "Full-Stack", "Cloud & DevOps"];

const projects = [
  {
    title: "Clinic Management System",
    category: "Full-Stack",
    desc: "Empowers healthcare clinics with real-time patient queueing telemetry, medical billing integrations, and secure cloud records complying with privacy policies.",
    tags: ["Next.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    demoLink: "https://demo.deployforge.com/clinic",
    gitLink: "https://github.com/deployforge/clinic-system",
    // Premium custom mockup representation (SVG Dashboard styling)
    mockup: (
      <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" rx="12" fill="#0b0f19" />
        <rect x="15" y="15" width="10" height="10" rx="5" fill="#ef4444" />
        <rect x="30" y="15" width="10" height="10" rx="5" fill="#f59e0b" />
        <rect x="45" y="15" width="10" height="10" rx="5" fill="#10b981" />
        <line x1="15" y1="40" x2="385" y2="40" stroke="#1e293b" strokeWidth="1" />
        {/* Metric stats */}
        <rect x="20" y="60" width="110" height="60" rx="8" fill="#151f32" stroke="#1e293b" />
        <text x="30" y="80" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Patients In Queue</text>
        <text x="30" y="105" fill="#3b82f6" fontSize="20" fontWeight="bold" fontFamily="sans-serif">42 Cases</text>
        
        <rect x="145" y="60" width="110" height="60" rx="8" fill="#151f32" stroke="#1e293b" />
        <text x="155" y="80" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Uptime SLA</text>
        <text x="155" y="105" fill="#10b981" fontSize="20" fontWeight="bold" fontFamily="sans-serif">100.0%</text>

        <rect x="270" y="60" width="110" height="60" rx="8" fill="#151f32" stroke="#1e293b" />
        <text x="280" y="80" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Billing Volume</text>
        <text x="280" y="105" fill="#8b5cf6" fontSize="18" fontWeight="bold" fontFamily="sans-serif">$12,450</text>

        {/* Database line visual */}
        <rect x="20" y="138" width="360" height="62" rx="8" fill="#080c14" stroke="#1e293b" />
        <text x="32" y="158" fill="#06b6d4" fontSize="10" fontFamily="monospace">&gt; db.patients.aggregate([ {"{ $match: { active: true } }"} ])</text>
        <text x="32" y="174" fill="#64748b" fontSize="10" fontFamily="monospace">Executing query against primary AWS cluster...</text>
        <text x="32" y="190" fill="#10b981" fontSize="10" fontFamily="monospace">Query OK. Returning 142 records. (12ms)</text>
      </svg>
    )
  },
  {
    title: "Restaurant Dashboard",
    category: "Full-Stack",
    desc: "Real-time kitchen order tracking dashboard featuring analytical pipelines, live order status updates via WebSockets, and interactive table reservation menus.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    demoLink: "https://demo.deployforge.com/restaurant",
    gitLink: "https://github.com/deployforge/restaurant-hub",
    mockup: (
      <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" rx="12" fill="#0b0f19" />
        <rect x="15" y="15" width="10" height="10" rx="5" fill="#ef4444" />
        <rect x="30" y="15" width="10" height="10" rx="5" fill="#f59e0b" />
        <rect x="45" y="15" width="10" height="10" rx="5" fill="#10b981" />
        <line x1="15" y1="40" x2="385" y2="40" stroke="#1e293b" strokeWidth="1" />
        {/* Table representation */}
        <rect x="20" y="55" width="170" height="145" rx="8" fill="#151f32" stroke="#1e293b" />
        <text x="32" y="75" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Kitchen Prep Orders</text>
        <rect x="32" y="88" width="146" height="28" rx="4" fill="#0b0f19" stroke="#1e293b" />
        <text x="40" y="105" fill="#f59e0b" fontSize="9" fontWeight="semibold" fontFamily="sans-serif">#1204 - Filet Mignon</text>
        <rect x="32" y="122" width="146" height="28" rx="4" fill="#0b0f19" stroke="#1e293b" />
        <text x="40" y="139" fill="#f59e0b" fontSize="9" fontWeight="semibold" fontFamily="sans-serif">#1205 - Lobster Pasta</text>
        <rect x="32" y="156" width="146" height="28" rx="4" fill="#0b0f19" stroke="#10b981" strokeWidth="0.5" />
        <text x="40" y="173" fill="#10b981" fontSize="9" fontWeight="semibold" fontFamily="sans-serif">#1203 - Caesar Salad (Done)</text>

        {/* Analytical bar chart visual */}
        <rect x="210" y="55" width="170" height="145" rx="8" fill="#151f32" stroke="#1e293b" />
        <text x="222" y="75" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Hourly Revenue Peak</text>
        <rect x="235" y="100" width="18" height="80" rx="2" fill="#3b82f6" />
        <rect x="265" y="120" width="18" height="60" rx="2" fill="#3b82f6" />
        <rect x="295" y="90" width="18" height="90" rx="2" fill="#06b6d4" />
        <rect x="325" y="135" width="18" height="45" rx="2" fill="#8b5cf6" />
        <line x1="225" y1="180" x2="355" y2="180" stroke="#64748b" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: "Company Employee Portal",
    category: "Full-Stack",
    desc: "Centralized internal operations directory with vacations approval flow systems, corporate document sharing repository, and secure SSO portal authorization.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Auth.js"],
    demoLink: "https://demo.deployforge.com/portal",
    gitLink: "https://github.com/deployforge/employee-portal",
    mockup: (
      <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" rx="12" fill="#0b0f19" />
        <rect x="15" y="15" width="10" height="10" rx="5" fill="#ef4444" />
        <rect x="30" y="15" width="10" height="10" rx="5" fill="#f59e0b" />
        <rect x="45" y="15" width="10" height="10" rx="5" fill="#10b981" />
        <line x1="15" y1="40" x2="385" y2="40" stroke="#1e293b" strokeWidth="1" />
        
        {/* User profile list mockup */}
        <circle cx="45" cy="75" r="16" fill="#1e293b" />
        <text x="39" y="80" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">JS</text>
        <rect x="75" y="65" width="100" height="8" rx="4" fill="#ffffff" />
        <rect x="75" y="78" width="60" height="6" rx="3" fill="#64748b" />
        <rect x="300" y="66" width="60" height="18" rx="9" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="0.5" />
        <text x="315" y="78" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="sans-serif">APPROVED</text>

        <circle cx="45" cy="120" r="16" fill="#1e293b" />
        <text x="38" y="125" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">AM</text>
        <rect x="75" y="110" width="120" height="8" rx="4" fill="#ffffff" />
        <rect x="75" y="123" width="80" height="6" rx="3" fill="#64748b" />
        <rect x="300" y="111" width="60" height="18" rx="9" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="0.5" />
        <text x="317" y="123" fill="#ef4444" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PENDING</text>

        <circle cx="45" cy="165" r="16" fill="#1e293b" />
        <text x="39" y="170" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">TH</text>
        <rect x="75" y="155" width="90" height="8" rx="4" fill="#ffffff" />
        <rect x="75" y="168" width="50" height="6" rx="3" fill="#64748b" />
        <rect x="300" y="156" width="60" height="18" rx="9" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="0.5" />
        <text x="315" y="168" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="sans-serif">APPROVED</text>
        
        <line x1="20" y1="102" x2="380" y2="102" stroke="#1e293b" strokeWidth="0.5" />
        <line x1="20" y1="147" x2="380" y2="147" stroke="#1e293b" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    title: "Cloud Deployment Automation",
    category: "Cloud & DevOps",
    desc: "A custom engineered SaaS automation platform triggering Docker deployment pipelines with automatic SSL provisioning, reverse proxy configs, and cluster load metrics.",
    tags: ["React", "Go", "Docker", "Nginx", "AWS", "Terraform"],
    demoLink: "https://demo.deployforge.com/cloudops",
    gitLink: "https://github.com/deployforge/cloud-automation",
    mockup: (
      <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" rx="12" fill="#0b0f19" />
        <rect x="15" y="15" width="10" height="10" rx="5" fill="#ef4444" />
        <rect x="30" y="15" width="10" height="10" rx="5" fill="#f59e0b" />
        <rect x="45" y="15" width="10" height="10" rx="5" fill="#10b981" />
        <line x1="15" y1="40" x2="385" y2="40" stroke="#1e293b" strokeWidth="1" />
        
        {/* Network Topography visual map */}
        <rect x="25" y="55" width="140" height="145" rx="8" fill="#151f32" stroke="#1e293b" />
        <text x="35" y="75" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Nodes Cluster</text>
        
        <rect x="35" y="90" width="120" height="24" rx="4" fill="#0b0f19" stroke="#3b82f6" />
        <text x="45" y="105" fill="#3b82f6" fontSize="9" fontWeight="bold" fontFamily="monospace">VPC-Primary (US-East)</text>
        
        <rect x="35" y="122" width="120" height="24" rx="4" fill="#0b0f19" stroke="#10b981" />
        <text x="45" y="137" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">Task-1: ECS Container</text>
        
        <rect x="35" y="154" width="120" height="24" rx="4" fill="#0b0f19" stroke="#8b5cf6" />
        <text x="45" y="169" fill="#8b5cf6" fontSize="9" fontWeight="bold" fontFamily="monospace">Task-2: ECS Container</text>

        {/* Terminal logging side */}
        <rect x="180" y="55" width="195" height="145" rx="8" fill="#080c14" stroke="#1e293b" />
        <text x="190" y="75" fill="#10b981" fontSize="9" fontFamily="monospace"># terraform apply -auto-approve</text>
        <text x="190" y="90" fill="#94a3b8" fontSize="8" fontFamily="monospace">aws_instance.prod_cluster: Creating...</text>
        <text x="190" y="105" fill="#94a3b8" fontSize="8" fontFamily="monospace">aws_security_group.sg_web: Creating...</text>
        <text x="190" y="120" fill="#10b981" fontSize="8" fontFamily="monospace">Apply complete! Resources: 3 added.</text>
        <text x="190" y="145" fill="#3b82f6" fontSize="9" fontFamily="monospace"># docker ps</text>
        <text x="190" y="160" fill="#94a3b8" fontSize="8" fontFamily="monospace">PORTS: 0.0.0.0:80-&gt;80/tcp</text>
        <text x="190" y="175" fill="#06b6d4" fontSize="8" fontFamily="monospace">NAMES: deployforge_nginx_proxy</text>
      </svg>
    )
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative neon lights */}
      <div className="absolute right-0 top-10 w-[300px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-blue uppercase tracking-wider">
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our Proven Cloud & Software Records
          </h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
            Take a look at some of the customized production platforms we have built and deployed for global startups and local clinics.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex items-center justify-center space-x-2.5 mb-16">
          {projectCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                activeTab === tab 
                  ? "bg-slate-900 border-brand-blue/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
                  : "bg-slate-950/20 border-slate-850 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-900/20 overflow-hidden shadow-xl"
              >
                <div>
                  {/* Dashboard Mockup Representation */}
                  <div className="relative rounded-xl border border-slate-800/80 bg-slate-950 overflow-hidden mb-6 select-none shadow-inner aspect-[16/9]">
                    {project.mockup}
                    {/* Hover visual scanlines or dark layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-100 pointer-events-none" />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-blue transition-colors">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-slate-400 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech tags and CTA button actions */}
                <div className="pt-6 mt-6 border-t border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-brand-cyan/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center space-x-3 shrink-0">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-8.5 px-3.5 rounded-lg text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-300"
                    >
                      <svg className="h-3.5 w-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-8.5 px-3.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    >
                      <span>Demo</span>
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>

                {/* Radial Glow underneath cards on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl bg-[radial-gradient(150px_circle_at_bottom_right,rgba(59,130,246,0.05),transparent_80%)]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
