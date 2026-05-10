// quartz.config.ts
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cryopolis",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "cryopolis.games",
    ignorePatterns: [
      "private",
      "templates",
      "**/_*",
      ".obsidian",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Orbitron",
        body: "Share Tech Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#0d0d1a",
          lightgray: "#1a1a2e",
          gray: "#4a4a6a",
          darkgray: "#c8c8e8",
          dark: "#e0e0ff",
          secondary: "#00fff0",
          tertiary: "#ff00ff",
          highlight: "rgba(0, 255, 240, 0.08)",
          textHighlight: "#ff00ff44",
        },
        darkMode: {
          light: "#0d0d1a",
          lightgray: "#1a1a2e",
          gray: "#4a4a6a",
          darkgray: "#c8c8e8",
          dark: "#e0e0ff",
          secondary: "#00fff0",
          tertiary: "#ff00ff",
          highlight: "rgba(0, 255, 240, 0.08)",
          textHighlight: "#ff00ff44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config