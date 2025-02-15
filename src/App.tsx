import './index.css'
import HeroSection from './components/HeroSection'
import TestimonialSection from './components/TestimonialSection'
import BenefitSection from './components/BenefitSection'
import AdvantagesSection from './components/AdvantagesSection'
import ChatTestimonialsSection from './components/ChatTestimonialsSection'
import PricingSection from './components/PricingSection'
import CallToAction from './components/CallToAction'
import { useSubdomain } from './context/SubdomainContext'

function App() {
  const { isLoading } = useSubdomain();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <TestimonialSection />
        <BenefitSection />
        <AdvantagesSection />
        <ChatTestimonialsSection />
        <PricingSection />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
