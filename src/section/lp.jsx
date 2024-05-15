import Hero from "./hero.jsx";
import New from "./new.jsx";
import Gsap from "./gsaphero.jsx"
import GsapHero from "./gsaphero.jsx";
import Aboutme from "../component/aboutme.jsx";
import Kindly from "../component/kindly.jsx"
import Check from "../component/Check.jsx"
import Portofolio from "../component/porto.jsx"
import Hiring from "../component/hiring.jsx"
function LandingPage(){
    return(
        <>
            {/* <Hero /> */}
            <New /> 
            <Hiring /> 
            <Aboutme/>
            <Kindly/>
            <Check/>
            <Portofolio/>
            <Hero/>
            {/* <Kindly/> */}
            {/* <Check/>
            <Portofolio/> */}
            {/* <About /> */}
            {/* <GsapHero /> */}
            {/* <Hero /> */}

            
            
        </>
    )
}
export default LandingPage