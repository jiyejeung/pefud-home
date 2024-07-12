import { Provider } from 'react-redux';
import store from './stores/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router basename='https://jiyejeung.github.io/pefud-home/'>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
