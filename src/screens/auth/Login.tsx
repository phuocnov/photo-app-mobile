import AuthTextField from "@/components/molecules/AuthTextfield";
import useLogin from "@/hooks/useLogin";
import { useTheme } from "@/theme";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextField, View } from "react-native-ui-lib";

function Login() {
  const { t } = useTranslation(["auth"]);
  const { control, handleSubmit, errors, onSubmit } = useLogin();

  const {
    colors,
    layout,
    components,
    backgrounds,
  } = useTheme();
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[layout.relative, backgrounds.gray100, components.circle250]}
        >
          <Text>{t("lgin")}</Text>
          <AuthTextField
            name="emailOrPhonenumber"
            label={t("email or phonenumber")}
            control={control}
            error={errors.emailOrPhonenumber}
          />

          <AuthTextField
            name="password"
            label={t("password")}
            control={control}
            error={errors.password}
            password={true}
          />
          <Button label={t("lgin")} onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Login;
