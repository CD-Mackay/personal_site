## Introduction
  - Welcome to the codebase for my personal website. To view the site itself, click [here](https://connor-mackay-site.herokuapp.com/)

### Organization

  - Each component consists of two files, a .js file containing attached functions and JSX layout, and a module.css file containign styling.
  - [Component.js] - Features the layout and list of components used in each game.
  - [Component.module.css] - Contains the styling for each Game/Component

  - Imports are organized as follows:
    - Framework Imports: NextJs features and other libraries
    - Component Imports
    - Asset Imports: Icons and imported data
    - CSS Imports: Styled components and other CSS Assets

  - Note: Js. files for individual pages do not contain module.css files, global styling is handled through globals.css.

 #### Example of Component

 ```
 // Framework Imports
import React from 'react';


// CSS Imports
import StyledExample from './StyledExample';

const Example = () => {
  return (
    <StyledExample>
      <p>I am Example</p>
    </StyledExample>
  )
};

export default Example;

```

 #### Features
  - This site is divided into three pages.
    - / - Homepage: Contains a brief introduction, a catalog of recently completed projects and a list of skills.
    - /resume - Resume page: Contains an html version of my resume, with instructions for saving as PDF
    - /game - Tic-Tac-Toe: A sample of the Mini-Arcade application (codebase [here](https://github.com/CD-Mackay/mini-arcade)). Play a game of Tic-Tac-Toe against a colleague, or challenge my javascript based Tic-Tac-Toe algorithm. 
