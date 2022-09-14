import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import yaml from "yaml";

const { parse, stringify } = yaml;
const project_group_file = "project_groups.yml";
const project_groups_folder = "projects";

export function getProjectGroupDetails() {
  return parse(readFileSync(project_group_file, { encoding: "utf8" }));
}

export function updateProjectGroupDetails(project_group_details) {
  writeFileSync(project_group_file, stringify(project_group_details));
}

export function getProjectDetails(data_file) {
  return parse(
    readFileSync(resolve(project_groups_folder, data_file), {
      encoding: "utf8",
    })
  );
}

export function updateProjectDetails(data_file, projects) {
  writeFileSync(resolve(project_groups_folder, data_file), stringify(projects));
}
