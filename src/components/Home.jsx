import './css/navbar.css';
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Customize Your Smart Quiz</h1>
                    <p>Create, Share, and Take Quizzes with Ease!</p>
                    <Link to="/login" className="button">Get Started</Link>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <i className="fas fa-pencil-alt"></i>
                    <h2>Quiz Maker</h2>
                    <p>Effortlessly create engaging quizzes for any topic.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-user-check"></i>
                    <h2>Quiz Taker</h2>
                    <p>Take quizzes and track your progress in real time.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-user-shield"></i>
                    <h2>Admin Panel</h2>
                    <p>Manage quizzes, users, and settings seamlessly.</p>
                </div>
            </section>

        </>
    );
}

export default Home;