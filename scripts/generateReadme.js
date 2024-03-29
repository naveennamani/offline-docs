import { getBuildCommands } from "./getBuildCommands.js";
import { getProjectDetails, getProjectGroupDetails } from "./utils.js";

export function generateReadme() {
  let readme_lines = [];
  let project_count = 0;
  const project_groups = getProjectGroupDetails();

  for (let project_group of project_groups) {
    const { name, description, data_file } = project_group;
    const projects = getProjectDetails(data_file);
    readme_lines.push(`# ${name}`);
    if (description) readme_lines.push(description);
    for (let project of projects) {
      project_count += 1;

      const {
        name,
        website,
        description,
        repo,
        direct_links,
        last_tested,
        note,
        license,
      } = project;
      const build_commands = getBuildCommands(project).join("\n");
      const links_text = direct_links
        .sort((text1, text2) => (text1.text > text2.text ? 1 : -1))
        .map(({ text, link }) => `- [${text}](${link})`)
        .join("\n");
      readme_lines.push(`<details>
<summary>

## ${name}

</summary>`);
      readme_lines.push(`Website - ${website}`);
      readme_lines.push(`Source code repo - ${repo}`);
      if (description) readme_lines.push(description);
      if (build_commands)
        readme_lines.push("```sh\n" + build_commands + "\n```");
      if (links_text) {
        readme_lines.push("### Direct links");
        readme_lines.push(links_text);
      }
      if (last_tested) readme_lines.push(`Last tested on: ${last_tested}`);
      if (note) readme_lines.push("> " + note);
      readme_lines.push("</details>");
    }
  }
  return [project_count, readme_lines.join("\n\n")];
}
