import AnimatedSection from "./AnimatedSection";

export default function PageBanner({ title, subtitle, image, eyebrow = "Our Story" }) {
  return (
    <AnimatedSection className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/35" />
      </div>
      <div className="container-shell relative flex min-h-[340px] items-center py-20 md:min-h-[420px]">
        <div className="max-w-2xl rounded-[2rem] border border-white/30 bg-white/10 p-8 backdrop-blur-md md:p-12">
          <p className="eyebrow text-white">{eyebrow}</p>
          <h1 className="mt-2 text-4xl font-semibold text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
