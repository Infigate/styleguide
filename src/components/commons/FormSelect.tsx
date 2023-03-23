import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Control, FieldErrors, Controller } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  control: Control<any>;
  options: any;
  invalid?: any;
  error?: any;
}

const FormSelect: React.FC<Props> = ({
  control,
  name,
  label,
  options,
  invalid,
  error,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl fullWidth error={invalid}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={name}
            value={field.value}
            defaultValue={field.value}
            label={label}
            onChange={field.onChange}
            onBlur={field.onBlur}
          >
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {invalid && <div>{error && error.message}</div>}
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
