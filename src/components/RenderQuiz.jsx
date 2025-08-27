import CreateQuestion from "./CreateQuestion";

const RenderQuiz = ({ quizzes, setQuizzes, format }) => {

    const handleAddScore = (score, index) => {
        setQuizzes(prevQuizzes =>
            prevQuizzes.map((quiz, indexNo) =>
                index === indexNo ? { ...quiz, score: score } : quiz
            )
        )
    }

    return (
        <>
            {quizzes?.map((quiz, index) => (
                <CreateQuestion key={index} question={quiz.question} options={quiz.option} handleAddScore={handleAddScore} index={index} format={quizformat} />
            ))}
        </>
    );
};

export default RenderQuiz;
