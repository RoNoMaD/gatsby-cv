import fs from "fs";
import fetch from "node-fetch";
import getColors from "./types/getColors";
import getGradients from "./types/getGradients";

const emojis = {
  color: "🎨",
  typography: "🖋 ",
  spacing: "📐",
  shadow: "🌚",
  breakpoint: "🍪",
  radius: "🌀",
};

const genFile = (name, tokens, outDir) =>
  fs.writeFile(
    `${outDir}/${name}.json`,
    JSON.stringify(tokens, null, 2),
    (err) => {
      if (err) {
        throw new Error(`\x1b[31m\n\n❌ ${err}\n\n`);
      }
      // eslint-disable-next-line no-console
      console.log(
        `\x1b[32m ${
          emojis[name]
        } ${name.toUpperCase()} tokens created!\x1b[0m\n`
      );
    }
  );

const genTokens = (apikey, id, outDir) => {
  // eslint-disable-next-line no-console
  console.log("\x1b[40m 🚀  Connecting to Figma API... \x1b[0m\n");
  const FETCH_URL = `https://api.figma.com/v1/files/${id}`;
  const FETCH_DATA = {
    method: "GET",
    headers: {
      "X-Figma-Token": apikey,
    },
  };

  try {
    fetch(FETCH_URL, FETCH_DATA)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(
          " Connection with Figma is successful...\n\n----------------\n"
        );
        return response.json();
      })
      .then((figmaTreeStructure) => {
        if (
          figmaTreeStructure.status !== 403 &&
          figmaTreeStructure.status !== 404
        ) {
          const stylesArtboard = figmaTreeStructure.document.children.find(
            (item) => {
              return item.name === "Design tokens";
            }
          ).children;

          //light theme color tokens
          const lightTheme = getColors("light", stylesArtboard);
          //dark theme color tokens
          const darkTheme = getColors("dark", stylesArtboard);

          genFile(
            "color",
            {
              color: {
                dark: darkTheme,
                light: lightTheme,
                ...lightTheme,
              },
            },
            outDir
          );
          //light theme gradient tokens
          const lightThemeGradient = getGradients("light", stylesArtboard);
          //dark theme color tokens
          const darkThemeGradient = getGradients("dark", stylesArtboard);
          genFile(
            "gradient",
            {
              gradient: {
                dark: darkThemeGradient.gradient,
                light: lightThemeGradient.gradient,
                ...lightThemeGradient.gradient,
              },
            },
            outDir
          );
        }
      })
      .catch((err) => {
        throw new Error(`\x1b[31m\n\n❌ ${err}\n\n`);
      });
  } catch (err) {
    throw new Error(`\x1b[31m\n\n❌ ${err}\n\n`);
  }
};

export default genTokens;
