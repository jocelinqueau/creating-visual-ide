import { defineConfig } from "@pandacss/dev"
import {
  amethyst,
  aquaBlue,
  atomDark,
  cobalt2,
  cyberpunk,
  dracula,
  ecoLight,
  freeCodeCampDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  levelUp,
  monokaiPro,
  neoCyan,
  nightOwl,
  sandpackDark
} from '@codesandbox/sandpack-themes'

import pandaPreset from '@pandacss/preset-panda'
interface SandpackSyntaxStyle {
  color?: string;
  fontStyle?: "normal" | "italic";
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}
export interface SandpackTheme {
  colors: {
      surface1: string;
      surface2: string;
      surface3: string;
      disabled: string;
      base: string;
      clickable: string;
      hover: string;
      accent: string;
      error?: string;
      errorSurface?: string;
      warning?: string;
      warningSurface?: string;
  };
  syntax: {
      plain: string | SandpackSyntaxStyle;
      comment: string | SandpackSyntaxStyle;
      keyword: string | SandpackSyntaxStyle;
      definition: string | SandpackSyntaxStyle;
      punctuation: string | SandpackSyntaxStyle;
      property: string | SandpackSyntaxStyle;
      tag: string | SandpackSyntaxStyle;
      static: string | SandpackSyntaxStyle;
      string?: string | SandpackSyntaxStyle;
  };
  font: {
      body: string;
      mono: string;
      size: string;
      lineHeight: string;
  };
}

export const defaultLight: SandpackTheme = {
  colors: {
    surface1: "#ffffff",
    surface2: "#EFEFEF",
    surface3: "#F3F3F3",

    disabled: "#C5C5C5",
    base: "#323232",
    clickable: "#808080",
    hover: "#4D4D4D",
    accent: "#3973E0",

    error: "#EA3323",
    errorSurface: "#FCF1F0",
    warning: "#6A4516",
    warningSurface: "#FEF2C0",
  },
  syntax: {
    plain: "#151515",
    comment: { color: "#999", fontStyle: "italic" },
    keyword: "#7C5AE3",
    tag: "#0971F1",
    punctuation: "#3B3B3B",
    definition: "#85A600",
    property: "#3B3B3B",
    static: "#3B3B3B",
    string: "#2E6BD0",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "13px",
    lineHeight: "20px",
  },
};

/**
 * @category Theme
 */
export const defaultDark: SandpackTheme = {
  colors: {
    surface1: "#151515",
    surface2: "#252525",
    surface3: "#2F2F2F",

    disabled: "#4D4D4D",
    base: "#808080",
    clickable: "#999999",
    hover: "#C5C5C5",
    accent: "#E5E5E5",

    error: "#FFB4A6",
    errorSurface: "#690000",
    warning: "#E7C400",
    warningSurface: "#3A3000",
  },
  syntax: {
    plain: "#FFFFFF",
    comment: { color: "#757575", fontStyle: "italic" },
    keyword: "#77B7D7",
    tag: "#DFAB5C",
    punctuation: "#ffffff",
    definition: "#86D9CA",
    property: "#77B7D7",
    static: "#C64640",
    string: "#977CDC",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "13px",
    lineHeight: "20px",
  },
};


const theme = [
  amethyst,
  aquaBlue,
  atomDark,
  cobalt2,
  cyberpunk,
  dracula,
  ecoLight,
  freeCodeCampDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  levelUp,
  monokaiPro,
  neoCyan,
  nightOwl,
  sandpackDark,
  defaultLight,
  defaultDark,
]

// const mapValueToPandaTheme = (obj: Record<string, string>):Record<string, Record<string,string>> => {
//   const pandaTokens = Object.entries(obj).map(([key, val]) => {
//     return [ key , {value: val}]
//   })
//   return Object.fromEntries(pandaTokens)
// }

let selectedTheme = theme.at(Math.floor(Math.random() * theme.length))
// selectedTheme = defaultLight
const colors = selectedTheme!.colors
const font = selectedTheme!.font
const syntax = selectedTheme!.syntax


const config = () => {
  console.log(selectedTheme)
  // console.log(colors)
  // console.log(font)
  // console.log(syntax)
  return ({
    // Whether to use css reset
    preflight: true,
    
  
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  

    // Files to exclude
    exclude: [],
  
    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          fontSizes: {
            ...pandaPreset.theme.tokens.sizes
          },
          lineHeights: {
            ...pandaPreset.theme.tokens.sizes
          }
        },
        semanticTokens: {
          transitions: {
            default: { value: '150ms ease' },
          },
          size: {
            "headerHeight": { value: '40px' },
            "height": { value: '300px' },
          },
          colors: {
            surface1: { value: colors.surface1 },
            surface2: { value: colors.surface2 },
            surface3: { value: colors.surface3 },
            disabled: { value: colors.disabled },
            base: { value: colors.base },
            clickable: { value: colors.clickable },
            hover: { value: colors.hover },
            accent: { value: colors.accent },
            error: { value: colors.error || 'red' },
            errorSurface: { value: colors.errorSurface || 'red' },
            warning: { value: colors.warning || 'yellow' },
            warningSurface: { value: colors.warningSurface || 'yellow' },
            syntax: {
              plain: { value: syntax.plain as string },
              comment: { value: syntax.comment as string },
              keyword: { value: syntax.keyword as string },
              definition: { value: syntax.definition as string },
              punctuation: { value: syntax.punctuation as string },
              property: { value: syntax.property as string },
              tag: { value: syntax.tag as string },
              static: { value: syntax.static as string },
              string: { value: syntax.string as string },
            }
          },
          fonts: {
            body: { value: font.body },
            mono: { value: font.mono },
            size: { value: font.size },
            lineHeight: { value: font.lineHeight },
          },
          border: {
            radius: { value: '4px' }
          }
        }
      }
    },
  
    // The output directory for your css system
    outdir: "src/styled-system",
  })
}
export default defineConfig(config())