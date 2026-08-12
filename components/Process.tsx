import { process } from "@/content/site";

export default function Process() {
  return (
    <section id="process" className="border-b border-border bg-paper-alt">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-3 text-press">Our Process</p>
        <h2 className="font-display max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
          Four steps from brief to delivery
        </h2>

        <ol className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {process.map((step) => (
            <li key={step.step} className="relative">
              <span
                aria-hidden="true"
                className="font-display pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 text-[5.5rem] font-black leading-none text-ink/5 sm:left-0 sm:translate-x-0"
              >
                {step.step}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-press bg-surface font-mono text-sm font-bold text-press">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
