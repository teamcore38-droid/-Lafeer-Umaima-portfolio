export interface SkillItem {
  name: string;
  category: string;
  color: string;
  svg: string;
}

export const skillsWithLogos: SkillItem[] = [
  {
    name: "Python",
    category: "Language",
    color: "#3776AB",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M11.91 2C8.36 2 8.58 3.54 8.58 3.54l.01 1.6h3.39v.48H5.16S3 5.38 3 8.92c0 3.55 1.89 3.42 1.89 3.42h1.13v-1.61s-.06-1.89 1.86-1.89h3.24V8.32H6.94s-1.33.02-1.33-1.3c0-1.32 1.33-1.3 1.33-1.3h6.91s1.33-.04 1.33-1.33V3.33S15.46 2 11.91 2z" fill="#3776AB"/>
      <path d="M12.09 22c3.55 0 3.33-1.54 3.33-1.54l-.01-1.6h-3.39v-.48h6.82S21 18.62 21 15.08c0-3.55-1.89-3.42-1.89-3.42h-1.13v1.61s.06 1.89-1.86 1.89h-3.24v.52h4.18s1.33-.02 1.33 1.3c0 1.32-1.33 1.3-1.33 1.3H12.1s-1.33.04-1.33 1.33v1.06S8.54 22 12.09 22z" fill="#FFD43B"/>
      <circle cx="9.97" cy="4.18" r=".55" fill="#fff"/>
      <circle cx="14.03" cy="19.82" r=".55" fill="#fff"/>
    </svg>`
  },
  {
    name: "Java",
    category: "Language",
    color: "#EA2D2E",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M8.85 16.82s-.9 0-1.3.1c-1.6.4-1.7 1.4-1.7 1.4s.3.4 1.1.4c1.1 0 1.9-.3 2.8-.7.7-.3 1.5-.6 2.5-.6 2.3 0 3.8.9 3.8.9s-.7-.4-1.8-.6c-1.3-.3-2.3-.2-3.1.2-.8.4-1.5.8-2.3.3z" fill="#5382A1"/>
      <path d="M9.15 14.82s-1.3.2-1.7.5c-1.3.8-1.1 1.6-1.1 1.6s.4.2 1.2.1c1.2-.1 2.2-.6 3.4-.8.9-.2 2.1-.2 3.4.1 1.6.3 2.3.8 2.3.8s-.6-.5-1.8-.8c-1.4-.4-2.7-.4-3.7 0-.7.3-1.2.6-2 .5z" fill="#5382A1"/>
      <path d="M12.95 10.92c1.2 1.2-.3 2.3-.3 2.3s1.7-.9 1-2.2c-.7-1.2-1.2-1.8.8-3.7 0 0-2.6 1.4-1.5 3.6z" fill="#E76F00"/>
      <path d="M15.45 14.22c2 .3 3.6-1 3.6-2.5 0-1.2-.9-1.9-1.7-2.3.3.3.4.7.4 1 0 1.1-.9 1.8-2.3 1.8v2z" fill="#EA2D2E"/>
      <path d="M11.65 6.32c.5.6.8 1.3.8 2.1 0 1.6-1 2.8-1.5 3.7-.4.8-.5 1.5-.1 2.2.3.6 1 .9 1.6.9 1 0 1.8-.5 2.6-1 .9-.6 1.7-1.3 1.7-2.4 0-1.8-1.6-2.7-2.6-3.8-1-1-1.3-1.8-.9-2.7-1 .1-1.3.5-1.6 1z" fill="#EA2D2E"/>
      <path d="M6.35 20.32c3.5.7 7.7.7 11.2 0 0 0-.8.5-3.3.7-3.1.2-5.9.1-7.9-.7z" fill="#5382A1"/>
    </svg>`
  },
  {
    name: "Kotlin",
    category: "Mobile",
    color: "#7F52FF",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="kotlin-grad" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#E4485D"/>
          <stop offset="50%" stop-color="#C711E1"/>
          <stop offset="100%" stop-color="#7F52FF"/>
        </linearGradient>
      </defs>
      <path d="M24 24H0V0h24L12 12Z" fill="url(#kotlin-grad)"/>
    </svg>`
  },
  {
    name: "PHP",
    category: "Backend",
    color: "#777BB4",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4"/>
      <path d="M7.5 10.2h1.8c.8 0 1.3.4 1.1 1.1-.2.8-.8 1.1-1.6 1.1H7.8l-.5 2.1H6.1l1.4-4.3zm1.1 1.5c.3 0 .5-.1.6-.4.1-.3 0-.4-.3-.4h-.8l-.2.8h.7zm4.2-1.5h1.2l-.4 1.5h1.3c.8 0 1.3.4 1.1 1.1-.2.8-.8 1.1-1.6 1.1h-1.8l.5-2.1h-.9l-.3.9-.9 2.8h-1.2l1.3-4.3zm2.5 1.5c.3 0 .5-.1.6-.4.1-.3 0-.4-.3-.4h-.8l-.2.8h.7zm-2.8 1.2h.9l-.3.9h-.9l.3-.9z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "JavaScript",
    category: "Frontend",
    color: "#F7DF1E",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path d="M7.5 18.5c.8.5 1.8.8 2.7.8 1.5 0 2.4-.7 2.4-2.1v-6.7h-2.1v6.7c0 .6-.3.9-.8.9-.4 0-.8-.1-1.1-.3l-1.1.7zm7.4-.2c1 .6 2.2 1 3.4 1 2.2 0 3.7-1.1 3.7-3.1 0-1.8-1.2-2.6-2.8-3.3-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.8 0 1.5.3 2 .7l1.1-1.3c-.8-.6-1.8-.9-3.1-.9-2.1 0-3.5 1.2-3.5 3 0 1.7 1.1 2.6 2.7 3.2.9.4 1.6.7 1.6 1.4 0 .6-.5 1-1.4 1-.9 0-1.8-.4-2.4-.9l-1 1.1z" fill="#000000"/>
    </svg>`
  },
  {
    name: "React",
    category: "Frontend",
    color: "#61DAFB",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="3" ry="3" fill="#61DAFB"/>
      <g stroke="#61DAFB" stroke-width="1.4">
        <ellipse cx="12" cy="12" rx="10" ry="4.2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>
      </g>
    </svg>`
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "#339933",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933"/>
      <path d="M12 4.4L5.2 8.3v7.4l6.8 3.9 6.8-3.9V8.3L12 4.4z" fill="#026E00"/>
      <path d="M11.2 17.2h1.6V10h-1.6v7.2zm3.8-3.5c0-1.8-1.2-2.4-2.8-2.6-.9-.1-1.2-.3-1.2-.6 0-.3.3-.5.8-.5.6 0 1.2.2 1.6.5l.7-1.1c-.6-.4-1.4-.6-2.3-.6-1.5 0-2.5.8-2.5 2 0 1.6 1.1 2.2 2.7 2.4.9.1 1.3.3 1.3.7 0 .4-.4.6-1 .6-.7 0-1.4-.3-1.9-.7l-.7 1.1c.7.6 1.6.8 2.6.8 1.7 0 2.7-.9 2.7-2.6z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "MySQL",
    category: "Database",
    color: "#4479A1",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#00758F"/>
      <path d="M18.8 14.5c-.7 0-1.3-.4-1.6-.9-.3-.5-.4-1.2-.4-1.9 0-.8.1-1.5.4-2 .3-.5.9-.9 1.6-.9s1.3.4 1.6.9c.3.5.4 1.2.4 2 0 .7-.1 1.4-.4 1.9-.3.5-.9.9-1.6.9zm-7.6-5.5l1.6 3.6 1.6-3.6h1.5l-2.4 5.3v2.7h-1.4V14.3l-2.4-5.3h1.5zm-5.6 0h1.4l1.8 3.5 1.8-3.5h1.4v7.7H10.5V12l-1.6 3h-.6l-1.6-3v4.7H5.6V9z" fill="#F29111"/>
    </svg>`
  },
  {
    name: "HTML5",
    category: "Frontend",
    color: "#E34F26",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3z" fill="#E34F26"/>
      <path d="M12 21.2l5.9-2.2L19.3 3.6H12v17.6z" fill="#EF652A"/>
      <path d="M7 6.8h10l-.3 3.2H12v2.5h4.4l-.5 4.9-3.9 1.1v-2.7l1.9-.5.2-1.7H7L6.6 6.8H7z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "CSS3",
    category: "Frontend",
    color: "#1572B6",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3z" fill="#1572B6"/>
      <path d="M12 21.2l5.9-2.2L19.3 3.6H12v17.6z" fill="#33A9DC"/>
      <path d="M7 6.8h10l-.3 3.2H9.8l.2 2.5h6.7l-.6 6-4.1 1.2v-2.7l1.9-.5.3-2.6H7.3L7 6.8z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    color: "#7952B3",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7952B3"/>
      <path d="M9.5 6.5h3.6c1.6 0 2.7.9 2.7 2.2 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.2 1.9 2.4 0 1.6-1.3 2.5-3.1 2.5H9.5V6.5zm2.1 3.5h1.3c.7 0 1.2-.4 1.2-1 0-.7-.5-1-1.2-1h-1.3v2zm0 3.7h1.6c.8 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.4-1.1h-1.6v2.2z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "jQuery",
    category: "Frontend",
    color: "#0769AD",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#0769AD"/>
      <path d="M17.4 8.2c-.3-.2-.7-.4-1.2-.4-.9 0-1.6.5-2.2 1.4-.6.9-1 2.1-1.3 3.5-.2.8-.3 1.6-.3 2.4 0 .9.3 1.5.8 1.9.5.4 1.2.5 2 .3.8-.2 1.5-.7 2.1-1.4l1.1 1.2c-.8 1-1.8 1.7-2.9 2-1.2.3-2.3.1-3.2-.6-.9-.7-1.4-1.8-1.4-3.2 0-1.1.2-2.3.5-3.5.4-1.6 1-2.9 1.8-3.9 1-1.1 2.2-1.7 3.5-1.7.8 0 1.5.2 2.1.6l-1.4 1.4z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "AJAX",
    category: "Architecture",
    color: "#00A98F",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#003B5C"/>
      <path d="M12 4v3l4-3.5L12 0v3C6.5 3 2 7.5 2 13h2.5c0-4.7 3.8-8.5 8.5-8.5zm7.5 5.5H17c0 4.7-3.8 8.5-8.5 8.5v-3l-4 3.5 4 3.5v-3c5.5 0 10-4.5 10-9.5z" fill="#00A98F"/>
      <text x="12" y="14" font-family="monospace" font-size="6" font-weight="bold" text-anchor="middle" fill="#FFFFFF">API</text>
    </svg>`
  },
  {
    name: "Android Studio",
    category: "Mobile IDE",
    color: "#3DDC84",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M6 18c0 .6.4 1 1 1h1v3c0 .6.4 1 1 1s1-.4 1-1v-3h4v3c0 .6.4 1 1 1s1-.4 1-1v-3h1c.6 0 1-.4 1-1V9H6v9zm-2.5-9C2.7 9 2 9.7 2 10.5v5c0 .8.7 1.5 1.5 1.5S5 16.3 5 15.5v-5C5 9.7 4.3 9 3.5 9zm17 0c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5zM15.5 3.7l1.3-1.3c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0L14.1 2.9C13.5 2.6 12.8 2.5 12 2.5s-1.5.1-2.1.4L8.3 1.3c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l1.3 1.3C6.9 4.8 6 6.3 6 8h12c0-1.7-.9-3.2-2.5-4.3zm-5.7 2.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8zm4.4 0c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#3DDC84"/>
    </svg>`
  },
  {
    name: "Photoshop",
    category: "Adobe Suite",
    color: "#31A8FF",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#001E36"/>
      <path d="M7 6.5h4.2c2.2 0 3.6 1.2 3.6 3.1 0 1.9-1.4 3.2-3.6 3.2H8.8v4.7H7V6.5zm1.8 4.7h2.2c1.1 0 1.9-.6 1.9-1.6 0-1-.8-1.5-1.9-1.5H8.8v3.1zm8 2.5c.8.5 1.7.9 2.6.9 1 0 1.5-.4 1.5-1 0-.7-.6-.9-1.6-1.3-.9-.4-2-.8-2-2 0-1.4 1.1-2.4 2.8-2.4 1 0 1.8.3 2.4.7l-.6 1.4c-.6-.4-1.2-.6-1.9-.6-.8 0-1.3.4-1.3.9 0 .6.5.8 1.5 1.2 1 .4 2.1.8 2.1 2.1 0 1.5-1.2 2.5-3 2.5-1.1 0-2.1-.4-2.8-.9l.3-1.5z" fill="#31A8FF"/>
    </svg>`
  },
  {
    name: "Illustrator",
    category: "Adobe Suite",
    color: "#FF9A00",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#330000"/>
      <path d="M9.8 6.5L6.5 17.5h1.9l.8-2.8h3.6l.8 2.8h2L12.2 6.5H9.8zm-.2 6.6l1.3-4.6 1.3 4.6H9.6zm7.2-4.9h1.9v8.3h-1.9V8.2zm0-2.2h1.9v1.6h-1.9V6z" fill="#FF9A00"/>
    </svg>`
  },
  {
    name: "InDesign",
    category: "Adobe Suite",
    color: "#FF3366",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#49021F"/>
      <path d="M7 6.5h1.9v11H7v-11zm5.2 0h1.8v3.6c.7-.7 1.6-1.1 2.6-1.1 2.3 0 3.9 1.8 3.9 4.3 0 2.6-1.6 4.4-3.9 4.4-1 0-1.9-.4-2.6-1.1v1h-1.8v-11zm4.3 8.7c1.3 0 2.2-1.1 2.2-2.7 0-1.5-.9-2.7-2.2-2.7-1.3 0-2.3 1.1-2.3 2.7 0 1.6 1 2.7 2.3 2.7z" fill="#FF3366"/>
    </svg>`
  },
  {
    name: "Graphic Design",
    category: "Creative",
    color: "#FA0F00",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#FA0F00"/>
      <path d="M14.5 3h4.5v18l-5-12.5L12 13l-2-4.5L5 21V3h4.5L12 9l2.5-6z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    name: "Microsoft Office",
    category: "Productivity",
    color: "#D83B01",
    svg: `<svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M3 5.5L12 3v18l-9-2.5V5.5z" fill="#D83B01"/>
      <path d="M12 3l9 2.5v13L12 21V3z" fill="#EA3E0C"/>
      <path d="M7 9.5l3.5 1v3L7 14.5v-5zm7 1l3-.8v4.5l-3 .8v-4.5z" fill="#FFFFFF"/>
    </svg>`
  }
];
