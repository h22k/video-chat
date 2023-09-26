import FormButton from "@/components/ui/FormButton";
import InputField from "../../../components/ui/InputField";
import AuthFormTemplate from "@/components/auth/AuthFormTemplate";

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