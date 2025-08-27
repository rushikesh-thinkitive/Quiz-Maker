import Swal from 'sweetalert2';
import './css/question.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from 'react';

const QuestionCard = ({ question, options, handleAddScore, format, index }) => {
    const setQuestionScore = async () => {
        const { value: score } = await Swal.fire({
            title: 'Enter Score',
            html: `
            <label for="score" class="swal2-label">Enter Score:</label>
            <input id="score" class="swal2-input custom-score-input" type="number" placeholder="Enter score">
          `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Set Score',
            customClass: {
                input: 'custom-score-input',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-cancel-button'
            },
            preConfirm: () => {
                const scoreInput = document.getElementById('score').value;
                if (!scoreInput) {
                    Swal.showValidationMessage('Score is required');
                    return false;
                }
                return scoreInput;
            }
        });

        if (score !== undefined) {
            Swal.fire({
                title: 'Score Set Successfully!',
                text: `You entered: ${score}`,
                icon: 'success'
            });
            handleAddScore(score, index);
        }
    };

    // useEffect(() => {
    //     console.log("useEffect format",format);
    //     format = 
    //     console.log("Format Value:", format);   
    // }, []);

    return (
        <>
            <div className="questions">
                <div className="header">
                    <h3>{question}</h3>
                    <div className="set-score" onClick={setQuestionScore}>
                        <span>Set Score</span>
                        <FaExternalLinkAlt className="redirect-icon" />
                    </div>
                </div>
                {options.map((option, indexNo) => {
                    return (
                        <div className="options-container" key={indexNo}>
                            <input type={(format === 'radio' || format === 'true/false' ? "radio" : "checkbox")} name={`question-${index}`}
                                style={
                                    format === "radio" ? { width: "22px", marginBottom: '1px', marginRight: '10px' } :
                                        { width: "22px", marginBottom: '16px', marginRight: '10px' }
                                } />
                            <p className="option">{option}</p>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default QuestionCard;