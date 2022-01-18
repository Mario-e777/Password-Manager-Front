/* React stuff */
import React from 'react';

/* Modules */
import styled, { css } from 'styled-components';

interface Status { 
  isSuccess: boolean, 
  isError: boolean,
  duration: number
};

const FloatingContainer = styled.div<Status>`
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top: -4rem;
  ${props => props.duration && css`animation-duration: ${props.duration}ms;`}
  animation-name: fromTop;

  & div {
    flex-direction: column;
    width: 18rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0.3px 0.5px 0.7px hsl(0deg 0% 63% / 0.36),
    0.8px 1.6px 2px -0.8px hsl(0deg 0% 63% / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(0deg 0% 63% / 0.36),
    5px 10px 12.6px -2.5px hsl(0deg 0% 63% / 0.36);
    ${props => props.isSuccess && css`background-color: #00c853;`}
    ${props => props.isError && css`
      color: white;
      background-color: #d50000;
    `}
  }

  @keyframes fromTop {
    0% { top: -4rem; }
    20% { top: 0; }
    50% { top: 0; }
    80% { top: 0; }
    100% { top: -4rem; }
  }
`;

export default function floating(props) {
  return (
    <FloatingContainer {...props} >
      <div>
        <p>Success!!!</p>
      </div>
    </FloatingContainer>
  );
};
