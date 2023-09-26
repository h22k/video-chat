import InputField from "@/components/ui/InputField";
import AuthFormTemplate from "@/components/auth/AuthFormTemplate";
import FormButton from "@/components/ui/FormButton";

export default function LoginPage() {
  return (
    <AuthFormTemplate title='login here'>
      <InputField placeholder="email" type="email" name="email-login" required/>
      <InputField placeholder="password" type="password" name="password-login" required minLength={8} maxLength={16}/>
      <FormButton>Welcome back</FormButton>
    </AuthFormTemplate>
  )
}