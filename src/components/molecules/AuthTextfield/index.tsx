import { Controller, Control, FieldError } from 'react-hook-form';
import { TextField } from 'react-native-ui-lib';

interface AuthTextFieldProps {
	name: string;
	label: string;
	control: Control<any>;
	error?: FieldError | undefined;
	password?: boolean;
}

function AuthTextField({
	name,
	label,
	control,
	error,
	password = false,
}: AuthTextFieldProps) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextField
					label={label}
					onChangeText={onChange}
					value={value}
					onBlur={onBlur}
					error={!!error}
					helperText={error ? error.message : ''}
					secureTextEntry={password}
				/>
			)}
		/>
	);
}

export default AuthTextField;
