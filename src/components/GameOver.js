import React from "react";
import "../index.css";

function GameOver({ setReset, setOpenGameOver, score, questionCount }) {
  return (
    <div className="w-screen h-screen z-10  bg-black-rgba fixed flex justify-center items-center">
      <div className="w-4/5 md:w-3/4 lg:w-1/3 relative p-3 rounded-lg bg-white flex flex-col drop-shadow-xl gap-7 items-center justify-center">
          <h1 className="my-5 font-sans font-semibold text-xs lg:text-lg md:text-base sm:text-xs">GameOver</h1>
          <p className="font-sans text-xs lg:text-lg md:text-base sm:text-xs">You have {score} TRUE answer of {questionCount} Question!</p>
          <button className="my-5 bg-violet-400 rounded-xl drop-shadow-2xl p-3 font-sans font-semibold text-xs lg:text-lg md:text-base sm:text-xs" onClick={() => {
              setOpenGameOver(false);
              setReset(true)
            }}>Start Again</button>
      </div>
    </div>
  );
}
export default GameOver;