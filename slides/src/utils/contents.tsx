import { ReactNode } from "react";

import { Window } from "@/components/content/Window";
import { Title } from "@/components/content/Title";
import { Code } from "@/components/content/Code";
import { ListView } from "@/components/notflix/ListView";
import { DetailsView } from "@/components/notflix/DetailsView";
import { NetworkPanel } from "@/components/devtools/NetworkPanel";
import { SourcesPanel } from "@/components/devtools/SourcesPanel";
import { Fin } from "@/components/content/Fin";
import { Title as MainTitle } from "@/components/Title";

import SsrDetails from "@/snippets/ssr/Details.txt";
import SsrLikeButton from "@/snippets/ssr/LikeButton.txt";
import RscDetails from "@/snippets/rsc/Details.txt";
import RscLikeButton from "@/snippets/rsc/LikeButton.txt";
import RscLikeButtonBefore from "@/snippets/rsc/LikeButtonBefore.txt";
import QwikDetails from "@/snippets/qwik/Details.txt";
import QwikLikeButton from "@/snippets/qwik/LikeButton.txt";
import AstroDetails from "@/snippets/astro/Details.txt";
import { rscNodeModules } from "@/devtools/sources/rscNodeModules";
import { craNodeModules } from "@/devtools/sources/craNodeModules";
import { BrowserContent } from "@/components/browser/Content";
import { rscNetwork } from "@/devtools/network/rscNetwork";
import { craNetwork } from "@/devtools/network/craNetwork";
import { SkeletonView } from "@/components/notflix/SkeletonView";
import { HydrationError } from "@/components/browser/HydrationError";
import { Meme } from "@/components/Meme";

type Era = "title" | "html" | "ajax" | "spa" | "ssr" | "rsc";

type Content = {
  era?: Era;
  content?: ReactNode;
};

export const contents: Content[] = [
  // Title page
  {},

  // Meme
  {},
  {},
  {},
  {},

  // Plain HTML
  {
    era: "html",
    content: <Title>Good ol’ HTML</Title>,
  },
  {
    era: "html",
    content: <Window title="Netscape" />,
  },
  {
    era: "html",
    content: (
      <Window title="Netscape">
        <BrowserContent era="html" />
      </Window>
    ),
  },

  // AJAX
  { era: "ajax", content: <Title>JS & jQuery</Title> },
  { era: "ajax", content: <Window title="Internet Explorer" /> },
  {
    era: "ajax",
    content: (
      <Window title="Internet Explorer" loading>
        <BrowserContent era="ajax" />
      </Window>
    ),
  },
  {
    era: "ajax",
    content: (
      <Window title="Internet Explorer">
        <BrowserContent era="ajax" hydrated />
      </Window>
    ),
  },

  // SPA
  { era: "spa", content: <Title>The era of single page apps</Title> },
  { era: "spa", content: <Window title="Chrome" /> },
  { era: "spa", content: <Window title="Chrome" loading /> },
  {
    era: "spa",
    content: (
      <Window title="Chrome">
        <BrowserContent era="spa" hydrated />
      </Window>
    ),
  },

  // SSR
  { era: "ssr", content: <Title>Back to the server</Title> },
  { era: "ssr", content: <Window title="Chrome" /> },
  {
    era: "ssr",
    content: (
      <Window title="Chrome" loading>
        <BrowserContent era="ssr" />
      </Window>
    ),
  },
  {
    era: "ssr",
    content: (
      <Window title="Chrome">
        <BrowserContent era="ssr" hydrated />
      </Window>
    ),
  },
  {
    era: "ssr",
    content: (
      <Window title="Chrome">
        <HydrationError />
      </Window>
    ),
  },

  // RSC
  { era: "ssr", content: <Title>Server components</Title> },
  { era: "ssr", content: <Window title="Chrome" /> },
  {
    era: "ssr",
    content: (
      <Window title="Chrome" loading>
        <BrowserContent era="rsc" />
      </Window>
    ),
  },
  {
    era: "ssr",
    content: (
      <Window title="Chrome">
        <BrowserContent era="rsc" hydrated />
      </Window>
    ),
  },

  // Code demos
  {
    era: "rsc",
    content: <Title>Demo time</Title>,
  },

  // Fin
  {
    era: "rsc",
    content: (
      <Title>
        Are Server Components
        <br />
        the future?
      </Title>
    ),
  },
  {
    era: "rsc",
    content: <Fin />,
  },
];

export type { Era };
