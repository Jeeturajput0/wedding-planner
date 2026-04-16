export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-semibold md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base md:text-lg">{text}</p> : null}
    </div>
  );
}
