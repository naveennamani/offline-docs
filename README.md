# Offline-docs

A collection of scripts to build offline documentation for your favourite
frameworks/libraries. Simply search, copy/paste the commands and enjoy.

## Available tools

- [Blockchain](#blockchain)
  * [ethereum](#ethereum)
  * [hardhat](#hardhat)
  * [solidity](#solidity)
    + [Direct links](#direct-links)
  * [waffle](#waffle)
    + [Direct links](#direct-links-1)
- [Build tools](#build-tools)
  * [vite](#vite)
- [CSS frameworks/libraries](#css-frameworkslibraries)
  * [daisyui](#daisyui)
  * [material ui](#material-ui)
  * [tailwindcss](#tailwindcss)
  * [windicss](#windicss)
- [Frontend javascript frameworks/libraries](#frontend-javascript-frameworkslibraries)
  * [reactjs](#reactjs)
  * [vuejs V3](#vuejs-v3)
- [Javascript testing libraries](#javascript-testing-libraries)
  * [chaijs](#chaijs)
  * [mochajs](#mochajs)
- [Other](#other)
  * [eslint](#eslint)

## But why? / Motivation

Learning or working on a new language often requires referring to the official
docs multiple times. With the rise of **Static Site Generation (SSG)** many
documentation sites are now open-source and can be built for offline usage. This
project aims to collect all such websites and the build commands to have a
knowledge of widely used SSG tools.

## How to contribute

- `project_groups.yml` file contains categories of websites and `data_file`
  pointing to a file in `projects` directory which contains a list of projects
  belonging to the corresponding group.
- Every file in `projects` directory is a list of projects with each project
  consisting of following information.
  - name, website, description, repo, commands, output_dir, last_tested, note,
    license
- Modify suitable file in `projects` directory and add all information for a new
  project.
- If the project doesn't suits any existing category, add information about new
  category in `project_groups.yml` file.

## How to complain about faulty scripts

Open an issue with as detailed error messages as possible.

## Disclaimer

> All the content generated using the scripts mentioned in this repository are
> copyright of the owners of the repo from which the documentation is generated.
> Only use the generated content for personal use. Terms and conditions for
> sharing/modifying/distributing the generated content will be applicable as per
> the license terms of the original repo.

## How to use this repo

1. Find the framework/library/tool for which you want to build the documentation
   (you can search in the [Available Tools](#available-tools) or with
   <kbd>Ctrl</kbd>+<kbd>F</kbd>)
1. Open a new terminal
1. Copy paste the commands shown
1. Open the output dir as mentioned in the last command (or) unarchive the
   .tar.gz file in your preferred location and rename the folder
1. Use any static site serving tools like
   [serve (npm package)](https://www.npmjs.com/package/serve) or simply
   `python -m http.server`. (We recommend using serve package)

# Blockchain

Tools, projects, frameworks related to blockchain development

## [ethereum](https://ethereum.org/en/)

[Source code repo](https://github.com/ethereum/ethereum-org-website)

Ethereum is a technology that's home to digital money, global payments, and applications.

```sh
git clone --depth=1 https://github.com/ethereum/ethereum-org-website
cd ethereum-org-website
npm install
npx gatsby build
cd ..
tar czf "ethereum.tar.gz" ethereum-org-website/public
```

Last tested on: 2022-04-15 (unable to completely build)

> ethereum.org is really a very big website and statically building it will require lot of CPU resouces as well as deep node_modules folder.

## [hardhat](https://hardhat.org)

[Source code repo](https://github.com/NomicFoundation/hardhat)

Ethereum development environment for professionals.

```sh
git clone --depth=1 https://github.com/NomicFoundation/hardhat
cd hardhat
yarn install
cd docs/
sh build-site.sh
cd ..
cd ..
tar czf "hardhat.tar.gz" hardhat/docs/.vuepress/dist
```

Last tested on: 2022-04-15

## [solidity](https://docs.soliditylang.org/en/v0.8.13/)

[Source code repo](https://github.com/ethereum/solidity)

Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.

```sh
git clone --depth=1 https://github.com/ethereum/solidity
cd solidity
cd docs
pip install -r requirements.txt
make html
cd ..
cd ..
tar czf "solidity.tar.gz" solidity/docs/dist/html
```

### Direct links

- [Latest PDF](https://docs.soliditylang.org/_/downloads/en/latest/pdf/)
- [Latest HTML Zip](https://docs.soliditylang.org/_/downloads/en/latest/htmlzip/)
- [Latest EPUB](https://docs.soliditylang.org/_/downloads/en/latest/epub/)

Last tested on: 2022-04-19

## [waffle](https://getwaffle.io)

[Source code repo](https://github.com/EthWorks/Waffle)

The most advanced framework for testing smart contracts. Sweeter, simpler and faster.

```sh
git clone --depth=1 https://github.com/EthWorks/Waffle
cd Waffle
cd docs
pip install -r requirements.txt
make html
cd ..
cd ..
tar czf "waffle.tar.gz" Waffle/docs/dist/html
```

### Direct links

- [Latest PDF](https://ethereum-waffle.readthedocs.io/_/downloads/en/latest/pdf/)
- [Latest HTML Zip](https://ethereum-waffle.readthedocs.io/_/downloads/en/latest/htmlzip/)
- [Latest EPUB](https://ethereum-waffle.readthedocs.io/_/downloads/en/latest/epub/)

Last tested on: 2022-04-19

# Build tools

## [vite](https://vitejs.dev)

[Source code repo](https://github.com/vitejs/vite)

vite: Next Generation Frontend Tooling

```sh
git clone --depth=1 https://github.com/vitejs/vite
cd vite
npm i -g pnpm
npx pnpm i --store=node_modules/.pnpm-store && npm run ci-docs
cd ..
tar czf "vite.tar.gz" vite/docs/.vitepress/dist
```

Last tested on: 2022-04-15 (failed)

# CSS frameworks/libraries

## [daisyui](https://daisyui.com)

[Source code repo](https://github.com/saadeghi/daisyui)

The most popular, free and open-source Tailwind CSS component library

```sh
git clone --depth=1 https://github.com/saadeghi/daisyui
cd daisyui
cd src/docs/
npm install
npm run build
cd ../..
cd ..
tar czf "daisyui.tar.gz" daisyui/src/docs/build
```

Last tested on: 2022-04-15

## [material ui](https://mui.com)

[Source code repo](https://github.com/mui/material-ui/)

MUI offers a comprehensive suite of UI tools to help you ship new features faster.

```sh
git clone --depth=1 https://github.com/mui/material-ui/
cd material-ui
yarn
yarn docs:build && yarn docs:export
cd ..
tar czf "material ui.tar.gz" material-ui/docs/export
```

Last tested on: 2022-04-15

## [tailwindcss](https://tailwindcss.com)

[Source code repo](https://github.com/tailwindlabs/tailwindcss.com)

Rapidly build modern websites without ever leaving your HTML. tailwindcss is a utility first CSS framework.

```sh
git clone --depth=1 https://github.com/tailwindlabs/tailwindcss.com
cd tailwindcss.com
yarn install
yarn export
cd ..
tar czf "tailwindcss.tar.gz" tailwindcss.com/out
```

Last tested on: 2022-04-15

## [windicss](https://windicss.org)

[Source code repo](https://github.com/windicss/docs)

Next generation utility-first CSS framework.

```sh
git clone --depth=1 https://github.com/windicss/docs
cd docs
npm install pnpm
npx pnpm i --store=node_modules/.pnpm-store
npm run build
cd ..
tar czf "windicss.tar.gz" docs/.vitepress/dist
```

Last tested on: 2022-04-19

# Frontend javascript frameworks/libraries

## [reactjs](https://reactjs.org)

[Source code repo](https://github.com/reactjs/reactjs.org)

Do you really need an introduction to reactjs?

```sh
git clone --depth=1 https://github.com/reactjs/reactjs.org
cd reactjs.org
yarn install
yarn build
cd ..
tar czf "reactjs.tar.gz" reactjs.org/public
```

Last tested on: 2022-04-15

## [vuejs V3](https://v3.vuejs.org)

[Source code repo](https://github.com/vuejs/docs)

The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.

```sh
git clone --depth=1 https://github.com/vuejs/docs
cd docs
npm i -g pnpm
npx pnpm i --store=node_modules/.pnpm-store && npm run ci-docs
cd ..
tar czf "vuejs V3.tar.gz" docs/.vitepress/dist
```

Last tested on: 2022-04-15

# Javascript testing libraries

## [chaijs](https://www.chaijs.com/)

[Source code repo](https://github.com/chaijs/chaijs.github.io)

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

```sh
git clone --depth=1 https://github.com/chaijs/chaijs.github.io
cd chaijs.github.io
npm install
gem install bundler:1.16.1
bundle --update bundler
bundle install
make generated_data
bundle exec jekyll build
cd ..
tar czf "chaijs.tar.gz" chaijs.github.io/_site
```

Last tested on: 2022-04-15

## [mochajs](https://mochajs.org)

[Source code repo](https://github.com/mochajs/mocha)

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

```sh
git clone --depth=1 https://github.com/mochajs/mocha
cd mocha
npm install
npm run start docs.production
cd ..
tar czf "mochajs.tar.gz" mocha/docs/_site
```

Last tested on: 2022-04-15

# Other

All other uncategorized tools

## [eslint](https://eslint.org)

[Source code repo](https://github.com/eslint/website)

Find and fix problems in your JavaScript code

```sh
git clone --depth=1 https://github.com/eslint/website
cd website
npm install
npm run build
cd ..
tar czf "eslint.tar.gz" website/_site
```

Last tested on: 2022-04-15

---

## Todo

- [ ] Auto update of README.md on push to main
- [ ] Mozilla Developer Network

---

Visit my blog for latest articles related to web development
[https://naveennamani.github.io/blog](https://naveennamani.github.io/blog) and
for projects like this.

Follow me on [dev.to](https://dev.to/naveennamani).

### &copy; Naveen Namani
