import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe2,
  Users,
  Compass,
  TrendingUp,
  ArrowRight,
  Quote,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared primitives                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 lg:px-10 ${className}`}>{children}</div>
);

const Overline = ({ children, dark = false }) => (
  <span
    className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] ${
      dark ? "text-white/70" : "text-neutral-500"
    }`}
  >
    <span
      className={`inline-block w-6 h-px ${
        dark ? "bg-white/40" : "bg-neutral-400"
      }`}
    />
    {children}
  </span>
);

const PillButton = ({ children, testid, variant = "dark", icon = true }) => {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "dark"
      ? "bg-black text-white hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)]"
      : "bg-white text-black border border-black/10 hover:border-black/40";
  return (
    <button data-testid={testid} className={`${base} ${styles}`}>
      <span>{children}</span>
      {icon && (
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
        </span>
      )}
    </button>
  );
};

/* ------------------------------------------------------------------ */
/* Navbar                                                             */
/* ------------------------------------------------------------------ */

const Navbar = () => (
  <header
    data-testid="site-navbar"
    className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5"
  >
    <Container className="flex items-center justify-between h-16 lg:h-20">
      <a
        data-testid="nav-logo"
        href="#top"
        className="flex items-center gap-2 group"
      >
        <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white text-[15px] font-bold font-display">
          JV
          <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-black border-2 border-white" />
        </span>
        <span className="font-display font-bold tracking-tight text-[17px]">
          John Vekser
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium text-neutral-700">
        <a data-testid="nav-mission" href="#mission" className="hover:text-black transition-colors">
          Mission
        </a>
        <a data-testid="nav-programs" href="#programs" className="hover:text-black transition-colors">
          Programs
        </a>
        <a data-testid="nav-global" href="#global" className="hover:text-black transition-colors">
          Global
        </a>
        <a data-testid="nav-press" href="#press" className="hover:text-black transition-colors">
          Press
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          data-testid="nav-signin"
          href="#"
          className="hidden md:inline text-[13px] font-medium text-neutral-700 hover:text-black transition-colors"
        >
          Sign in
        </a>
        <a
          data-testid="nav-apply-cta"
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-[13px] font-medium hover:-translate-y-0.5 transition-transform"
        >
          Apply
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </Container>
  </header>
);

