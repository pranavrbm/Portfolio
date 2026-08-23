import { NavBar } from '@/components/nav-bar'
import { TerminalHero } from '@/components/terminal-hero'
import { TechMarquee } from '@/components/marquee'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { CredentialsSection } from '@/components/credentials-section'
import { ContactSection, SiteFooter } from '@/components/contact-section'
import {
  CursorGlow,
  NoiseOverlay,
  ScrollProgress,
} from '@/components/site-chrome'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <NoiseOverlay />
      <ScrollProgress />
      <CursorGlow />
      <NavBar />
      <TerminalHero />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CredentialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
