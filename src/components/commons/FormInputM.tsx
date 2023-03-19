import { TextField } from '@mui/material';
import { Control, FieldErrors, Controller } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

type Props = {
  label: string;
  type: string;
  control: Control<FormData>;
  name: 'email' | 'password';
  rules: Record<string, unknown>;
  errors: FieldErrors<FormData>;
};

const FormInputM: React.FC<Props> = ({
  label,
  type,
  control,
  name,
  rules,
  errors,
}) => {
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
          variant="outlined"
          fullWidth
          error={!!errors[name]}
          helperText={errors[name] ? 'この項目は必須です' : null}
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

export default FormInputM;
