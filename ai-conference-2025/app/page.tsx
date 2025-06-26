"use client"
import { useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SpeakersSection from "@/components/speakers-section"
import AgendaSection from "@/components/agenda-section"
import TicketsSection from "@/components/tickets-section"
import VenueSection from "@/components/venue-section"
import SponsorsSection from "@/components/sponsors-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <AgendaSection />
        <TicketsSection />
        <VenueSection />
        <SponsorsSection />
      </main>

      <Footer />
    </div>
  )
}
