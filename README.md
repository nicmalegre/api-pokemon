# Searching Pokemons

## About this project

React project that allows the user to search for pokemons found in the following API: https://pokeapi.co/

If you want to see the result, you can go to: https://nicmalegre.github.io/api-pokemon/
Also is avaliable on: https://react-api-poke.herokuapp.com/

**Technologies and libraries:**

- React
- React-router-dom
- react-query
- Material-UI
- Jest
- Enzyme

## File structure

I didn't use a particular file structure, but it’s similar to the one mentioned in: https://es.reactjs.org/docs/faq-structure.html#grouping-by-file-type called “grouping by type file” where the idea is to group similar files. For example:

- api
- assets
- components
- pages
- test

## What commands did I run to create this project?

If you want to start this project from scratch, first, make sure you have installed npm and then you need to know the following commands:

- npx create react-app .
- npm install
- npm install @material-ui/core
- npm install @material-ui/lab
- npm i react-query
- npm install react-router-dom
- npm install --save-dev jest
- npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer

## How to run the project locally?

1. Make sure you have npm installed

- For more information go to: https://docs.npmjs.com/cli/v6/commands/npm-install

2. Clone the repository
   > git clone https://github.com/nicmalegre/api-pokemon.git
3. Go to the project
   > cd api-pokemon
4. Install all:
   > npm install
5. Now run the app:
   > npm start
6. By default the server will run in the port localhost:3000
7. Enjoy it!!! 💻💻

## How to create a build locally?

1. Make sure you have npm installed

- For more information go to: https://docs.npmjs.com/cli/v6/commands/npm-install

2. Clone the repository
   > git clone https://github.com/nicmalegre/api-pokemon.git
3. Go to the project
   > cd api-pokemon
4. Install all:
   > npm install
5. Run the following command for create the build:
   > npm run build

## How to deploy to Github Pages?

Requirements:

- GitHub account
- Git installed
- Nodejs installed

**STEPS:**

1. Open the bash and go to the project folder.
2. Install gh-pages:
   > npm install gh-pages --save-dev
3. Go to the package.json file and add a new line at the top:

- “homepage”: “http://nicmalegre.github.io/api-pokemon/”,

4. Add two new lines to the script:

- “predeploy”: “npm run build”,
- “deploy”: “gh-pages -d build”,

5. Now, everty time you want to deploy to gh-pages, just run:
   > npm run deploy

## How to run the tests?

> npm run test
