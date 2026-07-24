export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="brand-type text-base font-bold uppercase tracking-[0.22em] text-blue-400">{eyebrow}</p>
      <h2 className="brand-type mt-4 text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{text}</p>
    </div>
  );
}
