import React, { Component } from "react";
import { Layout } from "element-react";

import Header from "./components/Header/Header";
import ExerciseContainer from "./components/Exercises/ExercisesContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout.Row>
          <Header />
        </Layout.Row>
        <Layout.Row>
          <main>
            <ExerciseContainer />
          </main>
        </Layout.Row>
      </div>
    );
  }
}

export default App;
