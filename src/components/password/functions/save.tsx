/* React & Gatsby stuff */
import React, { useEffect, useContext } from 'react';
import { useMutation } from 'react-query';

/* Components */
import Button from '../../button';
import NotificationSender from '../../notifications/sender';

/* Contexts */
import { LayoutContext } from '../../layout';

/* Utils */
import { saveNewPassword } from '../../../utils/endpoints';

export default function save(props: any) {
  const saveNewPasswordMutation = useMutation(() => saveNewPassword(props));
  const SnackSender = new NotificationSender('snack', useContext(LayoutContext));
  useEffect(() => {
    (saveNewPasswordMutation.isSuccess || saveNewPasswordMutation.isError) && SnackSender.send(saveNewPasswordMutation);
  }, [saveNewPasswordMutation.isSuccess, saveNewPasswordMutation.isError]);
  return <Button onClick={() => props.setSaveFunction(saveNewPasswordMutation)} type="submit" text='🔒 Save Password 🔒' />
};
