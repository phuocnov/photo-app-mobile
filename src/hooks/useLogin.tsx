import { useForm } from "react-hook-form";

function useLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailOrPhonenumber: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  }
  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}

export default useLogin;

