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
  image: string;
};

/** Initiative listing & detail content. Listing images: Unsplash scenes chosen to read as Horn of Africa / Cushitic and broader East African community contexts where stock allows. */
export const programs: Program[] = [
  {
    slug: "outreach-networking",
    title: "Outreach & Networking",
    subtitle: "Building strategic alliances for greater impact",
    icon: "Users",
    shortDescription:
      "Strategic alliances with foundations, NGOs, and global donors — multiplying reach, credibility, and collective impact across Somali communities.",
    fullDescription:
      "The foundation's reach and credibility are multiplied through the relationships it builds. Amal Foundation proactively engages with like-minded foundations, international NGOs, diaspora networks, and donor organisations to forge partnerships that amplify our collective impact. Strong alliances unlock collaborative funding, shared expertise, and wider community reach.",
    targetsHeading: "Strategic objectives",
    targets: [
      "Identify and engage aligned foundations and donor organisations active in Somalia, Kenya, and the broader East Africa region",
      "Attend international diaspora and philanthropy conferences to build global visibility and foster meaningful relationships",
      "Establish formal Memoranda of Understanding (MOU) with strategic partner organisations",
      "Launch a regular donor newsletter to maintain transparency and strengthen long-term donor relationships",
      "Develop a shared resource library and knowledge-sharing platform accessible to all partner foundations",
      "Pursue grant applications with major multilateral organisations including UNICEF, USAID, and the Islamic Development Bank",
    ],
    sections: [
      {
        heading: "Target partners & networks",
        listItems: [
          "Diaspora organisations: Somali diaspora networks across Europe, North America, and the Gulf",
          "Faith-based funders: Islamic foundations and zakat institutions aligned with our values",
          "Development agencies: UN agencies, bilateral aid organisations, and development banks",
          "Local civil society: Puntland-based NGOs and community-led organisations on the ground",
        ],
      },
      {
        heading: "Why networking comes first",
        paragraphs: [
          "Before a foundation can deliver programs, it must build trust. Every partnership forged in this initiative is a force multiplier — it brings funding, legitimacy, and reach that no single organisation can build alone. Amal Foundation positions itself not as a lone actor, but as a connector and convenor within the Somali philanthropic ecosystem.",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "amal-hub",
    title: "Technology for Community Development (Youth)",
    subtitle: "Amal Hub — a digital innovation platform for Somali youth",
    icon: "Laptop",
    shortDescription:
      "Amal Hub — digital skills, training, and innovation. Remote-first and diaspora-powered, focused on practical, income-ready skills for Somali youth.",
    fullDescription:
      "The Amal Hub is the Foundation's flagship technology initiative — a purpose-built digital innovation and training platform for Somali youth. It serves as the nerve centre for digital skills, entrepreneurship, and community-driven technology, accessible both locally in Nairobi and to the wider diaspora. Amal Hub operates on a remote-first, diaspora-powered model — bringing world-class instruction and mentorship directly to youth regardless of their location. The platform is practical and income-focused, built around the principle that technology is the most accessible pathway out of unemployment for young Somalis today.",
    targetsHeading: "What participants learn",
    targets: [
      "Freelancing: how to build and market a profile on global platforms and land paying clients remotely",
      "Coding fundamentals: foundational programming skills applicable to web development, data, and automation",
      "Digital marketing: social media strategy, content creation, paid advertising, and analytics",
      "Financial tools: setting up and using Amal Express wallet to receive international payments",
    ],
    sections: [
      {
        heading: "Digital skills bootcamp for Somali youth",
        paragraphs: [
          "An intensive digital skills programme targeting Somali youth, delivered through a structured online curriculum with live instruction, peer learning, and a capstone Demo Day. The bootcamp delivers practical, market-ready skills that translate directly into earning potential from the moment of completion.",
        ],
      },
      {
        heading: "How it is delivered",
        listItems: [
          "Live masterclasses led by Somali diaspora experts and practitioners",
          "Dedicated online community for peer support, resource sharing, and ongoing alumni networking",
          "Weekly assignments and portfolio-building exercises throughout the programme",
          "Top graduates receive a branded Amal Foundation Certificate of Completion",
          "Programme concludes with a Demo Day where participants present projects to diaspora mentors and potential clients",
        ],
      },
      {
        heading: "Why this matters",
        listItems: [
          "Cohort model: the programme is designed to run repeatedly, growing the community with every intake",
          "Alumni network: every graduate becomes a permanent member of the Amal Hub community and talent pool",
          "Scalable foundation: once built, the curriculum repeats and improves at minimal incremental cost",
          "Donor-ready outcomes: measurable results — participants trained, income generated — suitable for international grant reporting",
        ],
      },
      {
        heading: "The Amal Hub difference",
        paragraphs: [
          "Unlike one-off training events, the Amal Hub is a living platform. Every graduate becomes a permanent member of a growing alumni network. Over time this community becomes a talent pool, a referral network, and the foundation of a full-scale digital innovation hub — creating a lasting technology ecosystem for Somali youth.",
          "Amal Hub is not a programme. It is an ecosystem.",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "economic-empowerment",
    title: "Women Economic Empowerment & Financial Inclusion",
    subtitle: "Amal Bank — ethical finance & community empowerment",
    icon: "Landmark",
    shortDescription:
      "Partnering with Amal Bank: Sharia-compliant services, community seminars, and pathways to stable livelihoods — especially for women, single mothers, and youth.",
    fullDescription:
      "Amal Foundation believes that lasting change begins with economic dignity. Partnering with Amal Bank, this initiative brings Sharia-compliant financial services and practical economic education directly into the heart of the Somali community. The focus is simple: give people — especially those who have been left behind — the tools, knowledge, and access to finance they need to build stable, self-sustaining livelihoods. Amal Bank provides ethical, interest-free financing structured around Islamic principles. Through the Foundation's community outreach, these services are made accessible to those who need them most — women, single mothers, and young people who have historically been excluded from formal financial systems.",
    targetsHeading: "Empowering women & single mothers",
    targets: [
      "Access to ethical finance: Sharia-compliant financing through Amal Bank to start or grow a small business without the burden of interest",
      "Business starter support: financing structured around what each individual actually needs — from initial stock to equipment",
      "Financial literacy for women: seminars on budgeting, saving, managing household income, and building financial independence",
      "Peer support circles: community networks for accountability, mentorship, and shared progress",
      "Safe & dignified access: services that are welcoming, culturally appropriate, and free from judgment or barriers",
    ],
    sections: [
      {
        heading: "Empowering youth",
        listItems: [
          "Ethical start-up finance for young entrepreneurs without interest-bearing debt",
          "From skills to livelihood: youth who complete Amal Hub training connected to Amal Bank financing",
          "Entrepreneurship mentorship with experienced Somali business mentors from the diaspora",
          "Opportunity pipeline: community jobs board, supplier network, and pitch events",
        ],
      },
      {
        heading: "Community empowerment seminars",
        paragraphs: [
          "Amal Foundation delivers regular free community seminars open to all. These sessions are the bridge between aspiration and action — equipping community members with the knowledge to access Amal Bank's services and make the most of the opportunities available to them.",
        ],
        listItems: [
          "Understanding Islamic finance: how ethical, Sharia-compliant finance works, who qualifies, and how to access it through Amal Bank",
          "Starting a small business: registration, simple bookkeeping, pricing, and finding your first customers",
          "Digital payments & Amal Express: sending and receiving money domestically and internationally",
          "Savings & financial planning: building a savings habit, managing household income, and planning ahead",
          "Women in business: finance access, marketing, and peer support",
          "Youth entrepreneurship: practical pathways from ideas to income",
        ],
      },
      {
        heading: "Seminar delivery",
        listItems: [
          "Regular public seminars in Nairobi with simultaneous online access for diaspora and regional participants",
          "Sessions led by qualified practitioners — Islamic finance specialists, business consultants, and successful community entrepreneurs",
          "Interactive Q&A and one-on-one consultation slots after every session",
          "All sessions recorded and available on-demand through the Amal Hub digital platform",
          "Certificate of Attendance issued to all participants",
        ],
      },
      {
        heading: "The Amal approach to empowerment",
        paragraphs: [
          "When a woman has access to ethical finance, she builds a business. When she builds a business, she feeds her children, educates them, and lifts her household. When youth have access to the same, they stop waiting and start creating. Amal Foundation, through its partnership with Amal Bank, is committed to making this a reality — not through charity, but through opportunity, knowledge, and dignified access to finance.",
          "Empowerment is not a handout. It is a hand up — structured, dignified, and Sharia-compliant.",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80&auto=format&fit=crop",
  },
];
