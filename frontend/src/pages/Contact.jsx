import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Globe2,
  Send,
} from "lucide-react";
import {
  Container,
  Overline,
  Highlight,
  ScrollProgress,
  Navbar,
  Footer,
  fadeUp,
} from "../components/shared";

/* ================================================================ */
/*  Slide 1 — Get in touch (form)                                   */
/* ================================================================ */

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", terms: false });
  const [submitted, setSubmitted] = useState(false);
  const valid =
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.message.trim().length > 3 &&
    form.terms;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
  };

  return (
    <section
      id="top"
      data-testid="contact-form-section"
      className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 bg-white overflow-hidden mesh-soft"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left — Intro */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-6"
        >
          <Overline>Contact</Overline>
          <h1 className="mt-6 font-display font-extrabold tracking-[-0.04em] leading-[0.98] balance text-[clamp(2.4rem,6.2vw,5.2rem)]">
            Get in <Highlight>touch.</Highlight>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] lg:text-[18px] leading-relaxed text-neutral-600 font-body">
            Whether you have questions about our mission, volunteer
            opportunities, events, partnerships, donations, or any other
            inquiries, our dedicated team is here to assist and guide you.
          </p>

          <div className="mt-10 space-y-4 max-w-md">
            <a
              data-testid="contact-email"
              href="mailto:Support@johnvekser.com"
              className="group flex items-center gap-4 bg-neutral-50 border border-black/5 rounded-2xl p-4 hover:border-black/40 hover:-translate-y-0.5 transition-all"
            >
              <span className="inline-flex w-11 h-11 rounded-xl bg-black text-white items-center justify-center">
                <Mail className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Email
                </div>
                <div className="font-semibold text-[15px]">
                  Support@johnvekser.com
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
            </a>
            <a
              data-testid="contact-phone"
              href="tel:+14156870415"
              className="group flex items-center gap-4 bg-neutral-50 border border-black/5 rounded-2xl p-4 hover:border-black/40 hover:-translate-y-0.5 transition-all"
            >
              <span className="inline-flex w-11 h-11 rounded-xl bg-black text-white items-center justify-center">
                <Phone className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Phone
                </div>
                <div className="font-semibold text-[15px]">+1 (415) 687-0415</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right — Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 lg:col-start-7"
        >
          <div className="relative bg-white border border-black/5 rounded-3xl p-7 lg:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  data-testid="contact-form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      testid="form-name"
                      label="Name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Your name"
                    />
                    <Field
                      testid="form-email"
                      label="Email"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="you@email.com"
                      type="email"
                    />
                  </div>
                  <Field
                    testid="form-message"
                    label="Message"
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                    placeholder="How can we help?"
                    textarea
                  />

                  <label className="flex items-start gap-3 text-[13px] text-neutral-600 leading-relaxed cursor-pointer select-none">
                    <input
                      data-testid="form-terms"
                      type="checkbox"
                      checked={form.terms}
                      onChange={(e) =>
                        setForm({ ...form, terms: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 accent-black"
                    />
                    <span>
                      I accept the{" "}
                      <a href="#" className="underline underline-offset-2 hover:text-black">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline underline-offset-2 hover:text-black">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    data-testid="form-submit"
                    type="submit"
                    disabled={!valid}
                    className={`group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-[14px] font-semibold tracking-tight transition-all duration-300 overflow-hidden w-full justify-center ${
                      valid
                        ? "bg-gradient-to-br from-neutral-800 via-black to-neutral-900 text-white hover:-translate-y-0.5 shadow-[0_18px_45px_-15px_rgba(0,0,0,0.55)]"
                        : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                    }`}
                  >
                    <span>Send message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  data-testid="contact-success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    className="mx-auto w-16 h-16 rounded-full bg-black text-white inline-flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-display font-extrabold tracking-tight text-3xl">
                    Message sent.
                  </h3>
                  <p className="mt-3 text-[15px] text-neutral-600 max-w-sm mx-auto">
                    Thanks, {form.name || "friend"} — we&rsquo;ll get back to
                    you within 1–2 business days.
                  </p>
                  <button
                    data-testid="form-reset"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "", terms: false });
                    }}
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold border-b border-black/30 hover:border-black transition-colors"
                  >
                    Send another
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const Field = ({ label, value, onChange, placeholder, type = "text", textarea, testid }) => {
  const base =
    "w-full rounded-2xl bg-neutral-50 border border-black/10 px-4 py-3.5 text-[15px] outline-none focus:border-black focus:bg-white transition-colors placeholder:text-neutral-400";
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea
          data-testid={testid}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className={base + " resize-none min-h-[140px]"}
        />
      ) : (
        <input
          data-testid={testid}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
};

/* ================================================================ */
/*  Slide 2 — Our Offices (world map with pins)                     */
/* ================================================================ */

