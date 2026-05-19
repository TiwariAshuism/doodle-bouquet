import { MotionLayer } from "@/components/effects/MotionLayer";
import { Footer } from "@/components/layout/Footer";
import { TopNav } from "@/components/layout/TopNav";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <MotionLayer />
      <TopNav />
      <div className="relative z-10 pt-20">{children}</div>
      <Footer />
    </>
  );
}
