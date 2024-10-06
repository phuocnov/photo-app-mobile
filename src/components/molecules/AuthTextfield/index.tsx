import { Controller } from 'react-hook-form';
import { TextField } from 'react-native-ui-lib';

function AuthTextField({
  name,
  label,
  control,
  error,
  password,
}: {
  name: string;
  label: string;
  control: any;
  password?: boolean;
  error: any;
}) {
  return <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextField
        label={label}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        error={error}
        fullWidth
        helperText={error ? error.message : ''}
        secureTextEntry={password}
      />
    )}
  />;
}

export default AuthTextField;
