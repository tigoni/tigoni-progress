import type { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    id: "quaric-website",
    title: "Quaric Website",
    time: "03.2024 - present",
    link: "https://quaric.com",
    tags: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    time: "10.2023 - present",
    link: "https://github.com/ncdai/chanhdai.com",
    tags: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Vercel",
    ],
    description:
      "chanhdai.com is my portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer.\n- Elegant & Minimalistic UI: Clean and modern design\n- Dark Mode: Supports light and dark themes for a better user experience\n- vCard Integration: Digital business card with contact details\n- SEO Optimization: JSON-LD schema, sitemap, robots\n- Email Protection: Obfuscation to prevent spam\n- [Next.js 15](https://nextjs.org/): Latest React framework for optimized performance and scalability\n- [Tailwind CSS v4](https://tailwindcss.com/): Modern utility-first CSS framework for styling\n\nBlog Features:\n- MDX & Markdown support\n- [Syntax Highlighting](https://chanhdai.com/blog/writing-effect-inspired-by-apple) for better readability\n - [RSS Feed](https://chanhdai.com/rss) for easy content distribution\n- Dynamic OG Images for rich previews",
  },
  {
    id: "zadark",
    title: "ZaDark – Zalo Dark Mode",
    time: "01.2022 - present",
    link: "https://zadark.com",
    tags: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description:
      "ZaDark brings Dark Mode to Zalo's Web and PC interfaces, designed to help reduce eye strain during extended use. Since its launch in January 2022, ZaDark has garnered over 80,000 downloads on SourceForge and has more than 10,000 active users using the extension distributed through the Chrome Web Store.\n- Bronze Medal | 10th Design, Manufacturing, and Application Award 2022 (organized by Ho Chi Minh City Youth Union)\n- Community Choice award by SourceForge\n- Favorite award by SourceForge\n- Rising Star award by SourceForge",
  },
  {
    id: "qabox",
    title: "QABox",
    time: "07.2023",
    link: "https://github.com/ncdai/qabox",
    tags: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications - FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  },
];
