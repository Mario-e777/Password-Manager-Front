import React, { useEffect, useRef } from 'react'

import Input from '../input'

/* Form Actions */
import Generate from './functions/generate'
import Save from './functions/save'

export default function form() {
  const SITE_REF = useRef(null)
  const PASSWORD_REF = useRef(null)

  return (
    <form style={{ display: 'flex', flexDirection: 'column', maxWidth: 480, gap: '1rem' }} >
      <label>
        <p style={{ margin: 0 }} >Site</p>
        <Input ref={SITE_REF} type={'text'} />
      </label>
      <label>
        <p style={{ margin: 0 }} >Pass</p>
        <Input ref={PASSWORD_REF} type={'text'} />
      </label>
      <Generate inputRef={PASSWORD_REF} />
      <Save siteInput={SITE_REF} passInput={PASSWORD_REF} />
    </form>
  )
}
