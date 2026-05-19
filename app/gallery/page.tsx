import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { GalleryGrid } from "@/components/pages/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Doodle Bouquet",
  description: "A collection of glowing bouquets and romantic sketches.",
};

export default function GalleryPage() {
  return (
    <SiteChrome>
      <GalleryGrid />
    </SiteChrome>
  );
}
