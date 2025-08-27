import './App.css';
import './../src/components/css/button.css';
import CreateQuestion from './components/CreateQuestion.jsx';
import CreateQuiz from './components/CreateQuiz.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
      </Routes>
    </>
  );
}

export default App;
