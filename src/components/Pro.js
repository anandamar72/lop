import React, { useState, useEffect, useContext } from "react";
import "./HeroSection.css";

function Pro({ data, id }) {
  useEffect(() => {
    (async () => {
      const res = await localStorage.getItem(data.position);
      const states = await JSON.parse(res);

      setCheckBoxState(states.checkBoxState);
      setCheckNum(states.checkNum);
    })();
  }, []);
  const [clicked, setClicked] = useState(false);
  const questionlength = data.questions.length;

  function is_checked(index) {
    let temp = clicked;
    temp = !temp;
    setClicked(temp);
  }

  const sum = (array) => {
    return array.reduce((acc, cur) => acc + cur, 0);
  };

  var list = [];
  var num = [];
  const lowEnd = 1;
  const highEnd = 61;
  // for (var i = 1; i <= questionlength; i++) {
  //   num.push(0);
  //   list.push(false);
  // }
  const [checkNum, setCheckNum] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState(
    Array(questionlength).fill(false)
  );

  async function HandleCheck(index, position) {
    var templist = checkBoxState;
    var tempNum = checkNum;
    if (templist[index]) {
      setCheckNum(checkNum - 1);
    } else {
      setCheckNum(checkNum + 1);
    }
    templist[index] = !templist[index];
    setCheckBoxState(templist);
    await localStorage.setItem(
      position,
      JSON.stringify({ checkNum, checkBoxState })
    );
  }
  const [name, setName] = useState(false);

  function handleName() {
    var temp = name;
    temp = !temp;
    setName(temp);
    // console.log(temp);
  }

  return (
    <>
      <div className="response">
        <div className="center2">
          <button className="center1" onClick={() => is_checked()}>
            <div className="sol">
              <li>{data.topicName}</li>
            </div>
            <div className="solve">
              <p>
                {sum(checkBoxState)} /{data.questions.length}{" "}
              </p>
            </div>
          </button>

          {clicked ? (
            <table className="table">
              <thead>
                <th>S.No</th>
                <th>Problems</th>
                <th>Status</th>
              </thead>
              {data.questions.map((question, index) => (
                <tbody>
                  <tr>
                    <td data-label="S.No"> {index + 1} </td>

                    <td data-label="Problems">
                      <a href={question.URL} target="_blank" rel="noreferrer">
                        {question.Problem}
                      </a>
                    </td>
                    <td data-label="Status">
                      <div className="status">
                        {checkBoxState[index] ? (
                          <input
                            className="Stat"
                            type="checkbox"
                            value={name}
                            onChange={() => handleName()}
                            onClick={() => HandleCheck(index, data.position)}
                            checked={true}
                          />
                        ) : (
                          <input
                            className="Stat"
                            type="checkbox"
                            value={name}
                            onChange={() => handleName()}
                            onClick={() => HandleCheck(index, data.position)}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Pro;