/* ------------------------------------------------------------------ */
/* Section 1 — Hero                                                   */
/* ------------------------------------------------------------------ */

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden mesh-soft"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left text */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <Overline>Global Entrepreneurship Fund</Overline>

          <h1 className="mt-6 font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(2.6rem,7vw,5.6rem)]">
            Funding ideas in{" "}
            <span className="font-serif-display italic font-normal text-neutral-500">
              diverse
            </span>{" "}
            regions.
          </h1>

          <p className="mt-7 max-w-xl text-[17px] lg:text-[18px] leading-relaxed text-neutral-600 font-body">
            John Vekser is a global platform that sponsors entrepreneurs from
            disadvantaged backgrounds with big ideas — those who want to create
            high impact in their communities and transform economies through
            business.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PillButton testid="hero-cta-empower">
              Empower your community
            </PillButton>
            <a
              data-testid="hero-cta-learn"
              href="#mission"
              className="text-[13px] font-medium tracking-tight inline-flex items-center gap-2 text-neutral-700 hover:text-black border-b border-transparent hover:border-black transition-all py-1"
            >
              Learn how it works
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "6", l: "Continents reached" },
              { v: "120+", l: "Founders backed" },
              { v: "$24M", l: "Capital deployed" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                custom={i + 1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                data-testid={`hero-stat-${i}`}
              >
                <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                  {s.v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right image — organic blob */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[4rem_1rem_4rem_1rem] bg-neutral-100 -z-10 blob-float" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-black mix-blend-multiply hidden md:block" />
            <div className="absolute -top-8 -right-6 w-20 h-20 rounded-full border border-black/30 hidden md:block" />

            <img
              data-testid="hero-image"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Confident entrepreneur"
              className="w-full h-full object-cover rounded-[4rem_1rem_4rem_1rem] shadow-[0_25px_80px_-30px_rgba(0,0,0,0.4)]"
            />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -left-4 lg:-left-12 bottom-10 bg-white border border-black/5 rounded-2xl shadow-xl p-4 w-56"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-black text-white inline-flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    Cohort 07
                  </div>
                  <div className="text-[13px] font-semibold">Now accepting</div>
                </div>
              </div>
              <div className="mt-3 h-1 w-full bg-neutral-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="h-full bg-black"
                />
              </div>
              <div className="mt-2 text-[11px] text-neutral-500 flex justify-between">
                <span>Applications open</span>
                <span>68%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom marker */}
      <Container className="mt-24">
        <div className="h-line" />
        <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          <span>Est. Florida</span>
          <span>Los Angeles · Lima · Mumbai · Tel Aviv · Lisbon</span>
          <span className="hidden md:inline">Scroll ↓</span>
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 2 — Community                                              */
/* ------------------------------------------------------------------ */

const Community = () => (
  <section
    id="mission"
    data-testid="community-section"
    className="relative py-28 lg:py-40 bg-white overflow-hidden"
  >
    {/* Floating organic shapes */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-neutral-100 blur-2xl" />
    <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-[6rem_2rem_6rem_2rem] bg-neutral-50 blur-xl" />

    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Image — circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 order-2 lg:order-1"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img
              data-testid="community-image"
              src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Diverse team building a community business"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -right-4 top-12 px-4 py-2 bg-white border border-black/10 rounded-full shadow-md text-[12px] font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-black mr-2 align-middle" />
            Lima · Peru
          </div>
          <div className="absolute -left-2 bottom-16 px-4 py-2 bg-white border border-black/10 rounded-full shadow-md text-[12px] font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-black mr-2 align-middle" />
            Tamil Nadu · India
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="lg:col-span-7 order-1 lg:order-2"
      >
        <Overline>02 — The Mission</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2rem,5.2vw,4rem)]">
          Turning disadvantaged communities into{" "}
          <span className="font-serif-display italic text-neutral-500">
            thriving
          </span>{" "}
          economies.
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          We sponsor entrepreneurs from disadvantaged backgrounds with big ideas
          who want to create high impact in their communities — and transform
          economies through business.
        </p>
        <div className="mt-10">
          <PillButton testid="community-cta">Empower your initiative</PillButton>
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------ */
/* Section 3 — Redefining (Bento)                                     */
/* ------------------------------------------------------------------ */

const REDEFINING = [
  { t: "Raising Capital", d: "Seed → Series, with mentor matchmaking." },
  { t: "Co-founder Match", d: "Find complementary builders & operators." },
  { t: "Seed Accelerators", d: "Curated cohorts. 12-week sprints." },
  { t: "Traction Engines", d: "GTM playbooks built for emerging markets." },
  { t: "Team Building", d: "Hiring, equity, and culture frameworks." },
  { t: "Product Studio", d: "Design + engineering pods on-demand." },
  { t: "Employee → Founder", d: "Bridge programs to a confident leap." },
  { t: "And many more", d: "Legal, ops, brand, and growth resources." },
];

const Redefining = () => (
  <section
    id="programs"
    data-testid="redefining-section"
    className="py-28 lg:py-40 bg-neutral-50 border-y border-black/5"
  >
    <Container>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <Overline>03 — What we do</Overline>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2rem,5vw,4rem)]">
            Redefining businesses,{" "}
            <span className="font-serif-display italic text-neutral-500">
              enriching
            </span>{" "}
            communities.
          </h2>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="max-w-md text-[16px] text-neutral-600 leading-relaxed"
        >
          We support entrepreneurs across the full journey — from the first idea
          to the founding team, the seed round, and the product launch that
          changes a community.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {REDEFINING.map((item, i) => (
          <motion.div
            key={item.t}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
            data-testid={`bento-card-${i}`}
            className="group relative bg-white border border-black/5 rounded-3xl p-7 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden"
          >
            <div className="absolute top-5 right-5 text-[10px] font-mono text-neutral-400">
              0{i + 1}
            </div>
            <div className="w-10 h-10 rounded-full bg-black text-white inline-flex items-center justify-center mb-7 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-[18px] tracking-tight">
              {item.t}
            </h3>
            <p className="mt-2 text-[14px] text-neutral-500 leading-relaxed">
              {item.d}
            </p>
            <ArrowUpRight className="absolute bottom-5 right-5 w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------ */
/* Section 4 — Shape tomorrow (huge type)                             */
/* ------------------------------------------------------------------ */

const Shape = () => {
  const tags = [
    "Capital",
    "Co-founders",
    "Accelerators",
    "Traction",
    "Teams",
    "Products",
    "& more",
  ];
  return (
    <section
      data-testid="shape-section"
      className="py-28 lg:py-44 bg-white relative overflow-hidden"
    >
      <Container className="text-center">
        <Overline>04 — The Vision</Overline>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.92] text-[clamp(2.8rem,9vw,8.5rem)]"
        >
          Shape <span className="font-serif-display italic text-neutral-400">tomorrow&rsquo;s</span>
          <br />
          economies.
        </motion.h2>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {tags.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              data-testid={`shape-tag-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-medium hover:bg-black hover:text-white hover:border-black transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              {t}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 5/6/7 — Three Pillars                                      */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    n: "05",
    title: "Leadership",
    icon: Users,
    cta: "Unite",
    body:
      "We're committed to cultivating robust leadership for the evolving business landscape. Through expert-led training, we develop leaders who can confidently inspire and guide.",
    img:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    shape: "rounded-[4rem_1rem_4rem_1rem]",
  },
  {
    n: "06",
    title: "Strategize",
    icon: Compass,
    cta: "Discover",
    body:
      "We offer platforms for founders to learn from experienced leaders. Our resources, like educational programs and advanced facilities, enable entrepreneurs to make significant decisions.",
    img:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    shape: "rounded-[1rem_4rem_1rem_4rem]",
  },
  {
    n: "07",
    title: "Growth",
    icon: TrendingUp,
    cta: "Elevate",
    body:
      "Our commitment extends beyond fostering leadership and aiding decision-making. We provide the funding and tech tools to boost growth, turning potential into measurable business success.",
    img:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    shape: "rounded-full",
  },
];

const Pillars = () => (
  <section
    data-testid="pillars-section"
    className="py-28 lg:py-40 bg-neutral-50 border-y border-black/5"
  >
    <Container>
      <div className="max-w-2xl mb-20">
        <Overline>05 — 07 The Pillars</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2rem,5vw,4rem)]">
          Three forces that turn{" "}
          <span className="font-serif-display italic text-neutral-500">
            potential
          </span>{" "}
          into outcome.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              data-testid={`pillar-${p.title.toLowerCase()}`}
              className={`group bg-white border border-black/5 rounded-3xl p-7 lg:p-8 hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.3)] transition-all duration-500 ${
                i === 1 ? "lg:translate-y-10" : ""
              } ${i === 2 ? "lg:translate-y-4" : ""}`}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-neutral-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className={`w-full h-full object-cover ${p.shape} transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                  {p.n}
                </span>
                <Icon className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="mt-3 font-display font-bold tracking-tight text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
                {p.body}
              </p>
              <button
                data-testid={`pillar-cta-${p.title.toLowerCase()}`}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium tracking-tight border-b border-black/30 pb-0.5 hover:border-black transition-colors"
              >
                {p.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------ */
/* Section 8 — Global                                                 */
/* ------------------------------------------------------------------ */

const OFFICES = [
  { city: "Florida", role: "Headquarters" },
  { city: "Los Angeles", role: "USA" },
  { city: "Lima", role: "Peru" },
  { city: "Mumbai", role: "India" },
  { city: "Tel Aviv", role: "Israel" },
  { city: "Lisbon", role: "Portugal" },
];

const Global = () => (
  <section
    id="global"
    data-testid="global-section"
    className="relative py-28 lg:py-44 bg-white overflow-hidden"
  >
    <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="lg:col-span-7"
      >
        <Overline>08 — Global Footprint</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2rem,5vw,4rem)]">
          Fostering entrepreneurship{" "}
          <span className="font-serif-display italic text-neutral-500">
            globally.
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          With a base in Florida and offices across Los Angeles, Peru, India,
          Israel, and Portugal — our mission revolves around providing
          resources, mentorship, and a collaborative ecosystem to empower
          entrepreneurs, regardless of financial constraints.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {OFFICES.map((o, i) => (
            <motion.div
              key={o.city}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              data-testid={`office-${o.city.toLowerCase().replace(/\s/g, "-")}`}
              className="rounded-2xl border border-black/10 p-4 hover:border-black/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {o.role}
                </span>
              </div>
              <div className="font-display font-bold text-[18px] tracking-tight">
                {o.city}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <PillButton testid="global-cta">Join the impact revolution</PillButton>
        </div>
      </motion.div>

      {/* Right visual — globe & orbits */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Concentric rings */}
          <div className="absolute inset-0 rounded-full border border-black/10" />
          <div className="absolute inset-6 rounded-full border border-black/10" />
          <div className="absolute inset-12 rounded-full border border-black/10" />
          <div className="absolute inset-20 rounded-full border border-black/15" />

          {/* Center globe img */}
          <div className="absolute inset-[22%] rounded-full overflow-hidden bg-black">
            <img
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
              alt="Global meeting"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Floating city dots */}
          {[
            { top: "8%", left: "50%" },
            { top: "30%", left: "92%" },
            { top: "72%", left: "84%" },
            { top: "90%", left: "42%" },
            { top: "60%", left: "6%" },
            { top: "20%", left: "10%" },
          ].map((pos, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              style={pos}
              className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black border-4 border-white shadow-md"
            />
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------ */
/* Section 9 — Featured In                                            */
/* ------------------------------------------------------------------ */

const PRESS = [
  {
    name: "Forbes",
    src: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
  },
  {
    name: "Inc. 5000",
    src: "https://www.vectorlogo.zone/logos/inc/inc-ar21.svg",
  },
  {
    name: "HuffPost",
    src: "https://www.vectorlogo.zone/logos/huffingtonpost/huffingtonpost-ar21.svg",
  },
  {
    name: "TechCrunch",
    src: "https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.svg",
  },
  {
    name: "CNN",
    src: "https://www.vectorlogo.zone/logos/cnn/cnn-ar21.svg",
  },
  {
    name: "Forbes",
    src: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
  },
  {
    name: "Inc. 5000",
    src: "https://www.vectorlogo.zone/logos/inc/inc-ar21.svg",
  },
  {
    name: "HuffPost",
    src: "https://www.vectorlogo.zone/logos/huffingtonpost/huffingtonpost-ar21.svg",
  },
];

const Featured = () => (
  <section
    id="press"
    data-testid="featured-section"
    className="py-24 lg:py-32 bg-white border-y border-black/5 overflow-hidden"
  >
    <Container className="text-center mb-12">
      <Overline>09 — Trust & Press</Overline>
      <h2 className="mt-6 font-display font-bold tracking-tight text-3xl lg:text-5xl">
        Featured in
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-md mx-auto">
        Coverage of our founders, programs, and global impact.
      </p>
    </Container>

    <div className="relative overflow-hidden">
      {/* Edge gradient masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max marquee-track">
        {[...PRESS, ...PRESS].map((p, i) => (
          <div
            key={i}
            data-testid={`press-logo-${i}`}
            className="flex items-center justify-center min-w-[260px] h-24 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <img src={p.src} alt={p.name} className="max-h-10 lg:max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>

    <Container className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            q: "A new lens on impact-driven entrepreneurship.",
            src: "Forbes",
          },
          {
            q: "Among the most ambitious global founder programs.",
            src: "Inc. 5000",
          },
          {
            q: "Capital and culture meet — for the communities that need it.",
            src: "HuffPost",
          },
        ].map((c, i) => (
          <motion.figure
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            data-testid={`press-quote-${i}`}
            className="bg-neutral-50 border border-black/5 rounded-3xl p-7"
          >
            <Quote className="w-5 h-5 text-neutral-400" />
            <blockquote className="mt-4 font-display text-[18px] leading-snug tracking-tight">
              &ldquo;{c.q}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[12px] uppercase tracking-[0.22em] text-neutral-500">
              — {c.src}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------ */
/* Section 10 — Final CTA                                             */
/* ------------------------------------------------------------------ */

const FinalCTA = () => (
  <section
    id="cta"
    data-testid="final-cta-section"
    className="relative py-32 lg:py-44 bg-white overflow-hidden"
  >
    <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
    <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />

    <Container className="relative text-center">
      <Overline>10 — Join us</Overline>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.92] text-[clamp(2.8rem,8.5vw,7.8rem)]"
      >
        Building <span className="font-serif-display italic text-neutral-400">entrepreneurial</span>
        <br />
        ecosystems.
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-10 max-w-2xl mx-auto text-[17px] lg:text-[18px] leading-relaxed text-neutral-600"
      >
        Vekser offers financial and educational support to underprivileged young
        entrepreneurs globally, driven by our founders&rsquo; values. Join us in
        empowering diverse backgrounds, driving success for the underdog, and
        uplifting communities worldwide.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        <PillButton testid="final-cta-support">Support our cause</PillButton>
        <a
          data-testid="final-cta-secondary"
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-3.5 text-[13px] font-medium tracking-tight hover:border-black transition-colors"
        >
          Apply as a founder
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

const Footer = () => (
  <footer data-testid="site-footer" className="bg-black text-white">
    <Container className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black text-[15px] font-bold font-display">
              JV
            </span>
            <span className="font-display font-bold tracking-tight text-[18px]">
              John Vekser
            </span>
          </div>
          <p className="mt-6 max-w-sm text-[14px] text-white/60 leading-relaxed">
            A global platform funding ideas in diverse regions. Sponsoring
            entrepreneurs from disadvantaged backgrounds with big ideas.
          </p>
          <div className="mt-8 flex items-center gap-2 text-[12px] text-white/50">
            <Globe2 className="w-4 h-4" /> 6 offices · 5 continents
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
            Platform
          </div>
          <ul className="space-y-3 text-[14px]">
            <li><a href="#mission" className="text-white/80 hover:text-white">Mission</a></li>
            <li><a href="#programs" className="text-white/80 hover:text-white">Programs</a></li>
            <li><a href="#global" className="text-white/80 hover:text-white">Global</a></li>
            <li><a href="#press" className="text-white/80 hover:text-white">Press</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
            Resources
          </div>
          <ul className="space-y-3 text-[14px]">
            <li><a href="#" className="text-white/80 hover:text-white">Founder Guide</a></li>
            <li><a href="#" className="text-white/80 hover:text-white">Funding</a></li>
            <li><a href="#" className="text-white/80 hover:text-white">Accelerator</a></li>
            <li><a href="#" className="text-white/80 hover:text-white">Mentors</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
            Get in touch
          </div>
          <p className="text-[14px] text-white/80">
            hello@johnvekser.org
            <br />
            Florida, USA · Global Offices
          </p>
          <div className="mt-6 flex gap-2">
            <a
              data-testid="footer-cta-apply"
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-[13px] font-medium hover:-translate-y-0.5 transition-transform"
            >
              Apply for funding
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
        <span>© {new Date().getFullYear()} John Vekser. All rights reserved.</span>
        <span>Funding ideas in diverse regions.</span>
      </div>
    </Container>
  </footer>
);

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function Landing() {
  return (
    <div data-testid="landing-root" className="bg-white text-black overflow-hidden">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Community />
        <Redefining />
        <Shape />
        <Pillars />
        <Global />
        <Featured />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
