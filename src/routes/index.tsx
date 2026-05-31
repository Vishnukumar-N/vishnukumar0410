import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  Download, Mail, MapPin, Phone, Github, Linkedin, ArrowRight,
  Code2, Database, Cloud, Server, Wrench, Boxes, Sparkles,
  Award, GraduationCap, Briefcase, ExternalLink, Send, Trophy,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal } from "@/components/portfolio/Reveal";
import { Counter } from "@/components/portfolio/Counter";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishnu Kumar — Data Engineer | ETL & Big Data" },
      {
        name: "description",
        content:
          "Vishnu Kumar — Data Engineer at TCS specializing in scalable ETL pipelines, big data, dimensional modeling, and cloud analytics on AWS.",
      },
      { name: "author", content: "Vishnu Kumar" },
      { name: "keywords", content: "Vishnu Kumar, Data Engineer, ETL, Big Data, PySpark, Hadoop, Hive, AWS, Informatica, Portfolio" },
      { property: "og:title", content: "Vishnu Kumar — Data Engineer" },
      { property: "og:description", content: "Building scalable data pipelines, warehouses, and analytics platforms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vishnu Kumar — Data Engineer" },
      { name: "twitter:description", content: "Building scalable data pipelines, warehouses, and analytics platforms." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vishnu Kumar",
          jobTitle: "Data Engineer",
          worksFor: { "@type": "Organization", name: "Tata Consultancy Services" },
          address: { "@type": "PostalAddress", addressLocality: "Madurai", addressCountry: "India" },
          sameAs: ["https://www.linkedin.com/in/vishnu-kumar-a54a26216/"],
        }),
      },
    ],
  }),
  component: Index,
});

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 95 },
      { name: "PL/SQL", level: 85 },
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    items: [
      { name: "ETL / ELT", level: 95 },
      { name: "CDC", level: 90 },
      { name: "SCD Type 1 & 2", level: 90 },
      { name: "Data Warehousing", level: 92 },
      { name: "Star / Snowflake Schema", level: 90 },
    ],
  },
  {
    title: "Big Data",
    icon: Boxes,
    items: [
      { name: "Hadoop", level: 88 },
      { name: "Hive", level: 92 },
      { name: "Spark", level: 88 },
      { name: "HDFS", level: 85 },
    ],
  },
  {
    title: "Cloud (AWS)",
    icon: Cloud,
    items: [
      { name: "S3", level: 88 },
      { name: "EMR", level: 80 },
      { name: "Redshift", level: 82 },
      { name: "RDS", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Server,
    items: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Hive", level: 90 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Informatica PowerCenter", level: 88 },
      { name: "Sqoop", level: 85 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 90 },
    ],
  },
];

const projects = [
  {
    title: "End-to-End Batch Data Pipeline – Hadoop Ecosystem",
    stack: ["MySQL", "Sqoop", "Hive", "HQL", "Linux"],
    highlights: [
      "Built complete ingestion pipeline from relational databases into Hive.",
      "Designed dimensional data warehouse using Star Schema.",
      "Implemented partitioning strategies for faster analytics.",
      "Improved query performance by 30%.",
    ],
  },
  {
    title: "Large-Scale Data Processing using PySpark",
    stack: ["PySpark", "Spark SQL", "Python"],
    highlights: [
      "Processed multi-million-record datasets.",
      "Built distributed transformations and aggregations.",
      "Implemented window functions and time-series analysis.",
      "Generated curated datasets for analytics.",
    ],
  },
];

const achievements = [
  { value: 600, suffix: "+", label: "DSA Problems Solved", icon: Code2 },
  { value: 2, suffix: "x", label: "GATE Qualified (2023 & 2026)", icon: GraduationCap },
  { value: 5, suffix: "★", label: "HackerRank Python", icon: Trophy },
  { value: 5, suffix: "★", label: "HackerRank SQL", icon: Trophy },
  { value: 1, suffix: "", label: "TCS Innovator Challenge Cleared", icon: Award },
  { value: 1, suffix: "", label: "Hi-Talent Performer at TCS", icon: Sparkles },
];

