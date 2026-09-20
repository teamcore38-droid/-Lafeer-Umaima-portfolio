/**
 * All the content of the portfolio lives in this one file.
 * Edit the text here and the whole site updates. Search for "TODO" to see what still needs your input.
 */

export const site = {
  name: "Mohamed Lafeer Umaima",
  shortName: "Umaima",
  title: "Umaima Lafeer | Software developer and designer",
  role: "Software developer and designer",
  tagline:
    "I build web and Android apps, prototype AI ideas with my team, and design in Adobe Photoshop, Illustrator and InDesign.",
  description:
    "Portfolio of Mohamed Lafeer Umaima, a software engineering undergraduate and graphic designer from Sri Lanka. Web and Android apps, an AI elephant-detection prototype, and design work.",
  location: "Sri Lanka",

  // TODO: your site address once it is published, for example "https://your-username.github.io".
  // It is used for the link preview image when the site is shared. Leave it empty until then.
  url: "",

  email: "mohamedumaima119@gmail.com",
  linkedin: "https://www.linkedin.com/in/umaima-lafeer-05b955252",

  github: "https://github.com/teamcore38-droid/-Lafeer-Umaima-portfolio",

  // Optional: create a free form at formspree.io and paste its id (the end of the form URL) here
  // to show a contact form. Empty hides the form and shows email and LinkedIn only.
  formspreeId: "",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "Python",
  "Java",
  "Kotlin",
  "PHP",
  "JavaScript",
  "React",
  "Node.js",
  "MySQL",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "jQuery",
  "AJAX",
  "Android Studio",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Microsoft Office",
];

export const services = [
  {
    title: "Web development",
    items: [
      "Websites and web systems with HTML, CSS, JavaScript and PHP",
      "Interfaces with React and Bootstrap",
      "Node.js and MySQL back ends",
    ],
  },
  {
    title: "Mobile development",
    items: [
      "Android apps written in Kotlin",
      "Built and tested in Android Studio",
    ],
  },
  {
    title: "AI prototypes",
    items: [
      "Python pipelines for audio and data",
      "Hugging Face models, used in a team project",
      "Hackathon and buildathon experience",
    ],
  },
  {
    title: "Graphic design",
    items: [
      "Adobe Photoshop, Illustrator and InDesign",
      "Diploma in Graphic Design, CeyLearn Academy",
    ],
  },
];

export type Project = {
  title: string;
  badge: string;
  summary: string;
  /** Optional ordered steps that explain how the project works. */
  steps?: string[];
  stack: string[];
  /** Optional line about your own part in a team project. */
  role?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  /** Optional screenshot. Put the file in public/projects/ and use a path like "/projects/food-nest.png". */
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "Seismic AI: elephant movement detector",
    badge: "Team project, AI Challenge Sri Lanka 2026",
    featured: true,
    summary:
      "Wild elephants entering villages and farms is a long-running problem in Sri Lanka's dry zone. This prototype listens for the ground vibrations elephants make and flags movement early, so it does not depend on cameras or line of sight. Built with a team of four for the AI Challenge Sri Lanka 2026 Buildathon.",
    steps: [
      "Convert vibration spectrogram data into audio a model can read.",
      "Classify the audio with a Hugging Face Audio Spectrogram Transformer.",
      "Combine the model's labels with low-frequency vibration energy to score how likely it is to be an elephant.",
      "Group nearby detections into critical zones on a live map dashboard.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Hugging Face Transformers",
      "Leaflet",
      "Docker",
    ],
    // TODO: add one sentence about your own part in the team, for example
    // role: "I worked on ...",
    role: undefined,
    // TODO: paste the link to your GitHub repository, for example "https://github.com/your-username/AI-Challenge"
    github: "",
    demo: "",
  },
  {
    title: "Food Nest",
    badge: "Android app",
    summary:
      "A mobile app for ordering food, built with Kotlin in Android Studio.",
    stack: ["Kotlin", "Android Studio"],
    // TODO: add a screenshot of the app: put it in public/projects/ and set, for example,
    // image: "/projects/food-nest.png",
    // imageAlt: "The Food Nest home screen",
    // TODO: once you push Food Nest to GitHub, paste the repository link here
    github: "",
    demo: "",
  },
];

export const experience = [
  {
    when: "2026",
    title: "Documentation Coordinator",
    where: "Thelivu Consultation (Pvt) Ltd, full time",
  },
  {
    when: "2025",
    title: "IT Academic Coordinator",
    where: "CeyLearn Academy, full time",
  },
  {
    when: "2023 to present",
    title: "Software Engineer Intern",
    where: "Freelance",
  },
];

export const education = [
  {
    title: "Software Engineering (undergraduate)",
    where: "British Institute of Engineering Technology (BIET)",
  },
  {
    title: "Diploma in Software Engineering",
    where: "Wayamba University of Sri Lanka",
  },
  { title: "Diploma in Graphic Design", where: "CeyLearn Academy" },
  { title: "Diploma in Cyber Security", where: "Alison" },
  {
    title: "G.C.E. Advanced Level",
    where: "Al-Manar National School, Handessa",
  },
];

export const extras =
  "Also: Diploma in English and a certificate in MS Office packages. Languages: English, Sinhala and Tamil.";
