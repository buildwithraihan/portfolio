import AceTernityLogo from "@/components/logos/aceternity";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  live: string;
};
const projects: Project[] = [
  {
    id: "growbie",
    category: "Smart Education Platform",
    title: "Growbie",
    src: "/assets/growbie/banner.png",
    screenshots: ["banner.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-6">
            Growbie - Smart Education Platform
          </TypographyP>
          <TypographyP className="font-mono mb-6">
            Growbie is an innovative smart education platform designed to revolutionize 
            the learning experience. Built with modern web technologies, it provides 
            interactive learning modules, progress tracking, and personalized education 
            paths for students of all levels.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono mb-6">
            <li>Interactive learning modules with gamification elements</li>
            <li>Real-time progress tracking and analytics</li>
            <li>Personalized curriculum based on learning pace</li>
            <li>Engaging educational content with multimedia support</li>
            <li>Student and teacher dashboards</li>
            <li>Quiz and assessment system</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js for optimal performance, TypeScript for type safety, 
            and MongoDB for flexible data management. The platform uses modern React 
            patterns and Tailwind CSS for a responsive, beautiful interface.
          </p>
        </div>
      );
    },
  },
  {
    id: "diva",
    category: "Accessibility Technology",
    title: "DIVA",
    src: "/assets/Diva/banner4.png",
    screenshots: ["banner4.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-6">
            DIVA - Hand Sign Gesture Translation Voice for Deaf
          </TypographyP>
          <TypographyP className="font-mono mb-6">
            DIVA is a groundbreaking accessibility application that translates hand sign 
            gestures into voice in real-time, empowering the deaf community to communicate 
            more effectively. Using advanced machine learning and computer vision, DIVA 
            bridges the communication gap and promotes inclusivity.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Core Functionality</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono mb-6">
            <li>Real-time hand gesture recognition using computer vision</li>
            <li>AI-powered sign language interpretation</li>
            <li>Natural text-to-speech conversion</li>
            <li>Support for multiple sign language systems</li>
            <li>Camera-based gesture capture</li>
            <li>Offline mode for basic gestures</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            DIVA empowers the deaf and hard-of-hearing community by providing a seamless 
            way to communicate with those who don&apos;t know sign language. The application 
            uses machine learning models trained on thousands of sign language gestures 
            to provide accurate, real-time translation.
          </p>
        </div>
      );
    },
  },
  {
    id: "artecho",
    category: "E-Commerce Marketplace",
    title: "ArtEcho",
    src: "/assets/artecho/banner3.png",
    screenshots: ["banner3.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-6">
            ArtEcho - Smart Marketplace for Artisans
          </TypographyP>
          <TypographyP className="font-mono mb-6">
            ArtEcho is a dedicated marketplace platform that connects talented artisans 
            with customers worldwide. It provides a beautiful, user-friendly space for 
            artisans to showcase their handcrafted products, manage their shops, and 
            grow their businesses online.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Platform Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono mb-6">
            <li>Customizable artisan storefronts and profiles</li>
            <li>Secure payment processing and order management</li>
            <li>Product catalog with high-quality image galleries</li>
            <li>Customer reviews and ratings system</li>
            <li>Discovery algorithm for unique handcrafted items</li>
            <li>Real-time inventory management</li>
            <li>Messaging system between buyers and sellers</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">For Artisans</TypographyH3>
          <p className="font-mono mb-2">
            ArtEcho empowers artisans to reach a global audience, manage their business 
            efficiently, and focus on what they do best — creating beautiful handcrafted 
            products. The platform handles payments, shipping logistics, and customer 
            communication, making it easy for creators to sell online.
          </p>
        </div>
      );
    },
  },
];
export default projects;
