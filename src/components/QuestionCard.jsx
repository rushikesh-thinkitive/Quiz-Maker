import Swal from 'sweetalert2';
import './css/question.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from 'react';

const QuestionCard = ({ question, options, handleAddScore, format, index, onDragStart, onDragOver, onDrop, onDragEnd }) => {
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

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', index);
        e.dataTransfer.effectAllowed = 'move';
        if (onDragStart) onDragStart(e, index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (onDragOver) onDragOver(e, index);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
        if (onDrop && draggedIndex !== index) {
            onDrop(draggedIndex, index);
        }
    };

    const handleDragEnd = (e) => {
        if (onDragEnd) onDragEnd(e, index);
    };

    return (
        <>
            <div 
                className="questions draggable-question"
                draggable={true}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
                data-index={index}
            >
                <div className="header">
                    <h3>{question}</h3>
                    <div className="set-score" onClick={setQuestionScore}>
                        <span>Set Score</span>
                        <FaExternalLinkAlt className="redirect-icon" />
                    </div>
                </div>
                <div className="options-wrapper">
                    {options.map((option, indexNo) => {
                        return (
                            <div className="options-container" key={indexNo}>
                                <input type={(format === 'radio' || format === 'true/false' ? "radio" : "checkbox")} name={`question-${index}`}
                                    style={
                                        format === "radio" ? { width: "22px", marginRight: '10px' } :
                                            { width: "22px", marginRight: '10px' }
                                    } />
                                <p className="option">{option}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default QuestionCard;