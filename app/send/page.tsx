import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SendBouquetForm } from "@/components/pages/SendBouquetForm";

export const metadata: Metadata = {
  title: "Send a Bouquet | Doodle Bouquet",
  description: "Compose a glowing bouquet of words and deliver it with love.",
};

export default function SendPage() {
  return (
    <SiteChrome>
      <SendBouquetForm />
    </SiteChrome>
  );
}
