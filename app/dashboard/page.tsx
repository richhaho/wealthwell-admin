
export const dynamic = "force-dynamic";

import { Suspense } from 'react'
import HeaderAuth from "@/components/HeaderAuth";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>  
        <HeaderAuth />
        
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}