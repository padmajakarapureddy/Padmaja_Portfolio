"use client";
import { useState, useEffect, useRef } from "react";

const Ico = {
  Arrow: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>,
  Copy: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Github: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  Linkedin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  File: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
};

const BORDER = "#E2E0DA", BG = "#F8F7F4", CARD = "#EFEDE7", INK = "#111111", MUTED = "#6B7280";

const Divider = ({ num, label }: { num: string; label: string }) => (
  <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"64px" }}>
    <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:MUTED, whiteSpace:"nowrap" }}>{num}</span>
    <div style={{ flex:1, height:"1px", background:BORDER }} />
    <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:MUTED, whiteSpace:"nowrap" }}>{label}</span>
  </div>
);

export default function Portfolio() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [resume, setResume] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPublication, setShowPublication] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["hero","projects","experience","skills","recognition","contact"];
      const y = window.scrollY + 200;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const copyEmail = () => {
    const v = "padmajakarapureddy@gmail.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(v).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {});
    } else {
      // Fallback for older browsers
      const el = Object.assign(document.createElement("input"), { value: v });
      document.body.appendChild(el); el.select();
      try { document.execCommand("copy"); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
      document.body.removeChild(el);
    }
  };

  const Btn = ({ children, onClick, dark }: { children: React.ReactNode; onClick?: () => void; dark?: boolean }) => (
    <button onClick={onClick} style={{
      padding:"11px 26px", borderRadius:"6px", fontSize:"13px", fontWeight:600, fontFamily:"inherit", cursor:"pointer",
      background: dark ? INK : "transparent", color: dark ? BG : INK,
      border: dark ? "none" : `1px solid ${BORDER}`, transition:"all 0.2s",
    }}
      onMouseEnter={e => { if (dark) e.currentTarget.style.opacity="0.78"; else e.currentTarget.style.borderColor=INK; }}
      onMouseLeave={e => { if (dark) e.currentTarget.style.opacity="1"; else e.currentTarget.style.borderColor=BORDER; }}
    >{children}</button>
  );

  const wrap = { maxWidth:"1080px", margin:"0 auto", padding:"0 40px" };

  return (
    <div style={{ background:BG, color:INK, minHeight:"100vh", overflowX:"hidden" }}>

      {/* NAV */}
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background: scrolled ? "rgba(248,247,244,0.94)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent", transition:"all 0.3s ease" }}>
        <div style={{ ...wrap, height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={() => go("hero")} style={{ fontWeight:700, fontSize:"15px", letterSpacing:"-0.02em", background:"none", border:"none", cursor:"pointer", color:INK, fontFamily:"inherit" }}>Padmaja<span style={{ color:MUTED }}>.</span></button>
          <nav style={{ display:"flex", gap:"2px" }}>
            {(["projects","experience","skills","contact"] as const).map(id => (
              <button key={id} onClick={() => go(id)} style={{ padding:"6px 14px", borderRadius:"6px", fontSize:"13px", fontWeight:500, color: active===id ? INK : MUTED, background: active===id ? CARD : "transparent", border:"none", cursor:"pointer", textTransform:"capitalize", fontFamily:"inherit", transition:"all 0.2s" }}>{id === "projects" ? "Projects" : id.charAt(0).toUpperCase() + id.slice(1)}</button>
            ))}
          </nav>
          <Btn dark onClick={() => setResume(true)}>Resume ↗</Btn>
        </div>
      </header>

      <main style={wrap}>

        {/* HERO */}
        <section id="hero" style={{ minHeight:"85vh", display:"flex", alignItems:"center", paddingTop:"120px", paddingBottom:"64px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.6fr 1fr", gap:"64px", alignItems:"center", width:"100%" }} className="grid-cols-1 md:grid-cols-[1.6fr_1fr]">
            <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
              <h1 style={{ fontSize:"clamp(32px, 5.5vw, 54px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.05, margin:0 }}>
                KARAPUREDDY PADMAJA
              </h1>
              <p style={{ fontSize:"16px", color:INK, lineHeight:1.7, margin:0, fontWeight:500 }}>
                AI Engineer · Data Engineer · Backend Developer with strong foundations in Machine Learning, Data Structures, Database Systems, and scalable backend development. Experienced in building AI-assisted data pipelines, REST APIs, and validation workflows using Python, FastAPI, Node.js, MongoDB, and Next.js. Research Intern at the CVIT Lab, IIIT Hyderabad — work featured in The Hindu.
              </p>
              <div style={{ display:"flex", gap:"12px", marginTop:"12px" }}>
                <Btn dark onClick={() => go("projects")}>View Projects ↓</Btn>
                <Btn onClick={() => go("contact")}>Get in Touch</Btn>
              </div>
            </div>
            
            <div style={{ display:"flex", justifyContent:"center", width:"100%" }}>
              <div style={{ position:"relative", width:"100%", maxWidth:"280px", height:"320px", borderRadius:"12px", overflow:"hidden", border:`1px solid ${BORDER}`, boxShadow:"0 16px 40px rgba(0,0,0,0.04)" }}>
                <img 
                  src="/profilrpicturepadmaja.jpeg" 
                  alt="Padmaja Karapureddy" 
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ paddingTop:"120px", paddingBottom:"120px" }}>
          <Divider num="01" label="Featured Projects" />
          
          {/* India Food Map */}
          <div style={{ marginBottom:"100px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"20px", marginBottom:"40px" }}>
              <div>
                <h2 style={{ fontSize:"clamp(40px,6vw,88px)", fontWeight:800, letterSpacing:"-0.035em", lineHeight:0.95, margin:"0 0 16px" }}>India Food Map</h2>
                <p style={{ fontSize:"15px", color:MUTED, margin:0, fontWeight:500 }}>AI-Powered Culinary Knowledge Platform</p>
              </div>
              <div style={{ display:"flex", gap:"12px" }}>
                <a href="https://indian-food-map-295616937324.asia-south1.run.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                  <Btn dark>Live App ↗</Btn>
                </a>
                <a href="https://github.com/padmajakarapureddy/India-Food-Map" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                  <Btn><span style={{ display:"flex", alignItems:"center", gap:"6px" }}><Ico.Github /> Code</span></Btn>
                </a>
              </div>
            </div>

            {/* Main Visual Image Card */}
            <div style={{ position:"relative", width:"100%", height:"auto", display:"flex", justifyContent:"center", background:BG, borderRadius:"12px", overflow:"hidden", border:`1px solid ${BORDER}`, marginBottom:"40px", boxShadow:"0 16px 40px rgba(0,0,0,0.03)" }}>
              <img 
                src="/hindu-feature.jpg" 
                alt="India Food Map - Bharat Taste Atlas Interface" 
                style={{ width:"100%", height:"auto", maxHeight:"520px", objectFit:"contain", display:"block" }}
              />
              <div style={{ position:"absolute", bottom:"20px", left:"20px", background:"rgba(248,247,244,0.9)", backdropFilter:"blur(8px)", border:`1px solid ${BORDER}`, padding:"6px 14px", borderRadius:"6px", display:"flex", alignItems:"center", gap:"8px" }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#2563EB" }} />
                <span style={{ fontSize:"11px", fontWeight:600, color:INK }}>Bharat Taste Atlas Production Interface</span>
              </div>
            </div>

            {/* Problem + metrics */}
            <div style={{ display:"grid", gridTemplateColumns:"2.2fr 1fr", gap:"1px", background:BORDER, borderRadius:"8px", overflow:"hidden", marginBottom:"40px" }} className="grid-cols-1 md:grid-cols-[2.2fr_1fr]">
              <div style={{ background:BG, padding:"40px" }}>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"16px" }}>Problem</div>
                <p style={{ fontSize:"14px", lineHeight:1.75, margin:"0 0 24px", color:INK }}>
                  India has one of the world&apos;s most diverse culinary landscapes, but its regional foods, recipes, and ingredients are completely unstandardized. Traditional culinary knowledge is scattered across cookbooks, blogs, and oral traditions. This fragmentation makes it impossible for developers, researchers, or AI models to analyze regional diets, query authentic dish details, or construct reliable food-preservation databases at scale.
                </p>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"16px" }}>Solution</div>
                <p style={{ fontSize:"14px", lineHeight:1.75, margin:0, color:MUTED }}>
                  Built the <strong>Bharat Taste Atlas</strong> (India Food Map)—an AI-powered knowledge verification system. The platform automates data collection by crawling diverse web recipes, standardizes raw text into structured JSON models using LLMs (Qwen), enforces strict schema validation using Python&apos;s Pydantic library, and deduplicates food names using Levenshtein distance metrics. All structured data is stored in PostgreSQL and displayed on a beautiful, interactive GIS map, serving as the first digitized, verified directory of India&apos;s regional food biodiversity.
                </p>
              </div>
              <div style={{ background:CARD, padding:"40px", display:"flex", flexDirection:"column", justifyContent:"center", gap:"32px" }}>
                {[["28","States covered"],["8K+","Dishes in prod"],["~80%","API perf gain"],["100%","Schema integrity"]].map(([v,l]) => (
                  <div key={l}>
                    <div style={{ fontSize:"clamp(28px,3vw,42px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:"11px", color:MUTED, marginTop:"5px", fontWeight:600, letterSpacing:"0.07em", textTransform:"uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:BORDER, borderRadius:"8px", overflow:"hidden", marginBottom:"40px" }}>
              {[
                { icon:"◈", title:"Backend API Design", body:"State-scoped REST endpoints with MongoDB aggregation eliminated client-side filtering, cutting initial payload by ~80%." },
                { icon:"⬡", title:"Data Ingestion Pipeline", body:"Automated ingestion with Pydantic schema checks and Levenshtein deduplication — zero corrupt data reaches production storage." },
                { icon:"⬢", title:"Cloud Deployment", body:"Dockerised and deployed to Google Cloud Run; auto-scaling to zero when idle with zero-downtime rolling deployments." },
                { icon:"◉", title:"Performance Scaling", body:"Lazy loading and state-scoped APIs reduced initial load from 8K+ dishes to on-demand regional batches." },
              ].map(c => (
                <div key={c.title} style={{ background:BG, padding:"32px" }}>
                  <div style={{ fontSize:"20px", marginBottom:"12px", color:MUTED }}>{c.icon}</div>
                  <h3 style={{ fontSize:"14px", fontWeight:700, margin:"0 0 10px", letterSpacing:"-0.01em" }}>{c.title}</h3>
                  <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.65, margin:0 }}>{c.body}</p>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
              {["Next.js","Node.js","MongoDB Atlas","Python","Docker","Google Cloud Run","Pydantic","REST APIs"].map(t => (
                <span key={t} style={{ padding:"5px 14px", borderRadius:"4px", border:`1px solid ${BORDER}`, fontSize:"12px", fontWeight:500, color:MUTED }}>{t}</span>
              ))}
            </div>
          </div>

          {/* TrustChain */}
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"20px", marginBottom:"40px" }}>
              <div>
                <h2 style={{ fontSize:"clamp(40px,6vw,88px)", fontWeight:800, letterSpacing:"-0.035em", lineHeight:0.95, margin:"0 0 16px" }}>TrustChain</h2>
                <p style={{ fontSize:"15px", color:MUTED, margin:0, fontWeight:500 }}>Supplier Verification & Credibility Platform</p>
              </div>
              <div style={{ display:"flex", gap:"12px" }}>
                <a href="https://github.com/padmajakarapureddy" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                  <Btn><span style={{ display:"flex", alignItems:"center", gap:"6px" }}><Ico.Github /> Code</span></Btn>
                </a>
              </div>
            </div>

            {/* Problem + metrics */}
            <div style={{ display:"grid", gridTemplateColumns:"2.2fr 1fr", gap:"1px", background:BORDER, borderRadius:"8px", overflow:"hidden", marginBottom:"40px" }} className="grid-cols-1 md:grid-cols-[2.2fr_1fr]">
              <div style={{ background:BG, padding:"40px" }}>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"16px" }}>Problem</div>
                <p style={{ fontSize:"14px", lineHeight:1.75, margin:"0 0 24px", color:INK }}>
                  Global supply chains lack transparent, real-time verification for suppliers. Procurement teams often rely on manual, static audits, making them vulnerable to fraud, compliance failures, and operational risks. There is no automated, secure way to onboard suppliers and continuously assess their credibility.
                </p>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"16px" }}>Solution</div>
                <p style={{ fontSize:"14px", lineHeight:1.75, margin:0, color:MUTED }}>
                  Built <strong>TrustChain</strong>—a supplier verification and onboarding platform. Developed robust, secure REST APIs in Node.js to manage supplier profiles and verification workflows. Implemented JSON Web Token (JWT) authorization, role-based access control, and an automated risk-scoring module that evaluates supplier risk based on compliance history and financial indicators. Designed flexible MongoDB schemas to support complex supplier relationships and high-performance search queries.
                </p>
              </div>
              <div style={{ background:CARD, padding:"40px", display:"flex", flexDirection:"column", justifyContent:"center", gap:"32px" }}>
                {[["JWT","Secure Auth"],["100+","Suppliers Onboarded"],["<200ms","API Latency"],["99.9%","Uptime / Reliability"]].map(([v,l]) => (
                  <div key={l}>
                    <div style={{ fontSize:"clamp(28px,3vw,42px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:"11px", color:MUTED, marginTop:"5px", fontWeight:600, letterSpacing:"0.07em", textTransform:"uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:BORDER, borderRadius:"8px", overflow:"hidden", marginBottom:"40px" }}>
              {[
                { icon:"◈", title:"Backend API Development", body:"Created scalable REST endpoints using Express/Node.js to handle high-throughput supplier onboarding requests with validation." },
                { icon:"⬡", title:"JWT Security & Auth", body:"Implemented robust JSON Web Token (JWT) tokenization with secure HTTP-only cookie transport and role-based access control (RBAC)." },
                { icon:"⬢", title:"Risk Assessment Logic", body:"Developed an algorithmic risk-scoring system using custom weighting parameters to classify supplier compliance integrity." },
                { icon:"◉", title:"Scalable DB Modeling", body:"Structured schema designs in MongoDB with compound indexing, yielding query performance latency of under 200ms." },
              ].map(c => (
                <div key={c.title} style={{ background:BG, padding:"32px" }}>
                  <div style={{ fontSize:"20px", marginBottom:"12px", color:MUTED }}>{c.icon}</div>
                  <h3 style={{ fontSize:"14px", fontWeight:700, margin:"0 0 10px", letterSpacing:"-0.01em" }}>{c.title}</h3>
                  <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.65, margin:0 }}>{c.body}</p>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
              {["Node.js","Express","MongoDB","REST APIs","JWT Authentication","Docker","Supplier Intelligence"].map(t => (
                <span key={t} style={{ padding:"5px 14px", borderRadius:"4px", border:`1px solid ${BORDER}`, fontSize:"12px", fontWeight:500, color:MUTED }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ paddingTop:"120px", paddingBottom:"120px", borderTop:`1px solid ${BORDER}` }}>
          <Divider num="02" label="Experience" />
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px" }}>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"20px" }}>
                <div>
                  <h3 style={{ fontSize:"22px", fontWeight:700, letterSpacing:"-0.02em", margin:"0 0 4px" }}>Research Intern</h3>
                  <p style={{ fontSize:"14px", color:MUTED, margin:0, fontWeight:500 }}>CVIT Lab · IIIT Hyderabad</p>
                </div>
                <span style={{ fontSize:"12px", color:MUTED, background:CARD, padding:"4px 12px", borderRadius:"4px", border:`1px solid ${BORDER}`, whiteSpace:"nowrap" }}>2024 – Present</span>
              </div>
              <p style={{ fontSize:"14px", color:MUTED, lineHeight:1.7, margin:"0 0 20px" }}>Contributed to AI and data systems research at the Center for Visual Information Technology. Focused on backend data infrastructure, ingestion pipelines, and applied ML.</p>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"10px" }}>
                {["Built data collection and processing pipelines for large-scale research datasets","Contributed to backend systems supporting AI experiments and model evaluation","Collaborated on data quality and validation frameworks with PhD researchers","Work featured in The Hindu for digital preservation of regional knowledge"].map(h => (
                  <li key={h} style={{ display:"flex", gap:"10px", fontSize:"13px", color:MUTED, lineHeight:1.6 }}>
                    <span style={{ color:INK, fontWeight:700, flexShrink:0, marginTop:"1px" }}>—</span>{h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"20px" }}>
                <div>
                  <h3 style={{ fontSize:"22px", fontWeight:700, letterSpacing:"-0.02em", margin:"0 0 4px" }}>M.S. in Data Science</h3>
                  <p style={{ fontSize:"14px", color:MUTED, margin:0, fontWeight:500 }}>IIIT Hyderabad</p>
                </div>
                <span style={{ fontSize:"12px", color:MUTED, background:CARD, padding:"4px 12px", borderRadius:"4px", border:`1px solid ${BORDER}`, whiteSpace:"nowrap" }}>2024 – 2026</span>
              </div>
              <div style={{ padding:"32px", background:CARD, borderRadius:"8px", border:`1px solid ${BORDER}`, display:"flex", flexDirection:"column", gap:"20px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div>
                    <div style={{ fontSize:"48px", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1 }}>8.2</div>
                    <div style={{ fontSize:"12px", color:MUTED, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginTop:"4px" }}>CGPA · IIIT-H</div>
                  </div>
                  <div>
                    <div style={{ fontSize:"48px", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1 }}>8.1</div>
                    <div style={{ fontSize:"12px", color:MUTED, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginTop:"4px" }}>CGPA · B.Tech</div>
                  </div>
                </div>
                <div style={{ height:"1px", background:BORDER }} />
                <p style={{ fontSize:"13px", color:MUTED, margin:0, lineHeight:1.65 }}>Strong foundation in Data Structures, Algorithms, OOP, DBMS, ML algorithms, and data systems. B.Tech from RGUKT (2020-2024).</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ paddingTop:"120px", paddingBottom:"120px", borderTop:`1px solid ${BORDER}` }}>
          <Divider num="03" label="Skills" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1px", background:BORDER, borderRadius:"8px", overflow:"hidden" }}>
            {([
              ["Languages","Python · SQL · JavaScript · TypeScript"],
              ["AI & Machine Learning","Machine Learning · NLP · Prompt Engineering · Data Preprocessing · Data Validation · Feature Engineering"],
              ["Backend","FastAPI · Node.js · REST APIs · Express"],
              ["Databases","MongoDB · PostgreSQL · SQL"],
              ["Web","React.js · Next.js"],
              ["Tools & Core CS","Git · Docker · Linux · Postman · DSA · OOP · DBMS · OS · Computer Networks"],
            ] as [string,string][]).map(([cat, items]) => (
              <div key={cat} style={{ background:BG, padding:"32px 28px" }}>
                <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"20px" }}>{cat}</div>
                <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                  {items.split(" · ").map(s => (
                    <span key={s} style={{ fontSize:"13px", fontWeight:500, color:INK }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOGNITION */}
        <section id="recognition" style={{ paddingTop:"120px", paddingBottom:"120px", borderTop:`1px solid ${BORDER}` }}>
          <Divider num="04" label="Recognition" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:BORDER, borderRadius:"8px", overflow:"hidden" }}>
            <div 
              onClick={() => setShowPublication(true)} 
              style={{ background:BG, padding:"36px 32px", cursor:"pointer", transition:"all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background=CARD}
              onMouseLeave={e => e.currentTarget.style.background=BG}
            >
              <div style={{ fontSize:"28px", marginBottom:"20px" }}>📰</div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px" }}>
                <h3 style={{ fontSize:"16px", fontWeight:700, letterSpacing:"-0.01em", margin:0 }}>Featured in The Hindu</h3>
                <span style={{ fontSize:"11px", color:MUTED, fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>View Article ↗</span>
              </div>
              <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.65, margin:0 }}>
                India Food Map covered by The Hindu for its impact on digitising India&apos;s regional culinary knowledge at scale. Click to view publication clipping.
              </p>
            </div>
            
            <div style={{ background:BG, padding:"36px 32px" }}>
              <div style={{ fontSize:"28px", marginBottom:"20px" }}>🏆</div>
              <h3 style={{ fontSize:"16px", fontWeight:700, letterSpacing:"-0.01em", margin:"0 0 12px" }}>Yuvaratna Award</h3>
              <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.65, margin:0 }}>
                Received the prestigious &quot;Yuvaratna Award&quot; from the Telangana Association of South Africa for leadership and cultural contributions.
              </p>
            </div>

            <div style={{ background:BG, padding:"36px 32px" }}>
              <div style={{ fontSize:"28px", marginBottom:"20px" }}>🏅</div>
              <h3 style={{ fontSize:"16px", fontWeight:700, letterSpacing:"-0.01em", margin:"0 0 12px" }}>National-Level Sports</h3>
              <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.65, margin:0 }}>
                Manager of the Under-19 SGFI Yogasana Girls Team (A.P.) and National-Level Yogasana &amp; Gymnastics Player.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ paddingTop:"120px", paddingBottom:"140px", borderTop:`1px solid ${BORDER}` }}>
          <Divider num="05" label="Contact" />
          <h2 style={{ fontSize:"clamp(40px,6.5vw,96px)", fontWeight:800, letterSpacing:"-0.04em", lineHeight:0.92, margin:"0 0 56px" }}>
            Let&apos;s work<br /><span style={{ color:MUTED }}>together.</span>
          </h2>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap", alignItems:"center" }}>
            <button onClick={copyEmail} style={{ padding:"12px 22px", borderRadius:"6px", border:`1px solid ${BORDER}`, background:CARD, fontSize:"13px", fontFamily:"monospace", fontWeight:500, color:INK, cursor:"pointer", display:"flex", alignItems:"center", gap:"10px", transition:"border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor=INK} onMouseLeave={e => e.currentTarget.style.borderColor=BORDER}>
              padmajakarapureddy@gmail.com
              <span style={{ color:copied?"#16A34A":MUTED }}>{copied ? <Ico.Check /> : <Ico.Copy />}</span>
            </button>
            {[
              { href:"https://www.linkedin.com/in/padmaja-karapureddy-16780b3ab/", icon:<Ico.Linkedin />, label:"LinkedIn" },
              { href:"https://github.com/padmajakarapureddy", icon:<Ico.Github />, label:"GitHub" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ padding:"12px 20px", borderRadius:"6px", border:`1px solid ${BORDER}`, background:"transparent", fontSize:"13px", color:MUTED, cursor:"pointer", display:"flex", alignItems:"center", gap:"8px", textDecoration:"none", fontWeight:500, transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=INK; e.currentTarget.style.color=INK; }} onMouseLeave={e => { e.currentTarget.style.borderColor=BORDER; e.currentTarget.style.color=MUTED; }}>
                {s.icon}{s.label}
              </a>
            ))}
          </div>
          <p style={{ fontSize:"13px", color:MUTED, marginTop:"32px" }}>Open to Software Engineer · Backend Engineer · AI Engineer roles · On-site, hybrid, or remote</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop:`1px solid ${BORDER}`, padding:"28px 0" }}>
        <div style={{ ...wrap, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:"13px", color:MUTED }}>© 2026 Padmaja Karapureddy</span>
          <span style={{ fontSize:"11px", color:MUTED, fontFamily:"monospace" }}>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>

      {/* RESUME MODAL */}
      {resume && (
        <div style={{ position:"fixed", inset:0, zIndex:100, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }} onClick={() => setResume(false)}>
          <div style={{ background:BG, borderRadius:"10px", border:`1px solid ${BORDER}`, maxWidth:"850px", width:"100%", maxHeight:"90vh", display:"flex", flexDirection:"column", boxShadow:"0 32px 80px rgba(0,0,0,0.2)" }} onClick={e => e.stopPropagation()}>
            <div style={{ padding:"16px 24px", borderBottom:`1px solid ${BORDER}`, background:CARD, display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"10px 10px 0 0" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"13px", fontWeight:600 }}><Ico.File /> Curriculum Vitae</div>
              <button onClick={() => setResume(false)} style={{ fontSize:"12px", color:MUTED, background:BG, border:`1px solid ${BORDER}`, padding:"5px 14px", borderRadius:"5px", cursor:"pointer", fontFamily:"inherit" }}>Close</button>
            </div>
            <div style={{ padding:"36px", overflowY:"auto", display:"flex", flexDirection:"column", gap:"24px" }}>
              {/* Header */}
              <div style={{ textAlign:"center", borderBottom:`1px solid ${BORDER}`, paddingBottom:"20px" }}>
                <h1 style={{ fontSize:"26px", fontWeight:800, letterSpacing:"-0.03em", margin:"0 0 6px" }}>KARAPUREDDY PADMAJA</h1>
                <div style={{ display:"flex", justifyContent:"center", gap:"16px", flexWrap:"wrap", fontSize:"12px", color:MUTED, fontWeight:500 }}>
                  <span>✉ padmajakarapureddy@gmail.com</span>
                  <span>📞 7036483256</span>
                  <span>📍 Hyderabad, India</span>
                  <a href="https://github.com/padmajakarapureddy" target="_blank" rel="noopener noreferrer" style={{ color:MUTED }}>github</a>
                  <a href="https://www.linkedin.com/in/padmaja-karapureddy-16780b3ab/" target="_blank" rel="noopener noreferrer" style={{ color:MUTED }}>linkedin</a>
                </div>
              </div>

              {/* Two-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
                  {/* Profile */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Profile</div>
                    <p style={{ fontSize:"12px", color:INK, lineHeight:1.6, margin:0 }}>
                      AI Engineer | Data Engineer | Backend Developer with strong foundations in Machine Learning, Data Structures, Database Systems, and scalable backend development. Experienced in building AI-assisted data pipelines, REST APIs, and data validation workflows using Python, FastAPI, Node.js, MongoDB, and Next.js. Currently contributing to AI and data engineering research at CVIT Lab, IIIT Hyderabad, with work featured in <em>The Hindu</em>.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Education</div>
                    <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                      <div>
                        <div style={{ display:"flex", justifyContent:"space-between", fontWeight:600, fontSize:"12px" }}>
                          <span>Master of Science in Data Science</span>
                          <span style={{ fontSize:"11px", color:MUTED }}>2024 – 2026</span>
                        </div>
                        <div style={{ fontSize:"11px", color:MUTED }}>IIIT Hyderabad · CGPA: 8.2</div>
                      </div>
                      <div>
                        <div style={{ display:"flex", justifyContent:"space-between", fontWeight:600, fontSize:"12px" }}>
                          <span>Bachelor of Technology in Civil Engineering</span>
                          <span style={{ fontSize:"11px", color:MUTED }}>2020 – 2024</span>
                        </div>
                        <div style={{ fontSize:"11px", color:MUTED }}>RGUKT A.P. · CGPA: 8.1 (PUC CGPA: 8.57, High School: 10.0)</div>
                      </div>
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Awards</div>
                    <div>
                      <strong style={{ fontSize:"12px", display:"block" }}>Yuvaratna Award</strong>
                      <span style={{ fontSize:"11px", color:MUTED, display:"block" }}>Telangana Association of South Africa</span>
                      <p style={{ fontSize:"12px", color:INK, margin:"4px 0 0", lineHeight:1.5 }}>
                        Received &quot;Yuvaratna Award&quot; from Telangana Association of South Africa and &quot;Jayahoo Bharatyim&quot;.
                      </p>
                    </div>
                  </div>

                  {/* Leadership & Non-Academic */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Leadership & Non-Academic</div>
                    <ul style={{ padding:0, margin:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"6px" }}>
                      {[
                        "Manager, Under-19 SGFI Yogasana Girls Team (Andhra Pradesh): Demonstrated leadership and team coordination at national level.",
                        "National-Level Yogasana & Gymnastics Player: Represented at national competitions; strong discipline.",
                        "NCC Cadet: Actively involved in social service and leadership initiatives.",
                        "Ugadi Milan: Participated in Ugadi Milan at Rashtrapati Bhavan, contributing to cultural exchange."
                      ].map(item => (
                        <li key={item} style={{ fontSize:"11px", color:INK, display:"flex", gap:"6px", lineHeight:1.5 }}>
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
                  {/* Projects */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Projects</div>
                    <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
                      <div>
                        <strong style={{ fontSize:"12px" }}>India Food Map – AI-Powered Culinary Platform</strong>
                        <div style={{ fontSize:"10px", color:MUTED, fontFamily:"monospace", margin:"2px 0 6px" }}>Next.js • Node.js • MongoDB • Python • Docker</div>
                        <ul style={{ padding:0, margin:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"4px" }}>
                          {[
                            "Built an AI-assisted platform to collect, validate, and organize regional food knowledge across India.",
                            "Developed automated data ingestion and processing pipelines for structured dataset creation.",
                            "Implemented review workflows and validation mechanisms to improve data quality.",
                            "Project featured in The Hindu and other media coverage."
                          ].map(item => (
                            <li key={item} style={{ fontSize:"11px", color:INK, display:"flex", gap:"6px", lineHeight:1.5 }}>
                              <span>—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong style={{ fontSize:"12px" }}>TrustChain – Supplier Verification Platform</strong>
                        <div style={{ fontSize:"10px", color:MUTED, fontFamily:"monospace", margin:"2px 0 6px" }}>Node.js • MongoDB • REST APIs</div>
                        <ul style={{ padding:0, margin:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"4px" }}>
                          {[
                            "Developed backend APIs for supplier onboarding and verification workflows.",
                            "Implemented authentication, authorization, and risk assessment modules.",
                            "Designed scalable data models and search functionality for supplier intelligence."
                          ].map(item => (
                            <li key={item} style={{ fontSize:"11px", color:INK, display:"flex", gap:"6px", lineHeight:1.5 }}>
                              <span>—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Skills</div>
                    <div style={{ display:"flex", flexDirection:"column", gap:"6px", fontSize:"11px" }}>
                      <div><strong>Languages:</strong> Python, SQL, JavaScript, TypeScript</div>
                      <div><strong>AI & ML:</strong> Machine Learning, NLP, Prompt Engineering, Data Preprocessing, Data Validation, Feature Engineering</div>
                      <div><strong>Backend:</strong> FastAPI, Node.js, REST APIs, Express</div>
                      <div><strong>Web:</strong> React.js, Next.js</div>
                      <div><strong>Databases:</strong> MongoDB, PostgreSQL, SQL</div>
                      <div><strong>Tools:</strong> Git, Docker, Linux, Postman</div>
                      <div><strong>Core CS:</strong> DSA, OOP, DBMS, OS, Computer Networks</div>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"8px", borderBottom:`1px solid ${BORDER}`, paddingBottom:"4px" }}>Professional Experience</div>
                    <div>
                      <div style={{ display:"flex", justifyContent:"space-between", fontWeight:600, fontSize:"12px" }}>
                        <span>Research Intern – CVIT Lab, IIIT Hyderabad</span>
                        <span style={{ fontSize:"11px", color:MUTED }}>Present</span>
                      </div>
                      <div style={{ fontSize:"11px", color:MUTED, marginBottom:"6px" }}>Under Prof. C. V. Jawahar</div>
                      <ul style={{ padding:0, margin:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"4px" }}>
                        {[
                          "Contributing to AI-powered data processing and information extraction systems.",
                          "Working on large-scale data collection, validation, and structured knowledge generation pipelines.",
                          "Collaborating with researchers and engineers on backend services and data workflows.",
                          "Developing maintainable and scalable software components for research-driven applications."
                        ].map(item => (
                          <li key={item} style={{ fontSize:"11px", color:INK, display:"flex", gap:"6px", lineHeight:1.5 }}>
                            <span>—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ borderTop:`1px solid ${BORDER}`, padding:"14px 24px", background:CARD, display:"flex", justifyContent:"flex-end", borderRadius:"0 0 10px 10px" }}>
              <button onClick={() => window.print()} style={{ padding:"8px 20px", background:INK, color:BG, border:"none", borderRadius:"5px", fontSize:"12px", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Print / Save PDF</button>
            </div>
          </div>
        </div>
      )}

      {/* PUBLICATION MODAL */}
      {showPublication && (
        <div style={{ position:"fixed", inset:0, zIndex:100, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }} onClick={() => setShowPublication(false)}>
          <div style={{ background:BG, borderRadius:"12px", border:`1px solid ${BORDER}`, maxWidth:"800px", width:"100%", maxHeight:"90vh", display:"flex", flexDirection:"column", boxShadow:"0 32px 80px rgba(0,0,0,0.3)" }} onClick={e => e.stopPropagation()}>
            <div style={{ padding:"16px 24px", borderBottom:`1px solid ${BORDER}`, background:CARD, display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"12px 12px 0 0" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"13px", fontWeight:600 }}>
                📰 The Hindu Newspaper Feature
              </div>
              <div style={{ display:"flex", gap:"8px" }}>
                <a href="https://www.thehindu.com/food/features/ai-powered-food-map-of-india-by-a-team-at-iiit-in-hyderabad/article71056440.ece/amp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                  <button style={{ fontSize:"12px", color:BG, background:INK, border:"none", padding:"5px 14px", borderRadius:"5px", cursor:"pointer", fontFamily:"inherit" }}>Read Article ↗</button>
                </a>
                <button onClick={() => setShowPublication(false)} style={{ fontSize:"12px", color:MUTED, background:BG, border:`1px solid ${BORDER}`, padding:"5px 14px", borderRadius:"5px", cursor:"pointer", fontFamily:"inherit" }}>Close</button>
              </div>
            </div>
            <div style={{ padding:"24px", overflowY:"auto", display:"flex", justifyContent:"center", alignItems:"center", background:"#FAFAF8" }}>
              <img 
                src="/hindunewsarticle.jpeg" 
                alt="The Hindu Newspaper clipping featuring Padmaja" 
                style={{ maxWidth:"100%", height:"auto", borderRadius:"6px", border:`1px solid ${BORDER}`, boxShadow:"0 8px 24px rgba(0,0,0,0.05)" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
