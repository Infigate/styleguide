import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SnackBarContext } from 'context/SnackBarContextProvider';
import MainLayout from 'layouts/MainLayout';
import * as Common from 'components/commons/Index';

type FormValues = {
  email?: string;
  name?: string;
  age?: number;
};

const Forms: React.FC = () => {
  const { openSnackBar } = useContext(SnackBarContext);
  const {
    control,
    handleSubmit,
    register,
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
      <Common.Typography
        type="p"
        text="FormはMaterialUIを用いてreact-hook-formと組み合わせたサンプルとなります"
        margin="0 0 2rem 0"
      />
      <Common.Typography type="h2" text="Input Form" margin="2rem 0" />
      <Common.Paper theme="light" padding="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Common.VStack gap="2rem">
            <Common.HStack gap="2rem">
              <Common.FormInput
                label="Email 必須項目"
                type="email"
                control={control}
                name="email"
                rules={{ required: true }}
                errors={errors}
              />
              <Common.FormInput
                label="氏名 字数制限有り"
                control={control}
                name="name"
                rules={{ required: true, minLength: 8, maxLength: 20 }}
                errors={errors}
              />
            </Common.HStack>

            <Common.HStack gap="2rem">
              <Common.FormInput
                label="Email 必須項目"
                type="email"
                control={control}
                variant="standard"
                name="email"
                rules={{ required: true }}
                errors={errors}
              />
              <Common.FormInput
                label="氏名 字数制限有り"
                control={control}
                variant="standard"
                name="name"
                rules={{ required: true, minLength: 8, maxLength: 20 }}
                errors={errors}
              />
            </Common.HStack>

            <Common.HStack gap="2rem">
              <Common.FormInput
                label="Email 必須項目"
                type="email"
                control={control}
                variant="filled"
                name="email"
                rules={{ required: true }}
                errors={errors}
              />
              <Common.FormInput
                label="氏名 字数制限有り"
                control={control}
                variant="filled"
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
              送信テスト
            </Common.Button>
          </Common.VStack>
        </form>
      </Common.Paper>

      <Common.Typography type="h2" text="Check Form" margin="2rem 0" />
      <Common.Paper theme="light" padding="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Common.VStack gap="2rem">
            <Common.HStack gap="2rem">
              <Common.FormCheckBox
                label="利用規約に同意します"
                control={control}
                name="terms"
                rules={{ required: true }}
              />
            </Common.HStack>
          </Common.VStack>
        </form>
      </Common.Paper>

      <Common.Typography type="h2" text="Select Form" margin="2rem 0" />
      <Common.Paper theme="light" padding="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Common.VStack gap="2rem">
            <Common.HStack gap="2rem">
              <Common.FormSelect
                label="Age"
                name="age"
                control={control}
                rules={{ required: true }}
                register={register}
              />
            </Common.HStack>
          </Common.VStack>
        </form>
      </Common.Paper>
    </MainLayout>
  );
};

export default Forms;
