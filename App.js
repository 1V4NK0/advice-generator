import React, { Component } from 'react';
import { useState, useEffect  } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount(count => count+1);
  }

useEffect(function() {
  getAdvice()
}, [])
  
  return (
    <div>
      <h1>{advice}</h1>
      <Message count={count}/>
      <button onClick={getAdvice}>get advice</button>
    </div>
  );
}

function Message(props) {
  return (
    <p>
        you have read <strong>{props.count}</strong> pieces of advice
      </p>
  );
}
