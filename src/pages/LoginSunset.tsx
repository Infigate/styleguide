import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import FullScreenLayout from 'layouts/FullScreenLayout';
import { SnackBarContext } from 'context/SnackBarContextProvider';
import * as Common from 'components/commons/Index';

type FormValues = {
  email: string;
  password: string;
};

const Wrapper = styled.div`
  background: url(${process.env.PUBLIC_URL}/img/background/sunset.png);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSunset: React.FC = () => {
  const { openSnackBar } = useContext(SnackBarContext);

  const methods = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormValues) => {
    openSnackBar(`${data.email}、${data.password}にてログイン`, 'info');
  };

  return (
    <FullScreenLayout>
      <Wrapper>
        <Common.Card
          width="350px"
          height="350px"
          padding="2rem"
          css="backdrop-filter: blur(5px);"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Common.VStack gap="1rem" content="space-between" height="300px">
              <>
                <Common.FormInputM
                  label="Email"
                  type="email"
                  control={control}
                  name="email"
                  rules={{ required: true }}
                  errors={errors}
                />
                <Common.FormInputM
                  label="Password"
                  type="password"
                  control={control}
                  name="password"
                  rules={{ required: true }}
                  errors={errors}
                />
              </>
              <Common.ButtonClear
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                ログイン
              </Common.ButtonClear>
            </Common.VStack>
          </form>
        </Common.Card>
      </Wrapper>
    </FullScreenLayout>
  );
};

export default LoginSunset;
