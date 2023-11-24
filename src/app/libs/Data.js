import app from "../../../public/assets/service/app.png";
import web from "../../../public/assets/service/web.png";
import power from "../../../public/assets/service/power.png";
import data from "../../../public/assets/service/data.png";

import { FaBootstrap, FaConnectdevelop, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiGit, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiReact, SiRedux } from "react-icons/si";

import art from '../../../public/assets/projects/art_chain.png';
import biin from '../../../public/assets/projects/biin.png';
import ayal from '../../../public/assets/projects/ayal.png';
import guider from '../../../public/assets/projects/guider.jpg';
import tr from '../../../public/assets/projects/tr.svg';

import agri from '../../../public/assets/media/agri.jpg'
import agri2 from '../../../public/assets/media/agri2.jpg'
import go from '../../../public/assets/media/go.jpg'
import go12 from '../../../public/assets/media/go12.jpg'
import biinpic from '../../../public/assets/media/biin.jpg'
import workshop from '../../../public/assets/media/workshop.jpg'
import iboss from '../../../public/assets/media/iboss.jpg'
import ict from '../../../public/assets/media/ict.jpg'


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
    id: 1,
    name: 'HTML',
    icon: <FaHtml5 />
  },
  {
    id: 2,
    name: 'CSS',
    icon: <FaCss3 />
  },
  {
    id: 3,
    name: 'Bootstrap',
    icon: <FaBootstrap />
  },
  {
    id: 4,
    name: 'Javascript',
    icon: <RiJavascriptFill />
  },
  {
    id: 5,
    name: 'TailwindCSS',
    icon: <BiLogoTailwindCss />
  },
  {
    id: 6,
    name: 'React Js',
    icon: <FaReact />
  },
  {
    id: 7,
    name: 'Next Js',
    icon: <SiNextdotjs />
  },
  {
    id: 7,
    name: 'Node Js',
    icon: <FaNodeJs />
  },
  {
    id: 8,
    name: 'Express Js',
    icon: <SiExpress />
  },
  {
    id: 9,
    name: 'MongoDB',
    icon: <SiMongodb />
  },
  {
    id: 10,
    name: 'MySQL',
    icon: <SiMysql />
  },
  {
    id: 11,
    name: 'React Native',
    icon: <SiReact />
  },
  {
    id: 12,
    name: 'Git',
    icon: <SiGit />
  },
  {
    id: 13,
    name: 'Python',
    icon: <SiPython />
  },
  {
    id: 14,
    name: 'Redux',
    icon: <SiRedux />
  },
  {
    id: 15,
    name: 'Machine Learning',
    icon: <FaConnectdevelop />
  },
]

const webs = [
  {
    id: 1,
    photo: art,
    title:'ArtChain',
    tecnology: ['React', 'TailwindCSS', 'Solidity', 'daiyui', 'Etherjs'],
    live: 'https://artchain0x00.netlify.app/',
    code: 'https://github.com/Rajaul2810/art-chain-0x00',
    description: 'ArtChain is a revolutionary platform that empowers creators to establish decentralized communities centered around specific art genres, such as portrait, photography, and painting. Operating as a Decentralized Autonomous Organization (DAO), ArtChain ensures a community-driven approach, free from centralized control.',
  },
  {
    id: 2,
    photo:biin,
    title:'BIIN',
    tecnology: ['NextJs', 'TailwindCSS', 'daiyUI'],
    live: 'https://www.biin.network/',
    code: 'https://github.com/Rajaul2810/biin',
    description: 'Bangladesh ICT & Innovation Network (BIIN) is an exemplary organization that stands as a beacon of hope for the youth of Bangladesh. By providing skill development, fostering innovation, and promoting entrepreneurship. BIIN is empowering the young generation to lead the way toward a digitally inclusive and prosperous future',
  },
  {
    id: 3,
    photo:ayal,
    title:'AyAl Corp Limited',
    tecnology: ['NextJs', 'TailwindCSS'],
    live: 'https://ayal.vercel.app/',
    code: 'https://github.com/Rajaul2810/ayal',
    description: 'AyAl Corp was founded in 2010 with the goal of providing IT-enabled services to the local clients. After a few initial projects, it invested in a startup offering innovative services to mobile phone users incorporating artificial intelligence technology and also salesforce monitoring system.',
  }
]

const apps = [
  {
    id: 1,
    photo: guider,
    title:'Guider App',
    tecnology: ['React Native', 'CSS', 'Node Js', 'Express Js', 'MongoDB'],
    live: 'https://www.youtube.com/watch?v=RKjHteC_3oM',
    code: 'https://github.com/Rajaul2810/guider',
    description: 'Guider App digital online Education, Motivation, Guidance and Communication system. User can booked any expert and talk to each other by video call. Expert people can create their profile. Expert people can arrenged any seminor.',
  },
  {
    id: 2,
    photo: tr,
    title:'E-tornament App',
    tecnology: ['React Native', 'CSS', 'Node Js', 'Express Js', 'MongoDB'],
    live: 'https://youtu.be/luk0_2wiz7Y',
    code: 'https://github.com/Rajaul2810/pubg-tornament',
    description: 'E-tornament App is a online tornament booking app. Admin can arrenged diffrent game tornament. Gamer can booked any tornament.',
  },
]

const media = [agri,go12,agri2,biinpic,iboss,workshop,go,ict]

export { serviceData, participations, awards, skills,webs,apps,media };