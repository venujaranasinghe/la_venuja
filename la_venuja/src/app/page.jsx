import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/green-life/logo-dark.svg";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Hello there!
            <br />
            I'm Venuja
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          An undergraduate computer science student at SLIIT with a passion for building innovative projects and solving real-world problems through technology.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "la_Venuja", logo: logoPhobiaDark }}
      >
        I'm currently available to take on new projects, 
        so feel free to send me a message about anything 
        that you want me to work on. You can contact anytime.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}