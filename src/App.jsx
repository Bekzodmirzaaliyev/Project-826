import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Calendar from './Pages/Calendar';
import Contacts from './Pages/Contacts';
import Currency from './Pages/Currency';
import Gallery from './Pages/Gallery';
import Swiper from './Pages/Swiper';
import ToDoList from './Pages/ToDoList';
import Weather from './Pages/Weather';


function App() {
  return (
    <Router>
      <Switch >
        <Route path="/calculator" exact component={Calculator} />
        <Route path="/cqalendar" component={Calendar} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/currency" component={Currency} />
        <Route path="/galleru" component={Gallery} />
        <Route path="/swiper" component={Swiper} />
        <Route path="/todolist" component={ToDoList} />
        <Route path="/weather" component={Weather} />

      </Switch>
    </Router>
  );
}

export default App;
