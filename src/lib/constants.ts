import { BunJs, Docker, Figma, Framer, Git, JavaScript, MongoDB, NextJs, NodeJs, Python, RadixUI, React, Redis, Redux, ShadcnUI, TailwindCSS, TypeScript } from "developer-icons";

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Acticles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const profileInfo = {
  firstName: "Louai",
  lastName: "Boumediene",
  displayName: "Louai Boumediene",
  username: "louai",
  gender: "male",
  bio: "Creating with code, driven by passion.",
  flipSentences: ["Software Engineer", "Technical writer", "Frontend Engineer"],
  address: "Algiers, Algiria",
  phoneNumber: "+2130782645561", // E.164 format
  email: "boumedienelouai2@gmail.com",
  website: "https://louai.dev",
  dateOfBirth: "2004-06-19", // YYYY-MM-DD
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Senior Frontend Developer / UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Founder / Director",
      company: "Quaric",
      website: "https://quaric.com",
    },
  ],
  about: `
Louai Boumediene
Software Developer & UI/UX Designer  

About Me  
I am a passionate software developer and UI/UX designer dedicated to crafting high-performance, user-centric software solutions with intuitive and engaging designs.  

With 5+ years of experience in web development, I specialize in building high-quality web and mobile applications using:  
- Next.js, React, and TypeScript  
- Modern front-end technologies  
- Scalable and performant architectures  

Experience & Interests  
Beyond my full-time work, I enjoy:  
- Exploring new technologies  
- Turning ideas into reality through personal projects  

Notable Project: ZaDark (https://zadark.com)  
ZaDark is a powerful browser extension that enhances the Zalo experience on PC and Web.  
- Launched in 2022  
- 80,000+ downloads on SourceForge (https://sourceforge.net/projects/zadark)  
- 10,000+ peak active users on the Chrome Web Store (https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob)  

Let’s Connect!  
I’m always open to collaboration and new opportunities. Feel free to reach out!
`,
  avatar: "/images/chanhdai-avatar.jpeg",
  ogImage: "/images/chanhdai-og-image.png",
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, chanhdai, chanh dai, iamncdai, quaric, zadark, nguyễn chánh đại, chánh đại",
  dateCreated: "2025-03-15", // YYYY-MM-DD
};



export const TECH_STACK = [
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: TypeScript,
  },
  {
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: JavaScript,
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: Python,
  },
  {
    title: "Node.js",
    href: "https://nodejs.org/",
    icon: NodeJs,
  },
  {
    title: "Bun",
    href: "https://bun.sh/",
    icon: BunJs,
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: React,
  },
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: NextJs,
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: TailwindCSS,
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: ShadcnUI,
  },
  {
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    icon: RadixUI,
  },
  {
    title: "Motion",
    href: "https://motion.dev/",
    icon: Framer,
  },
  {
    title: "Redux",
    href: "https://redux.js.org/",
    icon: Redux,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: Git,
  },
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: Docker,
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: MongoDB,
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: Redis,
  },
  {
    title: "Figma",
    href: "https://www.figma.com/",
    icon: Figma,
  },
];
