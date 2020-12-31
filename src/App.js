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
import Results from './routes/Results';

import { InterviewersContextProvider } from './context/interviewers-context';

function App() {
  return (
    <div className="App">
      <Router>
        <header />
        
        <Switch>
          <InterviewersContextProvider>
            <Route path='/' exact>
              <Interviewers />
            </Route>
            <Route path='/candidates-of/:id' exact>
              <Candidates />
            </Route>
            <Route path='/candidate/:id' exact>
              <CandidateDetails />
            </Route>
            <Route path='/interview/:id'>
              <Questions />
            </Route>
            <Route path='/results/:id'>
              <Results />
            </Route>
          </InterviewersContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
