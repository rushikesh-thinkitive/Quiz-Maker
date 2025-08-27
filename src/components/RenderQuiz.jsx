import CreateQuestion from "./CreateQuestion";

const RenderQuiz = ({ quiz, setQuiz, format }) => {

    const handleAddScore = (score, index) => {
        setQuiz(prevQuiz =>
            prevQuiz.map((quiz, indexNo) =>
                index === indexNo ? { ...quiz, score: score } : quiz
            )
        )
    }

    return (
        <>
            {quiz?.map((quiz, index) => (
                <CreateQuestion key={index} question={quiz.question} options={quiz.option} handleAddScore={handleAddScore} index={index} format={quiz.format} />
            ))}
        </>
    );
};

export default RenderQuiz;
