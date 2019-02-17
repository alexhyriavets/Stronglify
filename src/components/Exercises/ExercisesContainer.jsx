import React, { Component } from "react";

import ExercisesList from "./ExercisesList";

const mockExercises = {
  1: {
    title: "Скручивания на наклонной лавке",
    times: "3х10-15",
    order: 1,
    done: false
  },
  2: {
    title: "Приседания со штангой",
    times: "4-5х6-10",
    order: 2,
    done: false
  },
  3: {
    title: "Жим ногами в тренажёре",
    times: "3-4х8-12",
    order: 3,
    done: false
  },
  4: {
    title: "Сгибание ног в тренажёре лёжа",
    times: "3х10-15",
    order: 4,
    done: false
  },
  5: {
    title: "Жим штанги с груди стоя",
    times: "4х6-10",
    order: 5,
    done: false
  },
  6: {
    title: "Жим гантелей сидя",
    times: "3-4х8-12",
    order: 6,
    done: false
  },
  7: {
    title: "Махи гантелями в стороны",
    times: "3x10-15",
    order: 7,
    done: false
  }
};

class ExercisesContainer extends Component {
  state = {
    exercises: mockExercises
  };

  componentDidMount() {
    const exercisesFromLocalStorage = localStorage.getItem("exercises");
    const parsedExervises = Boolean(exercisesFromLocalStorage)
      ? JSON.parse(exercisesFromLocalStorage)
      : mockExercises;

    this.setState(() => ({
      exercises: parsedExervises || mockExercises
    }));
  }

  toggleCheckboxHandler = async id => {
    await this.setState(prevState => ({
      exercises: {
        ...prevState.exercises,
        [id]: {
          ...prevState.exercises[id],
          done: !prevState.exercises[id].done
        }
      }
    }));

    localStorage.setItem("exercises", JSON.stringify(this.state.exercises));
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
