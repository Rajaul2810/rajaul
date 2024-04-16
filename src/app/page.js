
import dynamic from "next/dynamic";
import About from "./about/page";
import Contact from "./contact/page";
import { ProjectCom } from "./components/ProjectCom";
// import AboutCom from "./components/AboutCom";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Resume from "./resume/page";

const Hero = dynamic(()=> import('./components/Hero'))
// const AboutCom = dynamic(()=> import('./components/AboutCom'), {
//   loading: () => <p>Loading...</p>,
// })
const Services= dynamic(()=> import('./components/Services'), {
  loading: () => <p>Loading...</p>,
})
const Resume = dynamic(()=> import('./resume/page'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Services/>
      <ProjectCom/>
      <Resume/>
      <Contact/>
    </div>
  )
}
