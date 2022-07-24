import React, { useState, useEffect, useContext } from "react";

import "./HeroSection.css";

function Pro({ data }) {
  let click = [];
  for (let i = 0; i <= 15; i++) {
    click.push(false);
  }

  const [clicked, setClicked] = useState(click);

  function is_checked(index) {
    const temp = [...clicked];
    temp[index] = !temp[index];
    setClicked(temp);
  }

  var list = [];
  var num = [];
  const lowEnd = 1;
  const highEnd = 30;
  for (var i = 1; i <= 30; i++) {
    num.push(0);
    list.push(false);
  }
  const [checkNum, setCheckNum] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState(list);

  function HandleCheck(index) {
    var templist = checkBoxState;
    var tempNum = checkNum;
    if (templist[index]) {
      setCheckNum(checkNum - 1);
    } else {
      setCheckNum(checkNum + 1);
    }

    templist[index] = !templist[index];
    setCheckBoxState(templist);
    // setCheckNum(tempNum);
  }

  return (
    <>
      <div className="response">
        {data.map((topic, id) => (
          <>
            <div className="center2">
              <button className="center1" onClick={() => is_checked(id)}>
                <div className="sol">
                  <li>{topic.topicName}</li>
                </div>
                <div className="solve">
                  <p>
                    {" "}
                    {checkNum} /{topic.questions.length}{" "}
                  </p>
                </div>
              </button>
              {clicked[id] ? (
                <table className="table">
                  <thead>
                    <th>S.No</th>
                    <th>Problems</th>
                    <th>Status</th>
                  </thead>
                  {topic.questions.map((question, index) => (
                    <tbody>
                      <tr>
                        <td data-label="S.No"> {index + 1} </td>

                        <td data-label="Problems">
                          <a
                            href={question.URL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {question.Problem}
                          </a>
                        </td>
                        <td data-label="Status">
                          <div className="status">
                            <input
                              className="Stat"
                              type="checkbox"
                              onClick={() => HandleCheck(index)}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Pro;
