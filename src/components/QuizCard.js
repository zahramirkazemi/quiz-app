import React from "react";
import Question from "./Question";
import Options from "./Options";

const QuizCard = ({quiz, questionNumber, submitAnswer}) => {
    
    return ( 
        <div className="w-4/5 md:w-3/4 lg:w-1/2 rounded-lg mx-auto p-6 bg-gray-900 text-center flex flex-col gap-2 drop-shadow-xl">
        {
          quiz[questionNumber] ? <Question question={quiz[questionNumber].question}/>: ''
        }
        {
          quiz[questionNumber] ? <Options options={quiz[questionNumber].options} submitAnswer={submitAnswer}/>: ''
        }
      </div>      
    );
}
 
export default QuizCard;