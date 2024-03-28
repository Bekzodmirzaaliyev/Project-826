import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (operation) => {
    setOperator(operation);
  };

  const handleEquals = () => {
    let res;
    switch (operator) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }
    setResult(res);
  };

  const handleInput = (value) => {
    if (result !== "") {
      setNum1(value);
      setNum2("");
      setOperator("");
      setResult("");
      handleEquals();
    } else if (operator === "") {
      setNum1(num1 + value);
    } else {
      setNum2(num2 + value);
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="w-64 mx-auto my-8 p-4 border border-gray-300 rounded-lg shadow-lg">
      <input
        type="nummber"
        className="text-right mb-2 w-full py-2 bg-gray-600 text-4xl"
        placeholder={result !== "" ? result : num2 !== "" ? num2 : num1}
      />
      <div className="grid grid-cols-4 gap-2 text-center">
        <button
          onClick={() => handleClear()}
          className="col-span-2 bg-red-500 hover:bg-red-600 text-white rounded-lg py-3"
        >
          C
        </button>
        <button
          onClick={() => handleOperation("/")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperation("*")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          x
        </button>
        <button
          onClick={() => handleInput("9")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          9
        </button>
        <button
          onClick={() => handleInput("8")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          8
        </button>
        <button
          onClick={() => handleInput("7")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          7
        </button>
        <button
          onClick={() => handleOperation("-")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          -
        </button>
        <button
          onClick={() => handleInput("6")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          6
        </button>
        <button
          onClick={() => handleInput("5")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          5
        </button>
        <button
          onClick={() => handleInput("4")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          4
        </button>
        <button
          onClick={() => handleOperation("+")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          +
        </button>
        <button
          onClick={() => handleInput("3")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          3
        </button>
        <button
          onClick={() => handleInput("2")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          2
        </button>
        <button
          onClick={() => handleInput("1")}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          1
        </button>
        <button
          onClick={() => handleEquals()}
          className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-3"
        >
          =
        </button>
        <button
          onClick={() => handleInput("0")}
          className="col-span-4 bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-3"
        >
          0
        </button>
      </div>
    </div>
  );
};
export default Calculator;
