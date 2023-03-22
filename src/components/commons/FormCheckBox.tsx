import { Control, FieldErrors, Controller } from 'react-hook-form';
import { useController } from 'react-hook-form';

import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  rules?: Record<string, unknown>;
};

const FormCheckBox: React.FC<Props> = ({ label, name, control, rules }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules,
    defaultValue: false,
  });

  return (
    <FormControlLabel
      control={<Checkbox {...inputProps} inputRef={ref} />}
      label={label}
    />
  );
};

export default FormCheckBox;
