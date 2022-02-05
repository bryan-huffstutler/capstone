import './App.css';
import Protected from './components/Protected/Protected'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/Authentication/ErrorPage'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/'
          element={
            <Protected
              auth={true}
              comp={<Home />}
            />}
        />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
