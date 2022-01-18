import React from 'react'

import Button from '../../button';

export default function generate({ inputRef }) {
  function generatePass() {
    let result = '';
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}[]/?-_=+';
    for (var i = 0; i < 24; i++)
      result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    inputRef.current.value = result
  }
  return <Button onClick={() => generatePass()} type="button" text='✨ Generate Password ✨' />
}
