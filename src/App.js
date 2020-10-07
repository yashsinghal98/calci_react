import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";
export default function App() {
  const handleclick = function (value) {
    const temp = expr + value;
    setexpr(temp);
  };
  const calc = function () {
    try {
      const ans = evaluate(expr);
      setexpr(ans);
    } catch {
      setexpr("");
    }
  };
  const clear = function () {
    setexpr("");
  };
  const [expr, setexpr] = React.useState("");
  return (
    <>
      <div className="nav">Calculator</div>
      <div className="box">
        <div className="innerbox">{expr}</div>
        <div className="numberbox">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "*", "/", "+", "-"].map((el) => (
            <button
              key={el}
              onClick={function () {
                handleclick(el);
              }}
            >
              {el}
            </button>
          ))}
          <button
            key="="
            onClick={function () {
              calc();
            }}
          >
            =
          </button>
          <button
            key="clear"
            onClick={function () {
              clear();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
