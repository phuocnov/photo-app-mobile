import AuthTextField from '@/components/molecules/AuthTextfield';
import useLogin from '@/hooks/useLogin';
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, View } from 'react-native-ui-lib';

function Login() {
	const { t } = useTranslation(['auth']);
	const { control, handleSubmit, errors, onSubmit } = useLogin();
	const { layout } = useTheme();
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={[
						{
							width: '80%',
							alignItems: 'center', // This centers the child components horizontally
						},
						layout.relative,
					]}
				>
					<Text>{t('lgin')}</Text>
					<AuthTextField
						name="emailOrPhonenumber"
						label={t('email or phonenumber')}
						control={control}
						error={errors.emailOrPhonenumber}
					/>

					<AuthTextField
						name="password"
						label={t('password')}
						control={control}
						error={errors.password}
						password
					/>
					<Button
						style={{
							width: '60%',
							marginTop: 20,
						}}
						label={t('lgin')}
						onPress={() => {
							handleSubmit(onSubmit)().catch(error => {
								console.error(error);
							});
						}}
					/>
					<Button
						style={{
							width: '70%',
							marginTop: 20,
						}}
						label={t('dont have an account')}
						onPress={() => {
							navigation.navigate('Register');
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Login;
