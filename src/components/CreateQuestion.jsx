import React from 'react';
import QuestionCard from './QuestionCard';

const CreateQuestion = ({question, options, handleAddScore, format, index, onDragStart, onDragOver, onDrop, onDragEnd}) => {
    return (
        <>
            <QuestionCard 
                question={question} 
                options={options} 
                handleAddScore={handleAddScore} 
                index={index} 
                format={format}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragEnd={onDragEnd}
            />
        </>
    )
}

export default CreateQuestion;