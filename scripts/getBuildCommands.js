export function getBuildCommands(project) {
  const { name, repo, repo_branch, commands, output_dir } = project;
  return [
    repo_branch !== null && repo_branch
      ? `git clone --depth=1 -b ${repo_branch} ${repo}`
      : `git clone --depth=1 ${repo}`,
    `cd ${repo.split("/")[4]}`,
    ...commands,
    "cd ..",
    `tar czf "${name}.tar.gz" ${output_dir}`,
  ];
}
