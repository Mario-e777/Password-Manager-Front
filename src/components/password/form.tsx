/* React & Gatsby stuff */
import React, { useRef, useState } from 'react';

/* Modules */
import styled from 'styled-components';

/* Components */
import Input from '../input';

/* Form Actions */
import Generate from './functions/generate';
import Save from './functions/save';

const FormContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & form {
    display: flex;
    flex-direction: column;
    max-width: 480;
    gap: 1rem;
  }
`;

export default function form() {
  const SITE_REF = useRef(null);
  const PASSWORD_REF = useRef(null);
  const [saveFunction, setSaveFunction] = useState<any>();

  return (
    <FormContainer>
      <form onSubmit={(e) => { e.preventDefault(); saveFunction.mutate()}}>
        <label>
          <p style={{ margin: 0 }} >Site</p>
          <Input ref={SITE_REF} type={'text'} required />
        </label>
        <label>
          <p style={{ margin: 0 }} >Pass</p>
          <Input ref={PASSWORD_REF} type={'text'} required />
        </label>
        <Generate inputRef={PASSWORD_REF} />
        <Save setSaveFunction={setSaveFunction} siteInput={SITE_REF} passInput={PASSWORD_REF} />
      </form>
    </FormContainer>
  );
};
