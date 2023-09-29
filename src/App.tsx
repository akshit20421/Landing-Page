import Hero from './components/heroSection/Hero'
import "./styles.css"
import Service from "./components/servicesSector/Service"
import Feature from './components/FeatureSection/Feature'
import Slider from './components/slider/Slider'
import Featuring from './components/FeaturingSection2/Featuring'
import Detail from './components/DetailSection/Detail'
import Pricing from './components/PricingSection/Pricing'
import LogoMain from './components/LogoSlider/LogoMain'
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
   </>
  )
}

export default App