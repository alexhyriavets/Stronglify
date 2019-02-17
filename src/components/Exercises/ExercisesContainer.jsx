import React, { Component } from "react";

import ExercisesList from "./ExercisesList";

const mockExercises = {
  1: {
    title: "Lorem ipsum dolor sit amet.",
    times: "5x12",
    order: 1,
    done: true
  },
  2: {
    title: "Lorem ipsum dolor sit amet.",
    times: "5x42",
    order: 2,
    done: false
  },
  3: {
    title: "Lorem ipsum dolor sit amet.",
    times: "1x12",
    order: 3,
    done: false
  },
  4: {
    title: "Lorem ipsum dolor sit amet.",
    times: "3x10",
    order: 4,
    done: false
  }
};

class ExercisesContainer extends Component {
  state = {
    exercises: mockExercises
  };
  toggleCheckboxHandler = id => {
    this.setState(prevState => ({
      exercises: {
        ...prevState.exercises,
        [id]: {
          ...prevState.exercises[id],
          done: !prevState.exercises[id].done
        }
      }
    }));
  };

  render() {
    return (
      <div className="exercises container">
        <ExercisesList
          exercises={this.state.exercises}
          toggleCheckbox={this.toggleCheckboxHandler}
        />
      </div>
    );
  }
}

export default ExercisesContainer;
