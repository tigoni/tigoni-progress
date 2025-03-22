import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

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
    icon: GithubIcon,
    url: "https://github.com/Louai-Zokerburg",
  },
  {
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/louai-boumediene-018919262/",
  },
  {
    icon: XIcon,
    url: "https://x.com/Louai_Dourov",
  },
];