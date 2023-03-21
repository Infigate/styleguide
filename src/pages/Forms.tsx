import React from 'react';
import { useForm } from 'react-hook-form';

import MainLayout from 'layouts/MainLayout';
import * as Common from 'components/commons/Index';

type FormValues = {
  email: string;
  name: string;
};

const Forms: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      name: '',
    },
  });

  return (
    <MainLayout myKey="forms">
      <Common.Typography type="h1" text="Forms" margin="0 0 2rem 0" />
      <Common.Typography type="h2" text="Input Form" margin="2rem 0" />
      <Common.Paper theme="light">
        <Common.HStack gap="2rem">
          <Common.FormInputM
            label="Email"
            type="email"
            control={control}
            name="email"
            rules={{ required: true }}
            errors={errors}
          />
          <Common.FormInputM
            label="氏名"
            control={control}
            name="name"
            rules={{ required: true }}
            errors={errors}
          />
        </Common.HStack>
      </Common.Paper>
    </MainLayout>
  );
};

export default Forms;
