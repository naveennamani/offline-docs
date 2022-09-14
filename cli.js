import inquirer from "inquirer";
import { updateReadMe } from "./scripts/updateReadme.js";
import {
  getProjectDetails,
  getProjectGroupDetails,
  updateProjectDetails,
} from "./scripts/utils.js";

async function getProjectGroupFromUser() {
  const project_groups = getProjectGroupDetails();
  const project_group_name = (
    await inquirer.prompt({
      type: "list",
      name: "project_group",
      message: "Select a project group",
      choices: project_groups.map(({ name }) => name),
    })
  ).project_group;
  const project_group_details = project_groups.filter(
    ({ name }) => name === project_group_name
  )[0];
  const project_data_file = project_group_details.data_file;
  return { project_group_details, project_data_file };
}

async function askNewProjectDetails() {
  let answers1 = await inquirer.prompt([
    {
      name: "name",
      message: "Enter website name",
    },
    {
      name: "website",
      message: "Enter website URL",
    },
    {
      name: "description",
      message: "Enter short description of the project",
    },
    {
      name: "repo",
      message: "Enter URL of source code",
    },
    {
      name: "repo_branch",
      message: "Enter branch name for the repo",
    },
    {
      type: "confirm",
      name: "direct_links_ask",
      message: "Do you find any direct URLs for downloading the docs?",
    },
  ]);
  let direct_links = [];
  if (answers1.direct_links_ask) {
    let url_answers = {};
    do {
      url_answers = await inquirer.prompt([
        {
          name: "text",
          message: "Description of the URL",
        },
        {
          name: "link",
          message: "Enter URL",
        },
        {
          type: "confirm",
          name: "more_links",
          message: "Want to add more URLs?",
        },
      ]);
      direct_links.push(url_answers);
    } while (url_answers.more_links);
  }
  let commands = [];
  console.log("Enter commands");
  let command;
  do {
    command = await inquirer.prompt({ name: "command", message: ">>>" });
    commands.push(command.command);
  } while (command.command);
  commands.pop();

  let answers2 = await inquirer.prompt([
    {
      name: "output_dir",
      message: "Output directory for build files",
    },
    {
      name: "last_tested",
      message: "Last tested on",
    },
    {
      name: "note",
      message: "Special notes",
    },
    {
      name: "license",
      message: "License of the repo",
    },
  ]);
  return Object.assign(
    {},
    answers1,
    { commands },
    {
      direct_links: direct_links.map(({ text, link }) => {
        text, link;
      }),
    },
    answers2
  );
}

const { project_data_file } = await getProjectGroupFromUser();
let newProjectDetails = await askNewProjectDetails();

let projects = getProjectDetails(project_data_file);
projects.push(newProjectDetails);
updateProjectDetails(project_data_file, projects);

updateReadMe();
