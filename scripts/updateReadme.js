import { readFileSync, writeFileSync } from "fs";
import mdtoc from "markdown-toc";
import { cleanAllDataFiles } from "./cleanFile.js";
import { generateReadme } from "./generateReadme.js";

export function updateReadMe() {
  cleanAllDataFiles();

  const [project_count, readme] = generateReadme();
  const readme_template = readFileSync("README_template.md", {
    encoding: "utf8",
  });

  const readmeFinal = readme_template
    .replace(
      "<!-- project_count -->",
      `Currently ${project_count} projects available`
    )
    .replace("<!-- toc -->", mdtoc(readme, { maxdepth: 3 }).content)
    .replace("<!-- content -->", readme);

  writeFileSync("README.md", readmeFinal);
}

export default updateReadMe;
