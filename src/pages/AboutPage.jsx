import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import { TeamCard } from "../components/cards";
import { companyHighlights, stats, teamMembers } from "../data/siteData";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Sukun Weddings"
        subtitle="A boutique wedding planning studio shaping heartfelt celebrations with modern luxury and quiet elegance."
        image="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="We blend serene planning with editorial design sensibility."
                text="Our team believes the planning journey should feel calm, collaborative, and deeply personal from the very first call."
              />
            </div>
            <div className="card-soft p-8">
              <p>
                Sukun Weddings was created for couples who want elevated design
                without losing warmth. We manage timelines, vendors, guest
                touchpoints, and styling direction with equal care so your
                celebration feels beautifully complete.
              </p>
              <p className="mt-4">
                Whether the day is intimate or grand, we focus on atmosphere,
                ease, and details that feel timeless in photographs and in
                memory.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="container-shell pb-8">
        <AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-3">
            {companyHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="card-soft p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose/10 text-rose">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-4">{item.text}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      <div className="section-space bg-white/55">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Meet The Team"
              title="Experienced planners, designers, and guest-care specialists."
              text="The people behind the process, atmosphere, and on-site calm."
              center
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Achievements"
            title="A growing portfolio of joyful celebrations and beautiful spaces."
            center
          />
          <div className="mt-12">
            <StatsStrip items={stats} />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
