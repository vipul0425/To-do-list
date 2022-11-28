import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './Landing';
import Pending from './Pending';
import Completed from './Completed';
import TaskContext from './TaskContext';
import { useState } from 'react';

function App() {

  const task = useState([]);

  return (
    <TaskContext.Provider value={task}>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pending' element={<Pending />} />
        <Route path='/completed' element={<Completed />} />
      </Routes>
    </div>
    </BrowserRouter>
    </TaskContext.Provider>
  );
}

export default App;
