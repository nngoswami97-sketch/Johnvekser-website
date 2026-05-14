import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  HeartHandshake,
  Users,
  Award,
  Compass,
  MapPin,
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
/*  Slide 1 — Hero · We aim to empower dreams                       */
/* ================================================================ */

const AboutHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  return (
    <section
      id="top"
      data-testid="about-hero-section"
      className="relative min-h-[100vh] flex items-end overflow-hidden text-white"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          data-testid="about-hero-image"
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=srgb&fm=jpg&q=90&w=2400"
          alt="Diverse founders shaping ideas together"
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
          <Overline dark>About John Vekser</Overline>
          <h1 className="mt-6 font-display font-extrabold tracking-[-0.04em] leading-[0.98] balance text-[clamp(2.6rem,6.8vw,5.8rem)]">
            We aim to <Highlight>empower dreams</Highlight> in diverse
            communities.
          </h1>
          <p className="mt-7 max-w-xl text-[17px] lg:text-[18px] leading-relaxed text-white/80 font-body">
            JohnVekser is a non-profit organisation founded in 2022 by{" "}
            <span className="text-white font-semibold">John Daniel</span> —
            a.k.a. John Vekser — in Miami, Florida. We facilitate grants and
            mentorship programs designed to empower aspiring entrepreneurs in
            scarce places.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              data-testid="about-hero-cta"
              href="#mission"
              className="group relative inline-flex items-center gap-3 rounded-full px-9 py-5 text-[15px] font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 overflow-hidden bg-white text-black shadow-[0_18px_45px_-15px_rgba(255,255,255,0.4)]"
            >
              <span>Discover your potential</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </span>
            </a>
            <a
              data-testid="about-hero-secondary"
              href="#values"
              className="text-[13px] font-medium tracking-tight inline-flex items-center gap-2 text-white/90 hover:text-white border-b border-white/30 hover:border-white transition-all py-1"
            >
              Read our values
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: 2022, l: "Founded", noFmt: true },
              { n: 6, suffix: "", l: "Continents reached" },
              { n: 320, suffix: "+", l: "Founders backed" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                custom={i + 1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                data-testid={`about-stat-${i}`}
              >
                <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                  {s.noFmt ? (
                    <span className="tabular-nums">{s.n}</span>
                  ) : (
                    <StatCounter value={s.n} suffix={s.suffix || ""} />
                  )}
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
            testid="about-popup-hq"
            icon={MapPin}
            eyebrow="Headquarters"
            title="Miami, Florida"
            position="bottom-left"
            delay={0.55}
          />
        </div>
        <div className="hidden lg:block absolute right-10 bottom-32 w-[240px]">
          <FeaturePopup
            testid="about-popup-founder"
            icon={Award}
            eyebrow="Founder"
            title="John Daniel"
            trend="John Vekser · 2022"
            position="bottom-left"
            delay={0.85}
            dark
          />
        </div>
      </Container>

      <div className="absolute z-10 bottom-6 left-0 right-0 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/55">
          <span>About</span>
          <span className="hidden md:inline">
            Mission · Values · Impact
          </span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
};

/* ================================================================ */
/*  Slide 2 — Featured In                                           */
/* ================================================================ */

const PRESS = [
  { name: "Forbes", src: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg" },
  { name: "Inc. 5000", src: "https://www.vectorlogo.zone/logos/inc/inc-ar21.svg" },
  { name: "HuffPost", src: "https://www.vectorlogo.zone/logos/huffingtonpost/huffingtonpost-ar21.svg" },
  { name: "TechCrunch", src: "https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.svg" },
  { name: "CNN", src: "https://www.vectorlogo.zone/logos/cnn/cnn-ar21.svg" },
];

const FeaturedPress = () => (
  <section
    id="press"
    data-testid="about-press-section"
    className="py-24 lg:py-32 bg-white border-y border-black/5 overflow-hidden"
  >
    <Container className="text-center mb-12">
      <Overline>02 — Trust &amp; Press</Overline>
      <h2 className="mt-6 font-display font-bold tracking-tight text-3xl lg:text-5xl">
        Featured in
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-md mx-auto">
        Our journey, founders, and impact — covered globally.
      </p>
    </Container>
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex w-max marquee-track">
        {[...PRESS, ...PRESS, ...PRESS].map((p, i) => (
          <div
            key={i}
            data-testid={`about-press-${i}`}
            className="flex items-center justify-center min-w-[260px] h-24 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <img
              src={p.src}
              alt={p.name}
              className="max-h-10 lg:max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================================================================ */
/*  Slide 3 — We give back                                          */
/* ================================================================ */

const GiveBack = () => (
  <section
    id="give-back"
    data-testid="giveback-section"
    className="relative py-28 lg:py-40 bg-neutral-50 border-y border-black/5 overflow-hidden"
  >
    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 order-2 lg:order-1"
      >
        <div className="relative aspect-[4/5] max-w-md mx-auto">
          <div className="absolute -inset-3 rounded-[1rem_4rem_1rem_4rem] bg-white -z-10 blob-float" />
          <div className="absolute inset-0 rounded-[1rem_4rem_1rem_4rem] overflow-hidden bg-neutral-100">
            <img
              data-testid="giveback-image"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="A handshake — giving back to communities"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <FeaturePopup
            testid="giveback-popup-ripple"
            icon={Sparkles}
            eyebrow="Ripple effect"
            title="Inspire · Scale · Repeat"
            position="top-right"
            delay={0.45}
          />
          <FeaturePopup
            testid="giveback-popup-founders"
            icon={Users}
            eyebrow="Active founders"
            title="180+ scaling now"
            trend="+24 this quarter"
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
        <Overline>03 — Philosophy</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          We <Highlight>give back.</Highlight>
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          John Vekser creates a ripple effect of positive change — inspiring
          high-growth entrepreneurs to dream bigger and scale faster alongside
          their communities.
        </p>
        <div className="mt-10">
          <PillButton testid="giveback-cta">Discover your potential</PillButton>
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 4 — Mission & Values                                      */
/* ================================================================ */

const Mission = () => (
  <section
    id="mission"
    data-testid="mission-section"
    className="py-28 lg:py-44 bg-white relative overflow-hidden"
  >
    <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
    <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />

    <Container className="relative text-center">
      <Overline>04 — Our Mission</Overline>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.98] balance text-[clamp(2.4rem,6vw,5.4rem)] max-w-5xl mx-auto"
      >
        To transform disadvantaged communities into{" "}
        <Highlight>thriving economies</Highlight> through entrepreneurship.
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-14 max-w-3xl mx-auto bg-neutral-50 border border-black/5 rounded-3xl p-8 lg:p-10 text-left flex flex-col sm:flex-row items-start gap-6"
      >
        <Quote className="w-10 h-10 text-neutral-300 shrink-0" />
        <div>
          <p className="font-display text-[20px] lg:text-[22px] leading-snug tracking-tight">
            &ldquo;Every founder we back becomes a multiplier — they pull jobs,
            confidence, and capital into their towns. That&rsquo;s the whole
            point of this work.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img
              data-testid="founder-avatar"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85&w=200"
              alt="John Daniel — Founder"
              className="w-12 h-12 rounded-full object-cover border border-black/10"
            />
            <div>
              <div className="text-[14px] font-semibold">John Daniel</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Founder · Miami, FL
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-12"
      >
        <PillButton testid="mission-cta">Talk to us</PillButton>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slides 5-7 — Three values                                       */
/* ================================================================ */

const VALUES = [
  {
    n: "05",
    title: "Entrepreneur first",
    icon: HeartHandshake,
    body:
      "We always have the backs of our entrepreneurs — providing guidance and mentorship, no matter what.",
    badge: "Always on call",
  },
  {
    n: "06",
    title: "Trustworthiness",
    icon: ShieldCheck,
    body:
      "Respect each other's backgrounds and always protect our founder's interest.",
    badge: "NDA-grade privacy",
  },
  {
    n: "07",
    title: "Global impact",
    icon: Globe2,
    body:
      "We aim to create high impact through innovative entrepreneurs worldwide.",
    badge: "6 continents",
  },
];

const Values = () => (
  <section
    id="values"
    data-testid="about-values-section"
    className="py-28 lg:py-40 bg-neutral-50 border-y border-black/5"
  >
    <Container>
      <div className="max-w-2xl mb-16">
        <Overline>05 — 07 Values</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          Three principles. <Highlight>One direction.</Highlight>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
        {VALUES.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              data-testid={`value-${v.title.toLowerCase().replace(/\s/g, "-")}`}
              className="group relative bg-white border border-black/5 rounded-3xl p-8 lg:p-10 hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                {v.n}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-black text-white inline-flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold tracking-tight text-[28px] lg:text-[32px]">
                {v.title}
              </h3>
              <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
                {v.body}
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                {v.badge}
              </div>
              <ArrowUpRight className="absolute bottom-6 right-6 w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.div>
          );
        })}
      </div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Our Partners — text wordmarks (placeholder for real logos)      */
/* ================================================================ */

const OUR_PARTNERS = [
  "Algorip",
  "Renesent",
  "Vekser",
  "Trelegate",
  "Clevertone",
];

const OurPartners = () => (
  <section
    id="our-partners"
    data-testid="our-partners-section"
    className="py-24 lg:py-32 bg-white border-t border-black/5"
  >
    <Container>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <Overline>Our Partners</Overline>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.8rem,4.6vw,3.2rem)]">
            Built alongside <Highlight>visionary brands.</Highlight>
          </h2>
        </div>
        <p className="max-w-md text-[15px] text-neutral-500 leading-relaxed">
          A small circle of operators we trust deeply — across product,
          infrastructure, and capital.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-black/10 rounded-3xl overflow-hidden border border-black/10">
        {OUR_PARTNERS.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            data-testid={`our-partner-${name.toLowerCase()}`}
            className="group relative bg-white h-32 lg:h-40 flex items-center justify-center px-4 hover:bg-black transition-colors duration-500 cursor-default"
          >
            <span className="font-display font-extrabold tracking-[-0.04em] text-[22px] lg:text-[28px] text-black group-hover:text-white transition-colors">
              {name}
            </span>
            <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-[0.22em] text-neutral-300 group-hover:text-white/40 transition-colors">
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-neutral-400 text-center">
        Logos to follow · text placeholders for now
      </p>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 8 — Partners & Sponsors                                   */
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
    data-testid="about-partners-section"
    className="py-24 lg:py-32 bg-white border-y border-black/5 overflow-hidden"
  >
    <Container className="text-center mb-12">
      <Overline>08 — Ecosystem</Overline>
      <h2 className="mt-6 font-display font-bold tracking-tight text-3xl lg:text-5xl">
        Partners <Highlight>and sponsors.</Highlight>
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-md mx-auto">
        We&rsquo;re built alongside the platforms that power modern business.
      </p>
    </Container>
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex w-max marquee-track">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
          <div
            key={i}
            data-testid={`about-partner-${i}`}
            className="flex items-center justify-center min-w-[240px] h-24 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <img
              src={p.src}
              alt={p.name}
              className="max-h-10 lg:max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================================================================ */
/*  Slide 9 — Empowering dreams since 2022 (final story)            */
/* ================================================================ */

const Story = () => {
  const { scrollYProgress } = useScroll();
  const yEarth = useTransform(scrollYProgress, [0, 1], [0, -40]);
  return (
    <section
      id="cta"
      data-testid="about-story-section"
      className="relative py-32 lg:py-44 bg-white overflow-hidden"
    >
      <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />

      <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <Overline>09 — Our Story</Overline>
          <h2 className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.98] balance text-[clamp(2.4rem,6.4vw,5.6rem)]">
            Empowering <Highlight>entrepreneurial dreams</Highlight> since 2022.
          </h2>
          <p className="mt-8 max-w-xl text-[17px] lg:text-[18px] leading-relaxed text-neutral-600">
            We identify budding entrepreneurs in impoverished regions and
            provide them with mentorship so they may develop their ideas into
            thriving businesses.
          </p>

          {/* Timeline mini */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { y: "2022", l: "Founded · Miami" },
              { y: "2023", l: "First grants · Peru" },
              { y: "2025", l: "6 continents live" },
            ].map((t, i) => (
              <motion.div
                key={t.y}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                data-testid={`story-timeline-${i}`}
                className="border-l-2 border-black/15 pl-4"
              >
                <div className="font-display font-bold text-2xl tracking-tight">
                  {t.y}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  {t.l}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <PillButton testid="story-cta-primary">Join our mission</PillButton>
            <a
              data-testid="story-cta-secondary"
              href="/donate"
              className="inline-flex items-center gap-3 rounded-full border-2 border-black px-9 py-5 text-[15px] font-semibold tracking-tight hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Support our cause
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right — animated orbital marker */}
        <motion.div
          style={{ y: yEarth }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 70, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-dashed border-black/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 95, ease: "linear", repeat: Infinity }}
              className="absolute inset-8 rounded-full border border-black/10"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, ease: "linear", repeat: Infinity }}
              className="absolute inset-16 rounded-full border border-dashed border-black/20"
            />
            <div className="absolute inset-[24%] rounded-full overflow-hidden bg-black">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                alt="Founder shaping the program"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Year markers */}
            {[
              { pos: { top: "5%", left: "50%" }, y: "2022" },
              { pos: { top: "50%", left: "95%" }, y: "2023" },
              { pos: { bottom: "5%", left: "50%" }, y: "2024" },
              { pos: { top: "50%", left: "5%" }, y: "2025" },
            ].map((m, i) => (
              <motion.span
                key={m.y}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                style={m.pos}
                className="absolute -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full bg-white border border-black/10 shadow-md px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] font-bold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                {m.y}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

/* ================================================================ */
/*  Page Export                                                     */
/* ================================================================ */

export default function About() {
  return (
    <div data-testid="about-root" className="bg-white text-black overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-0">
        <AboutHero />
        <FeaturedPress />
        <GiveBack />
        <Mission />
        <Values />
        <OurPartners />
        <Partners />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