function Index() {
  const allTechs = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.stack))), []);
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster />
      <Navbar />
      <ScrollToTop />

      {/* HERO */}
      <section id="home" className="relative isolate min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.55_0.22_265)]/30 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.55_0.22_310)]/30 blur-3xl animate-blob" style={{ animationDelay: "-7s" }} />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities · Madurai, India
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I’m <span className="gradient-text">Vishnu Kumar</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium">
              Data Engineer · ETL Developer · Big Data Engineer
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Building scalable data pipelines, data warehouses, and analytics platforms that transform raw data into business value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/resume.txt" download className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary/60 transition">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary/40 transition">
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href="https://www.linkedin.com/in/vishnu-kumar-a54a26216/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full glass p-2.5 hover:text-foreground transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full glass p-2.5 hover:text-foreground transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:yourmail@gmail.com" aria-label="Email" className="rounded-full glass p-2.5 hover:text-foreground transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute inset-0 -z-10 rounded-[2rem] gradient-primary blur-2xl opacity-40 animate-float" />
            <div className="glass rounded-[2rem] p-3 shadow-card">
              <img
                src={portrait}
                alt="Portrait of Vishnu Kumar"
                width={768}
                height={768}
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold">Data Engineer @ TCS</p>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-card">
              <p className="text-xs text-muted-foreground">Processing</p>
              <p className="text-sm font-semibold">~1TB / day</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A bit about me">
        <Reveal>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
            Data Engineer with <span className="text-foreground font-semibold">2+ years of experience</span> designing and optimizing large-scale batch and incremental data pipelines processing terabyte-scale datasets. Skilled in ETL/ELT development, CDC frameworks, dimensional modeling, performance optimization, and cloud-based analytics platforms. Passionate about building scalable data systems and solving complex engineering challenges.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "2+", v: "Years Experience" },
            { k: "20+", v: "Production Pipelines" },
            { k: "~1TB", v: "Processed Daily" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 100}>
              <div className="glass rounded-2xl p-6 text-center shadow-card">
                <div className="text-3xl font-bold gradient-text">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="Technical toolbox">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 80}>
                <div className="glass rounded-2xl p-6 shadow-card h-full transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{g.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-3.5">
                    {g.items.map((s) => (
                      <li key={s.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground/90">{s.name}</span>
                          <span className="text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/50">
                          <div
                            className="h-full rounded-full gradient-primary"
                            style={{ width: `${s.level}%`, transition: "width 1.2s ease" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <Reveal>
            <div className="relative md:grid md:grid-cols-2 md:gap-10 pl-12 md:pl-0">
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 grid h-7 w-7 place-items-center rounded-full gradient-primary shadow-glow">
                <Briefcase className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <div className="md:text-right md:pr-10">
                <p className="text-sm text-muted-foreground">Oct 2023 – Present</p>
                <h3 className="mt-1 text-xl font-bold">Data Engineer</h3>
                <p className="text-muted-foreground">Tata Consultancy Services (TCS)</p>
              </div>
              <div className="md:pl-10 mt-4 md:mt-0">
                <div className="glass rounded-2xl p-6 shadow-card">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Architected and maintained 20+ production-grade ETL pipelines processing ~1TB of data daily.",
                      "Built timestamp-based CDC framework reducing full-load dependency and improving efficiency by 35%.",
                      "Implemented Star and Snowflake dimensional models with SCD Type 1 and Type 2.",
                      "Optimized Hive workloads using partitioning, bucketing, ORC storage, and join tuning.",
                      "Built automated data validation, reconciliation, SLA monitoring, and reject handling frameworks.",
                      "Owned end-to-end pipeline lifecycle including deployment, monitoring, and production support.",
                    ].map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-primary" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Projects" title="Selected work">
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", ...allTechs].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                filter === t
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group glass relative overflow-hidden rounded-2xl p-7 shadow-card h-full transition hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-1 gradient-primary opacity-70" />
                <h3 className="text-xl font-bold leading-snug pr-8">{p.title}</h3>
                <ExternalLink className="absolute top-6 right-6 h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-secondary/60 px-2.5 py-1 text-xs text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" eyebrow="Achievements" title="Milestones & recognitions">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.label} delay={i * 80}>
                <div className="glass rounded-2xl p-6 shadow-card h-full transition hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-3xl font-bold gradient-text">
                      <Counter to={a.value} suffix={a.suffix} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education" title="Academic background">
        <Reveal>
          <div className="glass rounded-2xl p-7 shadow-card flex flex-col md:flex-row md:items-center gap-6">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">B.E. Computer Science and Engineering</h3>
              <p className="text-muted-foreground">Government College of Engineering, Thanjavur</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-muted-foreground">CGPA</p>
              <p className="text-3xl font-bold gradient-text">8.79</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let’s build something together">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              <p className="text-muted-foreground max-w-md">
                Have a role, a project, or an interesting data problem? I’d love to hear about it.
              </p>
              <ContactItem icon={MapPin} label="Location" value="Madurai, India" />
              <ContactItem icon={Mail} label="Email" value="yourmail@gmail.com" href="mailto:yourmail@gmail.com" />
              <ContactItem icon={Phone} label="Phone" value="+91 9344943118" href="tel:+919344943118" />
              <ContactItem icon={Linkedin} label="LinkedIn" value="vishnu-kumar-a54a26216" href="https://www.linkedin.com/in/vishnu-kumar-a54a26216/" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">{eyebrow}</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function ContactItem({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass flex items-center gap-4 rounded-2xl p-4 shadow-card transition hover:-translate-y-0.5">
      <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || name.length > 100) return toast.error("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return toast.error("Please enter a valid email.");
    if (!message || message.length > 1000) return toast.error("Message must be 1–1000 characters.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.reset();
      toast.success("Thanks! Your message has been queued.");
    }, 700);
  };
  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8 shadow-card space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" placeholder="Your name" maxLength={100} />
        <Field name="email" label="Email" type="email" placeholder="you@example.com" maxLength={255} />
      </div>
      <Field name="message" label="Message" textarea placeholder="Tell me about your project…" maxLength={1000} />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        <Send className="h-4 w-4" /> {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  name, label, type = "text", placeholder, textarea, maxLength,
}: { name: string; label: string; type?: string; placeholder?: string; textarea?: boolean; maxLength?: number }) {
  const common =
    "w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required placeholder={placeholder} maxLength={maxLength} rows={5} className={common} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} maxLength={maxLength} className={common} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vishnu Kumar. Crafted with care.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://www.linkedin.com/in/vishnu-kumar-a54a26216/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full glass p-2 hover:text-foreground transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full glass p-2 hover:text-foreground transition">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:yourmail@gmail.com" aria-label="Email" className="rounded-full glass p-2 hover:text-foreground transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
