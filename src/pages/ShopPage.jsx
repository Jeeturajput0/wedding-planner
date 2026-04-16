import AnimatedSection from "../components/AnimatedSection";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { ProductCard } from "../components/cards";
import { products } from "../data/siteData";

export default function ShopPage() {
  return (
    <>
      <PageBanner
        title="Wedding Shop"
        subtitle="Curated products for bridal styling, gifting, and elegant finishing touches."
        image="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1400&q=80"
        eyebrow="Shop"
      />

      <div className="container-shell section-space">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Shop The Edit"
            title="Handpicked accessories, keepsakes, and wedding essentials."
            text="A boutique collection inspired by refined, romantic celebrations."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
