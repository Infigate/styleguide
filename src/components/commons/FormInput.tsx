import { TextField } from '@mui/material';
import { Control, FieldErrors, Controller } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

type Props = {
  label: string;
  type?: string;
  control: Control<any>;
  name: string;
  rules: Record<string, unknown>;
  errors: FieldErrors<FormData> | any;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
};

const messages: any = {
  required: 'この項目は必須です',
  minLength: '必要な入力文字数に達していません',
  maxLength: '入力可能文字数を超えています',
};

const FormInput: React.FC<Props> = ({
  label,
  type,
  control,
  name,
  rules,
  errors,
  variant = 'outlined',
}) => {
  console.log(errors[name]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          InputLabelProps={{ shrink: true }}
          label={label}
          type={type}
          variant={variant}
          fullWidth
          error={!!errors[name]}
          helperText={errors[name] ? messages[errors[name].type] : null}
          sx={{
            background: 'transparent',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
          inputProps={{
            autoComplete: 'current-password',
          }}
          {...field}
        />
      )}
    />
  );
};

export default FormInput;
