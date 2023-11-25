import AboutCom from "./components/AboutCom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Resume from "./resume/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <AboutCom/>
      <Services/>
      <Resume/>
    </div>
  )
}
