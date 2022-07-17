# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





<!-- mycode -->




# EGOV PORTAL

The intention to make this project was to make egov student portal more attractive and colourfull by using RECT App as a frontend, Tailwind as a css and PHP as a backend.

## Tech Stack

Here we use these technical components :

**Client:** React, TailwindCSS

**Server:** Node, Express

## Deployment

To make REACT App use this commands

```bash
  npm create-react-app Name_of_App
```
And then after you should write your code by changing directory.
for set-up Tailwind.css use this command

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwind init -p
```
After run this commands we have to change the content of 'tailwind.config.js' to this lines of code 
```
 content : [
    "./src/ * * / *.{js,jsx,ts,tsx}",
    ] 
```
Add these lines to "index.css"

```
@tailwind base;
@tailwind Components;
@tailwind utilities;

```

## Appendix
Extra tips and resources relating to concepts covered in the website.

Got more tips that you don't see here? Submit a pull request!

### Github tips
#### GitHub commit access with SSH keys
You can choose to use SSH keys to access your repos instead of HTTPS. 
If you use SSH, you don't need to enter your username and password when you are pushing to remote.  
More info: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

#### Initializing a git repo: 2 ways

__Create remote first__  
Create a new repo or fork an existing repo in your Github account online. Then use `git clone <repo.git>` to copy the repo to your local machine. (This is what we did in the workshop.)

__Create local first__  
Locally create a new directory for your project, `cd` to the directory, and enter `git init`. This will turn your directory into a git repo with a `.git` file.

Add a remote with `git remote add <remote_name> <remote_repo_url>` and set this as the repo to push to with `git push -u <remote_name> <local_branch_name>`.

More info:  
https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init  
https://www.atlassian.com/git/tutorials/syncing

#### Git rebase in depth
You can rebase one branch by itself, or rebase a branch onto another branch.   
More info: https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

