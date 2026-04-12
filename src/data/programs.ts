export type InitiativeSection = {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
};

export type Program = {
  slug: string;
  title: string;
  subtitle?: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  targetsHeading?: string;
  targets: string[];
  sections?: InitiativeSection[];
  /** Remote hero image URL (Unsplash). Prefer replacing with Amal / Somalia field photography when available. */
  image: string;
  /** Accessible description of the hero image (people & place). */
  imageAlt?: string;
};

/**
 * Initiative heroes: Unsplash photos from **Somalia** or **Somali women** searches only (subjects are Somali / Cushitic per platform tagging).
 * There is no reliable free “Somalia + laptop” stock; the youth image uses Somali children — swap for Amal field photos when you have them.
 */
export const programs: Program[] = [
  {
    slug: "education-healthcare",
    title: "Education & Healthcare",
    subtitle: "Building foundations for a healthier, educated Somalia",
    icon: "GraduationCap",
    shortDescription:
      "Expanding access to quality schooling and essential health services, ensuring every Somali child and family has the foundation they need to thrive.",
    fullDescription:
      "Amal Foundation is deeply committed to the dual pillars of human development: education and health. We invest in building and renovating schools, providing scholarships to underprivileged students, and establishing community health clinics. By addressing these fundamental needs, we empower the next generation with the knowledge and wellbeing required to lead Somalia towards a prosperous future.",
    targetsHeading: "Operational goals for 2026",
    targets: [
      "Construct or renovate 3 new schools in underserved rural districts",
      "Award fully-funded scholarships to 500 disadvantaged students across Puntland",
      "Establish 2 primary healthcare clinics providing free basic maternal and child health services",
      "Launch a mobile health outreach program to reach nomadic and remote communities",
    ],
    image: "/images/programs/education-healthcare.png",
    imageAlt: "Somali students in a modern, bright classroom representing the future of education and health in Somalia.",
  },
  {
    slug: "outreach-networking",
    title: "Emergency Humanitarian Relief",
    subtitle: "Rapid response and dignified aid during crises",
    icon: "Heart",
    shortDescription:
      "Providing immediate, life-saving assistance to families affected by natural disasters and economic shocks across all Somali provinces.",
    fullDescription:
      "When crisis strikes, Amal Foundation acts as a rapid-response lifeline. Our humanitarian initiative focuses on delivering food rations, clean water, and essential household supplies to vulnerable families. Beyond immediate relief, we work with local communities to build resilience, ensuring that aid is delivered with dignity and reaches those in the most remote areas of Somalia.",
    targetsHeading: "Relief targets",
    targets: [
      "Provide emergency food and supply kits to 1,000+ families during peak crisis periods",
      "Establish primary response supply lines in Garowe and surrounding provinces",
      "Coordinate with international NGOs to maximize the reach of diaspora-funded aid",
      "Build community-led disaster preparedness networks to reduce long-term vulnerability",
    ],
    image: "/images/programs/humanitarian-relief.png",
    imageAlt: "Dignified aid distribution in a rural Somali community at sunset.",
  },
  {
    slug: "amal-hub",
    title: "Youth Entrepreneurship & Development",
    subtitle: "Amal Hub — empowering the next generation of digital leaders",
    icon: "Laptop",
    shortDescription:
      "Vocational training and digital skills development for Somali youth. Turning talent into opportunity through technology and mentorship.",
    fullDescription:
      "The Amal Hub is our signature innovation platform. We provide youth with the technical skills and business mentorship needed to succeed in the modern economy. From coding and digital marketing to vocational trades and renewable energy tech, we are building a workforce that is self-reliant and globally competitive. Amal Hub is not just a school; it is an incubator for Somalia's future leaders.",
    targetsHeading: "Youth impact targets",
    targets: [
      "Train 200 youth in high-demand vocational and digital skills",
      "Provide seed mentorship for 20 youth-led startup initiatives",
      "Create a digital talent marketplace connecting graduates with remote work opportunities",
      "Equip training centers with modern tools, from computers to solar energy equipment",
    ],
    image: "/images/programs/entrepreneurship.png",
    imageAlt: "Somali youth working with modern technology and solar panels in a vocational training center.",
  },
  {
    slug: "economic-empowerment",
    title: "Financial Inclusion & Literacy",
    subtitle: "Ethical finance pathways to economic dignity",
    icon: "Landmark",
    shortDescription:
      "Sharia-compliant micro-financing and financial literacy workshops, empowering small business owners and women entrepreneurs.",
    fullDescription:
      "Lasting change begins with economic empowerment. By providing interest-free, Sharia-compliant financing and practical business workshops, we help community members build sustainable livelihoods. We focus on women-led enterprises and small-scale traders, helping them manage resources effectively and grow their businesses to lift their families out of poverty.",
    targetsHeading: "Empowerment objectives",
    targets: [
      "Micro-finance 50 small businesses with interest-free capital",
      "Conduct financial literacy workshops for 300 women entrepreneurs",
      "Partner with Amal Bank to provide secure, digital payment solutions for rural traders",
      "Support the transition from subsistence living to small-scale enterprise ownership",
    ],
    image: "/images/programs/financial-inclusion.png",
    imageAlt: "A Somali woman entrepreneur managing her small business using a mobile device in a vibrant market.",
  },
];
