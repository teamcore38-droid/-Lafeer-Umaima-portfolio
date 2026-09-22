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
  { label: "Designs", href: "#designs" },
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

export type GraphicDesign = {
  id: string;
  title: string;
  subtitle: string;
  category: "Brand Logos" | "Merchandise & Print";
  badge: string;
  client: string;
  year: string;
  summary: string;
  concept: string;
  deliverables: string[];
  tools: string[];
  colorPalette: { name: string; hex: string }[];
  primaryImage: string;
  altText: string;
  gallery?: {
    image: string;
    caption: string;
    label: string;
  }[];
  accentGlow: string;
};

export const graphicDesigns: GraphicDesign[] = [
  {
    id: "cake-oclock",
    title: "Cake o' clock",
    subtitle: "3D Metallic Luxury Emblem & Identity",
    category: "Brand Logos",
    badge: "3D Emblem Logo",
    client: "Artisan Patisserie & Bakery",
    year: "2025",
    summary:
      "A high-end 3D metallic gold insignia designed for a gourmet bakery and patisserie. The visual mark ingeniously combines a minimalist clock dial motif with a cutout that reveals an appetizing slice of cake.",
    concept:
      "The concept plays on the double entendre of celebrating anytime as 'cake o\\'clock'. The circular dial is formed by golden hour markers that double as pastry portions. Rendered with realistic embossed reflective gold lighting over a dark matte carbon-weave backdrop, accompanied by flowing bespoke calligraphy and a mini pie icon, delivering an aura of luxury and celebration.",
    deliverables: [
      "Vector Master Emblem (.AI / .SVG)",
      "High-Resolution 3D Embossed Render",
      "Bespoke Script Typography Lockup",
      "Social Media & Packaging Badges",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "3D Emboss & Lighting",
      "Bespoke Typography",
    ],
    colorPalette: [
      { name: "Luxury Gold", hex: "#D4AF37" },
      { name: "Champagne Glow", hex: "#F3E5AB" },
      { name: "Carbon Weave", hex: "#1C1D21" },
      { name: "Bronze Accents", hex: "#CD7F32" },
    ],
    primaryImage: "/designs/cake-oclock-gold.jpeg",
    altText: "Cake o' clock 3D luxury gold metallic emblem logo on carbon fiber background",
    accentGlow: "from-amber-500/20 via-yellow-500/10 to-transparent",
  },
  {
    id: "fruit-park",
    title: "Fruit Park Restaurant",
    subtitle: "Culinary Mascot & Brand Identity",
    category: "Brand Logos",
    badge: "Mascot Illustration",
    client: "Fruit Park Restaurant & Grill",
    year: "2025",
    summary:
      "An inviting, vibrant character mascot logo created for Fruit Park Restaurant, featuring an executive chef proudly presenting a silver cloche platter with a confident thumbs-up gesture.",
    concept:
      "Created to bring approachable warmth, appetite appeal, and friendly hospitality to the restaurant's visual presence. The chef character is illustrated with precise vector contours, high-contrast cel shading, and a bright golden sunrise circular halo, paired with clean, dimensional sans-serif typography with subtle drop-shadows.",
    deliverables: [
      "Scalable Vector Mascot Illustration",
      "Restaurant Signage & Facade Lockup",
      "Menu Header & Stamp Assets",
      "Staff Apparel & Apron Print Prep",
    ],
    tools: [
      "Adobe Illustrator",
      "Vector Character Design",
      "Adobe Photoshop",
      "Color Psychology",
    ],
    colorPalette: [
      { name: "Chef Apron White", hex: "#FFFFFF" },
      { name: "Sunrise Amber", hex: "#F59E0B" },
      { name: "Crimson Neckerchief", hex: "#991B1B" },
      { name: "Charcoal Depth", hex: "#1F2937" },
    ],
    primaryImage: "/designs/fruit-park-restaurant.jpeg",
    altText: "Fruit Park Restaurant mascot logo with chef holding cloche platter",
    accentGlow: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
  {
    id: "family-heritage-plate",
    title: "Heritage Ceramic Plate",
    subtitle: "Genealogical Commemorative Porcelain Print",
    category: "Merchandise & Print",
    badge: "Porcelain Transfer Print",
    client: "Abdul Latheef Family Commemorative",
    year: "2025",
    summary:
      "An intricate genealogical commemorative porcelain plate celebrating family lineage through a deep-rooted tree illustration, titled 'The Love of a Family is a Life's Greatest Blessing'.",
    concept:
      "Crafted for custom porcelain heat-transfer printing. The intertwined double-trunk represents the parental union of Basheera Umma and Zainab Nachiya rooted in family patriarch Abdul Latheef. Symmetrical lush green branches cradle individual nameplates for each descendant, anchored by an elegant curved typography arc along the plate's lower rim.",
    deliverables: [
      "300 DPI Sublimation Transfer Master",
      "Direct Porcelain Studio Mockup",
      "Dynamic Angled Perspective Render",
      "Curved Vector Typography Arc",
    ],
    tools: [
      "Adobe Illustrator",
      "Vector Tree Illustration",
      "Product Mockup Staging",
      "Curved Typography",
      "Print CMYK Specs",
    ],
    colorPalette: [
      { name: "Forest Canopy", hex: "#2F5233" },
      { name: "Oak Trunk", hex: "#5C3A21" },
      { name: "Parchment Cream", hex: "#FDF6E2" },
      { name: "Porcelain Glaze", hex: "#F8FAFC" },
    ],
    primaryImage: "/designs/family-tree-plate-front.jpeg",
    altText: "Commemorative ceramic plate with custom family tree illustration",
    gallery: [
      {
        image: "/designs/family-tree-plate-front.jpeg",
        caption: "Direct ceramic porcelain plate mockup with studio softbox lighting and true glaze reflections",
        label: "Studio Mockup",
      },
      {
        image: "/designs/family-tree-plate-angle.jpeg",
        caption: "Floating perspective view showcasing porcelain surface curvature and print depth",
        label: "Perspective View",
      },
      {
        image: "/designs/family-tree-vector-art.webp",
        caption: "Original 300 DPI master vector artwork ready for ceramic heat-press sublimation",
        label: "Master Vector",
      },
    ],
    accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "ever-smiling-angels",
    title: "Ever Smiling Angels",
    subtitle: "Custom Friendship Keepsake Mug & Sublimation Wrap",
    category: "Merchandise & Print",
    badge: "Sublimation Print & Merchandise",
    client: "Friendship Commemorative (15 Nov 2025)",
    year: "2025",
    summary:
      "A 360-degree custom ceramic coffee mug wrap combining ornate gold floral geometric framing, bespoke calligraphic flourish, an inspirational friendship quote, and a playful 3D smiling emoji base.",
    concept:
      "Engineered to exact sublimation print proportions for a standard 11oz ceramic mug. The front showcases the 'Ever Smiling Angels' typography within a floral hexagon accompanied by a commemorative date (15 November 2025). The reverse displays a heartfelt sentiment on lasting friendship, seamlessly unified across the mug circumference with a lively border of three-dimensional emoji globes.",
    deliverables: [
      "Full 360° Sublimation Mug Wrap (300 DPI)",
      "Dual-Sided 3D Product Mockup",
      "Custom Calligraphic Monogram",
      "Production-Ready Print PDF",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Calligraphic Flourish",
      "3D Compositing",
      "Sublimation Mockup",
    ],
    colorPalette: [
      { name: "Imperial Gold", hex: "#C5A059" },
      { name: "Velvet Burgundy", hex: "#6D1B24" },
      { name: "Emoji Glow Yellow", hex: "#FFD000" },
      { name: "Gloss White", hex: "#FFFFFF" },
    ],
    primaryImage: "/designs/smiling-angels-mug-mockup.jpeg",
    altText: "Ever Smiling Angels coffee mug mockup showing front and back wrap artwork",
    gallery: [
      {
        image: "/designs/smiling-angels-mug-mockup.jpeg",
        caption: "Dual-sided 3D coffee mug product mockup displaying both front emblem and back quote",
        label: "Product Mockup",
      },
      {
        image: "/designs/smiling-angels-wrap-art.png",
        caption: "Full flat 360° sublimation print wrap file with continuous 3D emoji base margin",
        label: "Full Wrap Art",
      },
    ],
    accentGlow: "from-purple-500/20 via-pink-500/10 to-transparent",
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
