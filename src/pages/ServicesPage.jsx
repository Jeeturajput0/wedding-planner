import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { ServiceCard } from "../components/cards";
import { services } from "../data/siteData";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services Designed Around Your Wedding Story"
        subtitle="From strategic planning to floral-led styling, we offer graceful support at every stage of your celebration."
        image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=80"
        eyebrow="Our Services"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Signature Offerings"
            title="Tailored planning and design services for modern romantic weddings."
            text="Every package can be customized for guest count, location, and event complexity."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
