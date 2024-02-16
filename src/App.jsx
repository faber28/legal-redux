import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterValue, decrement, fetchCountValue, increment } from './slices/counterSlice'
import { incrementAsync } from './slices/counterSliceV2'

function App() {
  const count = useSelector(counterValue);
  const dispatch = useDispatch();

  const handleIncrement =  () => {
    dispatch(fetchCountValue());
    dispatch(incrementAsync())
  };

  const handleDecrement = () => {
    dispatch(decrement());  
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        count is: {count}
        <button onClick={handleIncrement}>
          +
        </button>
        <button onClick={handleDecrement}>
          -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
