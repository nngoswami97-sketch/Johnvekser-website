import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Heart,
  HandCoins,
  Leaf,
  Repeat,
  Flame,
  TrendingUp,
  Users,
  DollarSign,
  Lightbulb,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Lock,
  Star,
  FileCheck2,
  Quote,
} from "lucide-react";
import {
  Container,
  Overline,
  Highlight,
  PillButton,
  FeaturePopup,
  ScrollProgress,
  StatCounter,
  Navbar,
  Footer,
  fadeUp,
} from "../components/shared";

/* ================================================================ */
/*  Slide 1 — Hero · Empower underprivileged communities             */
/* ================================================================ */

const DonateHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  return (
    <section
      id="top"
      data-testid="donate-hero-section"
      className="relative min-h-[100vh] flex items-end overflow-hidden text-white"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          data-testid="donate-hero-image"
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&q=90&w=2400"
          alt="Founder collaborating with community"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </motion.div>

      <Container className="relative z-10 w-full pt-40 pb-20 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl"
        >
          <Overline dark>Donation Program</Overline>
          <h1 className="mt-6 font-display font-extrabold tracking-[-0.04em] leading-[0.98] balance text-[clamp(2.6rem,6.8vw,5.8rem)]">
            Empower <Highlight>underprivileged communities.</Highlight>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] lg:text-[18px] leading-relaxed text-white/80 font-body">
            Join our mission to transform communities. Your involvement brings
            us closer to a world where every entrepreneur has access to
            necessary financing, resources, and training.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              data-testid="donate-hero-cta"
              href="#tiers"
              className="group relative inline-flex items-center gap-3 rounded-full px-9 py-5 text-[15px] font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 overflow-hidden bg-white text-black shadow-[0_18px_45px_-15px_rgba(255,255,255,0.4)]"
            >
              <span>Donate now</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white">
                <Heart className="w-4 h-4" />
              </span>
            </a>
            <a
              data-testid="donate-hero-secondary"
              href="#impact"
              className="text-[13px] font-medium tracking-tight inline-flex items-center gap-2 text-white/90 hover:text-white border-b border-white/30 hover:border-white transition-all py-1"
            >
              See your impact
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: 1860, suffix: "+", l: "Donors worldwide" },
              { n: 320, suffix: "+", l: "Entrepreneurs helped" },
              { n: 100, suffix: "%", l: "Goes to founders" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                custom={i + 1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                data-testid={`donate-stat-${i}`}
              >
                <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                  <StatCounter
                    value={s.n}
                    prefix={s.prefix || ""}
                    suffix={s.suffix || ""}
                  />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:block absolute right-10 top-1/3 w-[240px]">
          <FeaturePopup
            testid="donate-popup-monthly"
            icon={Repeat}
            eyebrow="Monthly donors"
            title="426 active givers"
            position="bottom-left"
            delay={0.55}
          />
        </div>
        <div className="hidden lg:block absolute right-10 bottom-32 w-[240px]">
          <FeaturePopup
            testid="donate-popup-impact"
            icon={Leaf}
            eyebrow="Communities reached"
            title="38 regions · 2025"
            trend="+12 this quarter"
            position="bottom-left"
            delay={0.85}
            dark
          />
        </div>
      </Container>

      <div className="absolute z-10 bottom-6 left-0 right-0 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/55">
          <span>Give</span>
          <span className="hidden md:inline">
            Empower · Transform · Sustain
          </span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
};

/* ================================================================ */
/*  Trust band — credibility signals (inserted after hero)          */
/* ================================================================ */

const TRUST = [
  { icon: BadgeCheck, label: "501(c)(3) Verified" },
  { icon: ShieldCheck, label: "Tax-deductible" },
  { icon: FileCheck2, label: "Independently audited" },
  { icon: Star, label: "GuideStar Gold" },
  { icon: Lock, label: "SSL · PCI secure" },
];

const TrustBand = () => (
  <section
    data-testid="trust-band"
    className="relative bg-white border-y border-black/5 overflow-hidden"
  >
    <Container className="py-8">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-semibold">
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-emerald-500"
          />
          Verified non-profit
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {TRUST.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                data-testid={`trust-${i}`}
                className="flex items-center gap-2 text-[13px] font-medium text-neutral-700 hover:text-black transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 2 — Empower entrepreneurs, change lives                   */
/* ================================================================ */

const ChangeLives = () => (
  <section
    id="impact"
    data-testid="changelives-section"
    className="relative py-28 lg:py-40 bg-white overflow-hidden"
  >
    <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-neutral-100 blur-2xl" />
    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
              data-testid="changelives-image"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Founder building their business"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <FeaturePopup
            testid="changelives-popup-direct"
            icon={DollarSign}
            eyebrow="Direct to founder"
            title="100% of every $1"
            position="top-right"
            delay={0.45}
          />
          <FeaturePopup
            testid="changelives-popup-lives"
            icon={Heart}
            eyebrow="Lives impacted"
            title="14,300+ people"
            trend="2025 · ongoing"
            position="bottom-left"
            delay={0.75}
            dark
          />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="lg:col-span-7 order-1 lg:order-2"
      >
        <Overline>02 — Direct Impact</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          Empower entrepreneurs,{" "}
          <Highlight>change lives.</Highlight>
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          Your donation goes directly to entrepreneurs who are making a
          difference in their communities. Each contribution fuels their
          vision — providing them with the resources to turn their businesses
          into powerful tools for community development.
        </p>

        {/* Animated impact ticker */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
          {[
            { n: 320, suffix: "+", l: "Entrepreneurs" },
            { n: 38, l: "Countries" },
            { n: 14, suffix: "K+", l: "Lives touched" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              data-testid={`impact-stat-${i}`}
              className="border-l-2 border-black/15 pl-4"
            >
              <div className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
                <StatCounter value={s.n} prefix="" suffix={s.suffix || ""} />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <PillButton testid="changelives-cta">Join hands, make an impact</PillButton>
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 3 — Partners & Sponsors                                   */
/* ================================================================ */

const PARTNERS = [
  { name: "Microsoft", src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" },
  { name: "Google", src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
  { name: "AWS", src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" },
  { name: "Slack", src: "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg" },
  { name: "Stripe", src: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" },
  { name: "Notion", src: "https://www.vectorlogo.zone/logos/notion/notion-ar21.svg" },
];

const Partners = () => (
  <section
    id="partners"
    data-testid="donate-partners-section"
    className="py-24 lg:py-32 bg-neutral-50 border-y border-black/5 overflow-hidden"
  >
    <Container className="text-center mb-12">
      <Overline>03 — Ecosystem</Overline>
      <h2 className="mt-6 font-display font-bold tracking-tight text-3xl lg:text-5xl">
        Partners <Highlight>and sponsors.</Highlight>
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-md mx-auto">
        Backed by world-class platforms that match every dollar with impact.
      </p>
    </Container>
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />
      <div className="flex w-max marquee-track">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
          <div
            key={i}
            data-testid={`donate-partner-${i}`}
            className="flex items-center justify-center min-w-[240px] h-24 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <img src={p.src} alt={p.name} className="max-h-10 lg:max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================================================================ */
/*  Slide 4 — Every dollar counts (donation tiers)                  */
/* ================================================================ */

const TIERS = [
  { amount: 25, label: "Starter Kit", desc: "A founder toolkit + first business plan review.", icon: Lightbulb },
  { amount: 50, label: "Mentor Hour", desc: "One 1:1 mentor session with a vetted expert.", icon: Sparkles },
  { amount: 100, label: "Workshop Seat", desc: "Reserve a seat in a live business workshop.", icon: Users },
  { amount: 500, label: "Seed Boost", desc: "Co-funds a founder’s seed micro-grant.", icon: Flame },
];

const EveryDollar = () => {
  const [selected, setSelected] = useState(50);
  const [recurring, setRecurring] = useState(true);
  return (
    <section
      id="tiers"
      data-testid="tiers-section"
      className="relative py-28 lg:py-40 bg-white overflow-hidden"
    >
      <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl mb-14">
          <Overline>04 — Every dollar counts</Overline>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
            One-time or recurring —{" "}
            <Highlight>every dollar moves a life.</Highlight>
          </h2>
          <p className="mt-6 text-[17px] text-neutral-600 leading-relaxed max-w-2xl">
            Whether it&rsquo;s a single donation or a monthly contribution, your
            generosity enables ongoing support to entrepreneurs — empowering
            them to drive change in their communities.
          </p>
        </div>

        {/* Toggle */}
        <div className="inline-flex items-center gap-1 rounded-full border border-black/10 p-1 bg-white shadow-sm mb-10">
          <button
            data-testid="tier-toggle-onetime"
            onClick={() => setRecurring(false)}
            className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
              !recurring ? "bg-black text-white" : "text-neutral-600 hover:text-black"
            }`}
          >
            One-time
          </button>
          <button
            data-testid="tier-toggle-monthly"
            onClick={() => setRecurring(true)}
            className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
              recurring ? "bg-black text-white" : "text-neutral-600 hover:text-black"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Tier grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {TIERS.map((t, i) => {
            const Icon = t.icon;
            const active = selected === t.amount;
            return (
              <motion.button
                key={t.amount}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                data-testid={`tier-card-${t.amount}`}
                onClick={() => setSelected(t.amount)}
                className={`group relative text-left rounded-3xl p-7 border transition-all duration-300 ${
                  active
                    ? "bg-black text-white border-black shadow-[0_28px_70px_-25px_rgba(0,0,0,0.45)] -translate-y-1"
                    : "bg-white text-black border-black/10 hover:border-black/40 hover:-translate-y-1"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full inline-flex items-center justify-center mb-7 transition-colors ${
                    active ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold tracking-[-0.04em] text-4xl">
                    ${t.amount}
                  </span>
                  {recurring && (
                    <span
                      className={`text-[12px] ${
                        active ? "text-white/60" : "text-neutral-500"
                      }`}
                    >
                      / mo
                    </span>
                  )}
                </div>
                <div
                  className={`mt-1 text-[12px] uppercase tracking-[0.18em] ${
                    active ? "text-white/55" : "text-neutral-500"
                  }`}
                >
                  {t.label}
                </div>
                <p
                  className={`mt-4 text-[14px] leading-relaxed ${
                    active ? "text-white/80" : "text-neutral-600"
                  }`}
                >
                  {t.desc}
                </p>
                <div
                  className={`mt-5 inline-flex items-center gap-2 text-[12px] font-medium ${
                    active ? "text-white" : "text-neutral-700"
                  }`}
                >
                  {active ? "Selected" : "Choose"}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-neutral-50 border border-black/5 rounded-3xl p-6 lg:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white">
              <HandCoins className="w-5 h-5" />
            </span>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                You give
              </div>
              <div className="font-display font-bold text-3xl tracking-tight">
                ${selected}
                {recurring && (
                  <span className="text-neutral-500 text-lg font-normal ml-1">
                    / month
                  </span>
                )}
              </div>
            </div>
          </div>
          <PillButton testid="tiers-cta">
            Be a part of community transformation
          </PillButton>
        </motion.div>
      </Container>
    </section>
  );
};

/* ================================================================ */
/*  Slides 5-7 — Pillars: Empower / Transform / Sustain             */
/* ================================================================ */

const PILLARS = [
  {
    n: "05",
    title: "Empower",
    icon: Sparkles,
    cta: "Inspire",
    body:
      "Your donation fuels the dreams of entrepreneurs, providing them with essential resources and training to bring their innovative ideas to life.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    imgAlt: "Mentor empowering a founder",
    shape: "rounded-[4rem_1rem_4rem_1rem]",
    popup: { icon: Lightbulb, eyebrow: "Training", title: "Live workshops", position: "bottom-left", dark: false },
    popup2: { icon: Sparkles, eyebrow: "Tools", title: "Founder toolkit", position: "top-right", dark: true },
  },
  {
    n: "06",
    title: "Transform",
    icon: Globe2,
    cta: "Support",
    body:
      "By contributing, you're not just supporting businesses — you're driving transformation in entire communities.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    imgAlt: "Community transformation in motion",
    shape: "rounded-[1rem_4rem_1rem_4rem]",
    popup: { icon: Users, eyebrow: "Communities", title: "38 regions live", position: "bottom-left", dark: false },
    popup2: { icon: TrendingUp, eyebrow: "Jobs created", title: "2,400+ roles", position: "top-right", dark: true },
  },
  {
    n: "07",
    title: "Sustain",
    icon: Repeat,
    cta: "Invest",
    body:
      "Through recurring donations, you can provide sustained support that helps entrepreneurs consistently work towards their goals.",
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    imgAlt: "Long-term founder support",
    shape: "rounded-full",
    popup: { icon: Repeat, eyebrow: "Monthly", title: "Recurring · auto", trend: "+62% YoY", position: "bottom-left", dark: false },
    popup2: { icon: Leaf, eyebrow: "Sustained", title: "12-month grants", position: "top-right", dark: true },
  },
];

const Pillars = () => (
  <section
    data-testid="donate-pillars-section"
    className="py-28 lg:py-40 bg-neutral-50 border-y border-black/5"
  >
    <Container>
      <div className="max-w-2xl mb-20">
        <Overline>05 — 07 The Effect</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          We support entrepreneurs who solve{" "}
          <Highlight>enormous social problems.</Highlight>
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
              data-testid={`donate-pillar-${p.title.toLowerCase()}`}
              className={`group bg-white border border-black/5 rounded-3xl p-7 lg:p-8 hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.3)] transition-all duration-500 ${
                i === 1 ? "lg:translate-y-10" : ""
              } ${i === 2 ? "lg:translate-y-4" : ""}`}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-visible">
                <div
                  className={`relative w-full h-full overflow-hidden bg-neutral-100 ${p.shape}`}
                >
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <FeaturePopup
                  testid={`donate-pillar-popup-${p.title.toLowerCase()}-a`}
                  icon={p.popup.icon}
                  eyebrow={p.popup.eyebrow}
                  title={p.popup.title}
                  trend={p.popup.trend}
                  position={p.popup.position}
                  dark={p.popup.dark}
                  delay={0.35 + i * 0.05}
                />
                <FeaturePopup
                  testid={`donate-pillar-popup-${p.title.toLowerCase()}-b`}
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
                data-testid={`donate-pillar-cta-${p.title.toLowerCase()}`}
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

/* ================================================================ */
/*  Testimonials — social proof from real donors & founders          */
/* ================================================================ */

const TESTIMONIALS = [
  {
    quote:
      "100% of my monthly donation reaches the founder. The transparency is unmatched — I've seen every dollar's impact.",
    author: "Priya R.",
    role: "Monthly donor · since 2022",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&q=85&w=200",
  },
  {
    quote:
      "John Vekser's grant let me hire my first two engineers. We're now serving 6,000+ small businesses in Lima.",
    author: "Carlos M.",
    role: "Founder · Lima, Peru",
    avatar:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?crop=entropy&cs=srgb&fm=jpg&q=85&w=200",
  },
  {
    quote:
      "Quarterly impact reports, audited finances, and direct video updates from the founders we support. Real accountability.",
    author: "Sarah L.",
    role: "Founding donor · NYC",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85&w=200",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    data-testid="testimonials-section"
    className="relative py-28 lg:py-36 bg-white overflow-hidden"
  >
    <Container>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <Overline>Social Proof</Overline>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.6vw,3.4rem)]">
            Trusted by <Highlight>donors &amp; founders</Highlight> alike.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-[13px] text-neutral-600"
        >
          <div className="flex -space-x-2">
            {TESTIMONIALS.map((t, i) => (
              <img
                key={i}
                src={t.avatar}
                alt={t.author}
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span>
            <strong className="font-semibold text-black">1,860+</strong>{" "}
            donors backing us
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
            data-testid={`testimonial-${i}`}
            className="group relative bg-neutral-50 border border-black/5 rounded-3xl p-7 hover:shadow-[0_24px_60px_-25px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-500"
          >
            <Quote className="w-5 h-5 text-neutral-400" />
            <blockquote className="mt-4 font-display text-[17px] leading-snug tracking-tight">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-[13px] font-semibold">{t.author}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {t.role}
                </div>
              </div>
            </figcaption>
            <div className="absolute top-5 right-5 flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star
                  key={s}
                  className="w-3 h-3 text-black"
                  fill="currentColor"
                />
              ))}
            </div>
          </motion.figure>
        ))}
      </div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 8 — Final CTA · Join us in making a positive difference   */
/* ================================================================ */

const FinalCTA = () => (
  <section
    id="cta"
    data-testid="donate-final-cta-section"
    className="relative py-32 lg:py-44 bg-white overflow-hidden"
  >
    <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
    <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
    <Container className="relative text-center">
      <Overline>08 — Join us</Overline>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.95] balance text-[clamp(2.4rem,7vw,6rem)]"
      >
        Join us in making a{" "}
        <Highlight>positive difference.</Highlight>
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-10 max-w-2xl mx-auto text-[17px] lg:text-[18px] leading-relaxed text-neutral-600"
      >
        We believe in the power of collective efforts. Join our cause to create
        a better world by supporting entrepreneurs and communities. Your
        contributions are instrumental in driving progress and fostering a
        culture of empowerment and growth.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        <PillButton testid="donate-final-cta-primary">Donate today</PillButton>
        <a
          data-testid="donate-final-cta-secondary"
          href="#"
          className="inline-flex items-center gap-3 rounded-full border-2 border-black px-9 py-5 text-[15px] font-semibold tracking-tight hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Become a recurring donor
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Page Export                                                     */
/* ================================================================ */

export default function Donate() {
  return (
    <div data-testid="donate-root" className="bg-white text-black overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-0">
        <DonateHero />
        <TrustBand />
        <ChangeLives />
        <Partners />
        <EveryDollar />
        <Pillars />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
