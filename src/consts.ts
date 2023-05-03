export const SITE = {
  title: "Mu-PRO Knowledge",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const GITHUB_EDIT_URL = `https://github.com/muprosoftware/openmupro/edit/main/docs`;
export const COMMUNITY_INVITE_URL = `https://muprosoftware.com/contact`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Prepare": [
      { text: "Introduction", link: "en/introduction" },
      // { text: "For users", link: "en/prepare/user" },
      { text: "For developers", link: "en/prepare/developer" },
    ],
    // "Pre-simulation":[
    //   {text: "Configuration",link:"en/pre-simulation/input"},
    //   {text: "Structure",link:"en/pre-simulation/structure"}
    // ],
    "Run simulation":[
      {text: "Start simulation",link:"en/simulation/run"}
    ],
    // "Post-simulation":[
    //   {text:"Visualization",link:"en/post-simulation/visualize"}
    // ],
    "Programming":[
      {text:"Collaboration",link:"en/programming/contribute"},
      {text:"Best practices",link:"en/programming/recommendation"}
    ],
  },
};