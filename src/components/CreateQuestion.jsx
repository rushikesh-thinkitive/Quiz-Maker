import React from 'react';
import QuestionCard from './QuestionCard';

const CreateQuestion = ({question, options, handleAddScore, format, index}) => {
    return (
        <>
            <QuestionCard question={question} options={options} handleAddScore={handleAddScore} index={index} format={format}/>
        </>
    )
}

export default CreateQuestion;