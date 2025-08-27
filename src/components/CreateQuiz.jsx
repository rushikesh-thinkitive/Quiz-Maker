import { useEffect, useState } from 'react';
import './css/setquiz.css';
import RenderQuiz from './RenderQuiz';
import CreateQuizCard from './CreateQuizCard';
import { toast } from 'react-toastify';

const CreateQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [question, setQuestion] = useState('');
  const [option, setOption] = useState([]);
  const [format, setFormat] = useState('');

  const handleAddQuestion = () => {
    if (question != '' && option.length !== 0) {
      setQuizzes([...quizzes,
      {
        question: question,
        option: option,
        format: format
      }
      ]);
      setQuestion('');
      setOption([]);
      setFormat('');
    }
  }

  const handleSetScore = () => {
    if(!quizzes.every(quiz=>quiz.hasOwnProperty('score')))
      toast.error('Score must set for all questions');
    console.log('cond:',quizzes.every(quiz=>quiz.hasOwnProperty('score')));
    console.log("quizzes:", quizzes);
  }

  useEffect(() => {
    console.log("handleAddQuestion:", quizzes);
  }, [quizzes])

  return (
    <>
      {/* <h1 style="text-center mt-3 mb-2">Create Your Quiz</h1> */}
      <CreateQuizCard quizzes={quizzes} setQuizzes={setQuizzes} question={question} setQuestion={setQuestion} format={format} setFormat={setFormat} handleAddQuestion={handleAddQuestion} setOption={setOption} option={option} />
      <RenderQuiz quizzes={quizzes} setQuizzes={setQuizzes}/>
      {
        quizzes.length >= 1 &&
        <div className="button-container">
          <div className="my-button" onClick={handleSetScore}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Set Score
          </div>
        </div>
      }
    </>
  )
}

export default CreateQuiz;