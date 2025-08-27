import './App.css';
import './../src/components/css/button.css';
import CreateQuiz from './components/CreateQuiz.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import QuizTaker from './components/QuizTakerAccount.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={ <Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/quiztaker" element={<QuizTaker/>} />
      </Routes>
    </>
  );
}

export default App;
