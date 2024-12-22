import Header from "@/components/header"
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section.context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Richard | Personal Portfolio',
  description: "Hello, I\'m Richard. I\'m a BCIT CST student with a background in Health Sciences,\
  I enjoy using my knowledge in programming and Health field to contribute to the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-grey-50 text-grey-950 relative pt-28
    sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
    
    <ActiveSectionContextProvider>

      <Header />
      {children}
      <Toaster position="top-right" />
      {/* <ThemeSwitch /> */} {/* We will add this later reflecting dark/light mode*/}
    </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
