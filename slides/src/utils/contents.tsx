import { Window } from "@/components/content/Window";
import { Title } from "@/components/content/Title";
import { Fin } from "@/components/content/Fin";
import { BrowserContent } from "@/components/browser/Content";
import { HydrationError } from "@/components/browser/HydrationError";

type Era = "sponsors" | "title" | "html" | "ajax" | "spa" | "ssr" | "rsc";

export const contents = [
  // Title page
  { era: "title" },

  // Sponsors
  { era: "sponsors" },

  // Meme
  { era: "title" },
  { era: "title" },
  { era: "title" },
  { era: "title" },

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
] as const;

export type { Era };
