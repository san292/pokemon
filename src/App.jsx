import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './route';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
