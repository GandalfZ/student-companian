import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Dashboard from './pages/dashboard';
import CodeBuddys from './pages/codeBuddys';
import Teams from './pages/teams';
import Energy from './pages/energy';
import Journal from './pages/journal';
import RatingJournal from './pages/ratingJournal';

import { teamMembers } from "./data";


function App() {

  return (
    <div className="App">
      <>
        <Header />

        <Routes>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route path="codeBuddys">
            <CodeBuddys />
          </Route>

          <Route path="teams">
            <Teams />
          </Route>

          <Route path="energy">
            <Energy />
          </Route>

          <Route path="journal">
            <Journal />
          </Route>

          <Route path="ratingJournal">
            <RatingJournal />
          </Route>
        </Routes>

        <Navigation />
      </>
    </div>
  );
}

export default App;
