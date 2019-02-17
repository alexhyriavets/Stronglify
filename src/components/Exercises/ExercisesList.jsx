import React, { Component } from "react";
import propTypes from "prop-types";
import { Card } from "element-react";
import "./exercises.css";

import { toPairs } from "ramda";

import ExerciseItem from "./ExerciseItem";

class ExercisesList extends Component {
  render() {
    const { exercises, toggleCheckbox } = this.props;

    const exercisesPairs = toPairs(exercises);

    return (
      <Card className="exercises__card" header={<h2>Day 2</h2>}>
        <ul>
          {exercisesPairs.length &&
            exercisesPairs.map(([key, value]) => (
              <ExerciseItem
                key={key}
                exercise={value}
                exerciseId={key}
                toggleCheckbox={toggleCheckbox}
              />
            ))}
        </ul>
      </Card>
    );
  }
}

ExercisesList.propTypes = {
  exercises: propTypes.object.isRequired,
  toggleCheckbox: propTypes.func
};

export default ExercisesList;
