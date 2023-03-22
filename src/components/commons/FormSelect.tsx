import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UseFormRegisterReturn, FieldValues, Control } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  control: any;
  rules?: Object;
  register: any;
}

const FormSelect: React.FC<Props> = ({
  label,
  name,
  control,
  rules,
  register,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={name}
          {...register(name, rules)}
          onChange={(e: SelectChangeEvent) => {
            control.onChange(name, e.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect;