const OFFICES = [
  {
    code: "USA",
    country: "United States",
    flag: "🇺🇸",
    pins: [
      {
        city: "Fort Lauderdale",
        addr:
          "401 E Las Olas Blvd 130 139, Bank of America Plaza, Fort Lauderdale, FL 33301",
        note: "Main Office",
        x: 26.8,
        y: 39.0,
      },
      {
        city: "Riverside",
        addr: "514 N. California Ave., Beaumont, CA 92223",
        x: 18.5,
        y: 36.5,
      },
      {
        city: "Miami",
        addr: "78 SW 7th Street, Miami, FL 33130",
        x: 27.2,
        y: 40.5,
      },
    ],
  },
  {
    code: "IN",
    country: "India",
    flag: "🇮🇳",
    pins: [
      {
        city: "Thane",
        addr:
          "B206, Lodha Supremus, Rd Number 22, Wagle Industrial Estate, Maharashtra 400604",
        x: 69.5,
        y: 47.5,
      },
      {
        city: "Goregaon",
        addr:
          "Goregaon, 20th Floor, Oberoi Commerz II, International Business Park, Oberoi Garden City, Goregaon East (D2), Mumbai, MH 400063",
        x: 70.8,
        y: 48.7,
      },
    ],
  },
  {
    code: "ISR",
    country: "Israel",
    flag: "🇮🇱",
    pins: [
      {
        city: "Tel Aviv",
        addr: "Rothschild 22, Tel Aviv-Yafo, 6688218",
        x: 59.0,
        y: 41.5,
      },
    ],
  },
  {
    code: "NL",
    country: "Netherlands",
    flag: "🇳🇱",
    pins: [
      {
        city: "Amsterdam",
        addr: "Weesperstraat 61, 1018 VN Amsterdam, Netherlands",
        x: 51.5,
        y: 29.0,
      },
    ],
  },
  {
    code: "PE",
    country: "Peru",
    flag: "🇵🇪",
    pins: [
      {
        city: "Lima · Miraflores",
        addr:
          "Av. Mariscal La Mar 638 (Soho II Building), of. 604, Miraflores, Lima",
        x: 28.8,
        y: 64.5,
      },
    ],
  },
  {
    code: "PT",
    country: "Portugal",
    flag: "🇵🇹",
    pins: [
      {
        city: "Lisbon",
        addr: "Rua Saraiva de Carvalho 1C, Lisbon, Portugal",
        x: 47.4,
        y: 36.5,
      },
    ],
  },
];

const Pin = ({ pin, country, flag, main }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-testid={`pin-${pin.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      tabIndex={0}
      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
    >
      <span className="relative block">
        <span className="absolute -inset-1 rounded-full bg-black/30 animate-ping" />
        <span
          className={`relative block w-3.5 h-3.5 rounded-full border-2 border-white shadow-md ${
            main ? "bg-black ring-4 ring-black/15" : "bg-black"
          }`}
        />
      </span>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full w-[260px] z-30"
          >
            <div className="bg-white border border-black/10 rounded-2xl shadow-[0_20px_45px_-12px_rgba(0,0,0,0.3)] p-4 text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-neutral-500">
                  {flag} {country}
                </span>
                {main && (
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold bg-black text-white px-2 py-0.5 rounded-full">
                    Main
                  </span>
                )}
              </div>
              <div className="font-display font-bold text-[15px] tracking-tight">
                {pin.city}
              </div>
              <div className="mt-1.5 text-[12px] text-neutral-600 leading-relaxed">
                {pin.addr}
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-black/10 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WorldMap = () => (
  <section
    id="offices"
    data-testid="offices-section"
    className="relative py-28 lg:py-36 bg-neutral-50 border-t border-black/5 overflow-hidden"
  >
    <Container>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <Overline>02 — Our Offices</Overline>
          <h2 className="mt-6 font-display font-extrabold tracking-[-0.035em] leading-[1.05] balance text-[clamp(1.9rem,4.8vw,3.6rem)]">
            <Highlight>Nine locations,</Highlight> six countries.
          </h2>
        </div>
        <p className="max-w-md text-[15px] text-neutral-500 leading-relaxed">
          Hover any pin to see the office address. Our headquarters is in
          Fort Lauderdale, Florida.
        </p>
      </div>

      {/* Map container */}
      <div
        data-testid="world-map"
        className="relative w-full aspect-[2/1] rounded-3xl bg-white border border-black/10 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]"
      >
        {/* Map image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
          alt="World map"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Pins layer */}
        {OFFICES.map((c) =>
          c.pins.map((pin) => (
            <Pin
              key={pin.city}
              pin={pin}
              country={c.country}
              flag={c.flag}
              main={pin.note === "Main Office"}
            />
          ))
        )}

        {/* Legend */}
        <div className="absolute bottom-5 left-5 flex flex-wrap items-center gap-x-5 gap-y-2 bg-white/85 backdrop-blur rounded-full px-4 py-2 border border-black/10">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-black" />
            Office
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-black ring-2 ring-black/20" />
            Main HQ
          </div>
        </div>

        {/* Compass / branding */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/85 backdrop-blur rounded-full px-3 py-1.5 border border-black/10 text-[11px] uppercase tracking-[0.2em] font-semibold">
          <Globe2 className="w-3.5 h-3.5" />
          Worldwide
        </div>
      </div>

      {/* Country list grid removed per request */}
    </Container>
  </section>
);

/* ================================================================ */
/*  Slide 3 — Empowering entrepreneurial dreams since 2022          */
/* ================================================================ */

const FinalStory = () => (
  <section
    id="story"
    data-testid="contact-story-section"
    className="relative py-32 lg:py-44 bg-white overflow-hidden"
  >
    <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />
    <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-neutral-100 blur-3xl" />

    <Container className="relative text-center">
      <Overline>03 — Our Story</Overline>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.98] balance text-[clamp(2.4rem,6.4vw,5.6rem)] max-w-5xl mx-auto"
      >
        Empowering <Highlight>entrepreneurial dreams</Highlight> since 2022.
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mt-10 max-w-2xl mx-auto text-[17px] lg:text-[18px] leading-relaxed text-neutral-600"
      >
        We identify budding entrepreneurs in impoverished regions and provide
        them with mentorship so they may develop their ideas into thriving
        businesses.
      </motion.p>
    </Container>
  </section>
);

/* ================================================================ */
/*  Page Export                                                     */
/* ================================================================ */

export default function Contact() {
  return (
    <div data-testid="contact-root" className="bg-white text-black overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-0">
        <ContactForm />
        <WorldMap />
        <FinalStory />
      </main>
      <Footer />
    </div>
  );
}
