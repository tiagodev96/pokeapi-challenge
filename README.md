<!-- TABLE OF CONTENTS -->
<details>
  <summary id="summary">Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#requirements-accomplished">Requirements Accomplished</a>
      <ul>
        <li><a href="#functional">Functional</a></li>
        <li><a href="#technical">Technical</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was developed to accomplish a Front End Challenge. It consists in a Pokemon Web Application that accesses the PokeApi and display to the user a complete list of pokemons with name, picture, type and the possibility of favorite any pokemon to be shown in another page. It's possible to navigate to single pokemon page and see more details of it.

<p align="right">(<a href="#summary">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

<p align="right">(<a href="#summary">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/tiagodev96/pokeapi-challenge
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Execute project
   ```js
   npm start
   ```

<p align="right">(<a href="#summary">back to top</a>)</p>

<!-- REQUIREMENTS ACCOMPLISHED -->
## Requirements Accomplished

### Functional
* The user should be able to see a main screen with a list of all Pokémons (with corresponding name and image for each of them). :white_check_mark:
* In the main page: apply pagination in the list of Pokémons. :white_check_mark:
* From the main page, while clicking a Pokémon, the user should be able to navigate to another page containing the details of that Pokémon. The user should also be able navigate to the details page of a Pokemon by refreshing the same page. :white_check_mark:
* In the Pokémon details page, the user should see at least 6 descriptions, the image and the name of one Pokémon. :white_check_mark:
* In the Pokémon detail page, the user should be able to favorite the Pokémon. :white_check_mark:
* From the main page, the user should be able to navigate to another page. This page should contain a list of the favorite Pokémons (with corresponding name and image for each of them). :white_check_mark:

#### Functional Plus
* Search Input added to favorite page and main page possibiliting to search for pokemon's name or type :white_check_mark:
* Its possible to favorite a pokemon in the main page and in the detail page :white_check_mark:
* On main page, besides name and image, every card has the type (or types) icon of pokemon :white_check_mark:
* On detail page, the user can change for the next or previous pokemon using a button based on ID of each pokemon :white_check_mark:


### Technical
* The application should be implemented in React. :white_check_mark:
* To get the list of Pókemons and their details, use the PokéAPI: https://pokeapi.co/ (see documentation for more details). :white_check_mark:
* For styling: use SASS, CSS Modules or CSS in JS :white_check_mark:
* Usage of any UI framework adapted to React (Examples: Bootstrap, Semantic UI). :white_check_mark:
* The app should be responsive (adapt UI so it can be displayed in different screen sizes). :white_check_mark:
* The code should contain comments. :white_check_mark:
* In React: usage of hooks, state management, redux, router. :white_check_mark:
* Unit tests in functions and components. (Not perfectly implemented) :triangular_flag_on_post:
* The application code should be submitted in GitHub. :white_check_mark:
* On the README file of GitHub, should be mentioned the following information: small description of the application, functional and technical requirements accomplished, technologies used, and the steps of installation. :white_check_mark:

#### Technical Plus
* Demo Website on Vercel trough the link <a href="https://pokeapi-challenge-eight.vercel.app/" target="_blank">DEMO</a> :white_check_mark:
* LocalStorage implemented to save favorite pokemons :white_check_mark:
