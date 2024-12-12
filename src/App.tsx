import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const courses = ['Html', 'Css', 'Bootstrap', 'JavaScript', 'React'];
  /*let selected = 1;*/
  const [selected, setselected] = useState(1);
  const handleClick = (text, idx) => {
    setselected(idx);
  };

  return (
    <>
      <h2>Your selected this course: {courses[selected]}</h2>
      <ul>
        {courses.map((value, idx) => (
          <li
            className={idx === selected ? 'active' : ''}
            onClick={() => handleClick(value, idx)}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
