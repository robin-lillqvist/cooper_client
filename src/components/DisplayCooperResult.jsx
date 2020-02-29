import React from "react";

import coopercalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = coopercalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
      <div className="ui one column centered grid">
        <div className="ui four column centered row">
          <div className="centered column"><div id="cooper-message">{age} y/o {gender} running {distance} meters.</div></div>
        </div>
        <div className="ui four column centered row">
          <div className="centered column"><div id="cooper-result">Result: {result}</div></div>
        </div>
      </div>

          {authenticated && !entrySaved ? (
            <div className="ui one column centered grid">
            <div className="ui four column centered row">
              <div className="centered column"><button className="ui primary button" id="save-result" onClick={() => saveData(result, distance, entryHandler)}>Save entry</button></div>
            </div>
          </div>
            ) : (
            <div className="ui one column centered grid">
              <div className="ui four column centered row">
                <div className="centered column"><p id="response-message">Your entry was saved</p></div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;