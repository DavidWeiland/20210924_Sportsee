![shields](https://img.shields.io/badge/version-v1.0-blue)
![shields](https://img.shields.io/badge/make_with-React-red)
![shields](https://img.shields.io/badge/make_with-Recharts-red)
![shields](https://img.shields.io/badge/make_with-CRA_(create--react--app)-red)
![shields](https://img.shields.io/badge/design-OpenClassroom-green)
![shields](https://img.shields.io/badge/web_dev-David_Weiland-green)

# SPORTSEE - APP

As part of the OpenClassroom training, in addition to the creation of a React app, this project aims to work on the use of complementary libraries for the creation of graphs (here using Recharts).

A temporary deployment is available at this url *(need localy api running on port 3000)* : __[Sportsee-App](https://sportsee.vercel.app/)__.

__Note__ : The application needs to connect to an api to work : [Sportsee-API](https://github.com/DavidWeiland/sportsee-API) *(to make the api work, consult the README.md first)*.
__Note__ : As soon as the final api is online, change the value of the path in Utils/Variables/index.js

## Technologies

- JavaScript (React, React-Router, Recharts)
- CSS in React (styled-components)
- CSS in JS
- CSS

## Available Scripts

In the project directory, you can run:

### `yarn start`

#### Running app in development mode

##### Runs the app in the development mode
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

##### The page will reload if you make edits
You will also see any lint errors in the console.

#### Folders Structure

The src folder contains the development elements of the application : 
- /assets : Images (logo) and Icons of the application
- /components : components of the application (graphs and menu)
- /pages : Home(user's choice) or Dashboard (includes components) or Error(404)
- /utils : hooks, styles
- index.jsx : ReactDom with Router

### `yarn test`

(not yet implemented)

### `yarn build`

##### Builds the app for production to the `build` folder
It correctly bundles React in production mode and optimizes the build for the best performance.

##### The build is minified and the filenames include the hashes
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

__CRA :__ You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

__React :__ To learn React, check out the [React documentation](https://reactjs.org/).

__Recharts :__ You can learn more in the [Recharts documentation](https://recharts.org/en-US/api).


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
