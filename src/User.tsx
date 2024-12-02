import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

import img from "./Components/assets/images/Ekart.png";

const Info = {
  name: "Amardeep Dwivedi",
  stack: ["Software Engineer", "Full Stack Developer"],
  bio: "Software Development Engineer with over a year of experience in building responsive web applications using React JS. Specializing in front-end development, I have a working knowledge of the MERN stack (MongoDB, Express.js, React, Node.js) and can effectively contribute as a fresher in MERN projects.",
};

const ProjectInfo = [
  {
    title: "Consult Kiya",
    desc: "I have developed the admin panel for a layered website using React. I utilized the Axios library for API implementation during this project and leveraged the Bootstrap framework and Core UI library for UI development.",
    image: img,
    live: true,
    technologies: ["React", "Bootstrap", "Core UI", "Axios"],
    link: "https://code-mars.github.io/Ekart/",
    github: "https://github.com/Code-Mars/Ekart/",
  },
  {
    title: "Dawabazar",
    desc: "Developed the admin panel for a B2B application focused on selling medicines. Added various functionalities and implemented calculations related to the sale and purchase of medicines. During this project, I utilized the Axios library for API implementation and employed the Bootstrap framework for UI development.",
    image: img,
    live: false,
    technologies: ["React", "Bootstrap", "Core UI", "Axios"],
    link: "https://github.com/Code-Mars/Facebook-Clone",
    github: "https://github.com/Code-Mars/Facebook-Clone",
  },
  {
    title: "Accompanied",
    desc: "Developed the admin panel and website pages, utilizing the Axios library for CRUD operations and writing media queries to ensure responsiveness. Employed Material UI for a modern design and enhanced user experience.",
    image: img,
    live: false,
    technologies: [
      "React",
      "Material UI",
      "Redux Toolkit",
      "Swagger",
      "Payment Gateways",
      "Axios",
    ],
    link: "https://github.com/Code-Mars/Spotify-Clone",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
  {
    title: "KYK Bearings",
    desc: "Integrated APIs to perform CRUD operations on a school website. Developed responsive pages using Material UI, Tailwind CSS, Media query and incorporated libraries like Core UI, React Hook Form and react-data-table-component. Utilized Redux Toolkit for state management and learned TypeScript during the project.",
    image: img,
    live: false,
    technologies: [
      "React",
      "Material UI",
      "Redux Toolkit",
      "Media Query",
      "React Hook Form",
      "Axios",
    ],
    link: "https://github.com/Code-Mars/Travel-Tracker",
    github: "https://github.com/Code-Mars/Travel-Tracker",
  },

  {
    title: "EduSmart",
    desc: "Integrated APIs to perform CRUD operations on a school website. Developed responsive pages using Material UI, Tailwind CSS, Media query and incorporated libraries like Core UI, React Hook Form and react-data-table-component. Utilized Redux Toolkit for state management and learned TypeScript during the project.",
    image: img,
    live: false,
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
    link: "https://github.com/Code-Mars/CodeX",
    github: "https://github.com/Code-Mars/CodeX",
  },
  {
    title: "Instagram Clone",
    desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: img,
    live: false,
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Scoket.IO",
    ],
    link: "https://github.com/Code-Mars/Instagram-Clone",
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
  { link: "https://www.facebook.com/amardeep.dwivedi.54", icon: IconBrandFacebook },
  {
    link: "https://www.youtube.com/@AmardeepDwivedi-f4z",
    icon: IconBrandYoutube,
  },
  
];

const ExperienceInfo = [
  {
    role: "Associate Software Developer",
    company: "Encnato Technologies",
    date: "Aug 2023 - Present",
    desc: "Software Development Engineer with over a year of experience in building responsive web applications using React JS. Specializing in front-end development, I have a working knowledge of the MERN stack (MongoDB, Express.js, React, Node.js) and can effectively contribute as a fresher in MERN projects.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Material UI",
      "Tailwind CSS",
      "Redux Toolkit",
      "Socket.IO",
      "MongoDB",
      "Express.js",
      "Node.js",
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
