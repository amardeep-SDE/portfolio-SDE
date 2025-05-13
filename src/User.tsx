import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

import consultkiya from "./Components/assets/images/consultkiya.png";
import dawabazar from "./Components/assets/images/dawabazar.png";
import edusmart from "./Components/assets/images/edusmart.png";
import accompanied from "./Components/assets/images/Accompanied.png";
import kyk from "./Components/assets//images/kykbearings.png";
import socialmedia from "./Components/assets/images/socialmedia.png";

const Info = {
  name: "Amardeep Dwivedi",
  stack: [
    "Software Development Engineer",
    "React Developer",
    "MERN Stack Developer",
    "Full Stack Develop",
  ],
  bio: "Software Developer with 2+ years of experience specializing in React and MERN stack development. Skilled in building scalable, high-performance web applications with readable, maintainable, and testable code, ensuring seamless backend integration. Proficient in REST APIs, SQL/NoSQL databases, and optimizing performance using code-splitting, memoization, debounced search, lean coding, MongoDB indexes, aggregation pipelines, and state management libraries for caching. Strong in debugging, troubleshooting, and ensuring smooth application flow. In-depth knowledge of browser internals, browser storage, JS fundamentals, and authentication flows with security best practices.",
};

const ProjectInfo = [
  {
    title: "Accompanied Website",
    desc: "Developed the admin panel and website pages, utilizing the Axios library for CRUD operations and writing media queries to ensure responsiveness. Employed Material UI for a modern design and enhanced user experience.",
    image: accompanied,
    live: true,
    technologies: [
      "React",
      "Material UI",
      "Redux Toolkit",
      "Swagger",
      "Payment Gateways",
      "Axios",
    ],
    link: "https://accompanied.ca/",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
  {
    title: "EduSmart Management",
    desc: "Integrated APIs to perform CRUD operations on a school website. Developed responsive pages using Material UI, Tailwind CSS, Media query and incorporated libraries like Core UI, React Hook Form and react-data-table-component. Utilized Redux Toolkit for state management and learned TypeScript during the project.",
    image: edusmart,
    live: true,
    technologies: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "React Hook Form",
      "Material UI",
      "Zod",
      "Socket.IO",
      "Axios",
    ],
    link: "https://edusmart.encantotech.in/",
    github: "https://github.com/Code-Mars/CodeX",
  },
  {
    title: "ConsultKiya App",
    desc: "I have developed the admin panel for a layered website using React. I utilized the Axios library for API implementation during this project and leveraged the Bootstrap framework and Core UI library for UI development.",
    image: consultkiya,
    live: true,
    technologies: ["React", "Bootstrap", "Core UI", "Axios"],
    link: "https://admin.consultkiya.com/",
    github: "https://github.com/Code-Mars/Ekart/",
  },

  {
    title: "Dawabazar Website",
    desc: "Developed the admin panel for a B2B application focused on selling medicines. Added various functionalities and implemented calculations related to the sale and purchase of medicines. During this project, I utilized the Axios library for API implementation and employed the Bootstrap framework for UI development.",
    image: dawabazar,
    live: true,
    technologies: ["React", "Bootstrap", "Core UI", "Axios"],
    link: "https://admin.dawabajar.com/",
    github: "https://github.com/Code-Mars/Facebook-Clone",
  },

  {
    title: "KYK Bearings Website",
    desc: "Integrated APIs to perform CRUD operations on a school website. Developed responsive pages using Material UI, Tailwind CSS, Media query and incorporated libraries like Core UI, React Hook Form and react-data-table-component. Utilized Redux Toolkit for state management and learned TypeScript during the project.",
    image: kyk,
    live: true,
    technologies: [
      "React",
      "Material UI",
      "Redux Toolkit",
      "Media Query",
      "React Hook Form",
      "Axios",
    ],
    link: "https://kykbrg.in/",
    github: "https://github.com/Code-Mars/Travel-Tracker",
  },

  {
    title: "Social Media Website",
    desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: socialmedia,
    live: true,
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Scoket.IO",
    ],
    link: "https://www.instagram.com/",
    github: "https://github.com/Code-Mars/Instagram-Clone",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "GSAP",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Springboot",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Spring Tool Suite",
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/amardeep-SDE", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/amardeep-dwivedi-b85587255/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/10_amardeep_16/",
    icon: IconBrandInstagram,
  },
  {
    link: "https://www.facebook.com/amardeep.dwivedi.54",
    icon: IconBrandFacebook,
  },
  {
    link: "https://www.youtube.com/@AmardeepDwivedi-f4z",
    icon: IconBrandYoutube,
  },
];

const ExperienceInfo = [
  {
    role: "Associate Software Developer",
    company: "Encnato Technologies Indore",
    date: "April 2023 - Present",
    desc: "Software Developer with 2+ years of experience in React and MERN stack development. Skilled in building scalable, high-performance web apps with clean, maintainable code and seamless backend integration. Proficient in REST APIs, SQL/NoSQL databases, and optimizing performance using code-splitting, memoization, debounced search, and state management with caching. Strong in debugging, troubleshooting, and implementing secure authentication flows. Also experienced with AI tools and project management platforms.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "shadcn/ui",
      "Socket.IO",
      "Zod",
      "MongoDB",
      "Cloudinary",
      "Firebase",
      "Multer",
      "Mailtrap",
      "Express.js",
      "Node.js",
      "GitHub",
      "Jira",
      "Docker",
      "Swagger",
      "Payment Gateways",
    ],
  },
];
const Slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "mongodb",
  "nodedotjs",
  "express",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
