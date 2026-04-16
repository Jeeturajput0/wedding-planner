import { Heart, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactDetails, navLinks } from "../data/siteData";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Heart, href: "#", label: "Pinterest" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rose/10 bg-white/70">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="eyebrow">Jeetu</p>
          <h3 className="text-3xl font-semibold">
            Romantic planning for celebrations that feel effortless.
          </h3>
          <p className="max-w-md">
            A soft, modern wedding brand for couples who want grace, calm, and
            memorable design in every moment.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-semibold">Quick Links</h4>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-ink/70 transition hover:text-rose"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xl font-semibold">Contact</h4>
          <div className="space-y-3 text-sm text-ink/75">
            {contactDetails.map((item) => (
              <p key={item.label}>{item.value}</p>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <MapPin size={16} className="text-rose" />
              <Phone size={16} className="text-rose" />
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/20 bg-white/80 transition hover:-translate-y-0.5 hover:border-rose hover:text-rose"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-rose/10 py-5 text-center text-sm text-ink/60">
        Copyright 2026 Sukun Wedding Planner. Crafted with elegance.
      </div>
    </footer>
  );
}
