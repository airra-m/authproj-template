import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Import your store if you have used Redux here and uncoment Provider tag below
//import store from "./store";

// Import your components here
import Homepage from "./components/Homepage";
import NewPage from "./components/NewPage";

class App extends Component {

  render() {

    return (

      //<Provider store={store}>
      <Router>

        <div className="App">

          <Route exact path="/" component={Homepage} />
          <Route exact path="/newpage" component={NewPage} />

        </div>

      </Router>
      //</Provider>

    );

  }

}

export default App;
