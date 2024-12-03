import React from "react";
import "./Skills.css";

// Skills Data
const reviews = [
  {
    name: "Markup and Styling",
    username: "@markupstyling",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    skills: [
      { name: "HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    ],
  },
  {
    name: "Frameworks",
    username: "@frameworks",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", // Express.js logo
    skills: [
      { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg" },
    
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
  {
    name: "Programming Languages",
    username: "@programming",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    skills: [
      { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg" },
      { name: "Core Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/java.svg" },
    ],
  }
,  
  {
    name: "Libraries",
    username: "@libraries",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    skills: [
      { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Redux Toolkit", icon: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
      { name: "Context API", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Material UI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/materialui.svg" }

    ],
  },
  {
    name: "Database and Cloud",
    username: "@databasecloud",
    img: "https://www.mongodb.com/favicon.ico",  // MongoDB image
    skills: [
      { name: "MongoDB", icon: "https://www.mongodb.com/favicon.ico" },  // MongoDB icon
      { name: "Cloudinary", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Cloudinary_logo_blue_0720.png" },  // Cloudinary icon
    ],
  }
,  
  {
  name: "Technologies",
  username: "@technologies",
  img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  skills: [
    { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/docker.svg" },
  ],
}

  // {
  //   name: "Management Tools",
  //   username: "@managementtools",
  //   img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg",
  //   skills: [
  //     { name: "Jira Software", icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg" },
  //     { name: "Agile Methodology", icon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Scrum_Guide_Icon.png" },
  //   ],
  // },
];

// Single Review Card Component
const ReviewCard = ({ img, name, skills }: { img: string; name: string; skills: { name: string; icon: string }[] }) => {
  return (
    <figure className="relative w-72 cursor-pointer overflow-hidden rounded-xl p-6 #112240 via-gray-200 to-gray-100 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 mx-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img className="object-cover w-full h-full" alt={name} src={img} />
        </div>
        <figcaption className="text-lg font-bold text-white text-center">{name}</figcaption>

        {/* Marquee effect container */}
        <div className="skills-marquee-container w-full h-24 overflow-hidden">
          <div className="skills-marquee">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all text-white text-sm hover:bg-gray-800 hover:text-gray-200" 
              >
                <img className="w-6 h-6" src={skill.icon} alt={skill.name} />
                <span className="font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};



// Skills Component
const Skills = () => {
  return (
    <div className="px-8 my-16 font-mono" id="Skills">
      <h1 className="text-4xl mb-10 font-bold text-center text-white">Skills</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
