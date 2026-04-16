import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { PricingCard } from "../components/cards";
import { pricingPlans } from "../data/siteData";

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing Packages"
        subtitle="Clear, elegant packages that support weddings of different sizes, styles, and planning needs."
        image="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1400&q=80"
        eyebrow="Pricing"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Choose Your Package"
            title="Compare support levels and find the experience that fits your celebration."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
