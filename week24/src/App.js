import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Question_1 from './pages/typetest/Question_1';
import Question_2 from './pages/typetest/Question_2';
import Question_3 from './pages/typetest/Question_3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/typetest/1" element={<Question_1/>}/>
        <Route path="/typetest/2" element={<Question_2/>}/>
        {/* <Route path="/typetest/3" element={<Question_3/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
