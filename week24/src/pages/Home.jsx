import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const goHomeWork1 = () =>{
        navigate('/parent')
    }

    const goHomeWork2 = () =>{
        navigate('/lifecycle')
    }
  return (
    <div>
        <h1>Week24 HomeWork</h1>
        <button onClick={goHomeWork1}>과제1 - 렌더링 최적화</button>
        <button onClick={goHomeWork2}>과제2 - lifecycle </button>
    </div>
    
  )
}

export default Home