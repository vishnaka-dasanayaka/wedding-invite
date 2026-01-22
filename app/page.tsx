import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Pricing from "./components/home/Pricing";
import Templates from "./components/home/Templates";
import Testimonials from "./components/home/Testimonials";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Footer from "./components/home/Footer";
import CookieConsent from "./components/home/CookieConsent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Templates />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Footer />
      <CookieConsent />
    </>
  );
}
