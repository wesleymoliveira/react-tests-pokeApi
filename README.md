# POKE API TEST!

Check it out here: https://react-hooks-pokeapi.vercel.app/

Hi! It's my number **1** test.

During my learning process I've been looking for and solving tests for React - Dev Junior vacancies.

The quest was to create a React Page that displays all existing Pokémon names using the 'https://pokeapi.co/' API. **The project should use pagination.

My first step was to start the project with static data and stylize the page.
Next, I opened the API to identify the pattern of responses.
Then, using the react hooks, I created the state for the Pokemon's name and fetched the data.
Then I created a new state for the 'URL' to be changed in 'next' and 'previous' pagination.


# PLUS and DIFERENCES FROM ANOTHER PROJECTS

 **HOOKS**
 - Using the hook 'useEffect' passing the 'URL' state as a dependency caused the 'useEffect' to be called again whenever this state changes, for example in the function that calls the next or previous page.

 **PROPS**
 - I decided to put the Pokemon's image, and for that it was necessary to create a prop to pass the url to get the new images.


With this project I've practiced:

 1. Hooks
 2. Styling
 3. States
 4. API Request
 5. Props
 6. Global Styles
 7. Code pattern



## Pages

### RESULT
![RESULT](https://github.com/wesleymoliveira/react-tests-pokeApi/blob/master/assets/Result.png)

### RESULT-BOTTOM
![RESULT-BOT](https://github.com/wesleymoliveira/react-tests-pokeApi/blob/master/assets/Result-bottom.png)

## Libs

⚛ React `yarn create react-app`
> **Note:** This app was created  with create react-app. A ready build setup with no webpack or babel configuration.

 💅🏾 Styled - Components   `yarn add styled-components `
> **Note:** Allow the CSS  use to style any components .

 💅🏾 Polished  `yarn add polished `
> **Note:** Toolset for writing styles .

 - React-icons `yarn add react-icons`
> **Note:** Popular icons.

- Axios `yarn add axios`
> **Note:** Http Request

...

## How to
You will need `yarn`  installed on your machine.

Run the following commands inside the project folder:

1.  `git clone https://github.com/wesleymoliveira/react-tests-pokeApi.git`

2.  `yarn start;`

