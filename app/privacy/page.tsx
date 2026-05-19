import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { ProsePage } from "@/components/pages/ProsePage";
import { PRIVACY_CONTENT } from "@/constants/pages";

export const metadata: Metadata = {
  title: "Privacy Policy | Doodle Bouquet",
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <ProsePage
        eyebrow="Legal"
        title={PRIVACY_CONTENT.title}
        sections={PRIVACY_CONTENT.sections}
      />
    </SiteChrome>
  );
}
