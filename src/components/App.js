import React, {useState, useEffect} from "react";
import QuizCard from "./QuizCard";
import Board from "./Board";
import url from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if(questionNumber <= questionCount){
      if(quiz[questionNumber].answer === userAnswer){
        toast.success(' True ! ', {
          position: "bottom-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
        setScore(score+1);
      }
      else{
        toast.error(' False ! ', {
          position: "bottom-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }  
    }
    isLastQuestion();    
  }

  const isLastQuestion = () => {
    if(questionNumber < questionCount){
      setQuestionNumber(questionNumber+1);
    }    
    else{
      //todo
    }
  }

  return (
    <React.Fragment>
      <ToastContainer
        position="bottom-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"dark"}
      />
      <Board title="Question" number={questionNumber + 1} descrip={`of ${questionCount + 1}`} position="left"/>
      <QuizCard quiz={quiz} submitAnswer={submitAnswer} questionNumber={questionNumber}/>
      <Board title="Score" number={score} descrip="point" position="right"/>
    </React.Fragment>

  );
}

export default App;
