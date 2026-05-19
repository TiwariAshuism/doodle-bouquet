import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Heart | Doodle Bouquet",
};

export default function ContactRoute() {
  return (
    <SiteChrome>
      <ContactPage />
    </SiteChrome>
  );
}
