"use client";
import {useState} from "react";
import {motion} from "framer-motion";
import {ArrowUpRight,Menu,X,Mail,Plus,MessageCircle,ShoppingBag,Globe,Code2} from "lucide-react";

const projects=[
 {n:"01",tag:"SAAS / WEBSITE BUILDER",name:"HEPRA",desc:"A digital platform for local businesses — websites, products, ordering, subscriptions and analytics.",meta:"NEXT.JS · NODE · MONGODB"},
 {n:"02",tag:"ECOMMERCE / SHOPIFY",name:"HEPRA OPTICAL",desc:"A premium optical commerce experience with prescription-led product configuration and a Lenskart-inspired order flow.",meta:"SHOPIFY · LIQUID · UX/UI"},
 {n:"03",tag:"FINTECH / AI",name:"DEBT FREEDOM AI",desc:"An AI-powered debt planning workspace for tracking loans and exploring repayment strategies.",meta:"NEXT.JS · AI · RECHARTS"},
 {n:"04",tag:"OPTICAL SAAS",name:"EASYSPECS",desc:"Optical billing and prescription workflow concept for stores, contact lenses and invoice automation.",meta:"REACT · NODE · MONGODB"}];
const skills=["Next.js","React","TypeScript","Node.js","MongoDB","Shopify","Liquid","Tailwind CSS","Framer Motion","AI Automation","Product Design","Figma"];
const services=[
 ["01","SHOPIFY DEVELOPMENT","Build a complete Shopify store with a custom storefront, product pages, collections, cart, responsive design and conversion-focused shopping experience.","SHOPIFY · LIQUID"],
 ["02","WORDPRESS DEVELOPMENT","Build a professional WordPress website for businesses, services, portfolios, blogs or local brands with responsive design and easy content management.","WORDPRESS · PHP"],
 ["03","PHP DEVELOPMENT","Build custom PHP websites and business systems such as booking websites, admin panels, forms, dashboards and database-powered applications.","PHP · MYSQL"]
];
const process=[["01","DISCOVER","Understand the business, problem and users."],["02","DESIGN","Structure the experience and interface."],["03","BUILD","Develop the product with modern technology."],["04","SHIP","Deploy, test and improve."]];
export default function Home(){
 const[open,setOpen]=useState(false);
 return <main>
  <header className="topbar shell"><a href="#top" className="wordmark">RB<span>· DIGITAL</span></a><nav className={open?"navlinks open":"navlinks"}>{["Work","Pricing","About","Services","Process","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}<a className="navcta" href="#contact">START A PROJECT <ArrowUpRight size={13}/></a></nav><button className="hamb" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>

  <section id="top" className="hero shell">
   <div className="hero-copy"><div className="stamp">BUILDING DIGITAL PRODUCTS <span>●</span></div><motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>THE DIGITAL<br/>PRODUCT <strong>BUILDER.</strong></motion.h1><p>Full-stack developer, AI builder and product thinker. Turning ideas into sharp interfaces, useful software and production-ready systems.</p><div className="hero-bottom"><a className="orange-btn" href="#work">SEE THE WORK <ArrowUpRight size={15}/></a><span>CHENNAI · INDIA<br/>AVAILABLE FOR SELECT PROJECTS</span></div></div>
   <div className="hero-visual"><div className="hero-orbit"><div className="orbit-core">RB</div><div className="orbit-ring orbit-ring-a"></div><div className="orbit-ring orbit-ring-b"></div><span className="orbit-label orbit-label-1">IDEAS</span><span className="orbit-label orbit-label-2">BUILD</span><span className="orbit-label orbit-label-3">SHIP</span></div><div className="hero-stats"><div><b>372+</b><span>PROJECTS<br/>COMPLETED</span></div><div><b>12+</b><span>TOOLS &<br/>FRAMEWORKS</span></div><div><b>∞</b><span>IDEAS<br/>TO SHIP</span></div></div></div></div>
  </section>

  <section className="marquee" aria-label="Skills ticker"><div>SAAS <i>✦</i> AI <i>✦</i> SHOPIFY <i>✦</i> WORDPRESS <i>✦</i> PHP <i>✦</i> PRODUCT DESIGN <i>✦</i> AUTOMATION <i>✦</i></div></section>

  <section id="work" className="section shell">
   <div className="section-head"><div><small>01 — SELECTED WORK</small><h2>BUILT TO<br/><em>BE USED.</em></h2></div><span>SCROLL / EXPLORE ↓</span></div>
   <div className="workgrid">{projects.map((p,i)=><motion.article className="workcard" key={p.n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
    <div className="cardtop"><span>{p.tag}</span><span>{p.n}</span></div><div className={"preview preview-"+p.n}><div className="previewbar"><i/><i/><i/></div><div className="previewlines"><b>{p.name}</b><span/><span/><span/></div><ArrowUpRight className="cardarrow"/></div><h3>{p.name}</h3><p>{p.desc}</p><code>{p.meta}</code>
   </motion.article>)}</div>
  </section>

  <section id="pricing" className="section shell pricing"><div className="section-head"><div><small>02 — WEBSITE PRICING</small><h2>SIMPLE<br/><em>PRICING.</em></h2></div><span>ONE-TIME BUILD</span></div>
   <div className="pricegrid">
    <article><div className="price-top"><span>SHOPIFY</span><b>₹2,999</b></div><div className="price-icon"><ShoppingBag size={20}/></div><h3>Shopify Website</h3><p>One-time website creation payment. Shopify platform subscription starts after the included 3-month period. Shopify subscription and domain charges are paid separately by the customer.</p><ul><li>Custom storefront setup</li><li>Responsive website</li><li>Products, collections & pages</li><li>Basic eCommerce setup</li><li>3 months Shopify period included</li></ul><a href="#contact">GET STARTED <ArrowUpRight size={14}/></a></article>
    <article><div className="price-top"><span>WORDPRESS</span><b>₹5,999</b></div><div className="price-icon"><Globe size={20}/></div><h3>WordPress Website</h3><p>One-time ₹5,999 website package for 1 year. Domain is not included and is paid separately by the customer.</p><ul><li>Business website setup</li><li>Responsive pages</li><li>WordPress CMS</li><li>Basic SEO structure</li><li>1-year website package</li></ul><a href="#contact">GET STARTED <ArrowUpRight size={14}/></a></article>
    <article><div className="price-top"><span>PHP</span><b>₹5,999</b></div><div className="price-icon"><Code2 size={20}/></div><h3>PHP Website</h3><p>One-time ₹5,999 package for 1 year. Domain is not included and is paid separately by the customer.</p><ul><li>Custom PHP website</li><li>Responsive frontend</li><li>Forms & business logic</li><li>MySQL/database integration</li><li>1-year website package</li></ul><a href="#contact">GET STARTED <ArrowUpRight size={14}/></a></article>
   </div>
   <div className="price-note">DOMAIN COSTS ARE PAID SEPARATELY BY THE CUSTOMER. THIRD-PARTY PLATFORM/HOSTING SUBSCRIPTIONS ARE ALSO SEPARATE WHERE APPLICABLE.</div>
  </section>

  <section id="about" className="section shell about"><div><small>03 — ABOUT</small><h2>LESS<br/><em>NOISE.</em><br/>MORE<br/>BUILDING.</h2></div><div className="aboutcopy"><p className="big">The goal is simple: make digital products feel clear, useful and considered.</p><p>Development, product design, eCommerce and AI come together here. From a rough business idea to a polished interface and a deployable application, the focus stays on shipping.</p><div className="facts"><span><b>01</b> Product thinking</span><span><b>02</b> Full-stack execution</span><span><b>03</b> AI + automation</span><span><b>04</b> eCommerce UX</span></div></div></section>

  <section id="services" className="section shell"><div className="section-head"><div><small>04 — WHAT CAN BE BUILT?</small><h2>WHAT CAN<br/><em>BE BUILT?</em></h2></div></div><div className="servicegrid">{services.map(([n,t,d,m])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><code>{m}</code><Plus className="serviceplus" size={18}/></article>)}</div></section>

  <section id="process" className="section shell process"><div className="section-head"><div><small>05 — PROCESS</small><h2>FROM IDEA<br/><em>TO SHIPPED.</em></h2></div></div><div className="processgrid">{process.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

  <section className="section shell toolbox"><div><small>06 — TOOLBOX</small><h2>TOOLS<br/><em>I USE.</em></h2></div><div className="toollist">{skills.map((s,i)=><span key={s}><b>{String(i+1).padStart(2,"0")}</b>{s}</span>)}</div></section>

  <section id="contact" className="contact shell"><div className="contact-inner"><small>07 — CONTACT</small><h2>HAVE A<br/>GOOD <em>IDEA?</em></h2><p>Let's turn it into something people can actually use.</p><div className="contact-actions"><a href="mailto:rajaravikumarb@gmail.com" className="orange-btn">EMAIL ME <Mail size={14}/></a><a href="https://wa.me/918124262289" target="_blank" rel="noreferrer" className="whatsapp-btn"><MessageCircle size={15}/> WHATSAPP CHAT</a></div><small className="whatsapp-note">Chat directly on WhatsApp: +91 81242 62289.</small></div></section>
  <footer className="footer shell"><span>© 2026 B RAJARAVIKUMAR</span><span>RB · DIGITAL PRODUCT BUILDER</span></footer>
 </main>
}