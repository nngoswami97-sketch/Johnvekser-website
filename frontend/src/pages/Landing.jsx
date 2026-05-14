import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, animate } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe2,
  Users,
  Compass,
  TrendingUp,
  ArrowRight,
  Quote,
  Rocket,
  Briefcase,
  DollarSign,
  Award,
  Zap,
  Target,
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

/* Gold highlight — italic accent only, no underline */
const Highlight = ({ children }) => (
  <span className="font-serif-display italic">{children}</span>
);

/* Animated number counter — runs once when in view */
const useCounter = (target, durationSec = 1.6, decimals = 0) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: durationSec,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, target, durationSec]);
  return [ref, decimals > 0 ? val.toFixed(decimals) : Math.round(val)];
};

const StatCounter = ({ value, prefix = "", suffix = "" }) => {
  const [ref, n] = useCounter(value);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
};

/* Magnetic top scroll progress bar */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[60]"
    />
  );
};

/* Floating feature popup — overlays images */
const FeaturePopup = ({
  icon: Icon = Sparkles,
  eyebrow,
  title,
  testid,
  position = "bottom-left",
  delay = 0.5,
  dark = false,
  meter,
  trend,
}) => {
  const positions = {
    "bottom-left": "-left-4 lg:-left-10 bottom-10",
    "bottom-right": "-right-4 lg:-right-10 bottom-12",
    "top-right": "-right-4 lg:-right-10 top-10",
    "top-left": "-left-4 lg:-left-10 top-12",
    "mid-right": "-right-3 lg:-right-8 top-1/2 -translate-y-1/2",
    "mid-left": "-left-3 lg:-left-8 top-1/2 -translate-y-1/2",
  };
  return (
    <motion.div
      data-testid={testid}
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${positions[position]} ${
        dark
          ? "bg-black text-white border border-white/10"
          : "bg-white border border-black/5 text-black"
      } rounded-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.25)] p-3.5 w-[210px] z-20 backdrop-blur-sm`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full ${
            dark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <Icon className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          {eyebrow && (
            <div
              className={`text-[10px] uppercase tracking-[0.18em] ${
                dark ? "text-white/55" : "text-neutral-500"
              }`}
            >
              {eyebrow}
            </div>
          )}
          <div className="text-[13px] font-semibold leading-tight">
            {title}
          </div>
          {trend && (
            <div className="mt-1 text-[11px] font-medium text-emerald-600">
              {trend}
            </div>
          )}
        </div>
      </div>
      {typeof meter === "number" && (
        <div className="mt-3">
          <div className={`h-1 w-full rounded-full overflow-hidden ${dark ? "bg-white/15" : "bg-neutral-200"}`}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${meter}%` }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4, duration: 1.2 }}
              className={`h-full ${dark ? "bg-white" : "bg-black"}`}
            />
          </div>
          <div className={`mt-1.5 text-[10px] flex justify-between ${dark ? "text-white/55" : "text-neutral-500"}`}>
            <span>Progress</span>
            <span>{meter}%</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

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
    "group relative inline-flex items-center gap-3 rounded-full px-9 py-5 text-[15px] font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 overflow-hidden";
  const styles =
    variant === "dark"
      ? "text-white shadow-[0_18px_45px_-15px_rgba(0,0,0,0.55)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-gradient-to-br from-neutral-800 via-black to-neutral-900 ring-1 ring-black/40"
      : "bg-white text-black border border-black/15 hover:border-black/60 shadow-sm";
  return (
    <button data-testid={testid} className={`${base} ${styles}`}>
      {variant === "dark" && (
        <span
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 0%, rgba(255,255,255,0.12), transparent 55%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
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
          className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-[13px] font-semibold hover:-translate-y-0.5 transition-transform shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
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

          <h1 className="mt-6 font-display font-extrabold tracking-[-0.04em] leading-[0.98] balance text-[clamp(2.4rem,6.2vw,5.2rem)]">
            Funding ideas in{" "}
            <Highlight>diverse regions.</Highlight>
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
              { n: 6, suffix: "", l: "Continents reached" },
              { n: 120, suffix: "+", l: "Founders backed" },
              { n: 24, prefix: "$", suffix: "M", l: "Capital deployed" },
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
                  <StatCounter value={s.n} prefix={s.prefix || ""} suffix={s.suffix || ""} />
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
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Founder building product at workspace"
              className="w-full h-full object-cover rounded-[4rem_1rem_4rem_1rem] shadow-[0_25px_80px_-30px_rgba(0,0,0,0.4)]"
            />

            <FeaturePopup
              testid="hero-popup-cohort"
              icon={Sparkles}
              eyebrow="Cohort 07"
              title="Now accepting"
              position="bottom-left"
              meter={68}
              delay={0.55}
            />

            <FeaturePopup
              testid="hero-popup-mentor"
              icon={Users}
              eyebrow="Mentor matched"
              title="14 active mentors"
              position="top-right"
              delay={0.85}
              dark
            />
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
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Diverse founders collaborating on community business"
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

          <FeaturePopup
            testid="community-popup-funding"
            icon={DollarSign}
            eyebrow="Seed deployed"
            title="$50K · 12wks"
            position="mid-right"
            delay={0.4}
          />
          <FeaturePopup
            testid="community-popup-impact"
            icon={Rocket}
            eyebrow="Community impact"
            title="2,400+ jobs created"
            position="bottom-left"
            delay={0.7}
            dark
          />
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
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          Turning disadvantaged communities into{" "}
          <Highlight>thriving economies.</Highlight>
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
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
            Redefining businesses,{" "}
            <Highlight>enriching communities.</Highlight>
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
          className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.95] balance text-[clamp(2.4rem,7.2vw,6.4rem)]"
        >
          Shape <Highlight>tomorrow&rsquo;s economies.</Highlight>
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
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    imgAlt: "Mentor leading a strategy session with founders",
    shape: "rounded-[4rem_1rem_4rem_1rem]",
    popup: { icon: Award, eyebrow: "Live cohort", title: "Mentor + 12 founders", position: "bottom-left", dark: false },
    popup2: { icon: Sparkles, eyebrow: "Workshop", title: "Weekly · Tuesdays", position: "top-right", dark: true },
  },
  {
    n: "06",
    title: "Strategize",
    icon: Compass,
    cta: "Discover",
    body:
      "We offer platforms for founders to learn from experienced leaders. Our resources, like educational programs and advanced facilities, enable entrepreneurs to make significant decisions.",
    img:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    imgAlt: "Founders strategizing around a laptop",
    shape: "rounded-[1rem_4rem_1rem_4rem]",
    popup: { icon: Target, eyebrow: "Roadmap", title: "Q1 targets locked", position: "bottom-left", dark: false },
    popup2: { icon: Briefcase, eyebrow: "Resources", title: "47 playbooks open", position: "top-right", dark: true },
  },
  {
    n: "07",
    title: "Growth",
    icon: TrendingUp,
    cta: "Elevate",
    body:
      "Our commitment extends beyond fostering leadership and aiding decision-making. We provide the funding and tech tools to boost growth, turning potential into measurable business success.",
    img:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    imgAlt: "Founder analysing growth metrics",
    shape: "rounded-full",
    popup: { icon: TrendingUp, eyebrow: "MRR", title: "$48K · last 30d", trend: "+247% vs Q3", position: "bottom-left", dark: false },
    popup2: { icon: Zap, eyebrow: "Pipeline", title: "23 warm leads", position: "top-right", dark: true },
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
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          Three forces that turn{" "}
          <Highlight>potential into outcome.</Highlight>
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
              <div className="relative aspect-[4/5] mb-6 overflow-visible">
                <div className={`relative w-full h-full overflow-hidden bg-neutral-100 ${p.shape}`}>
                  <img
                    src={p.img}
                    alt={p.imgAlt || p.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>
                <FeaturePopup
                  testid={`pillar-popup-${p.title.toLowerCase()}-a`}
                  icon={p.popup.icon}
                  eyebrow={p.popup.eyebrow}
                  title={p.popup.title}
                  trend={p.popup.trend}
                  position={p.popup.position}
                  dark={p.popup.dark}
                  delay={0.35 + i * 0.05}
                />
                <FeaturePopup
                  testid={`pillar-popup-${p.title.toLowerCase()}-b`}
                  icon={p.popup2.icon}
                  eyebrow={p.popup2.eyebrow}
                  title={p.popup2.title}
                  position={p.popup2.position}
                  dark={p.popup2.dark}
                  delay={0.6 + i * 0.05}
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
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight border-b border-black/30 pb-0.5 hover:border-black transition-colors"
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
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          Fostering <Highlight>entrepreneurship globally.</Highlight>
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
          {/* Concentric rings — animated dashed */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-dashed border-black/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, ease: "linear", repeat: Infinity }}
            className="absolute inset-6 rounded-full border border-black/10"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            className="absolute inset-12 rounded-full border border-dashed border-[#B8965A]/40"
          />
          <div className="absolute inset-20 rounded-full border border-black/15" />

          {/* Center globe img */}
          <div className="absolute inset-[22%] rounded-full overflow-hidden bg-black">
            <img
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
              alt="Global meeting"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Floating city dots — pulsing */}
          {[
            { top: "8%", left: "50%", label: "Florida" },
            { top: "30%", left: "92%", label: "Lisbon" },
            { top: "72%", left: "84%", label: "Tel Aviv" },
            { top: "90%", left: "42%", label: "Mumbai" },
            { top: "60%", left: "6%", label: "Lima" },
            { top: "20%", left: "10%", label: "LA" },
          ].map((pos, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              style={{ top: pos.top, left: pos.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute inset-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8965A]/40 animate-ping" />
              <span className="relative block w-3 h-3 rounded-full bg-black border-4 border-white shadow-md" />
            </motion.span>
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
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.95] balance text-[clamp(2.4rem,7vw,6rem)]"
      >
        Building <Highlight>entrepreneurial ecosystems.</Highlight>
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
          className="inline-flex items-center gap-3 rounded-full border-2 border-black px-9 py-5 text-[15px] font-semibold tracking-tight hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Apply as a founder
          <ArrowRight className="w-4 h-4" />
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
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-[13px] font-semibold hover:-translate-y-0.5 transition-transform"
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
      <ScrollProgress />
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
