import { useMemo, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/siteData";

const filters = ["All", "Wedding", "Engagement", "Decor"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Browse romantic frames, delicate decor moments, and editorial wedding imagery."
        image="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=80"
        eyebrow="Visual Story"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Wedding Moments"
            title="A curated visual journal of celebrations we adore."
            center
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-rose text-white"
                    : "border border-rose/20 bg-white/80 text-ink hover:border-rose hover:text-rose"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredItems.map((item) => (
              <div
                key={`${item.title}-${item.category}`}
                className="group relative mb-5 overflow-hidden rounded-[2rem]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-5 left-5 translate-y-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-script text-2xl">{item.category}</p>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
