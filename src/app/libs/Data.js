import app from "../../../public/assets/service/app.png";
import web from "../../../public/assets/service/web.png";
import power from "../../../public/assets/service/power.png";
import data from "../../../public/assets/service/data.png";

import { FaBootstrap, FaConnectdevelop, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiGit, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiReact, SiRedux } from "react-icons/si";


const serviceData = [
  {
    id: 1,
    name: "Web Development",
    icon: web,
    des1: "User Friendly UI",
    des2: "Responsive Web Design",
    des3: "Full Stack Development",
    des4: "Focus High Performance",
    des5: "Creative Development",
    des6: "Testing and Debugging",
  },
  {
    id: 2,
    name: "App Development",
    icon: app,
    des1: "User Friendly App UI",
    des2: "Responsive App Design",
    des3: "Platform Independent",
    des4: "Full Stack Development",
    des5: "Focus High Performance",
    des6: "Testing & Clean Coding",
  },
  {
    id: 1,
    name: "Data Analysis",
    icon: data,
    des1: "Data Preprocessing",
    des2: "Data Visualization",
    des3: "Predictive Modeling ",
    des6: "Clustering & Mining",
    des4: "Focus High Performance",
    des5: "Bussiness Analysis",
  },
  {
    id: 1,
    name: "Animated Powerpoint",
    icon: power,
    des1: "Animated Slide",
    des2: "Pitch Deck Design",
    des3: "Custom Template",
    des4: "Business Presentaion",
    des5: "Creative Slide",
    des6: "Educational Presentation",
  },
];


const participations = [
  {
    id: 0,
    name: 'Cefalo Presents ITverse Hackathon 2023.'
  },
  {
    id: 1,
    name: 'Mjib100 idea Contest 2021.',
  },
  {
    id: 2,
    name: 'Code Samurai Hackathon 2022.',
  },
  {
    id: 3,
    name: 'Affine Blockchain Hackathon 2022.',
  },
  {
    id: 4,
    name: 'BUET CSE FEST 2022.',
  },
  {
    id: 5,
    name: 'Hult Prize at Jagannath University.',
  },
  {
    id: 6,
    name: 'NACTAR ROBOTICS OLYMPIAD 2022.',
  },
  {
    id: 7,
    name: 'RUET CSE FEST 2022.',
  },
  {
    id: 8,
    name: 'Apps Showcasing Competition, JnU IT Society.',
  },
  {
    id: 9,
    name: 'NASA International Space Apps Challange 2021.',
  },
  {
    id: 10,
    name: 'EWU National Science Carnival 1.0',
  },
]

const awards = [
  {
    id: 0,
    name: 'University Project Showcase Competition JnU',
    category: 'Champion'
  },
  {
    id: 1,
    name: 'Mjib100 idea Contest 2021.',
    category: 'Top 30'
  },
  {
    id: 2,
    name: 'Hult Prize at Jagannath University 2022.',
    category: '1st Runner Up'
  },
  {
    id: 3,
    name: 'EWU National Science Carnival 1.0',
    category: '2st Runner Up, Project Showcasing'
  },
  {
    id: 4,
    name: 'RUET CSE FEST 2022.',
    category: '1st Runner Up, Software Showcasing'
  },
  {
    id: 5,
    name: 'RUET CSE FEST 2022.',
    category: '2st Runner Up, Idea Competition'
  },
  {
    id: 6,
    name: 'NACTAR ROBOTICS OLYMPIAD 2022.',
    category: '1st Runner Up, Project Showcasing (Senior)'
  },
  {
    id: 7,
    name: 'Code Samurai Hackathon 2022.',
  },
  {
    id: 8,
    name: 'Affine Blockchain Hackathon 2022.',
  },
  {
    id: 9,
    name: 'BUET CSE FEST 2022.',
  },
  {
    id: 10,
    name: 'Apps Showcasing Competition, JnU IT Society.',
  },
  {
    id: 11,
    name: 'NASA International Space Apps Challange 2021.',
  },
  {
    id: 12,
    name: 'Cefalo Presents ITverse Hackathon 2023.'
  },

]

const skills = [
  {
    id:1,
    name:'HTML',
    icon:<FaHtml5/>
  },
  {
    id:2,
    name:'CSS',
    icon:<FaCss3/>
  },
  {
    id:3,
    name:'Bootstrap',
    icon:<FaBootstrap/>
  },
  {
    id:4,
    name:'Javascript',
    icon:<RiJavascriptFill />
  },
  {
    id:5,
    name:'TailwindCSS',
    icon:<BiLogoTailwindCss />
  },
  {
    id:6,
    name:'React Js',
    icon:<FaReact/>
  },
  {
    id:7,
    name:'Next Js',
    icon:<SiNextdotjs />
  },
  {
    id:7,
    name:'Node Js',
    icon:<FaNodeJs />
  },
  {
    id:8,
    name:'Express Js',
    icon:<SiExpress />
  },
  {
    id:9,
    name:'MongoDB',
    icon:<SiMongodb />
  },
  {
    id:10,
    name:'MySQL',
    icon:<SiMysql />
  },
  {
    id:11,
    name:'React Native',
    icon:<SiReact />
  },
  {
    id:12,
    name:'Git',
    icon:<SiGit />
  },
  {
    id:13,
    name:'Python',
    icon:<SiPython />
  },
  {
    id:14,
    name:'Redux',
    icon:<SiRedux />
  },
  {
    id:15,
    name:'Machine Learning',
    icon:<FaConnectdevelop />
  },
]

export { serviceData, participations, awards,skills };