import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import yaml from "yaml";

const { parse, stringify } = yaml;

export function cleanFile(fileName) {
  let projects = parse(readFileSync(fileName, { encoding: "utf8" }));
  let projects_sorted = projects
    .sort((a, b) => (a.name < b.name ? -1 : 1)) // sort by name
    .map(
      // sort keys in the object
      ({
        name,
        website,
        description,
        repo,
        repo_branch,
        commands = [],
        direct_links = [],
        output_dir,
        last_tested,
        note,
        license,
      }) => {
        return {
          name,
          website,
          description,
          repo,
          repo_branch,
          commands,
          direct_links,
          output_dir,
          last_tested,
          note,
          license,
        };
      }
    );
  writeFileSync(fileName, stringify(projects_sorted));
}

export function cleanProjectGroups(fileName) {
  let projects = parse(readFileSync(fileName, { encoding: "utf8" }));
  let projects_sorted = projects
    .sort((a, b) =>
      a.name == "Other" ? 1 : b.name == "Other" ? -1 : a.name < b.name ? -1 : 1
    ) // sort by name and move Other to the end always
    .map(
      // sort keys in the object
      ({ name, description, data_file }) => {
        return { name, description, data_file };
      }
    );
  writeFileSync(fileName, stringify(projects_sorted));
}

export function cleanAllDataFiles() {
  let project_groups = readdirSync("projects");
  for (let project_group of project_groups) {
    cleanFile(resolve("projects", project_group));
  }
  cleanProjectGroups("project_groups.yml");
}
