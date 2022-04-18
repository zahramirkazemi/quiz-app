import React, {useState, useEffect} from "react";
import QuizCard from "./QuizCard";
import Board from "./Board";
import url from '../api';

function App() {
  const [quiz, setQuiz] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await url.get(`/Question`);
      setQuiz(data);
      setQuestionCount(data.length - 1);
    };
    fetchData();
  }, []);

  const submitAnswer = (userAnswer) => {
    if(questionNumber < questionCount){
      if(quiz[questionNumber].answer === userAnswer){
        setScore(score+1);
      }    
    }
    isLastQuestion();    
  }

  const isLastQuestion = () => {
    if(questionNumber < questionCount){
      setQuestionNumber(questionNumber+1);
    }    
    else{
      alert(`you finished quiz with ${score} true answer of ${questionCount + 1} Qusetions!`)
    }
  }

  return (
    <React.Fragment>
      <Board title="Question" number={questionNumber + 1} descrip={`of ${questionCount + 1}`} position="left"/>
      <QuizCard quiz={quiz} submitAnswer={submitAnswer} questionNumber={questionNumber}/>
      <Board title="Score" number={score} descrip="point" position="right"/>
    </React.Fragment>

  );
}

export default App;
