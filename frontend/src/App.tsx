import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './stores/store';

import Home from './pages/Home';
import Minting from './pages/Minting';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/minting' element={<Minting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
