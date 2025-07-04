import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className=" relative hidden lg:block h-[700px] w-[500px] mt-[100px] ml-[200px]">
        <Image
          src="/bio.svg"
          alt="Image"
          fill
          className="object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="w-full flex flex-col gap-4 p-6 md:p-10">
        <div className="w-full flex flex-1 items-center justify-center">
          <div className="w-[50%]">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
