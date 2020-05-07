import dotenv from "dotenv";
import fs from "fs";
import genTokens from "./gen";

dotenv.config();

// export function cli() {
const FIGMA_APIKEY = process.env.FIGMA_APIKEY;
const FIGMA_ID = process.env.FIGMA_ID;
const FIGMA_OUTDIR = "design-tokens/json";
if (!FIGMA_APIKEY) {
  throw new Error("\x1b[31m\n\n❌ No Figma API key found!\n\n");
} else if (!FIGMA_ID) {
  throw new Error("\x1b[31m\n\n❌ No Figma ID found!\n\n");
} else {
  if (!FIGMA_OUTDIR)
    // eslint-disable-next-line no-console
    console.warn("⚠️ No outdir found, default outdir is `./tokens.json`");
  fs.mkdir(FIGMA_OUTDIR, null, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      // console.log(`\x1b[31m\n\n❌ ${err}!\n\n`);
    }
    genTokens(FIGMA_APIKEY, FIGMA_ID, FIGMA_OUTDIR);
  });
}
// }
