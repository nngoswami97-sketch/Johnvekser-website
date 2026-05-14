import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Users,
  Compass,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Rocket,
  Briefcase,
  DollarSign,
  Award,
  Zap,
  Target,
  BookOpen,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  MessageCircle,
  Flame,
  GraduationCap,
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
/*  Slide 1 — Hero · Shaping your story                             */
/* ================================================================ */

const MentorHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);
  return (
    <section
      id="top"
      data-testid="mentor-hero-section"
      className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden mesh-soft"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <Overline>Mentorship Program</Overline>
          <h1 className="mt-6 font-display font-extrabold tracking-[-0.04em] leading-[0.98] balance text-[clamp(2.4rem,6.2vw,5.2rem)]">
            Shaping <Highlight>your story.</Highlight>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] lg:text-[18px] leading-relaxed text-neutral-600 font-body">
            Our mentorship program opens doors to a realm of knowledge sharing,
            growth-oriented guidance, and meaningful connections. Your gateway
            to invaluable learning, connection, and personal development.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PillButton testid="mentor-hero-cta">Start your journey</PillButton>
            <a
              data-testid="mentor-hero-secondary"
              href="#values"
              className="text-[13px] font-medium tracking-tight inline-flex items-center gap-2 text-neutral-700 hover:text-black border-b border-transparent hover:border-black transition-all py-1"
            >
              Meet our mentors
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: 240, suffix: "+", l: "Mentors active" },
              { n: 4500, suffix: "+", l: "1:1 sessions" },
              { n: 38, l: "Industry verticals" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                custom={i + 1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                data-testid={`mentor-stat-${i}`}
              >
                <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                  <StatCounter value={s.n} prefix="" suffix={s.suffix || ""} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[1rem_4rem_1rem_4rem] bg-neutral-100 -z-10 blob-float" />
            <div className="absolute -top-8 -left-6 w-24 h-24 rounded-full border border-black/30 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-black hidden md:block" />
            <img
              data-testid="mentor-hero-image"
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Mentor coaching a founder one on one"
              className="w-full h-full object-cover rounded-[1rem_4rem_1rem_4rem] shadow-[0_25px_80px_-30px_rgba(0,0,0,0.4)]"
            />
            <FeaturePopup
              testid="mentor-popup-session"
              icon={MessageCircle}
              eyebrow="Live session"
              title="1:1 · 45 min"
              position="top-right"
              delay={0.55}
            />
            <FeaturePopup
              testid="mentor-popup-rating"
              icon={Award}
              eyebrow="Founder rating"
              title="4.9 ★ avg."
              trend="+126 reviews"
              position="bottom-left"
              delay={0.85}
              dark
            />
          </div>
        </motion.div>
      </Container>

      <Container className="mt-24">
        <div className="h-line" />
        <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          <span>Learn</span>
          <span>Mentor · Communication · Trust · Respect</span>
          <span className="hidden md:inline">Scroll ↓</span>
        </div>
      </Container>
    </section>
  );
};

/* ================================================================ */
/*  Slide 2 — Adapting to change                                    */
/* ================================================================ */

