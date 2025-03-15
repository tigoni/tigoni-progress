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

export const Profile = {
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
Hello, World! I am Chánh Đại, a Software Developer & UI/UX Designer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.\n
With over 5 years of experience in web development, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies.\n
Outside of my full-time work, I enjoy exploring new technologies and turning ideas into reality through personal projects.\n
One of my notable projects is [ZaDark](https://zadark.com), a powerful extension that enhances the Zalo experience on PC and Web. Since its launch in 2022, ZaDark has surpassed 80,000 downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reached a peak of 10,000 active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob).\n
Feel free to reach out if you're interested in collaborating!
  `,
  avatar: "/images/chanhdai-avatar.jpeg",
  ogImage: "/images/chanhdai-og-image.png",
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, chanhdai, chanh dai, iamncdai, quaric, zadark, nguyễn chánh đại, chánh đại",
  dateCreated: "2025-03-15", // YYYY-MM-DD
};
