## Setup

This project uses yaml files for storing data related to each project. The
projects are grouped into project groups based on the common theme. Details of
project groups are included in `project_groups.yml` file and details of projects
are in yaml files located in `projects` folder. This project uses node.js to
handle these yaml files and to automatically and consistenly generate README.md
file.

So, before contributing anything, first install all dependencies by running
`npm run install`.

## Adding a new project

Every project consists of following information.

- `name`: Name to be displayed for the project
- `website`: URL of the homepage
- `description`: Short description of the project
- `repo`: Source code repo for generating offline documentation
- `repo_branch`: branch to be used for the source code repo (default to main)
- `commands`: List of commands used for generating offline documentation
- `direct_links`: Direct download links for the documentation if provided
- `output_dir`: Directory in which the final offline docs are located (relative
  to your starting directory)
- `last_tested`: Date on which the commands were last tested
- `note`: Instructions/notes to be followed before running the commands
- `license`: License used for the source code repo

For adding a new project run cli.js script from the console.

```
node cli.js
```

- Select appropriate project group for the project.
- Add all possible details about the project when asked.

## Modifying an existing project

For modifying details of any existing project, modify appropriate yaml file in
`projects` folder and then run `index.js` script to update the README.md file
with the changes.
