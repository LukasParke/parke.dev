export type SocialLink = {
  title: "Bluesky" | "GitHub" | "LinkedIn";
  url: string;
  target?: "_blank";
};

export const socialLinks: SocialLink[] = [
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/lukehagar.com",
    target: "_blank",
  },
  {
    title: "GitHub",
    url: "https://github.com/lukehagar",
    target: "_blank",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/lukehagar",
    target: "_blank",
  },
];
