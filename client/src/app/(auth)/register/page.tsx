import InputField from "../../../components/InputField";

export default function RegisterPage() {
  return (
    <div className="px-6 py-8 lg:w-2/5 sm:w-3/5 w-full flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex-col justify-center sm:bg-violet-100 rounded-lg">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 capitalize text-violet-500 tracking-tighter">Register here</h1>
      <form className="flex items-center w-full justify-center flex-col gap-8 py-12 ">
        <InputField placeholder="name" type="text" required/>
        <InputField placeholder="email" type="email" required/>
        <InputField placeholder="password" type="password" required minLength={8} maxLength={16}/>
        <button type="submit" className="uppercase bg-gradient-rainbow text-white font-medium px-3 py-2 rounded-full shadow w-3/4 transition-all hover:hue-rotate-180 duration-500">Join us</button>
      </form>
    </div>
  )
}