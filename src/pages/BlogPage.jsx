import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { BlogCard } from "../components/cards";
import { blogPosts } from "../data/siteData";

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Wedding Journal"
        subtitle="Tips, ideas, and planning inspiration for couples designing a graceful celebration."
        image="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80"
        eyebrow="Journal"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Latest Articles"
            title="Thoughtful reads for a calmer and more beautiful planning journey."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
