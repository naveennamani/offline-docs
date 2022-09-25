import { readdirSync } from "fs";
import {
  getProjectDetails,
  getProjectGroupDetails,
  updateProjectDetails,
  updateProjectGroupDetails,
} from "./utils.js";

export function cleanProjectFile(fileName) {
  updateProjectDetails(
    fileName,
    (getProjectDetails(fileName) || [])
      .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)) // sort by name
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
      )
  );
}

export function cleanProjectGroups() {
  updateProjectGroupDetails(
    getProjectGroupDetails()
      .sort((a, b) =>
        a.name == "Other"
          ? 1
          : b.name == "Other"
          ? -1
          : a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : 1
      ) // sort by name and move Other to the end always
      .map(
        // sort keys in the object
        ({ name, description, data_file }) => {
          return { name, description, data_file };
        }
      )
  );
}

export function cleanAllDataFiles() {
  readdirSync("projects").forEach(cleanProjectFile);
  cleanProjectGroups();
}
