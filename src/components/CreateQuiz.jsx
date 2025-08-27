import { useEffect, useState } from 'react';
import './css/setquiz.css';
import RenderQuiz from './RenderQuiz';
import CreateQuizCard from './CreateQuizCard';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [finalQuiz, setFinalQuiz] = useState({});
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState('');
  const [option, setOption] = useState([]);
  const [format, setFormat] = useState('');

  const navigate = useNavigate();
  const handleAddQuestion = () => {
    if (question != '' && option.length !== 0) {
      setQuiz([...quiz,
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
    if (!quiz.every(quiz => quiz.hasOwnProperty('score')))
      toast.error('Score must set for all questions');
    else {
      const showQuizSettingsForm = async () => {
        const { value: formValues } = await Swal.fire({
          title: "Quiz Settings",
          html: `
            <label class="swal2-label">Total Attempts Allowed:</label>
            <input id="attempt" class="swal2-input" type="number" placeholder="Enter total attempts">
      
            <label class="swal2-label">Start Date:</label>
            <input id="start_date" class="swal2-input" type="date">
      
            <label class="swal2-label">End Date:</label>
            <input id="end_date" class="swal2-input" type="date">
      
            <label class="swal2-label">Enter Passing Marks:</label>
            <input id="marks" class="swal2-input" type="number" placeholder="Enter Passing Marks">
      
            <label class="swal2-label">Set Time for Quiz:</label>
            <input id="time" class="swal2-input" type="number" placeholder="Time in milliseconds (e.g. 4000)">
          `,
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: "Save Quiz",
          preConfirm: () => {
            const attempt = document.getElementById("attempt").value;
            const start_date = document.getElementById("start_date").value;
            const end_date = document.getElementById("end_date").value;
            const marks = document.getElementById("marks").value;
            const time = document.getElementById("time").value;

            if (!attempt || !start_date || !end_date || !marks || !time) {
              Swal.showValidationMessage("All fields are required!");
              return false;
            }

            return { attempt, start_date, end_date, marks, time };
          }
        });

        if (formValues) {
          Swal.fire({
            title: "Quiz Settings Saved!",
            text: `Total Attempts: ${formValues.attempt}, Passing Marks: ${formValues.marks}`,
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate('/login');
            toast.success('Quiz Saved Successfully');
          });
          setFinalQuiz({ quiz: quiz, settings: formValues });
        }
      };
      showQuizSettingsForm();
    }
  }

  useEffect(() => {
    console.log("Quiz Object:", finalQuiz);
  }, [finalQuiz]);

  return (
    <>
      {/* <h1 style="text-center mt-3 mb-2">Create Your Quiz</h1> */}
      <CreateQuizCard question={question} setQuestion={setQuestion} format={format} setFormat={setFormat} handleAddQuestion={handleAddQuestion} setOption={setOption} option={option} />
      <RenderQuiz quiz={quiz} setQuiz={setQuiz} />
      {
        quiz.length >= 1 &&
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