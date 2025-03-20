import { Icons } from "@/components/ui/icons";
import { LinkedIn, WhatsApp, XDark } from "developer-icons";

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const NAV_LINKS = [
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
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Icons.github,
    url: "https://github.com/Louai-Zokerburg",
  },
  {
    icon: Icons.linkedin,
    url: "https://www.linkedin.com/in/louai-boumediene-018919262/",
  },
  {
    icon: Icons.x,
    url: "https://x.com/Louai_Dourov",
  },
];

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: WhatsApp,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: XDark,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: LinkedIn,
  },
] as const;

