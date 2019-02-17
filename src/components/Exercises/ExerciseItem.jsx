import React from "react";
import { Checkbox } from "element-react";
import "./exercises.css";

const ExerciseItem = ({
  exercise: { title, times, done },
  exerciseId,
  toggleCheckbox
}) => {
  const checkboxClasses = `exercises__checkbox ${
    done ? "exercises__checkbox--crossouted" : ""
  }`;

  return (
    <li className="exercises__list-item">
      <div className="exercises__list-item-right">
        <Checkbox
          className={checkboxClasses}
          checked={done}
          onChange={() => toggleCheckbox(exerciseId)}
        >
          {title}
        </Checkbox>
      </div>
      <div className="exercises__list-item-left">
        <span>{times}</span>
      </div>
    </li>
  );
};

export default ExerciseItem;
