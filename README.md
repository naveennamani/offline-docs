# Offline-docs

A collection of scripts to build offline documentation for your favourite
frameworks/libraries/projects. Simply search, copy/paste the commands and enjoy.

## Available projects

Currently 51 projects available

- [Backend](#backend)
  * [expressjs](#expressjs)
  * [nodejs](#nodejs)
- [Blockchain](#blockchain)
  * [ethereum](#ethereum)
  * [hardhat](#hardhat)
  * [matic.js](#maticjs)
    + [Direct links](#direct-links)
  * [polygon (matic)](#polygon-matic)
  * [solidity](#solidity)
    + [Direct links](#direct-links-1)
  * [waffle](#waffle)
    + [Direct links](#direct-links-2)
- [Build tools](#build-tools)
  * [vite](#vite)
- [Cross platform app development](#cross-platform-app-development)
  * [React Native](#react-native)
  * [tauri](#tauri)
- [CSS frameworks/libraries](#css-frameworkslibraries)
  * [bootstrap 5](#bootstrap-5)
  * [daisyui](#daisyui)
  * [material ui](#material-ui)
  * [polygonmesh](#polygonmesh)
    + [Direct links](#direct-links-3)
  * [storybook](#storybook)
  * [tailwindcss](#tailwindcss)
  * [windicss](#windicss)
- [Frontend javascript frameworks/libraries](#frontend-javascript-frameworkslibraries)
  * [axios](#axios)
  * [react-redux](#react-redux)
  * [reactjs](#reactjs)
  * [redux](#redux)
  * [redux toolkit](#redux-toolkit)
  * [RxJS](#rxjs)
  * [vuejs V3](#vuejs-v3)
- [Javascript testing libraries](#javascript-testing-libraries)
  * [chaijs](#chaijs)
  * [mochajs](#mochajs)
  * [playwright.dev](#playwrightdev)
- [Machine learning](#machine-learning)
  * [keras](#keras)
  * [numpy](#numpy)
    + [Direct links](#direct-links-4)
  * [numpy-tutorials](#numpy-tutorials)
  * [pandas](#pandas)
    + [Direct links](#direct-links-5)
  * [scipy cookbook](#scipy-cookbook)
    + [Direct links](#direct-links-6)
  * [scipy devdocs](#scipy-devdocs)
    + [Direct links](#direct-links-7)
  * [scipy.org website](#scipyorg-website)
- [Programming languages](#programming-languages)
  * [gobyexample](#gobyexample)
- [Python](#python)
  * [pydantic](#pydantic)
  * [requests](#requests)
    + [Direct links](#direct-links-8)
  * [sqlalchemy](#sqlalchemy)
    + [Direct links](#direct-links-9)
  * [typer](#typer)
- [Python web frameworks](#python-web-frameworks)
  * [bottle](#bottle)
    + [Direct links](#direct-links-10)
  * [django](#django)
    + [Direct links](#direct-links-11)
  * [fastapi](#fastapi)
  * [flask](#flask)
- [SSG, SSR](#ssg-ssr)
  * [Nuxtjs](#nuxtjs)
  * [Nuxtjs V3](#nuxtjs-v3)
  * [vitepress](#vitepress)
- [Other](#other)
  * [eslint](#eslint)
  * [Mozilla Developer Network](#mozilla-developer-network)
  * [prettier](#prettier)
  * [typescript](#typescript)

## But why? / Motivation

Learning or working on a new language/framework/library often requires referring
to the official docs multiple times. With the rise of **Static Site Generation
(SSG)** many documentation sites are now open-source and can be built for
offline usage. This project aims to collect all such projects and the build
commands to have a knowledge of widely used SSG tools.

## How to contribute

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md)

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
   `python -m http.server`. (We recommend using serve package if no tool is
   specified by default)

# Backend

<details>
<summary>

## expressjs

</summary>

Website - https://expressjs.com

Source code repo - https://github.com/expressjs/expressjs.com

Fast, unopinionated, minimalist web framework for Node.js

```sh
git clone --depth=1 https://github.com/expressjs/expressjs.com
cd expressjs.com
bundle install
gem install jekyll-redirect-from
bundle exec jekyll build
cd ..
tar czf "expressjs.tar.gz" expressjs.com/_site
```

Last tested on: 2022-05-21

</details>

<details>
<summary>

## nodejs

</summary>

Website - https://nodejs.org/en/

Source code repo - https://github.com/nodejs/node

Javascript runtime built on Chrome's V8 JavaScript engine

```sh
git clone --depth=1 https://github.com/nodejs/node
cd node
./configure
mkdir out/Release
# Find out the location of the installed node binary
which node
# Copy the node binary to out/Release folder
cp node out/Release
make test-doc
cd ..
tar czf "nodejs.tar.gz" node/out/doc/api
```

Last tested on: 2022-04-23

> Requires python and node installed.

</details>

# Blockchain

Tools, projects, frameworks related to blockchain development

<details>
<summary>

## ethereum

</summary>

Website - https://ethereum.org/en/

Source code repo - https://github.com/ethereum/ethereum-org-website

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

</details>

<details>
<summary>

## hardhat

</summary>

Website - https://hardhat.org

Source code repo - https://github.com/NomicFoundation/hardhat

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

</details>

<details>
<summary>

## matic.js

</summary>

Website - https://maticnetwork.github.io/matic.js/

Source code repo - https://github.com/maticnetwork/matic.js

The @matic.js is a javascript library which helps in interacting with the various components of Matic Network.

```sh
git clone --depth=1 -b docs https://github.com/maticnetwork/matic.js
cd matic.js
npm ci
npm run deploy
cd ..
tar czf "matic.js.tar.gz" matic.js/build
```

### Direct links

- [Github pages](https://github.com/maticnetwork/matic.js/archive/refs/heads/gh-pages.zip)

Last tested on: 2022-05-07

> Requires node v14

</details>

<details>
<summary>

## polygon (matic)

</summary>

Website - https://docs.polygon.technology/

Source code repo - https://github.com/maticnetwork/matic-docs

Polygon PoS documentation

```sh
git clone --depth=1 https://github.com/maticnetwork/matic-docs
cd matic-docs
npm install
npm run build
cd ..
tar czf "polygon (matic).tar.gz" matic-docs/build
```

Last tested on: 2022-05-07

</details>

<details>
<summary>

## solidity

</summary>

Website - https://docs.soliditylang.org/en/v0.8.13/

Source code repo - https://github.com/ethereum/solidity

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

- [Latest EPUB](https://docs.soliditylang.org/_/downloads/en/latest/epub/)
- [Latest HTML Zip](https://docs.soliditylang.org/_/downloads/en/latest/htmlzip/)
- [Latest PDF](https://docs.soliditylang.org/_/downloads/en/latest/pdf/)

Last tested on: 2022-04-19

</details>

<details>
<summary>

## waffle

</summary>

Website - https://getwaffle.io

Source code repo - https://github.com/EthWorks/Waffle

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

- [Latest EPUB](https://ethereum-waffle.readthedocs.io/_/downloads/en/latest/epub/)
- [Latest HTML Zip](https://ethereum-waffle.readthedocs.io/_/downloads/en/latest/htmlzip/)
- [Latest PDF](https://ethereum-waffle.readthedocs.io/_/downloads/en/latest/pdf/)

Last tested on: 2022-04-19

</details>

# Build tools

<details>
<summary>

## vite

</summary>

Website - https://vitejs.dev

Source code repo - https://github.com/vitejs/vite

vite: Next Generation Frontend Tooling

```sh
git clone --depth=1 https://github.com/vitejs/vite
cd vite
npm i -g pnpm
npx pnpm i --store=node_modules/.pnpm-store && npm run ci-docs
cd ..
tar czf "vite.tar.gz" vite/docs/.vitepress/dist
```

Last tested on: 2022-04-23

</details>

# Cross platform app development

Tools useful for development of crossplatform apps

<details>
<summary>

## React Native

</summary>

Website - https://react-native.dev

Source code repo - https://github.com/facebook/react-native-website

Create native apps for Android and iOS using React

```sh
git clone --depth=1 https://github.com/facebook/react-native-website
cd react-native-website
yarn install
cd website
yarn build
cd ..
cd ..
tar czf "React Native.tar.gz" react-native-website/website/build
```

Last tested on: 2022-05-01

</details>

<details>
<summary>

## tauri

</summary>

Website - https://tauri.studio/

Source code repo - https://github.com/tauri-apps/tauri-docs

Build smaller, faster, and more secure desktop applications with a web frontend

```sh
git clone --depth=1 https://github.com/tauri-apps/tauri-docs
cd tauri-docs
yarn install
yarn build
cd ..
tar czf "tauri.tar.gz" tauri-docs/build
```

Last tested on: 2022-05-07

</details>

# CSS frameworks/libraries

<details>
<summary>

## bootstrap 5

</summary>

Website - https://getbootstrap.com/

Source code repo - https://github.com/twbs/bootstrap

The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.

```sh
git clone --depth=1 https://github.com/twbs/bootstrap
cd bootstrap
npm install
npm run docs-build
cd ..
tar czf "bootstrap 5.tar.gz" bootstrap/_site
```

Last tested on: 2022-04-23

> Website of a css framework has broken css, I don't know?

</details>

<details>
<summary>

## daisyui

</summary>

Website - https://daisyui.com

Source code repo - https://github.com/saadeghi/daisyui

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

</details>

<details>
<summary>

## material ui

</summary>

Website - https://mui.com

Source code repo - https://github.com/mui/material-ui/

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

</details>

<details>
<summary>

## polygonmesh

</summary>

Website - https://maticnetwork.github.io/polygonmesh

Source code repo - https://github.com/maticnetwork/polygonmesh

PolygonMesh is an open-source design system crafted meticulously by the designers and developer at Polygon Technology.

```sh
git clone --depth=1 -b docs https://github.com/maticnetwork/polygonmesh
cd polygonmesh
npm ci
npm run deploy
cd ..
tar czf "polygonmesh.tar.gz" polygonmesh/build
```

### Direct links

- [Github pages](https://github.com/maticnetwork/polygonmesh/archive/refs/heads/gh-pages.zip)

Last tested on: 2022-05-07

> Requires node v14

</details>

<details>
<summary>

## storybook

</summary>

Website - https://storybook.js.org

Source code repo - https://github.com/storybookjs/frontpage

Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

```sh
git clone --depth=1 https://github.com/storybookjs/frontpage
cd frontpage
yarn install
yarn build:with-prefix
cd ..
tar czf "storybook.tar.gz" frontpage/public
```

Last tested on: 2022-05-07

</details>

<details>
<summary>

## tailwindcss

</summary>

Website - https://tailwindcss.com

Source code repo - https://github.com/tailwindlabs/tailwindcss.com

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

</details>

<details>
<summary>

## windicss

</summary>

Website - https://windicss.org

Source code repo - https://github.com/windicss/docs

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

</details>

# Frontend javascript frameworks/libraries

<details>
<summary>

## axios

</summary>

Website - https://axios-http.com

Source code repo - https://github.com/axios/axios-docs

Promise based HTTP client for the browser and node.js

```sh
git clone --depth=1 https://github.com/axios/axios-docs
cd axios-docs
npm install -g inert-ssg
inert build
cd ..
tar czf "axios.tar.gz" axios-docs/public
```

Last tested on: 2022-05-21

</details>

<details>
<summary>

## react-redux

</summary>

Website - https://react-redux.js.org/

Source code repo - https://github.com/reduxjs/react-redux

Official React bindings for Redux

```sh
git clone --depth=1 https://github.com/reduxjs/react-redux
cd react-redux
cd website
npm install
npm run build
cd ..
cd ..
tar czf "react-redux.tar.gz" react-redux/website/build
```

Last tested on: 2022-04-30

</details>

<details>
<summary>

## reactjs

</summary>

Website - https://reactjs.org

Source code repo - https://github.com/reactjs/reactjs.org

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

</details>

<details>
<summary>

## redux

</summary>

Website - https://redux.js.org/

Source code repo - https://github.com/reduxjs/redux

Redux is a predictable state container for JavaScript apps.

```sh
git clone --depth=1 https://github.com/reduxjs/redux
cd redux
cd website
npm install
npm run build
cd ..
cd ..
tar czf "redux.tar.gz" redux/website/build
```

Last tested on: 2022-04-29

</details>

<details>
<summary>

## redux toolkit

</summary>

Website - https://redux-toolkit.js.org/

Source code repo - https://github.com/reduxjs/redux-toolkit

The official, opinionated, batteries-included toolset for efficient Redux development.

```sh
git clone --depth=1 https://github.com/reduxjs/redux-toolkit
cd redux-toolkit
cd website
npm install
npm run build
cd ..
cd ..
tar czf "redux toolkit.tar.gz" redux-toolkit/website/build
```

Last tested on: 2022-04-30

</details>

<details>
<summary>

## RxJS

</summary>

Website - https://rxjs.dev

Source code repo - https://github.com/ReactiveX/rxjs

Reactive Extensions Library for Javascript

```sh
git clone --depth=1 -b  https://github.com/ReactiveX/rxjs
cd rxjs
cd docs_app
yarn install
npm run ~~clean-generated && npm run docs && npm run ~~build
cd ..
cd ..
tar czf "RxJS.tar.gz" rxjs/docs_app/dist
```

Last tested on: 2022-09-15

</details>

<details>
<summary>

## vuejs V3

</summary>

Website - https://v3.vuejs.org

Source code repo - https://github.com/vuejs/docs

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

</details>

# Javascript testing libraries

<details>
<summary>

## chaijs

</summary>

Website - https://www.chaijs.com/

Source code repo - https://github.com/chaijs/chaijs.github.io

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

</details>

<details>
<summary>

## mochajs

</summary>

Website - https://mochajs.org

Source code repo - https://github.com/mochajs/mocha

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

</details>

<details>
<summary>

## playwright.dev

</summary>

Website - https://playwright.dev/

Source code repo - https://github.com/microsoft/playwright.dev

Reliable end-to-end testing for modern web apps

```sh
git clone --depth=1 https://github.com/microsoft/playwright.dev
cd playwright.dev
npm install
npm run build
cd ..
tar czf "playwright.dev.tar.gz" playwright.dev/build
```

Last tested on: 2022-07-03

</details>

# Machine learning

Useful libraries for learning Machine Learning

<details>
<summary>

## keras

</summary>

Website - https://keras.io

Source code repo - https://github.com/keras-team/keras-io

Simple. Flexible. Powerful. Deep learning for humans.

```sh
git clone --depth=1 https://github.com/keras-team/keras-io
cd keras-io
pip install -r requirements.txt
cd scripts
python autogen.py make
cd ..
cd ..
tar czf "keras.tar.gz" keras-io/site
```

Last tested on: 2022-05-23

</details>

<details>
<summary>

## numpy

</summary>

Website - https://numpy.org/

Source code repo - https://github.com/numpy/numpy

The fundamental package for scientific computing with Python

```sh
git clone --depth=1 https://github.com/numpy/numpy
cd numpy
pip install -r doc_requirements.txt
cd doc/
make html
# it will throw an error saying installed version is not matching and will also show command as follows
GITVER=abcdef make html ...
cd ..
tar czf "numpy.tar.gz" numpy/doc/build/html
```

### Direct links

- [NumPy Reference Guide - latest PDF](https://numpy.org/doc/stable/numpy-ref.pdf)
- [NumPy User Guide - HTML ZIP](https://numpy.org/doc/stable/numpy-html.zip)
- [NumPy User Guide - latest PDF](https://numpy.org/doc/stable/numpy-user.pdf)
- [Old versions (HTML + ZIP, reference pdf, user pdf)](https://numpy.org/doc/)

Last tested on: 2022-05-09

</details>

<details>
<summary>

## numpy-tutorials

</summary>

Website - https://numpy.org/numpy-tutorials/

Source code repo - https://github.com/numpy/numpy-tutorials

Set of tutorials and educational materials to learn numpy

```sh
git clone --depth=1 https://github.com/numpy/numpy-tutorials
cd numpy-tutorials
cd site
pip install -r requirements.txt
make html
cd ..
cd ..
tar czf "numpy-tutorials.tar.gz" numpy-tutorials/site/_build
```

Last tested on: 2022-05-10

> numpy-tutorials uses jupyter notebooks to generate content, and therefore some examples may be broken due to missing libraries (for ex. ffmpeg)

</details>

<details>
<summary>

## pandas

</summary>

Website - https://pandas.pydata.org

Source code repo - https://github.com/pandas-dev/pandas

pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language

```sh
git clone --depth=1 https://github.com/pandas-dev/pandas
cd pandas
cd ..
tar czf "pandas.tar.gz" ./
```

### Direct links

- [Latest PDF](https://pandas.pydata.org/docs/pandas.pdf)
- [Workflow artifacts](https://github.com/pandas-dev/pandas/actions/workflows/docbuild-and-upload.yml)
- [pandas cheatsheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)

Last tested on: 2022-05-24

> pandas uploads the contents of the website as artifacts of docbuild-and-upload workflow. Setting up conda environment and running all those commands is honestly an overkill. Just go to the workflow page, pick a latest successful workflow run and download the artifact. Serve using `python -m http.server` for best results

</details>

<details>
<summary>

## scipy cookbook

</summary>

Website - https://scipy-cookbook.readthedocs.io

Source code repo - https://github.com/scipy/scipy-cookbook

Collection of various uses-contributed recipes to learn scipy

```sh
git clone --depth=1 https://github.com/scipy/scipy-cookbook
cd scipy-cookbook
pip install -r requirements.txt
python build.py --html
cd ..
tar czf "scipy cookbook.tar.gz" scipy.org/public
```

### Direct links

- [Latest HTML + ZIP](https://scipy-cookbook.readthedocs.io/_/downloads/en/latest/htmlzip/)

Last tested on: 2022-05-18

> The latest HTML builds are failing, clone the repository and explore the jupyter notebooks for a better experience

</details>

<details>
<summary>

## scipy devdocs

</summary>

Website - https://scipy.github.io/devdocs

Source code repo - https://github.com/scipy/devdocs

SciPy documentation

```sh
git clone --depth=1 https://github.com/scipy/devdocs
cd devdocs
# the repository is automatically updated with latest docs
cd ..
tar czf "scipy devdocs.tar.gz" devdocs/
```

### Direct links

- [SciPy docs (HTML + ZIP)](https://docs.scipy.org/doc/scipy/scipy-html-1.8.0.zip)
- [SciPy docs PDF (v1.8.0)](https://docs.scipy.org/doc/scipy/scipy-ref-1.8.0.pdf)
- [Scipy docs other versions](https://docs.scipy.org/doc/)
- [github pages](https://github.com/scipy/devdocs/archive/refs/heads/gh-pages.zip)

Last tested on: 2022-05-18

> Works well when served using `python -m http.server`

</details>

<details>
<summary>

## scipy.org website

</summary>

Website - https://scipy.org/

Source code repo - https://github.com/scipy/scipy.org

Fundamental algorithms for scientific computing in Python

```sh
git clone --depth=1 https://github.com/scipy/scipy.org
cd scipy.org
pip install -r requirements.txt
brew install hugo
make html
cd ..
tar czf "scipy.org website.tar.gz" scipy.org/public
```

Last tested on: 2022-05-18

> Requires hugo to be installed, follow instructions as per your operating system

</details>

# Programming languages

Official & useful resources to start learning a new programming language

<details>
<summary>

## gobyexample

</summary>

Website - https://gobyexample.com

Source code repo - https://github.com/mmcgrana/gobyexample

A hands-on introduction to Go using annotated example programs

```sh
git clone --depth=1 -b  https://github.com/mmcgrana/gobyexample
cd gobyexample
tools/build
cd ..
tar czf "gobyexample.tar.gz" gobyexample/public
```

Last tested on: 2022-09-16

> Some pages are broken because of missing .html extension. So, run with `npx serve` and add .html extention when necessary. For best results run using the go server code given in tools/serve.go file in the repository.

</details>

# Python

All python related libraries

<details>
<summary>

## pydantic

</summary>

Website - https://pydantic-docs.helpmanual.io/

Source code repo - https://github.com/samuelcolvin/pydantic

pydantic enforces type hints at runtime, and provides user friendly errors when data is invalid.

```sh
git clone --depth=1 https://github.com/samuelcolvin/pydantic
cd pydantic
make install-docs
# Run the following line in case of errors with 'make docs'
echo "def exec_examples(): return 0" > docs/build/exec_examples.py
make docs
cd ..
tar czf "pydantic.tar.gz" pydantic/site
```

Last tested on: 2022-04-23

</details>

<details>
<summary>

## requests

</summary>

Website - https://requests.readthedocs.io/en/latest/

Source code repo - https://github.com/psf/requests

Requests is an elegant and simple HTTP library for Python, built for human beings.

```sh
git clone --depth=1 https://github.com/psf/requests
cd requests
cd docs
pip install -r requirements.txt
make html
cd ..
cd ..
tar czf "requests.tar.gz" requests/docs/_build/html
```

### Direct links

- [Latest EPUB](https://requests.readthedocs.io/_/downloads/en/latest/epub/)
- [Latest HTML ZIP](https://requests.readthedocs.io/_/downloads/en/latest/htmlzip/)
- [Latest PDF](https://requests.readthedocs.io/_/downloads/en/latest/pdf/)
- [Stable EPUB](https://requests.readthedocs.io/_/downloads/en/stable/epub/)
- [Stable HTML ZIP](https://requests.readthedocs.io/_/downloads/en/stable/htmlzip/)
- [Stable PDF](https://requests.readthedocs.io/_/downloads/en/stable/pdf/)

Last tested on: 2022-06-23

</details>

<details>
<summary>

## sqlalchemy

</summary>

Website - https://www.sqlalchemy.org/

Source code repo - https://github.com/sqlalchemy/sqlalchemy

SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL.

```sh
git clone --depth=1 https://github.com/sqlalchemy/sqlalchemy
cd sqlalchemy
cd doc/build
pip install -r requirements.txt
make html
cd ../..
cd ..
tar czf "sqlalchemy.tar.gz" doc/build/output/html
```

### Direct links

- [Latest HTML V1.4](https://docs.sqlalchemy.org/20/sqlalchemy_14.zip)
- [Latest HTML V2.0](https://docs.sqlalchemy.org/20/sqlalchemy_20.zip)

Last tested on: 2022-05-28

</details>

<details>
<summary>

## typer

</summary>

Website - https://typer.tiangolo.com/

Source code repo - https://github.com/tiangolo/typer

Typer is a library for building CLI applications that users will love using and developers will love creating. Based on Python 3.6+ type hints.

```sh
git clone --depth=1 https://github.com/tiangolo/typer
cd typer
pip install flit
flit install --user --extras doc
sh scripts/build-docs.sh
cd ..
tar czf "typer.tar.gz" typer/site
```

Last tested on: 2022-04-23

</details>

# Python web frameworks

Web frameworks for python

<details>
<summary>

## bottle

</summary>

Website - https://bottlepy.org/docs/dev/

Source code repo - https://github.com/bottlepy/bottle

Bottle is a fast, simple and lightweight WSGI micro web-framework for Python. It is distributed as a single file module and has no dependencies other than the Python Standard Library.

```sh
git clone --depth=1 https://github.com/bottlepy/bottle
cd bottle
make docs
cd ..
tar czf "bottle.tar.gz" bottle/build/docs/html
```

### Direct links

- [Latest HTML](https://bottlepy.org/docs/dev/bottle-docs.zip)
- [Latest PDF](https://bottlepy.org/docs/dev/bottle-docs.pdf)

Last tested on: 2022-05-25

</details>

<details>
<summary>

## django

</summary>

Website - https://www.djangoproject.com/

Source code repo - https://github.com/django/django

The web framework for perfectionists with deadlines. Django makes it easier to build better web apps more quickly and with less code.

```sh
git clone --depth=1 https://github.com/django/django
cd django
cd docs
pip install -r requirements.txt
make html
cd ..
cd ..
tar czf "django.tar.gz" django/docs/_build/html
```

### Direct links

- [Latest EPUB](https://django.readthedocs.io/_/downloads/en/latest/epub/)
- [Latest HTML](https://django.readthedocs.io/_/downloads/en/latest/htmlzip/)
- [Latest PDF](https://django.readthedocs.io/_/downloads/en/latest/pdf/)

Last tested on: 2022-05-25

</details>

<details>
<summary>

## fastapi

</summary>

Website - https://fastapi.tiangolo.com/

Source code repo - https://github.com/tiangolo/fastapi

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.

```sh
git clone --depth=1 https://github.com/tiangolo/fastapi
cd fastapi
pip install flit
flit install --user --extras doc
sh scripts/build-docs.sh
cd ..
tar czf "fastapi.tar.gz" fastapi/site
```

Last tested on: 2022-04-23

</details>

<details>
<summary>

## flask

</summary>

Website - https://flask.palletsprojects.com/en/2.1.x/

Source code repo - https://github.com/pallets/flask

Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.

```sh
git clone --depth=1 https://github.com/pallets/flask
cd flask
pip install -e .
pip install -r requirements/docs.txt
cd docs
make html
cd ..
cd ..
tar czf "flask.tar.gz" flask/docs/_build/html
```

Last tested on: 2022-05-25

</details>

# SSG, SSR

Frameworks like nextjs, nuxtjs used for generating static sites

<details>
<summary>

## Nuxtjs

</summary>

Website - https://nuxtjs.org

Source code repo - https://github.com/nuxt/nuxtjs.org

The Intuitive Vue Framework. Build your next Vue.js application with confidence using Nuxt. An open source framework making web development simple and powerful.

```sh
git clone --depth=1 https://github.com/nuxt/nuxtjs.org
cd nuxtjs.org
yarn install
yarn build
cd ..
tar czf "Nuxtjs.tar.gz" nuxtjs.org/dist
```

Last tested on: 2022-04-29

> Due to the file name restrictions on windows, the build may not work properly with client side hydration. Disable the javascript for best experience.

</details>

<details>
<summary>

## Nuxtjs V3

</summary>

Website - https://v3.nuxtjs.org

Source code repo - https://github.com/nuxt/framework

The Intuitive Vue Framework. Build your next Vue.js application with confidence using Nuxt. An open source framework making web development simple and powerful.

```sh
git clone --depth=1 https://github.com/nuxt/framework
cd framework
cd docs
yarn install
yarn build:ci
cd ..
cd ..
tar czf "Nuxtjs V3.tar.gz" framework/docs/dist
```

Last tested on: 2022-04-29

> Due to the file name restrictions on windows, the build may not work properly with client side hydration. Disable the javascript for best experience.

</details>

<details>
<summary>

## vitepress

</summary>

Website - https://vitepress.vuejs.org/

Source code repo - https://github.com/vuejs/vitepress

Vite & Vue Powered Static Site Generator

```sh
git clone --depth=1 https://github.com/vuejs/vitepress
cd vitepress
npm install
npm run docs-build
cd ..
tar czf "vitepress.tar.gz" vitepress/docs/.vitepress/dist
```

Last tested on: 2022-06-06

</details>

# Other

All other uncategorized tools

<details>
<summary>

## eslint

</summary>

Website - https://eslint.org

Source code repo - https://github.com/eslint/website

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

</details>

<details>
<summary>

## Mozilla Developer Network

</summary>

Website - https://developer.mozilla.org

Source code repo - https://github.com/mozilla/content

Resources for Developers, by developers

```sh
git clone --depth=1 -b  https://github.com/mozilla/content
cd content
yarn install
yarn build
cp -r node_modules/@mdn/yari/client/build/ .
cd ..
tar czf "Mozilla Developer Network.tar.gz" content/build
```

Last tested on: 2022-09-17

> MDN is a huge website with more than 11,000 pages. So, instead of building all pages, you may selectively delete unnecessary categories under `files/en-us` folder. Even though you have all HTML pages in build directory, all files are in lowercase whereas links contains camelcase. So, tools such as `python -m http.server` and `npx serve` may not be suitable to serve these HTML pages. Instead a simple and working approach is to open the html pages directly in the browser.

</details>

<details>
<summary>

## prettier

</summary>

Website - https://prettier.io

Source code repo - https://github.com/prettier/prettier

Opinionated code formatter

```sh
git clone --depth=1 https://github.com/prettier/prettier
cd prettier
yarn install
yarn build:website
cd ..
tar czf "prettier.tar.gz" prettier/website/build
```

Last tested on: 2022-04-23

</details>

<details>
<summary>

## typescript

</summary>

Website - https://www.typescriptlang.org/

Source code repo - https://github.com/microsoft/TypeScript-Website

TypeScript is JavaScript with syntax for types.

```sh
git clone --depth=1 https://github.com/microsoft/TypeScript-Website
cd TypeScript-Website
yarn install
yarn bootstrap
yarn build-site
cd ..
tar czf "typescript.tar.gz" TypeScript-Website/docs/build
```

Last tested on: 2022-04-23

> Requires node >=13 and node < 15 for building

</details>

---

## Todo

- [ ] Auto update of README.md on push to main

---

Visit my blog for latest articles related to web development
[https://naveennamani.github.io/blog](https://naveennamani.github.io/blog) and
for projects like this.

Follow me on [dev.to/naveennamani](https://dev.to/naveennamani).

### &copy; Naveen Namani
