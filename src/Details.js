// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/Projectfile1.JPG";
import projectImage2 from "./assets/projects/Projectfile2.JPG";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mohammad Irfan",
  tagline: "I build things for web",
  img: profile,
  about: `Full Stack Developer offering advanced knowledge of Javascript, Java , C++ & ReactJS, as well as extensive experience with Modern web development
  Frameworks and Libraries. Dynamic Developer skilled at developing complex solutions possessing strong creative thinking skills, problem solving
  ability and integrity. Passionate about coding and enjoying my work.
  `,
};

// Social Media URLs 
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mohammad-irfan-93a38212b/",
  github: "https://github.com/Irfan918",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Work Experience 
export const workDetails = [
  {
    Position: "Web Develoment Trainee",
    Company: `AlmaBetter`,
    Location: "Bengaluru (Remote)",
    Type: "Full Time",
    Duration: "June 2022 - July 2023",
  },
  
  {
    Position: "Shopify Website Developer",
    Company: `Jaguro Sports India Pvt. Ltd.`,
    Location: "Jaipur",
    Type: "Full Time",
    Duration: "Aug 2021 - Sept 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  
  {    
    Position: "Master's of Computer Application",
    Company: `Shankara Insitute of technology`,
    Location: "Jaipur",
    Type: "Full Time",
    Duration: "Aug 2019 - July 2021",
  },
  {    
    Position: "Bachelor of Computer Application",
    Company: `S.S.G. Pareek pg College`,
    Location: "Jaipur",
    Type: "Full Time",
    Duration: "Aug 2016 - July 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "FlashCard - Generator",
    image: projectImage1,
    description: `This app generates flashcards based on the given input on Create New page. The User then can browse through the various flashcard groups they have created, And they can view/share/download Flashcards from its respective page.`,
    techstack: ": React.js , react-Redux , TailwindCSS , Formik , Frontend",
    previewLink: "https://irfan918.github.io/Flashcard-Generator-Capstone-Project/",
    githubLink: "https://github.com/Irfan918/Flashcard-Generator-Capstone-Project",
  },
  {
    title: "Get-Youtube-Subscribers",
    image: projectImage2,
    description: `Designed and developed a REST API that performs the GET method. Two operations were performed: Fetching a list of all the dummy data, Fetching a particular dummy
    data based on the given ID from the Youtube Subscribers list.`,
    techstack: "ExpressJS , mongoDb , NodeJS , Postman ,HTTP requests",
    previewLink: "https://cute-gold-turtle-ring.cyclic.app/",
    githubLink: "https://github.com/Irfan918/Youtube-Subscribers-Capstone-Project",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "irfan991899@gmail.com",
  phone: "+91 79760 47631",
};
