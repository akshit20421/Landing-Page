import Hero from './components/heroSection/Hero'
import "./styles.css"
import Service from "./components/servicesSector/Service"
import Feature from './components/FeatureSection/Feature'
import Slider from './components/slider/Slider'
import Featuring from './components/FeaturingSection2/Featuring'
import Detail from './components/DetailSection/Detail'
import Pricing from './components/PricingSection/Pricing'
import LogoMain from './components/LogoSlider/LogoMain'
import Waitlist from './components/WaitlistSection/Waitlist'
import FooterSection from './components/footerSection/FooterSection'
const App = () => {
  return (
    <>
   <Hero/>
   <Service/>
   <Feature/>
   <Slider/>
   <Featuring/>
   <Detail/>
   <Pricing/>
   <LogoMain/>
    <Waitlist/>
    <FooterSection/>
   </>
  )
}

export default App