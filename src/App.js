import './assets/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Interviewers from './routes/Interviewers';
import Candidates from './routes/Candidates';
import CandidateDetails from './routes/CandidateDetails';
import Questions from './routes/Questions';

function App() {
  return (
    <div className="App">
      <Router>
        <header />

        <Switch>
          <Route path='/' exact>
            <Interviewers />
          </Route>
          <Route path='/candidates' exact>
            <Candidates />
          </Route>
          <Route path='/candidates/:id' exact>
            <CandidateDetails />
          </Route>
          <Route path='/interview'>
            <Questions />
          </Route>
          <Route path='/results'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
