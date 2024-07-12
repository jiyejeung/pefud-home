import { Provider } from 'react-redux';
import store from './stores/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
