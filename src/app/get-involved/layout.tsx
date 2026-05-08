import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Get Involved — Donate, Volunteer & Partner with Amal Foundation",
  description:
    "Support Amal Foundation through direct donations (Zakat, Sadaqa, Waqf), volunteering in Somalia, or strategic partnerships with NGOs and corporations.",
  path: "/get-involved",
  keywords: [
    "donate Somalia",
    "volunteer Somalia NGO",
    "zakat Somalia",
    "sadaqa Somalia",
    "waqf donation",
    "Somalia partnership NGO",
  ],
});

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
