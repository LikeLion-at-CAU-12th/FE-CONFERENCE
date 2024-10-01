import { Route, Routes } from 'react-router-dom';
import './App.css';
import ClassComponent from './component/ClassComponent';
import Parent from './component/Parent';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/parent" element={<Parent />}/>
        <Route path="/lifecycle" element={<ClassComponent/>}/>
      </Routes>
    </>
  );
}

export default App;
