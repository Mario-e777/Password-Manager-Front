import React from 'react'

import styled from 'styled-components'

const Input = styled.input`
  border-radius: 5px;
  width: 280px;
  height: 2.4rem;
  border: 1px solid black;
  padding: 0 0.6rem;
`;

export default React.forwardRef((props: any, ref) => {
  return <Input ref={ref} {...props} />
})
