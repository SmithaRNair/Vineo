
import { HeroSection } from "../molecules/HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import BottleGlass from "./BottleGlass";
import SubscriptionSection from "./SubscriptionSection";
import FaqSection from "./FaqSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <BottleGlass />
      <SubscriptionSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};
