Welcome!

### Setup `npm install`

To start this project you will need to setup the project. To install all the libraries required to run this application, simply open up the terminal and run the following command: `npm install`. This will install the required libraries.

### `npm start`

With this command the project will start automatically on localhost:3000.

### `node server.js`

To able to save answers, you will need to starup de database remotely. To do this: start a secondary terminal and make sure your CD is at 'server'. After your in the right path run the node command. This will start the database who listens on port :3001 and al the answers will be send to the file db.json.

### Testing `npm test`

If you want to run unit-tests at the same time your developing. Then open up a third terminal and run the command 'npm test'. This will start the tests in the file 'App.test.js' and the tests will automatically run, everytime you save a file. 

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
