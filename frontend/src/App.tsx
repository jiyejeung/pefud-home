import { Provider } from 'react-redux';
import store from './stores/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { useEffect } from 'react';
import Game from './pages/Game';
import History from './pages/History';
import Donation from './pages/Donation';
import Mint from './pages/Mint';

const App = () => {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDarkScheme.matches) {
      document.documentElement.style.colorScheme = 'light';
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/game' element={<Game />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/mint' element={<Mint />} />
            <Route path='/history' element={<History />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
