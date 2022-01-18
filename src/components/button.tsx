import React from 'react'

import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  width: 280px;
  height: 2.4rem;
  border: none;
  padding: 0 0.6rem;
  cursor: pointer;
  background-image: linear-gradient(to right, #202020 0%, black 100%);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

export default function button(props: any) {
  return <Button {...props} >{props.text}</Button>
}
