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

interface saveI {
  setSaveFunction: React.Dispatch<any>;
  site: string;
  pass: string;
}

export default function save({ setSaveFunction, site, pass }: saveI) {
  const saveNewPasswordMutation = useMutation(() => saveNewPassword({ site, pass }));
  const SnackSender = new NotificationSender('snack', useContext(LayoutContext));
  useEffect(() => {
    (saveNewPasswordMutation.isSuccess || saveNewPasswordMutation.isError) && SnackSender.send(saveNewPasswordMutation);
  }, [saveNewPasswordMutation.isSuccess, saveNewPasswordMutation.isError]);
  return <Button onClick={() => setSaveFunction(saveNewPasswordMutation)} type="submit" text='🔒 Save Password 🔒' />
};
