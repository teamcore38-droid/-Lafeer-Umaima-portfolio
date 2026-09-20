# Umaima's portfolio

Personal portfolio of Mohamed Lafeer Umaima, a software engineering undergraduate and graphic designer from Sri Lanka.

Built with [Astro](https://astro.build), React and [Tailwind CSS](https://tailwindcss.com). The page is static, so it loads fast and can be hosted for free. The only React part is the animated seismograph line in the hero.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

To check the production build:

```bash
npm run build
npm run preview
```

## Change the content

Almost everything you will want to edit is in one file: [`src/data/site.ts`](src/data/site.ts). Your name, tagline, skills, projects, experience and education all live there, so you never need to touch the components to update the text.

Search the file for `TODO` to find what still needs your input:

- **GitHub profile link** (`site.github`) and the **GitHub link for each project**. Empty links are hidden automatically, so the site never shows a broken link.
- **Your part in Seismic AI** (`role`). One sentence about what you personally built in the team.
- **Project screenshots.** Put images in `public/projects/` and set `image` and `imageAlt` on the project.
- **Site address** (`site.url`), once it is published. This turns on the link preview image when you share the site on LinkedIn or WhatsApp.

Other things you can add:

- **CV download button.** Put your CV in `public/` and name it `cv.pdf`. The button appears by itself.
- **Contact form.** Create a free form at [formspree.io](https://formspree.io) and paste its id into `site.formspreeId`.
- **More projects.** Add another object to the `projects` list in `site.ts`.

The colours and fonts are set at the top of [`src/styles/global.css`](src/styles/global.css).

## Publish it for free

1. Create a GitHub repository named `your-username.github.io` and push this project to it.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

Your site will be at `https://your-username.github.io`. Use a repository named exactly like that; a differently named repository serves the site from a sub-folder, and the image and CV links would break.

Vercel and Netlify also work: import the repository, and they detect Astro automatically.

## Project structure

```
src/
  components/   Header, Hero, Projects, Background, Contact and so on
  data/site.ts  all the text content
  react/        the seismograph animation
  layouts/      page shell and meta tags
  styles/       Tailwind theme (colours, fonts)
public/         favicon, social preview image, and your cv.pdf
```

## Credits

The layout takes its cue from the MIT-licensed [Dark Minimal](https://github.com/themewagon/dark-minimal) Astro template by Andres Hernandez. This project was written from scratch and shares no code with it.

## License

[MIT](LICENSE)
