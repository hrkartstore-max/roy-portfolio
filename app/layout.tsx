import type {Metadata,Viewport} from "next";
import "./globals.css";

const siteUrl="https://portfolio-psi.vercel.app";

export const metadata:Metadata={
 title:{
  default:"Rajaravikumar | Shopify Developer, Web Developer & AI Builder in Chennai",
  template:"%s | Rajaravikumar"
 },
 description:"Rajaravikumar is a Chennai-based digital product builder creating Shopify stores, WordPress and PHP websites, SaaS products, AI automation and eCommerce experiences for businesses.",
 keywords:[
  "Rajaravikumar",
  "Shopify developer in Chennai",
  "Shopify website developer Chennai",
  "ecommerce website developer Chennai",
  "WordPress developer Chennai",
  "PHP developer Chennai",
  "web developer Chennai",
  "Next.js developer Chennai",
  "AI automation developer Chennai",
  "Shopify store development",
  "ecommerce website development",
  "website developer for small business",
  "SaaS developer India"
 ],
 authors:[{name:"B Rajaravikumar",url:siteUrl}],
 creator:"B Rajaravikumar",
 publisher:"B Rajaravikumar",
 metadataBase:new URL(siteUrl),
 alternates:{canonical:"/",languages:{"en-IN":"/"}},
 robots:{
  index:true,
  follow:true,
  "max-image-preview":"large",
  "max-snippet":-1,
  "max-video-preview":-1
 },
 openGraph:{
  title:"Rajaravikumar | Shopify Developer, Web Developer & AI Builder",
  description:"Shopify stores, eCommerce websites, SaaS, AI automation and custom web development for businesses.",
  type:"website",
  url:siteUrl,
  siteName:"RB · Digital",
  locale:"en_IN"
 },
 twitter:{
  card:"summary_large_image",
  title:"Rajaravikumar | Shopify Developer & AI Builder",
  description:"Digital products, Shopify, eCommerce, SaaS and AI automation."
 },
 category:"technology",
 classification:"Web Development, eCommerce, SaaS and AI Automation",
 referrer:"origin-when-cross-origin"
};

const structuredData={
 "@context":"https://schema.org",
 "@graph":[
  {
   "@type":"Person",
   "@id":siteUrl+"/#person",
   "name":"B Rajaravikumar",
   "url":siteUrl,
   "jobTitle":"Digital Product Builder",
   "description":"Full-stack developer and digital product builder focused on Shopify, eCommerce, SaaS, AI automation, WordPress and PHP development.",
   "address":{"@type":"PostalAddress","addressLocality":"Chennai","addressRegion":"Tamil Nadu","addressCountry":"IN"},
   "knowsAbout":["Shopify","eCommerce","Next.js","React","TypeScript","Node.js","MongoDB","WordPress","PHP","AI automation","SaaS","Product Design"],
   "sameAs":["https://github.com/hrkartstore-max"]
  },
  {
   "@type":"ProfessionalService",
   "@id":siteUrl+"/#business",
   "name":"RB · Digital",
   "url":siteUrl,
   "description":"Web development and digital product services for Shopify, WordPress, PHP, eCommerce, SaaS and AI automation.",
   "provider":{"@id":siteUrl+"/#person"},
   "areaServed":[
    {"@type":"City","name":"Chennai"},
    {"@type":"Country","name":"India"}
   ],
   "serviceType":["Shopify Development","eCommerce Website Development","WordPress Development","PHP Development","SaaS Development","AI Automation"]
  },
  {
   "@type":"WebSite",
   "@id":siteUrl+"/#website",
   "url":siteUrl,
   "name":"RB · Digital",
   "description":"Digital product development portfolio of B Rajaravikumar.",
   "publisher":{"@id":siteUrl+"/#person"},
   "inLanguage":"en-IN"
  }
 ]
};

export const viewport:Viewport={width:"device-width",initialScale:1,colorScheme:"light",themeColor:"#F1ECDF"};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en-IN"><head><meta name="theme-color" content="#F1ECDF"/><meta name="format-detection" content="telephone=no"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></head><body>{children}</body></html>
}