import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactPage = () => {
  return (
    <>
      <ParticlesBackground />
      <PageIntro eyebrow="Contact me" title="Let’s work together">
        <p>I can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;