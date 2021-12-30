
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Dashboard from './pages/Dashboard';
import CodeBuddys from './pages/CodeBuddys';
import Teams from './pages/Teams';
import Energy from './pages/Energy';
import Journal from './pages/Journal';
import RatingJournal from './pages/RatingJournal';

function App() {
  return (

      <>


        <Routes>
          <Route exact path="/" element={<Dashboard />}>
          </Route>

          <Route path="codeBuddys" element={<CodeBuddys />}>
          </Route>

          <Route path="teams" element={<Teams />}>
          </Route>

          <Route path="energy" element={<Energy />}>
          </Route>

          <Route path="journal" element={<Journal />}>
          </Route>

          <Route path="ratingJournal" element={<RatingJournal />}>
          </Route>
        </Routes>

        <Navigation />
      </>

  );
}

export default App;

