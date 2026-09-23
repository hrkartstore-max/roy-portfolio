"use client";
import {useEffect,useState} from "react";
import {motion} from "framer-motion";
import {ArrowUpRight,Menu,X,Mail,Plus,MessageCircle,ShoppingBag,Globe,Code2} from "lucide-react";

const projects=[
 {n:"01",tag:"SAAS / WEBSITE BUILDER",name:"HEPRA",desc:"A digital platform for local businesses — websites, products, ordering, subscriptions and analytics.",meta:"NEXT.JS · NODE · MONGODB",stack:["Next.js","Node.js","MongoDB","Multi-tenant SaaS"],problem:"Local businesses need a faster way to get a professional digital presence without stitching together multiple tools.",solution:"A multi-tenant website builder concept with templates, product management, WhatsApp ordering, UPI payments, SEO and analytics.",features:["Multi-tenant website builder","Template-based storefronts","Product & order management","WhatsApp + UPI ordering","SEO & analytics"],result:"Designed as a reusable SaaS foundation for restaurants, salons, clinics, optical stores and local shops."},
 {n:"02",tag:"ECOMMERCE / SHOPIFY",name:"HEPRA OPTICAL",desc:"A premium optical commerce experience with prescription-led product configuration and a Lenskart-inspired order flow.",meta:"SHOPIFY · LIQUID · UX/UI",stack:["Shopify OS 2.0","Liquid","UX/UI","Optical Configurator"],problem:"Optical products need more than a standard add-to-cart flow because lens, prescription and fitting choices change the purchase journey.",solution:"A Shopify OS 2.0 storefront with category-led discovery and a guided configuration flow for frames, lenses and prescriptions.",features:["Custom Shopify storefront","Optical configurator","Prescription / PD flow","Contact lens purchase flow","Mobile-first product UX"],result:"A commerce architecture focused on reducing friction between product discovery and prescription-aware checkout."},
 {n:"03",tag:"FINTECH / AI",name:"DEBT FREEDOM AI",desc:"An AI-powered debt planning workspace for tracking loans and exploring repayment strategies.",meta:"NEXT.JS · AI · RECHARTS",stack:["Next.js","TypeScript","AI","Recharts"],problem:"Managing multiple loans, balances and repayment timelines can become difficult to understand at a glance.",solution:"A dashboard concept that organizes loans, repayment strategies, progress and financial insights in one workspace.",features:["Loan tracking","Snowball vs avalanche comparison","Finance dashboard","Progress visualizations","AI-assisted planning"],result:"A focused product concept for turning a complex debt picture into an understandable planning workflow."},
 {n:"04",tag:"OPTICAL SAAS",name:"EASYSPECS",desc:"Optical billing and prescription workflow concept for stores, contact lenses and invoice automation.",meta:"REACT · NODE · MONGODB",stack:["React","Node.js","MongoDB","Optical SaaS"],problem:"Optical stores often need prescription data, lens pricing and billing to work together instead of being handled separately.",solution:"A custom optical workflow concept connecting prescription capture, product logic and invoice generation.",features:["Prescription form","Rx history","Lens pricing logic","Contact lens workflow","Invoice generation"],result:"A foundation for a store-facing optical operations tool that can grow into a full SaaS product."}];
