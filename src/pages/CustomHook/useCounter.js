import React, { useState } from 'react';

function useCounter() {
  const [state, setState] = useState(0);
  const handleState = () => {
    setState((currentState) => state + 1);
  };

  return [state, handleState];
}

export default useCounter;
