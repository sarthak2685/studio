import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Son-et-lumière, laser & water, museums, events and façade lighting by Magical Theatre.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesExplorer />
    </PageTransition>
  );
}
