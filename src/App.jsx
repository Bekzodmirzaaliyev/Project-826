import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Calendar from './Pages/Calendar';
import Contacts from './Pages/Contacts';
import Currency from './Pages/Currency';
import Gallery from './Pages/Gallery';
import Quiz from './Pages/Quiz';
import ToDoList from './Pages/ToDoList';
import Weather from './Pages/Weather';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import QuizNavruz from './components/Quiz/QuizNavruz';
import QuizAsilbek from './components/Quiz/QuizAsilbek';
import QuizYahyo from './components/Quiz/QuizYahyo';
import QuizShaxriyor from './components/Quiz/QuizShaxriyor';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className='flex gap-10 w-full'>
          <SideBarAbdulloh />
          <div className="w-4/6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/currency" element={<Currency />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/todolist" element={<ToDoList />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/quizreact" element={<QuizNavruz />} />
              <Route path="/quizcars" element={<QuizShaxriyor />} />
              <Route path="/quizjs" element={<QuizYahyo />} />
              <Route path="/quizcountries" element={<QuizAsilbek />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;