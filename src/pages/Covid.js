import React, { useState } from 'react';
import myFunc from './myFunc';

const Covid = () => {
  const [toggle, setToggle] = useState({
    pin: true,
  });
  const handleToggle = () => {
    setToggle({
      pin: !toggle.pin,
    });
  };
  return (
    <layout>
      <button onClick={handleToggle}>Toggle</button>
      <myFunc />
    </layout>
  );
};

export default Covid;
