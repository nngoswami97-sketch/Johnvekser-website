import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  animate,
} from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles, Globe2 } from "lucide-react";

/* ============================================================== */
/*  Shared primitives — used by every page                        */
/* ============================================================== */

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 lg:px-10 ${className}`}>
    {children}
  </div>
);

/* Italic gold accent — used inside headlines */
export const Highlight = ({ children }) => (
  <span className="font-serif-display italic">{children}</span>
);

/* Overline — section eyebrow with leading dash */
export const Overline = ({ children, dark = false }) => (
  <span
    className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] ${
      dark ? "text-white/70" : "text-neutral-500"
    }`}
  >
    <span
      className={`inline-block w-6 h-px ${dark ? "bg-white/40" : "bg-neutral-400"}`}
    />
    {children}
  </span>
);

/* Primary CTA pill */
export const PillButton = ({
  children,
  testid,
  variant = "dark",
  icon = true,
  onClick,
  as: As = "button",
  ...rest
}) => {
  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-9 py-5 text-[15px] font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 overflow-hidden";
  const styles =
    variant === "dark"
      ? "text-white shadow-[0_18px_45px_-15px_rgba(0,0,0,0.55)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-gradient-to-br from-neutral-800 via-black to-neutral-900 ring-1 ring-black/40"
      : "bg-white text-black border border-black/15 hover:border-black/60 shadow-sm";
  return (
    <As
      data-testid={testid}
      onClick={onClick}
      className={`${base} ${styles}`}
      {...rest}
    >
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
    </As>
  );
};

/* Outlined secondary button */
export const OutlineButton = ({ children, testid, href = "#", ...rest }) => (
  <a
    data-testid={testid}
    href={href}
    className="inline-flex items-center gap-3 rounded-full border-2 border-black px-9 py-5 text-[15px] font-semibold tracking-tight hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5"
    {...rest}
  >
    {children}
    <ArrowRight className="w-4 h-4" />
  </a>
);

/* Animated number counter — runs once when scrolled into view */
const useCounter = (target, durationSec = 1.6) => {
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
  return [ref, Math.round(val)];
};

export const StatCounter = ({ value, prefix = "", suffix = "" }) => {
  const [ref, n] = useCounter(value);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
};

/* Top scroll progress bar */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });
  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[60]"
    />
  );
};

/* Floating feature popup — overlays images with dashboard cards */
export const FeaturePopup = ({
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
          <div className="text-[13px] font-semibold leading-tight">{title}</div>
          {trend && (
            <div className="mt-1 text-[11px] font-medium text-emerald-600">
              {trend}
            </div>
          )}
        </div>
      </div>
      {typeof meter === "number" && (
        <div className="mt-3">
          <div
            className={`h-1 w-full rounded-full overflow-hidden ${
              dark ? "bg-white/15" : "bg-neutral-200"
            }`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${meter}%` }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4, duration: 1.2 }}
              className={`h-full ${dark ? "bg-white" : "bg-black"}`}
            />
          </div>
          <div
            className={`mt-1.5 text-[10px] flex justify-between ${
              dark ? "text-white/55" : "text-neutral-500"
            }`}
          >
            <span>Progress</span>
            <span>{meter}%</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* ============================================================== */
/*  Site Navbar — shared across all pages                         */
/* ============================================================== */

export const Navbar = () => {
  const { pathname } = useLocation();
  const navItems = [
    { label: "Home", to: "/", testid: "nav-home" },
    { label: "Mentorship", to: "/mentorship", testid: "nav-mentorship" },
    { label: "Donate", to: "/donate", testid: "nav-donate" },
  ];
  return (
    <header
      data-testid="site-navbar"
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5"
    >
      <Container className="flex items-center justify-between h-16 lg:h-20">
        <Link data-testid="nav-logo" to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white text-[15px] font-bold font-display">
            JV
            <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-black border-2 border-white" />
          </span>
          <span className="font-display font-bold tracking-tight text-[17px]">
            John Vekser
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium text-neutral-700">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              data-testid={n.testid}
              className={`hover:text-black transition-colors ${
                pathname === n.to ? "text-black" : ""
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="#programs"
            data-testid="nav-programs"
            className="hover:text-black transition-colors"
          >
            Programs
          </a>
          <a
            href="#press"
            data-testid="nav-press"
            className="hover:text-black transition-colors"
          >
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
};

/* ============================================================== */
/*  Site Footer — shared across all pages                         */
/* ============================================================== */

export const Footer = () => (
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
            <li>
              <Link to="/" className="text-white/80 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mentorship" className="text-white/80 hover:text-white">
                Mentorship
              </Link>
            </li>
            <li>
              <Link to="/donate" className="text-white/80 hover:text-white">
                Donate
              </Link>
            </li>
            <li>
              <a href="#programs" className="text-white/80 hover:text-white">
                Programs
              </a>
            </li>
            <li>
              <a href="#press" className="text-white/80 hover:text-white">
                Press
              </a>
            </li>
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
