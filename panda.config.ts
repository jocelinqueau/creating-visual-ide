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
  sandpackDark
]

// const mapValueToPandaTheme = (obj: Record<string, string>):Record<string, Record<string,string>> => {
//   const pandaTokens = Object.entries(obj).map(([key, val]) => {
//     return [ key , {value: val}]
//   })
//   return Object.fromEntries(pandaTokens)
// }

const selectedTheme = theme.at(Math.floor(Math.random() * theme.length))
const colors = selectedTheme!.colors
const font = selectedTheme!.font
const syntax = selectedTheme!.syntax


const config = () => {
  console.log(selectedTheme)
  console.log(colors)
  console.log(font)
  console.log(syntax)
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
        semanticTokens: {
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
        }
      }
    },
  
    // The output directory for your css system
    outdir: "src/styled-system",
  })
}
export default defineConfig(config())