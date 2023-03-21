import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SnackBarContext } from 'context/SnackBarContextProvider';
import MainLayout from 'layouts/MainLayout';
import * as Common from 'components/commons/Index';

type FormValues = {
  email: string;
  name: string;
};

const Forms: React.FC = () => {
  const { openSnackBar } = useContext(SnackBarContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    openSnackBar(`${data.email}、${data.name}`, 'info');
  };

  return (
    <MainLayout myKey="forms">
      <Common.Typography type="h1" text="Forms" margin="0 0 2rem 0" />
      <Common.Typography type="h2" text="Input Form" margin="2rem 0" />
      <Common.Paper theme="light" padding="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Common.VStack gap="2rem">
            <Common.HStack gap="2rem">
              <Common.FormInput
                label="Email"
                type="email"
                control={control}
                name="email"
                rules={{ required: true }}
                errors={errors}
              />
              <Common.FormInput
                label="氏名"
                control={control}
                name="name"
                rules={{ required: true, minLength: 8, maxLength: 20 }}
                errors={errors}
              />
            </Common.HStack>
            <Common.Button
              theme="info"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              ログイン
            </Common.Button>
          </Common.VStack>
        </form>
      </Common.Paper>
    </MainLayout>
  );
};

export default Forms;