const skills=["Next.js","React","TypeScript","Node.js","MongoDB","Shopify","Liquid","Tailwind CSS","Framer Motion","AI Automation","Product Design","Figma"];
const services=[
 ["01","SHOPIFY DEVELOPMENT","Build a complete Shopify store with a custom storefront, product pages, collections, cart, responsive design and conversion-focused shopping experience.","SHOPIFY · LIQUID"],
 ["02","WORDPRESS DEVELOPMENT","Build a professional WordPress website for businesses, services, portfolios, blogs or local brands with responsive design and easy content management.","WORDPRESS · PHP"],
 ["03","PHP DEVELOPMENT","Build custom PHP websites and business systems such as booking websites, admin panels, forms, dashboards and database-powered applications.","PHP · MYSQL"]
];
const process=[["01","DISCOVER","Understand the business, problem and users."],["02","DESIGN","Structure the experience and interface."],["03","BUILD","Develop the product with modern technology."],["04","SHIP","Deploy, test and improve."]];
export default function Home(){
 const[open,setOpen]=useState(false);
 const[active,setActive]=useState("work");
 const[scrollProgress,setScrollProgress]=useState(0);
 const[showTop,setShowTop]=useState(true);
 const[selected,setSelected]=useState<(typeof projects)[number] | null>(null);
 const[form,setForm]=useState({name:"",business:"",type:"Shopify",budget:"₹2,999+",message:""});
 const[submitted,setSubmitted]=useState(false);
 useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setScrollProgress(max?window.scrollY/max*100:0);setShowTop(window.scrollY<80)};window.addEventListener("scroll",onScroll,{passive:true});onScroll();return()=>window.removeEventListener("scroll",onScroll)},[]);
 useEffect(()=>{if(!selected)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setSelected(null)};document.addEventListener("keydown",onKey);const prev=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=prev}},[selected]);
 useEffect(()=>{const ids=["work","pricing","about","services","process","why","contact"];const obs=new IntersectionObserver(entries=>{const hit=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(hit)setActive(hit.target.id)},{rootMargin:"-25% 0px -55% 0px",threshold:[.1,.25,.5]});ids.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});return()=>obs.disconnect()},[]);
 const sendWhatsApp=(e:React.FormEvent)=>{e.preventDefault();const text=encodeURIComponent(`Hi Roy, I want to start a project.

Name: ${form.name}
Business: ${form.business}
Website type: ${form.type}
Budget: ${form.budget}
Details: ${form.message}`);window.open("https://wa.me/918124262289?text="+text,"_blank");setSubmitted(true)};
 return <main>
  <div className="scroll-progress" style={{width:`${scrollProgress}%`}}/><header className="topbar shell"><a href="#top" className="wordmark">RB<span>· DIGITAL</span></a><nav className={open?"navlinks open":"navlinks"}>{["Work","Pricing","About","Services","Process","Contact"].map(x=>{const id=x.toLowerCase();return <a className={active===id?"active":""} key={x} href={"#"+id} onClick={()=>setOpen(false)}>{x}</a>})}<a className="navcta" href="#contact">START A PROJECT <ArrowUpRight size={13}/></a></nav><button className="hamb" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>

  <section id="top" className="hero shell">
   <div className="hero-copy">
    <div className="stamp">BUILDING DIGITAL PRODUCTS <span>●</span></div>
    <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>THE DIGITAL<br/>PRODUCT <strong>BUILDER.</strong></motion.h1>
    <p>Full-stack developer, AI builder and product thinker. Turning ideas into sharp interfaces, useful software and production-ready systems.</p>
    <div className="hero-bottom"><a className="orange-btn" href="#work">SEE THE WORK <ArrowUpRight size={15}/></a><span>CHENNAI · INDIA<br/>AVAILABLE FOR SELECT PROJECTS</span></div>
   </div>
   <div className="hero-stats">
    <div><b>372+</b><span>PROJECTS<br/>COMPLETED</span></div>
    <div><b>12+</b><span>TOOLS &<br/>FRAMEWORKS</span></div>
    <div><b>∞</b><span>IDEAS<br/>TO SHIP</span></div>
   </div>
  </section>

  <section className="marquee" aria-label="Skills ticker"><div>SAAS <i>✦</i> AI <i>✦</i> SHOPIFY <i>✦</i> WORDPRESS <i>✦</i> PHP <i>✦</i> PRODUCT DESIGN <i>✦</i> AUTOMATION <i>✦</i></div></section>

  <section id="work" className="section shell">
   <div className="section-head"><div><small>01 — SELECTED WORK</small><h2>BUILT TO<br/><em>BE USED.</em></h2></div><span>SCROLL / EXPLORE ↓</span></div>
   <div className="workgrid">{projects.map((p,i)=><motion.article className="workcard" key={p.n} role="button" tabIndex={0} onClick={()=>setSelected(p)} onKeyDown={e=>e.key==="Enter"&&setSelected(p)} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
    <div className="cardtop"><span>{p.tag}</span><span>{p.n}</span></div><div className={"preview preview-"+p.n}><div className="previewbar"><i/><i/><i/></div><div className="mock-content"><div className="mock-nav"><b>{p.name}</b><span>MENU</span></div><div className="mock-hero"><small>{p.tag}</small><strong>{p.n==="01"?"BUILD":p.n==="02"?"SEE CLEARER":p.n==="03"?"DEBT, SIMPLIFIED":"OPTICAL FLOW"}</strong><i></i></div><div className="mock-cards"><span></span><span></span><span></span></div></div><ArrowUpRight className="cardarrow"/></div><h3>{p.name}</h3><p>{p.desc}</p><code>{p.meta}</code>
   </motion.article>)}</div>
  </section>

  <section id="pricing" className="section shell pricing"><div className="section-head"><div><small>02 — WEBSITE PRICING</small><h2>SIMPLE<br/><em>PRICING.</em></h2></div><span>ONE-TIME BUILD</span></div>
   <div className="pricegrid">
    <article><div className="price-top"><span>SHOPIFY</span><b>₹2,999</b></div><div className="price-icon"><ShoppingBag size={20}/></div><h3>Shopify Website</h3><p>One-time website creation payment. Shopify platform subscription starts after the included 3-month period. Shopify subscription and domain charges are paid separately by the customer.</p><ul><li>Custom storefront setup</li><li>Responsive website</li><li>Products, collections & pages</li><li>Basic eCommerce setup</li><li>3 months Shopify period included</li></ul><a href="#contact" onClick={()=>{setForm({...form,type:"Shopify",budget:"₹2,999+"});}}>GET STARTED <ArrowUpRight size={14}/></a></article>
    <article><div className="price-top"><span>WORDPRESS</span><b>₹5,999</b></div><div className="price-icon"><Globe size={20}/></div><h3>WordPress Website</h3><p>One-time ₹5,999 website package for 1 year. Domain is not included and is paid separately by the customer.</p><ul><li>Business website setup</li><li>Responsive pages</li><li>WordPress CMS</li><li>Basic SEO structure</li><li>1-year website package</li></ul><a href="#contact" onClick={()=>{setForm({...form,type:"WordPress",budget:"₹5,999+"});}}>GET STARTED <ArrowUpRight size={14}/></a></article>
    <article><div className="price-top"><span>PHP</span><b>₹5,999</b></div><div className="price-icon"><Code2 size={20}/></div><h3>PHP Website</h3><p>One-time ₹5,999 package for 1 year. Domain is not included and is paid separately by the customer.</p><ul><li>Custom PHP website</li><li>Responsive frontend</li><li>Forms & business logic</li><li>MySQL/database integration</li><li>1-year website package</li></ul><a href="#contact" onClick={()=>{setForm({...form,type:"PHP",budget:"₹5,999+"});}}>GET STARTED <ArrowUpRight size={14}/></a></article>
   </div>
   <div className="price-note">DOMAIN COSTS ARE PAID SEPARATELY BY THE CUSTOMER. THIRD-PARTY PLATFORM/HOSTING SUBSCRIPTIONS ARE ALSO SEPARATE WHERE APPLICABLE.</div>
  </section>

  <section id="about" className="section shell about"><div><small>03 — ABOUT</small><h2>LESS<br/><em>NOISE.</em><br/>MORE<br/>BUILDING.</h2></div><div className="aboutcopy"><p className="big">The goal is simple: make digital products feel clear, useful and considered.</p><p>Development, product design, eCommerce and AI come together here. From a rough business idea to a polished interface and a deployable application, the focus stays on shipping.</p><div className="facts"><span><b>01</b> Product thinking</span><span><b>02</b> Full-stack execution</span><span><b>03</b> AI + automation</span><span><b>04</b> eCommerce UX</span></div></div></section>

  <section id="services" className="section shell"><div className="section-head"><div><small>04 — WHAT CAN BE BUILT?</small><h2>WHAT CAN<br/><em>BE BUILT?</em></h2></div></div><div className="servicegrid">{services.map(([n,t,d,m])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><code>{m}</code><Plus className="serviceplus" size={18}/></article>)}</div></section>

  <section id="process" className="section shell process"><div className="section-head"><div><small>05 — PROCESS</small><h2>FROM IDEA<br/><em>TO SHIPPED.</em></h2></div></div><div className="processgrid">{process.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>


  <section id="why" className="section shell trust"><div className="section-head"><div><small>06 — WHY WORK WITH ME</small><h2>BUILD WITH<br/><em>CLARITY.</em></h2></div><span>PRODUCT · DESIGN · CODE</span></div><div className="trust-grid"><article><b>01</b><h3>ONE BUILDING MINDSET</h3><p>Strategy, interface and development stay connected from the first idea to the shipped product.</p></article><article><b>02</b><h3>BUSINESS FIRST</h3><p>Every screen and workflow is shaped around the business goal, customer journey and real-world use.</p></article><article><b>03</b><h3>DIRECT COMMUNICATION</h3><p>Clear scope, practical updates and a direct project enquiry flow without unnecessary layers.</p></article><article><b>04</b><h3>SHIP & IMPROVE</h3><p>Start with a useful version, deploy it, learn from usage and keep improving the product.</p></article></div></section>

  <section className="section shell availability"><div className="availability-card"><div><span className="status-dot"></span><small>PROJECT STATUS</small><h2>AVAILABLE FOR<br/><em>SELECT PROJECTS.</em></h2><p>Currently open for Shopify, WordPress, PHP, SaaS and AI/automation projects.</p></div><a className="orange-btn" href="#contact">START A PROJECT <ArrowUpRight size={15}/></a></div></section>

  <section className="section shell toolbox"><div><small>06 — TOOLBOX</small><h2>TOOLS<br/><em>I USE.</em></h2></div><div className="toollist">{skills.map((s,i)=><span key={s}><b>{String(i+1).padStart(2,"0")}</b>{s}</span>)}</div></section>

  <section id="contact" className="contact shell"><div className="contact-inner"><div className="contact-copy"><small>07 — CONTACT</small><h2>HAVE A<br/>GOOD <em>IDEA?</em></h2><p>Let's turn it into something people can actually use.</p><div className="contact-actions"><a href="mailto:rajaravikumarb@gmail.com" className="orange-btn">EMAIL ME <Mail size={14}/></a><a href="https://wa.me/918124262289" target="_blank" rel="noreferrer" className="whatsapp-btn"><MessageCircle size={15}/> WHATSAPP CHAT</a></div></div><form className="lead-form" onSubmit={sendWhatsApp}><div className="form-title">START A PROJECT</div><label>NAME<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>BUSINESS<input value={form.business} onChange={e=>setForm({...form,business:e.target.value})} placeholder="Business / brand"/></label><div className="form-row"><label>TYPE<select value={form.type} onChange={e=>setForm({...form,type:e.target.value})}><option>Shopify</option><option>WordPress</option><option>PHP</option><option>Custom SaaS / AI</option></select></label><label>BUDGET<select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}><option>₹2,999+</option><option>₹5,999+</option><option>₹10,000+</option><option>₹20,000+</option><option>Custom</option></select></label></div><label>PROJECT DETAILS<textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What needs to be built?"></textarea></label><button className="orange-btn" type="submit">{submitted?"OPENED WHATSAPP ✓":"SEND TO WHATSAPP"} {!submitted&&<ArrowUpRight size={15}/>}</button></form></div></section>
  <section className="final-cta shell"><div><small>LET’S BUILD SOMETHING USEFUL.</small><h2>YOUR IDEA.<br/><em>SHIPPED.</em></h2></div><a className="orange-btn" href="#contact">START A PROJECT <ArrowUpRight size={15}/></a></section>
  <footer className="footer shell"><span>© 2026 B RAJARAVIKUMAR</span><div className="footer-links"><a href="mailto:rajaravikumarb@gmail.com">EMAIL</a><a href="https://wa.me/918124262289" target="_blank" rel="noreferrer">WHATSAPP</a><a href="https://github.com/hrkartstore-max/roy-portfolio" target="_blank" rel="noreferrer">GITHUB</a><a href="#top">BACK TO TOP ↑</a></div></footer>

  {selected&&<div className="case-overlay" role="dialog" aria-modal="true" onClick={()=>setSelected(null)}><article className="case-modal" onClick={e=>e.stopPropagation()}><button className="case-close" title="Close (Esc)" aria-label="Close project details" onClick={()=>setSelected(null)}><X size={18}/></button><div className="case-label">CASE STUDY / {selected.n}</div><div className={"case-hero case-hero-"+selected.n}><div className="case-browser"><span/><span/><span/></div><div className="case-screen"><small>{selected.tag}</small><strong>{selected.name}</strong><i/><div className="case-screen-grid"><b/><b/><b/></div></div></div><h2>{selected.name}</h2><p className="case-intro">{selected.desc}</p><div className="case-meta"><span>STACK</span>{selected.stack.map(x=><b key={x}>{x}</b>)}</div><div className="case-columns"><div><small>THE PROBLEM</small><p>{selected.problem}</p></div><div><small>THE APPROACH</small><p>{selected.solution}</p></div></div><div className="case-features"><small>KEY FEATURES</small><div>{selected.features.map(x=><span key={x}>✦ {x}</span>)}</div></div><div className="case-result"><small>OUTCOME</small><p>{selected.result}</p></div><a href="#contact" className="orange-btn" onClick={()=>{setSelected(null);setForm({...form,type:selected.n==="02"?"Shopify":selected.n==="03"?"Custom SaaS / AI":"Custom SaaS / AI",budget:selected.n==="01"?"₹20,000+":selected.n==="02"?"₹10,000+":"Custom"})}}>BUILD SOMETHING SIMILAR <ArrowUpRight size={15}/></a></article></div>}
 {!showTop&&<a className="back-top" href="#top" aria-label="Back to top">↑</a>}
 </main>
}