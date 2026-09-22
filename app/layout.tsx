import type {Metadata,Viewport} from "next";
import "./globals.css";
export const metadata:Metadata={title:"B Rajaravikumar — Full-Stack Developer & AI Builder",description:"SaaS, eCommerce, AI automation and digital product development.",authors:[{name:"B Rajaravikumar"}],robots:{index:true,follow:true}};
export const viewport:Viewport={width:"device-width",initialScale:1,colorScheme:"dark",themeColor:"#08090A"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}