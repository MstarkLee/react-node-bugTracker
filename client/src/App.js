import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import BugItemList from "./components/BugItemList";
import AppNavBar from "./components/AppNavBar";
import FilterBar from "./components/FilterBar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <div className="container mt-2">
          <div className="row">
            <div className="col-3">
              <FilterBar />
            </div>
            <div className="col-9">
              <BugItemList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
