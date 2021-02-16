## Setting up tools for web development
1. [Install homebrew](https://brew.sh/)
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    brew update
    ```
2. [Install vscode](https://code.visualstudio.com/)
    ```
    brew cask install visual-studio-code
    ```
3. [Install git](https://git-scm.com/download/mac)
    ```
    brew install git
    ```
4. [Install yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
    ```
    brew install yarn
    ```

## Create React App

1. [Create new website project](https://create-react-app.dev/docs/adding-typescript/)
    ```
    yarn create react-app  <APPNAME> --template typescript
    cd <APPNAME>; 
    ```
2. EDIT: Add this CRA linter instead: https://www.npmjs.com/package/eslint-config-react-app. ~~[Add typescript linting](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
    Special linting setup for Create-React-App: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project~~
    
    ```
    yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
    touch .eslintrc.js file
    touch .eslintignore file
    # follow instructions in the 2nd link to customize your config or ask a dev mentor

    yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
    touch .prettierrc.js
    # follow instructions in the 2nd link to customize your config or ask a dev mentor
    ```
3. [Remove un-needed boilerplate](https://typeofnan.dev/your-first-react-typescript-project-todo-app/)
    ```
    rm src/serviceWorker.ts
    rm src/setupTests.ts
    rm src/App.test.tsx
    rm src/index.css
    rm src/App.css
    rm src/logo.svg
    # remove references to serviceWorker and index.css from index.tsx
    # remove references to logo.svg and App.css from App.tsx
    # replace App() component with a simpler return()
    ```

## Building React components

1. Build components incrementally
    ```
    App - manually write ToDoList
    ToDoList - manually write ToDoListItem
    ToDoListItem - static items
    ToDoList - static list of items, pass list to child as props
    ToDoList - useState and button to init and increment list of items
    AddToDoForm - create a form component to increment the list of items
    ```


## Local testing and debugging
1. Start a local server

  ```
  yarn start
  ```


## Deployment

1. Instructions on setting up firebase
2. create firebase project
3. install firebase cli
4. Set up firebase in project

  ```
  # 3. Install and configure firebase CLI

  yarn add global firebase-tools
  firebase login
  firebase projects:list

  # 4. Link your local project with firebase
  firebase init
  - Hosting: Configure and deploy Firebase Hosting sites
  - Use an existing project
  - select project by name
  - build
  - y

  # 5. Build the react app to be served live
  yarn run build

  # 6. Deploy the /build folder to a public site via firebase
  firebase deploy
  ```

Sources:
1. https://firebase.google.com/docs/hosting/quickstart
2. https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing