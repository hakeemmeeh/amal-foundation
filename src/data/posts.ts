export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tag: string;
  image: string;
};

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Community Upliftment in Garowe: A New Chapter",
    excerpt:
      "Our recent mission to Garowe has successfully launched the first phase of our community development project, focusing on clean water and local markets.",
    content: `Our recent mission to Garowe has successfully launched the first phase of our community development project. Focusing on local empowerment and clean water access, the Amal Foundation is working directly with local leaders to ensure sustainable progress.

      This initiative is part of our broader 2025 roadmap to reach every region of Somalia with targeted humanitarian aid. Our team on the ground has already identified key infrastructure needs that will be addressed in the coming months.`,
    date: "August 15, 2025",
    author: "Foundation Field Team",
    tag: "Development",
    image:
      "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Empowering Somali Students Through Digital Literacy",
    excerpt:
      "Technical education is the backbone of future growth. Read how our new computer lab in Mogadishu is changing lives for over 200 youths.",
    content: `Technical education is the backbone of future growth in Somalia. The Amal Foundation is proud to announce the opening of our newest computer lab in Mogadishu, providing critical digital skills to over 200 students.

      By equipping the youth with technology and modern pedagogical tools, we are not just educating individuals; we are building the foundation of a digital economy. Our scholarships and vocational training programs continue to expand, ensuring that no student is left behind due to financial barriers.`,
    date: "July 22, 2025",
    author: "Amal Foundation Team",
    tag: "Education",
    image: "/images/about/school.png",
  },
  {
    id: "3",
    title: "Healthcare on Wheels: The Impact of Our Mobile Clinics",
    excerpt:
      "In remote areas, healthcare is a luxury. Our mobile ambulance units are bringing critical medical aid to mothers and children across the rural regions.",
    content: `In remote areas of Somalia, healthcare is often a luxury. Our mobile ambulance units and roaming medical clinics are changing this reality. This month alone, we have provided critical medical aid to over 1,500 mothers and children in rural provinces.

      The Amal Foundation's healthcare initiative focuses on preventative care, maternal health, and emergency response. We are working closely with local health authorities to integrate our mobile units into the national health network for maximum reach and effectiveness.`,
    date: "July 10, 2025",
    author: "Medical Outreach Team",
    tag: "Healthcare",
    image: "/images/about/health.png",
  },
];
