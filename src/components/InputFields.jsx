import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>  
    <div className="ui one column centered grid">
        <div className="ui four column centered row">
            <div className="centered column">
              <select className="ui dropdown" onChange={onChangeHandler} name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
        </div>

        <div className="ui four column centered row">
            <div className="centered column"><label className="ui blue label">Distance</label></div>
            <div className="centered column"><div className="ui input"><input className="ui input" onChange={onChangeHandler} name="distance" id="distance"></input></div></div>
        </div>

        <div className="ui four column centered row">
            <div className="centered column"><label className="ui blue label">Age</label></div>
            <div className="centered column"><div className="ui input"><input className="ui input" onChange={onChangeHandler} name="age" id="age"></input></div></div>
        </div>
      </div>
    </>
  );
};

export default InputFields;