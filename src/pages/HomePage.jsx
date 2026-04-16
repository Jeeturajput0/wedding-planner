import AnimatedSection from "../components/AnimatedSection";
import HeroSlider from "../components/HeroSlider";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import {
  BlogCard,
  PricingCard,
  ProductCard,
  ServiceCard,
  TeamCard,
} from "../components/cards";
import {
  blogPosts,
  galleryItems,
  heroSlides,
  pricingPlans,
  products,
  services,
  stats,
  teamMembers,
  testimonials,
} from "../data/siteData";

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <div className="container-shell section-space">
        <AnimatedSection>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <img
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80"
              alt="Wedding planner overview"
              className="h-[540px] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Welcome"
                title="Planning intimate celebrations with softness, structure, and style."
                text="We turn inspiration into a graceful wedding journey. From timelines and venue flow to floral textures and candlelit details, every decision is guided with care."
              />
              <p>
                Sukun is built for couples who want a calm planning experience
                and a beautifully editorial wedding day. We blend premium design
                with heartfelt service so the celebration feels effortless.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-soft p-5">
                  <h3 className="text-xl font-semibold">Boutique Approach</h3>
                  <p className="mt-2">
                    Personal guidance, curated vendor partners, and intentional
                    design direction.
                  </p>
                </div>
                <div className="card-soft p-5">
                  <h3 className="text-xl font-semibold">Elegant Execution</h3>
                  <p className="mt-2">
                    We choreograph every touchpoint so your day feels fluid,
                    elevated, and memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="container-shell pb-10">
        <AnimatedSection>
          <StatsStrip items={stats} />
        </AnimatedSection>
      </div>

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Services"
            title="Everything needed for a polished and poetic wedding experience."
            text="Explore our signature planning, decor, styling, and photography offerings."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="section-space bg-white/55">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Gallery"
              title="A glimpse into floral aisles, soft vows, and candlelit evenings."
              text="A curated grid of wedding imagery that captures the warmth of modern romance."
              center
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {galleryItems.slice(0, 8).map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className={`group overflow-hidden rounded-[2rem] ${
                    index % 3 === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-90" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="font-script text-2xl">{item.category}</p>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the planners and stylists behind the experience."
            text="A collaborative team shaping every event with warmth, elegance, and detail."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="section-space bg-gradient-to-b from-white/50 to-rose/10">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Testimonials"
              title="Kind words from couples and families we've celebrated with."
              text="We care deeply about making the process feel calm and the final result feel extraordinary."
              center
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="card-soft p-8">
                  <p className="font-script text-3xl text-rose">"</p>
                  <p className="mt-2">{item.quote}</p>
                  <h3 className="mt-6 text-2xl font-semibold">{item.name}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Shop Preview"
            title="Elevated pieces for wedding gifting, styling, and keepsakes."
            text="Browse a curated selection of bridal essentials and romantic details."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="section-space">
        <div className="container-shell">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=80"
                alt="Bride portrait"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/45" />
              <div className="relative grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
                <div className="self-center">
                  <p className="eyebrow text-white">Say Hello</p>
                  <h2 className="mt-2 max-w-xl text-4xl font-semibold text-white md:text-5xl">
                    Let's design a wedding that feels soft, immersive, and unmistakably yours.
                  </h2>
                  <p className="mt-5 max-w-lg text-white/80">
                    Share your vision, guest count, location, and dreams. We'll
                    craft a planning path that feels clear and beautifully
                    tailored.
                  </p>
                </div>
                <form className="rounded-[2rem] border border-white/20 bg-white/15 p-6 shadow-soft backdrop-blur-xl md:p-8">
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="rounded-2xl border border-white/20 bg-white/80 px-5 py-3 outline-none placeholder:text-ink/45"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="rounded-2xl border border-white/20 bg-white/80 px-5 py-3 outline-none placeholder:text-ink/45"
                    />
                    <input
                      type="text"
                      placeholder="Wedding Date"
                      className="rounded-2xl border border-white/20 bg-white/80 px-5 py-3 outline-none placeholder:text-ink/45"
                    />
                    <textarea
                      rows="5"
                      placeholder="Tell us about your dream wedding..."
                      className="rounded-2xl border border-white/20 bg-white/80 px-5 py-3 outline-none placeholder:text-ink/45"
                    />
                    <button className="button-primary w-full">Send Inquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible planning packages for intimate weddings to grand celebrations."
            text="Choose the level of support that fits your story, scope, and style."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="section-space bg-white/55">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Blog"
              title="Thoughtful wedding advice, inspiration, and planning notes."
              text="Our latest articles for couples who love beautiful details and practical guidance."
              center
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
