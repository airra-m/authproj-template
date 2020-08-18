# Code template for projects with user submission feature.
## Template uses the MERN stack and Redux. Specifications as follows:

**Backend Dependencies:**
- body-parser
- concurrently
- cors
- dotenv
- express
- is-empty
- mongoose
- validator

**Frontend Dependencies:**
- axios
- classnames
- jwt-decode
- react-redux
- redux
- redux-thunk

## Overview
I created my personal website's temporary landing page using this code. For the purpose of creating a template I have omitted dependencies I used for styling and changed the names of components, paths, and files for standardisation. 

All frontend files are in the `client` directory. All backend files are outside of `client`.

**The structure is complete but do pay attention to file and path naming especially once you start changing them. There are a lot of import/export modules as well as functions being imported/exported in places.**

## Backend
- Run `npm install` on your terminal whilst in the root directory to install dependencies
- Create a separate `.js` file inside the `routes` directory for each route that you want to have in your website, providing there is backend processing in the route
- Import your routes in `server.js` (starting from line 7) eg. `const routeName = require("./routes/yourRouteFileName");`
- Add to `//Routes` section as well in `server.js` (starting from line 35) eg. `app.use("/yourRouteLink", routeName);`
- The `models` directory will contain the model/s you want to use for your database (needed when using Mongoose with MongoDB)
- Inside the `config` directory is a `keys.js` file where you can store your API keys, mongoURI etc. so that passwords/keys are separated.

## Frontend
- Run `npm install` on your terminal whilst in the root directory to install dependencies
- In the `public` directory is your `index.html`, here you can add CDN links and change the `<title>` of your site
- If you upload a `favicon.ico` file inside the public directory, you should be able to change the favicon as well
- The `src` directory will have the `App.js` file where you can import your custom components and `App.css` where you can put write your own CSS in
- There are extra directories within `src` which are for Redux:- `actions`, `reducers`, and `utils` as well as the `store.js` file

## Run `npm run dev` to get the server as well as React running (courtesy of concurrently)

For further details on what each dependency is for and what exactly the code is doing, or if you want to write this from scratch instead, please read Rishi Prasad's detailed blog post [here](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669). It is a 3-part blog post that contains all the instructions of creating a sign in/register authentication project (which is where this code is from).
