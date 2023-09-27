import FormButton from "@/components/common/form/FormButton";
import AuthFormTemplate from "@/components/auth/AuthFormTemplate";
import InputField from "@/components/common/form/InputField";

export default function RegisterPage() {
  return (
    <AuthFormTemplate title="Register here">
      <InputField placeholder="name" type="text" name="name-register" required/>
      <InputField placeholder="email" type="email" name="email-register" required/>
      <InputField placeholder="password" type="password" name="password-register" required minLength={8} maxLength={16}/>
      <FormButton>Join us</FormButton>
    </AuthFormTemplate>
  )
}