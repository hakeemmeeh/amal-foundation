import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Camera, Globe, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement<{ className?: string }>;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  className?: string;
}

const defaultSections: Footer7Props["sections"] = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks: NonNullable<Footer7Props["socialLinks"]> = [
  { icon: <Camera className="size-5" />, href: "#", label: "Instagram" },
  { icon: <Send className="size-5" />, href: "#", label: "Telegram" },
  { icon: <Globe className="size-5" />, href: "#", label: "Website" },
  { icon: <Mail className="size-5" />, href: "mailto:info@amalfoundation.org", label: "Email" },
];

const defaultLegalLinks: NonNullable<Footer7Props["legalLinks"]> = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

/** Amal Foundation — matches site routes, copy, and brand. */
export const amalFooter7Defaults: Footer7Props = {
  logo: {
    url: "/",
    src: "/images/logo.png",
    alt: "Amal Foundation",
    title: "Amal Foundation",
  },
  description:
    "A private non-profit corporate foundation incorporated in Somalia. Established April 2006. Headquartered in Garowe, Puntland — improving lives through education, health, and opportunity.",
  sections: [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "/" },
        { name: "Programs", href: "/programs" },
        { name: "Get Involved", href: "/get-involved" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Who We Are", href: "/about" },
        { name: "Our Plan", href: "/strategy" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "/contact" },
        {
          name: "info@amalfoundation.org",
          href: "mailto:info@amalfoundation.org",
        },
      ],
    },
  ],
  socialLinks: [
    { icon: <Camera className="size-5" />, href: "#", label: "Instagram" },
    { icon: <Send className="size-5" />, href: "#", label: "Telegram" },
    { icon: <Globe className="size-5" />, href: "#", label: "Website" },
    {
      icon: <Mail className="size-5" />,
      href: "mailto:info@amalfoundation.org",
      label: "Email",
    },
  ],
  copyright: `© ${new Date().getFullYear()} Amal Foundation. All rights reserved.`,
  legalLinks: [
    { name: "Parent: Amal Group International Ltd", href: "/about" },
    { name: "Garowe, Somalia", href: "/contact" },
  ],
};

function FooterInlineLink({
  href,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        className={className}
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function Footer7({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks = defaultLegalLinks,
  className,
}: Footer7Props) {
  return (
    <footer
      className={cn(
        "border-t border-[#1B2A6B]/15 bg-[#D4A843] py-10 font-bold text-[#1B2A6B] lg:py-12",
        className,
      )}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-start lg:gap-8 lg:text-left">
          <div className="flex w-full flex-col justify-between gap-4 font-body lg:max-w-md lg:items-start">
            <div className="flex flex-wrap items-center gap-2 lg:justify-start">
              <FooterInlineLink
                href={logo.url}
                className="block max-w-full shrink-0 sm:max-w-[26rem] md:max-w-[32rem]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  width={960}
                  height={280}
                  className="h-auto w-full max-h-24 object-contain object-left sm:max-h-28 md:max-h-32"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 26rem, 32rem"
                />
              </FooterInlineLink>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li
                  key={`${social.label}-${idx}`}
                  className="text-primary/90 transition-colors hover:text-primary"
                >
                  <FooterInlineLink
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex text-inherit"
                  >
                    {social.icon}
                  </FooterInlineLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl lg:gap-10">
            {sections?.map((section, sectionIdx) => (
              <div key={`${section.title}-${sectionIdx}`}>
                <h3 className="font-display mb-2 text-xs uppercase tracking-wider text-[#1B2A6B]/85">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={`${link.name}-${linkIdx}`}
                      className="transition-colors hover:text-primary"
                    >
                      <FooterInlineLink href={link.href}>
                        {link.name}
                      </FooterInlineLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-[#1B2A6B]/20 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 font-mono tracking-wide lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:flex-wrap md:gap-x-6">
            {legalLinks?.map((link, idx) => (
              <li key={`${link.name}-${idx}`} className="hover:text-primary">
                <FooterInlineLink href={link.href}>{link.name}</FooterInlineLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
