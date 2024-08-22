import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import wellbotImg from "@/public/wellbot.png";
import commandlineImg from "@/public/commandLine.png";
import sustainablerecipesImg from "@/public/sustainableRecipes.png";
import arceaPhantasyImg from "@/public/arceaPhantasy.png";
import wclinicsImg from "@/public/wclinics.png";
import VanMLImg from "@/public/VanML.jpg";
import relationshipHappinessImg from "@/public/relationshipHappiness.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma - Computer Systems Technology",
    location: "BCIT | Vancouver, BC",
    description:
      "I'm a student at BCIT studying Computer Systems Technology. I'm learning about software development, databases, networking and more.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2023 - present",
  },
  {
    title: "Online Data Analyst",
    location: "Telus Internationals AI Data Solutions | Vancouver, BC",
    description:
      "I validated data for live online search tools, improved data quality through research, and collaborated with teams to maintain and enhance data integrity standards",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Bachelor of Science - Health Sciences, Concentration in Life Sciences",
    location: "Simon Fraser University | Burnaby, BC",
    description:
      "I graduated from Simon Fraser University with a Bachelor of Science in Health Sciences. I learned about human biology, health promotion and disease prevention.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2016 - Apr 2022",
  },
  {
    title: "COVID Serology Student",
    location: "BC Centre for Disease Control | Vancouver, BC",
    description:
      "I conducted serological tests to detect COVID-19 antibodies, collected data, and organized plasma/serum samples in a database.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan - Apr 2021",
  },
  {
    title: "Team Member/Researcher",
    location: "Pivot 2020 | Canada",
    description:
      "I contributed to Pivot 2020 by gathering and analyzing data on Canadian cities to help develop a youth-focused data hub",
    icon: React.createElement(CgWorkAlt),
    date: "Oct - Dec 2020",
  },
  {
    title: "Sales Associate",
    location: "Yokoyaya | Vancouver, BC",
    description:
      "I engaged with a diverse range of customers to enhance client relations, collaborated with coworkers to resolve issues, and meticulously organized products according to operating procedures.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2017 - May 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Wellbot - Fitness web application",
    description:
      "I collaborated with a team to develop features for generating and customizing workouts, and tracking macros, to enhance fitness tracking accuracy.",
    tags: ["EJS", "CSS", "MongoDB", "JavaScript", "Git", "Bootstrap"],
    imageUrl: wellbotImg,
  },
  {
    title: "UsingCommandLine",
    description:
      "I created a website that provides a comprehensive guide on how to use the command line, including basic commands, file management, and more.",
    tags: ["MkDocs", "Markdown", "Git", "Command Line"],
    imageUrl: commandlineImg,
  },
  {
    title: "Sustainable Recipes",
    description:
      " I worked in a team of 4 to build web app that generates recipes based on ingredients you have at home using API.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"],
    imageUrl: sustainablerecipesImg,
  },
  {
    title: "Arcea Phantasy - Python Game Program",
    description:
      "I developed a text-based RPG game using Python, where players can explore a fantasy world, battle monsters, use skills, and level up.",
    tags: ["Python"],
    imageUrl: arceaPhantasyImg,
  },
  {
    title: "W-Clinics Health Web Application",
    description:
      "I collaborated with a team to develop a web application that allows users to book appointments, view their medical history, and find nearby walk-in clinics.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Git", "Bootstrap"],
    imageUrl: wclinicsImg,
  },
  {
    title: "VanML Data Science Hackathon",
    description:
      "At the VanML Data Science Hackathon 2023, I analyzed 211 BC Helpline call data pre- and post-COVID-19, developed a correlation graph in R to explore links with COVID-19 cases, and presented insights with recommendations for future crisis planning.",
    tags: ["R", "Python", "Git"],
    imageUrl: VanMLImg,
  },
  {
    title: "Pathway Analysis: Relationship Status Impact on Happiness",
    description: 
      "I conducted mediation analysis in R to explore the link between relationship status and happiness during COVID-19, and presented the findings at the Canadian Human Connection conference, emphasizing strategies for enhancing happiness during the pandemic",
    tags: ["R"],
    imageUrl: relationshipHappinessImg,
  },
  
] as const; 

export const skillsData = [
  "HTML",
  "EJS",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Firebase",
  "SQL",
  "Jupyter",
  "R",
  "C",
  "Express",
  "Python",
  "Java",
  "Framer Motion",
  "MkDocs",
  "Markdown",
  "Command Line",
] as const;