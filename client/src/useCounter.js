
import React, { Component, useState, useEffect } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  

   return [count, incrementCount]
}

export default useCounter;

