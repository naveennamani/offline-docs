import { readFileSync, writeFileSync } from "fs";

import mdtoc from "markdown-toc";

import { cleanAllDataFiles } from "./scripts/cleanFile.js";
import { generateReadme } from "./scripts/generateReadme.js";

cleanAllDataFiles();

const [project_count, readme] = generateReadme();
const readme_template = readFileSync("README_template.md", {
  encoding: "utf8",
});

const readmeFinal = readme_template
  .replace(
    "<!-- project_count -->",
    `Currently ${project_count} tools available`
  )
  .replace("<!-- toc -->", mdtoc(readme, { maxdepth: 3 }).content)
  .replace("<!-- content -->", readme);

writeFileSync("README.md", readmeFinal);
