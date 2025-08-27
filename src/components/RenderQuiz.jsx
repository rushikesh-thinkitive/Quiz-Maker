import React, { useState } from "react";
import CreateQuestion from "./CreateQuestion";

const RenderQuiz = ({ quiz, setQuiz, format }) => {
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [dragOverIndex, setDragOverIndex] = useState(null);

    const handleAddScore = (score, index) => {
        setQuiz(prevQuiz =>
            prevQuiz.map((quiz, indexNo) =>
                index === indexNo ? { ...quiz, score: score } : quiz
            )
        )
    }

    const handleDragStart = (e, index) => {
        setDraggedIndex(index);
        e.target.classList.add('dragging');
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        setDragOverIndex(index);
        e.target.closest('.questions').classList.add('drag-over');
    };

    const handleDrop = (draggedIndex, dropIndex) => {
        if (draggedIndex === dropIndex) return;

        setQuiz(prevQuiz => {
            const newQuiz = [...prevQuiz];
            const draggedItem = newQuiz[draggedIndex];
            
            // Remove the dragged item
            newQuiz.splice(draggedIndex, 1);
            
            // Insert it at the new position
            newQuiz.splice(dropIndex, 0, draggedItem);
            
            return newQuiz;
        });

        // Add success animation to the dropped question
        const droppedElement = document.querySelector(`[data-index="${dropIndex}"]`);
        if (droppedElement) {
            droppedElement.classList.add('drop-success');
            setTimeout(() => {
                droppedElement.classList.remove('drop-success');
            }, 500);
        }
    };

    const handleDragEnd = (e, index) => {
        setDraggedIndex(null);
        setDragOverIndex(null);
        e.target.classList.remove('dragging');
        
        // Remove drag-over class from all questions
        document.querySelectorAll('.questions').forEach(q => {
            q.classList.remove('drag-over');
        });
    };

    return (
        <>
            {quiz?.map((quiz, index) => (
                <CreateQuestion 
                    key={index} 
                    question={quiz.question} 
                    options={quiz.option} 
                    handleAddScore={handleAddScore} 
                    index={index} 
                    format={quiz.format}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onDragEnd={handleDragEnd}
                />
            ))}
        </>
    );
};

export default RenderQuiz;
