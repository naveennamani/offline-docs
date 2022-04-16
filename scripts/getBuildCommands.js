export function getBuildCommands(project) {
  const { name, repo, commands, output_dir } = project;
  return [
    `git clone --depth=1 ${repo}`,
    `cd ${repo.split("/")[4]}`,
    ...commands,
    "cd ..",
    `tar czf "${name}.tar.gz" ${output_dir}`,
  ];
}
