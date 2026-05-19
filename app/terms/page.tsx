import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { ProsePage } from "@/components/pages/ProsePage";
import { TERMS_CONTENT } from "@/constants/pages";

export const metadata: Metadata = {
  title: "Terms of Romance | Doodle Bouquet",
};

export default function TermsPage() {
  return (
    <SiteChrome>
      <ProsePage
        eyebrow="Legal"
        title={TERMS_CONTENT.title}
        sections={TERMS_CONTENT.sections}
      />
    </SiteChrome>
  );
}