const Evolve = () => (
  <section
    id="evolve"
    data-testid="mentor-evolve-section"
    className="relative py-28 lg:py-40 bg-white overflow-hidden"
  >
    <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-neutral-100 blur-2xl" />
    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="lg:col-span-7"
      >
        <Overline>02 — Evolve</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          Adapting to change is the way to <Highlight>evolve.</Highlight>
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          We help you develop business plans, manage your finances, adapt to
          changes, and establish credibility. Our mentors propose valuable
          expertise and guidance to assist you in navigating business
          challenges and recognising opportunities.
        </p>
        <div className="mt-10">
          <PillButton testid="evolve-cta">Empower your business evolution</PillButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img
              data-testid="evolve-image"
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Founders planning their pivot strategy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <FeaturePopup
            testid="evolve-popup-plan"
            icon={Lightbulb}
            eyebrow="Business plan"
            title="v3 reviewed · approved"
            position="top-right"
            delay={0.45}
          />
          <FeaturePopup
            testid="evolve-popup-finance"
            icon={DollarSign}
            eyebrow="Runway"
            title="14 months · stable"
            trend="Adapt mode on"
            position="bottom-left"
            delay={0.7}
            dark
          />
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
    data-testid="partners-section"
    className="py-24 lg:py-32 bg-neutral-50 border-y border-black/5 overflow-hidden"
  >
    <Container className="text-center mb-12">
      <Overline>03 — Ecosystem</Overline>
      <h2 className="mt-6 font-display font-bold tracking-tight text-3xl lg:text-5xl">
        Partners <Highlight>and sponsors.</Highlight>
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-md mx-auto">
        Backed by world-class platforms that power our founders every day.
      </p>
    </Container>
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />
      <div className="flex w-max marquee-track">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
          <div
            key={i}
            data-testid={`partner-logo-${i}`}
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
/*  Slide 4 — Inspiration · Precision & simplicity                  */
/* ================================================================ */

const Inspiration = () => (
  <section
    id="inspiration"
    data-testid="inspiration-section"
    className="py-28 lg:py-44 bg-white relative overflow-hidden"
  >
    <Container className="text-center">
      <Overline>04 — Inspiration</Overline>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.95] balance text-[clamp(2.4rem,7.2vw,6.4rem)] max-w-5xl mx-auto"
      >
        Expressing inspiration:{" "}
        <Highlight>precision &amp; simplicity.</Highlight>
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-10 max-w-2xl mx-auto text-[17px] lg:text-[18px] leading-relaxed text-neutral-600"
      >
        Our mentoring team offers valuable resources for business planning,
        starting a business, and securing funding. We foster talent, learning,
        and growth, contributing to your organisation&rsquo;s success.
        Let&rsquo;s embark on this exhilarating journey together.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-12"
      >
        <PillButton testid="inspiration-cta">Discover your potential</PillButton>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 5 — Learn. Mentor. Dare! (Foundation values)              */
/* ================================================================ */

const VALUES = [
  { n: "01", t: "Respect", icon: HeartHandshake, d: "Every founder is met with deep curiosity and dignity." },
  { n: "02", t: "Communication", icon: MessageCircle, d: "Clear, honest dialogue is the start of every breakthrough." },
  { n: "03", t: "Expectation", icon: Target, d: "Defined outcomes turn ambition into measurable progress." },
  { n: "04", t: "Trust", icon: ShieldCheck, d: "Confidentiality, candor, and consistency at every step." },
];

const LearnMentorDare = () => (
  <section
    id="values"
    data-testid="values-section"
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
          <Overline>05 — Foundation</Overline>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
            Learn. Mentor. <Highlight>Dare!</Highlight>
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
          Respect, Communication, Expectation, and Trust are our foundation for
          effective mentoring — personalised guidance drawing from real,
          successful experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {VALUES.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              data-testid={`value-card-${i}`}
              className="group relative bg-white border border-black/5 rounded-3xl p-7 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-5 right-5 text-[10px] font-mono text-neutral-400">
                {v.n}
              </div>
              <div className="w-12 h-12 rounded-full bg-black text-white inline-flex items-center justify-center mb-7 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[20px] tracking-tight">
                {v.t}
              </h3>
              <p className="mt-2 text-[14px] text-neutral-500 leading-relaxed">
                {v.d}
              </p>
              <ArrowUpRight className="absolute bottom-5 right-5 w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <PillButton testid="values-cta">Build success on a strong foundation</PillButton>
      </div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 6 — Featured In                                           */
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
    data-testid="mentor-press-section"
    className="py-24 lg:py-32 bg-white border-y border-black/5 overflow-hidden"
  >
    <Container className="text-center mb-12">
      <Overline>06 — Trust &amp; Press</Overline>
      <h2 className="mt-6 font-display font-bold tracking-tight text-3xl lg:text-5xl">
        Featured in
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-md mx-auto">
        Mentor stories and program coverage from the world&rsquo;s top outlets.
      </p>
    </Container>
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex w-max marquee-track">
        {[...PRESS, ...PRESS, ...PRESS].map((p, i) => (
          <div
            key={i}
            data-testid={`mentor-press-logo-${i}`}
            className="flex items-center justify-center min-w-[260px] h-24 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <img src={p.src} alt={p.name} className="max-h-10 lg:max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================================================================ */
/*  Slide 7 — Foundation                                            */
/* ================================================================ */

const Foundation = () => (
  <section
    id="foundation"
    data-testid="foundation-section"
    className="relative py-28 lg:py-40 bg-neutral-50 border-y border-black/5 overflow-hidden"
  >
    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="lg:col-span-5"
      >
        <div className="relative aspect-[4/5] max-w-md mx-auto">
          <div className="absolute inset-0 rounded-[4rem_1rem_4rem_1rem] overflow-hidden bg-black">
            <img
              data-testid="foundation-image"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Founders solving social problems together"
              className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <FeaturePopup
            testid="foundation-popup-impact"
            icon={Rocket}
            eyebrow="Mission"
            title="Solving real problems"
            position="top-right"
            delay={0.45}
          />
          <FeaturePopup
            testid="foundation-popup-tools"
            icon={Briefcase}
            eyebrow="Toolkit"
            title="120 founder resources"
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
        className="lg:col-span-7"
      >
        <Overline>07 — Foundation</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          We build businesses that solve{" "}
          <Highlight>enormous social problems.</Highlight>
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          Empowering individuals from disadvantaged backgrounds to succeed is
          our mission. Join us now to access the tools for ultimate success in
          your industry.
        </p>
        <div className="mt-10">
          <PillButton testid="foundation-cta">Empower your journey</PillButton>
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 8 — Labs                                                  */
/* ================================================================ */

const Labs = () => (
  <section
    id="labs"
    data-testid="labs-section"
    className="relative py-28 lg:py-40 bg-white overflow-hidden"
  >
    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="lg:col-span-7 order-1 lg:order-1"
      >
        <Overline>08 — Labs</Overline>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
          <Highlight>Labs</Highlight> — break barriers,<br className="hidden lg:inline" />{" "}
          create opportunities.
        </h2>
        <p className="mt-6 max-w-xl text-[17px] text-neutral-600 leading-relaxed">
          We empower underprivileged individuals to reach their full potential
          and make a positive impact on the world. Together, we break barriers
          and create opportunities for success.
        </p>
        <div className="mt-10">
          <PillButton testid="labs-cta">Discover more</PillButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 order-2 lg:order-2"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute -inset-3 rounded-[2rem_5rem_2rem_5rem] bg-neutral-100 -z-10 blob-float" />
          <div className="absolute inset-0 rounded-[2rem_5rem_2rem_5rem] overflow-hidden">
            <img
              data-testid="labs-image"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Lab participant prototyping"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <FeaturePopup
            testid="labs-popup-prototype"
            icon={Zap}
            eyebrow="Prototype"
            title="MVP in 2 weeks"
            position="top-right"
            delay={0.45}
          />
          <FeaturePopup
            testid="labs-popup-cohort"
            icon={GraduationCap}
            eyebrow="Cohort 04"
            title="32 participants"
            position="bottom-left"
            delay={0.75}
            dark
          />
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 9 — Grants ($10K)                                         */
/* ================================================================ */

const GRANT_AUDIENCES = [
  "LGBTQ community",
  "Women entrepreneurs",
  "India",
  "Latin America",
];

const Grants = () => (
  <section
    id="grants"
    data-testid="grants-section"
    className="relative py-28 lg:py-40 bg-black text-white overflow-hidden"
  >
    <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
    <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

    <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="lg:col-span-7"
      >
        <Overline dark>09 — Grants</Overline>
        <div className="mt-6 flex items-baseline gap-4 flex-wrap">
          <span className="font-display font-extrabold tracking-[-0.04em] text-[clamp(4rem,12vw,9rem)] leading-none">
            <StatCounter value={10000} prefix="$" />
          </span>
          <span className="font-serif-display italic text-3xl lg:text-4xl text-white/80">
            up&nbsp;to per founder
          </span>
        </div>
        <h2 className="mt-4 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.5rem,3.6vw,2.6rem)] max-w-2xl text-white/95">
          Direct grants to{" "}
          <Highlight>LGBTQ founders, women, and emerging talent</Highlight>{" "}
          across India &amp; Latin America.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {GRANT_AUDIENCES.map((a, i) => (
            <motion.span
              key={a}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              data-testid={`grant-audience-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[13px] font-medium hover:bg-white hover:text-black hover:border-white transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {a}
            </motion.span>
          ))}
        </div>

        <div className="mt-12">
          <a
            data-testid="grants-cta"
            href="#"
            className="group relative inline-flex items-center gap-3 rounded-full px-9 py-5 text-[15px] font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 overflow-hidden bg-white text-black shadow-[0_18px_45px_-15px_rgba(255,255,255,0.4)]"
          >
            <span>Pursue your dreams</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10">
            <img
              data-testid="grants-image"
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000"
              alt="Woman entrepreneur in emerging market"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <FeaturePopup
            testid="grants-popup-applications"
            icon={Flame}
            eyebrow="Now open"
            title="Q1 applications"
            meter={42}
            position="top-right"
            delay={0.5}
          />
          <FeaturePopup
            testid="grants-popup-funded"
            icon={DollarSign}
            eyebrow="Funded · 2025"
            title="178 founders"
            trend="+62% YoY"
            position="bottom-left"
            delay={0.8}
            dark
          />
        </div>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 10 — Record-breaking success (Final CTA)                  */
/* ================================================================ */

const RecordSuccess = () => (
  <section
    id="cta"
    data-testid="record-success-section"
    className="relative py-32 lg:py-44 bg-white overflow-hidden"
  >
    <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
    <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />

    <Container className="relative text-center">
      <Overline>10 — Accelerate</Overline>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.95] balance text-[clamp(2.4rem,7vw,6rem)]"
      >
        Achieving <Highlight>record-breaking success.</Highlight>
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-10 max-w-2xl mx-auto text-[17px] lg:text-[18px] leading-relaxed text-neutral-600"
      >
        We employ unconventional methods and techniques designed to help you
        achieve unprecedented success in record time. Our dedicated team is
        committed to helping you build a business that reaches its full
        potential and delivers the results you&rsquo;re looking for.
        Let&rsquo;s accelerate your success together.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        <PillButton testid="record-cta-primary">Accelerate with us</PillButton>
        <a
          data-testid="record-cta-secondary"
          href="#"
          className="inline-flex items-center gap-3 rounded-full border-2 border-black px-9 py-5 text-[15px] font-semibold tracking-tight hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Book a discovery call
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </Container>
  </section>
);

/* ================================================================ */
/*  Page Export                                                     */
/* ================================================================ */

export default function Mentorship() {
  return (
    <div data-testid="mentorship-root" className="bg-white text-black overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-0">
        <MentorHero />
        <Evolve />
        <Partners />
        <Inspiration />
        <LearnMentorDare />
        <FeaturedPress />
        <Foundation />
        <Labs />
        <Grants />
        <RecordSuccess />
      </main>
      <Footer />
    </div>
  );
}
