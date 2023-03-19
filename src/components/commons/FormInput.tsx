import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from 'lib/Colors';
import * as Common from './Index';

const Container = styled.div`
  display: flex;
`;

const InputElement = styled.input<{
  margin?: string;
  padding?: string;
  error?: string;
}>`
  width: ${(props) => props.width && props.width};
  background: rgb(240 240 240 / 20%);
  border: 1px solid rgb(0 0 0 / 0%);
  border-radius: 10px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : '0.9em 0.5em')};
  font-weight: 400;
  ::placeholder {
    color: #eee;
  }
  ${(props) => (props.error ? `border: 1px solid ${Colors('Primary')};` : '')}
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ButtonElement = styled.div`
  content: '';
  background: url(${process.env.PUBLIC_URL}/img/icons/eye.svg);
  background-repeat: no-repeat;
  position: absolute;
  background-size: 19px;
  width: 18px;
  height: 18px;
  right: 1rem;
  top: 2rem;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 12px;
  color: ${Colors('Primary')};
  word-break: keep-all;
  white-space: nowrap;
`;

type FormInputProps = {
  label: string;
  error?: string;
  register?: object;
  width?: string;
  margin?: string;
  padding?: string;
  type?: string;
  icon?: string;
};

export const FormInput: React.FC<FormInputProps> = (props) => {
  const [showForm, setShowForm] = useState(true);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const {
    label,
    error,
    register,
    width,
    margin,
    padding,
    type,
    icon,
    ...rest
  } = props;

  return (
    <Container>
      <Common.VStack>
        <Wrapper>
          <InputElement
            {...register}
            {...rest}
            error={error}
            width={width}
            margin={margin}
            padding={padding}
            type={
              type === 'password' ? (showForm ? 'password' : 'text') : 'text'
            }
          />
          {type === 'password' && <ButtonElement onClick={toggleShowForm} />}
        </Wrapper>
        {error && <ErrorMessage>success</ErrorMessage>}
      </Common.VStack>
    </Container>
  );
};

export default FormInput;
