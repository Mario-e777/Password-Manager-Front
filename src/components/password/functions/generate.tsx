/* React stuff */
import React from 'react';

/* Components */
import Button from '../../button';

interface generateI {
  inputRef: React.MutableRefObject<{ value: string }>
};

export default function generate({ inputRef }: generateI) {
  function generatePass() {
    let result = '';
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}[]/?-_=+';
    for (var i = 0; i < 24; i++) 
      result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    inputRef.current.value = result;
  };
  return <Button onClick={() => generatePass()} type="button" text='✨ Generate Password ✨' />;
};
