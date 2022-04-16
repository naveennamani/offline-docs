import { readFileSync } from "fs";
import { resolve } from "path";

import yaml from "yaml";

import { getBuildCommands } from "./getBuildCommands.js";

export function generateReadme() {
  let readme_txt = "";
  const project_groups = yaml.parse(
    readFileSync("project_groups.yml", { encoding: "utf8" })
  );

  for (let project_group of project_groups) {
    const { name, description, data_file } = project_group;
    const projects = yaml.parse(
      readFileSync(resolve("projects", data_file), { encoding: "utf8" })
    );

    readme_txt += `
# ${name}

${description || ""}
`;
    for (let project of projects) {
      const { name, website, description, repo, last_tested, note, license } =
        project;
      const build_commands = getBuildCommands(project).join("\n");
      readme_txt += `
## [${name}](${website})

[Source code repo](${repo})

${description}
\`\`\`sh
${build_commands}
\`\`\`

Last tested on: ${last_tested}

${note ? "> " + note : ""}
`;
    }
  }
  return readme_txt;
}
