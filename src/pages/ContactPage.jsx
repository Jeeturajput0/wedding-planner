import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { contactDetails } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Tell us about your celebration, and we'll help you shape a wedding experience that feels elegant and personal."
        image="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=80"
        eyebrow="Contact"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card-soft p-8">
              <SectionHeading
                eyebrow="Reach Out"
                title="We'd love to hear about your wedding vision."
                text="Share your event details and our team will get back to you shortly."
              />
              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-rose/5 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-rose">
                      {item.label}
                    </p>
                    <p className="mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-soft p-8">
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-2xl border border-rose/10 bg-white px-5 py-3 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-rose/10 bg-white px-5 py-3 outline-none"
                />
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="rounded-2xl border border-rose/10 bg-white px-5 py-3 outline-none"
                />
                <button className="button-primary w-full">Send Message</button>
              </form>

              <div className="mt-8 overflow-hidden rounded-[1.75rem]">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps?q=Jaipur&z=12&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
