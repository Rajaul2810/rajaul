import AboutCom from "./components/AboutCom";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="pb-14 md:pb-0">
      <Hero/>
      <AboutCom/>
      <Services/>
    </div>
  )
}
