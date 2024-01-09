import LandingHeader from "@/components/landingPage/LandingHeader";
import HomeTestimonial from "@/components/landingPage/homeTestimonial";
import LandingFooter from "@/components/landingPage/landingFooter";
import HomeHero from "@/components/landingPage/landingHero";

export default function page() {
  return (
    <div>
      <LandingHeader />
      <HomeHero />
      <HomeTestimonial />
      <LandingFooter />
    </div>
  );
}
