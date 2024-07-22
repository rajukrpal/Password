import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { MdDoneAll } from "react-icons/md";

const App = () => {
  const [type, setType] = useState("password");

  // velidetion
  const [loverCase, setLoverCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [spesiyalCarecter, setSpesiyalCarecter] = useState(false);
  const [EightCharecter, setEightCharecter] = useState(false);

  const hendeleChange = (value) => {
    // regex
    const lover = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const spesial = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    // lovercase validetion
    if (lover.test(value)) {
      setLoverCase(true);
    } else {
      setLoverCase(false);
    }

    // upper casse validetion
    if (upper.test(value)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }

    // number validetion
    if (number.test(value)) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    // spesial validetion
    if (spesial.test(value)) {
      setSpesiyalCarecter(true);
    } else {
      setSpesiyalCarecter(false);
    }

    // length validetion
    if (length.test(value)) {
      setEightCharecter(true);
    } else {
      setEightCharecter(false);
    }
  };

  return (
    <div className="bg-slate-500 h-[100vh]">
      <div className="h-[100vh] flex justify-center items-center">
        <div className="h-40 w-[40vh] bg-white py-3">
          <div className="flex justify-center items-center border border-black p-2">
            <input
              onChange={(e) => hendeleChange(e.target.value)}
              className="w-full outline-none"
              type={type}
            />
            {type === "password" ? (
              <LuEyeOff
                className="cursor-pointer"
                onClick={() => setType("text")}
                size={25}
              />
            ) : (
              <LuEye
                className="cursor-pointer"
                onClick={() => setType("password")}
                size={25}
              />
            )}
          </div>
          <div className="px-2 h-40 bg-pink-400 ">
            <div
              className={
                loverCase
                  ? "velidetion flex items-center gap-3"
                  : "not-velidetion text-gray-300 flex items-center gap-3"
              }
            >
              {" "}
              {loverCase ? (
                <span>
                  <MdDoneAll size={25} />
                </span>
              ) : (
                <span>
                  <RxCross1 />
                </span>
              )}{" "}
              At leater one Lover Case
            </div>
            <div
              className={
                upperCase
                  ? "velidetion flex items-center gap-3"
                  : "not-velidetion text-gray-300 flex items-center gap-3"
              }
            >
              {" "}
              {upperCase ? (
                <span>
                  <MdDoneAll size={25} />
                </span>
              ) : (
                <span>
                  <RxCross1 />
                </span>
              )}{" "}
              At leater one Uper Case
            </div>
            <div
              className={
                number
                  ? "velidetion flex items-center gap-3"
                  : "not-velidetion text-gray-300 flex items-center gap-3"
              }
            >
              {" "}
              {number ? (
                <span>
                  <MdDoneAll size={25} />
                </span>
              ) : (
                <span>
                  <RxCross1 />
                </span>
              )}{" "}
              At leater one number Case
            </div>
            <div
              className={
                spesiyalCarecter
                  ? "velidetion flex items-center gap-3"
                  : "not-velidetion text-gray-300 flex items-center gap-3"
              }
            >
              {spesiyalCarecter ? (
                <span>
                  <MdDoneAll size={25} />
                </span>
              ) : (
                <span>
                  <RxCross1 />
                </span>
              )}{" "}
              At leater one spesiyal carecter
            </div>
            <div
              className={
                EightCharecter
                  ? "velidetion flex items-center gap-3"
                  : "not-velidetion text-gray-300 flex items-center gap-3 q"
              }
            >
              {EightCharecter ? (
                <span>
                  <MdDoneAll size={25} />
                </span>
              ) : (
                <span>
                  <RxCross1 />
                </span>
              )}{" "}
              At Minimum 8 charecter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
