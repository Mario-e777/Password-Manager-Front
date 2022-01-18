import React from 'react'
import { useMutation } from 'react-query'

import Button from '../../button'

import { saveNewPassword } from '../../../utils/endpoints'

export default function save(props) {
  const saveNewPasswordMutation = useMutation(() => saveNewPassword(props))
  return <Button onClick={() => saveNewPasswordMutation.mutate()} type="button" text='🔒 Save Password 🔒' />
}
