
import React, { Component, useState, useEffect } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`
  // });

   return [count, incrementCount]
}

export default useCounter;

