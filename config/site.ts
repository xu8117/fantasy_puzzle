export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "History",
      href: "/history",
    },
    {
      label: "My",
      href: "/my",
    },
    /*
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "About",
      href: "/about",
    },
*/
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/xu8117/fantasy_puzzle",
    twitter: "https://twitter.com/xu8117",
    docs: "https://github.com/xu8117/fantasy_puzzle",
    // discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://github.com/sponsors/xu8117"
  },
};
