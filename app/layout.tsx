import type {Metadata,Viewport} from "next";
import "./globals.css";
export const metadata:Metadata={title:"B Rajaravikumar — Digital Product Builder",description:"Full-stack developer and AI builder creating SaaS products, Shopify stores, WordPress and PHP websites, eCommerce experiences and automation systems.",authors:[{name:"B Rajaravikumar"}],robots:{index:true,follow:true},openGraph:{title:"B Rajaravikumar — Digital Product Builder",description:"SaaS, eCommerce, Shopify, WordPress, PHP and AI product development.",type:"website"}};
export const viewport:Viewport={width:"device-width",initialScale:1,colorScheme:"light",themeColor:"#F1ECDF"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}