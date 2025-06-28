import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
       <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className=" w-full flex flex-col gap-4 p-6 md:p-10">

        <div className="w-full flex flex-1 items-center justify-center">
          <div className="w-[50%]">
            <LoginForm />
          </div>
        </div>
      </div>
     
    </div>
  )
}
