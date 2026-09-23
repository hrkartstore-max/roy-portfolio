import type {Metadata,Viewport} from "next";
import "./globals.css";

const siteUrl="https://portfolio-psi.vercel.app";

export const metadata:Metadata={
 title:"B Rajaravikumar — Digital Product Builder",
 description:"Full-stack developer and AI builder creating SaaS products, Shopify stores, WordPress and PHP websites, eCommerce experiences and automation systems.",
 keywords:["B Rajaravikumar","digital product builder","Shopify developer","WordPress developer","PHP developer","Next.js developer","AI automation","Chennai developer"],
 authors:[{name:"B Rajaravikumar"}],
 creator:"B Rajaravikumar",
 metadataBase:new URL(siteUrl),
 alternates:{canonical:"/"},
 robots:{index:true,follow:true},
 openGraph:{
  title:"B Rajaravikumar — Digital Product Builder",
  description:"SaaS, eCommerce, Shopify, WordPress, PHP and AI product development.",
  type:"website",
  url:siteUrl,
  siteName:"RB · Digital",
  locale:"en_IN"
 },
 twitter:{card:"summary_large_image",title:"B Rajaravikumar — Digital Product Builder",description:"Digital products, eCommerce, SaaS and AI development."},
 category:"technology",
 classification:"Portfolio / Software Development",
 referrer:"origin-when-cross-origin"
};

export const viewport:Viewport={width:"device-width",initialScale:1,colorScheme:"light",themeColor:"#F1ECDF"};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><head><meta name="theme-color" content="#F1ECDF"/><meta name="format-detection" content="telephone=no"/></head><body>{children}</body></html>
}