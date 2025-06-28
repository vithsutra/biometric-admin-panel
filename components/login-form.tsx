"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Login } from "@/lib/api/auth/login";
import { toast } from "sonner";
import useAuthToken from "@/lib/token/decode";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const { decodedToken } = useAuthToken();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") || "";
    const password = formData.get("password") || "";
    
    console.log(username, password);
    const data = await Login({ username, password });
    console.log(data);
    if (data.message === "login successfull") {
      toast.success("Login Successful");
      router.push(`/dashboard/${decodedToken?.id}`);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6 ">
        <div className="grid gap-3 ">
          <Label htmlFor="username" className="text-md font-medium">
            Username
          </Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            required
            className="p-5"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password" className="text-md font-medium">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            className="p-5 "
          />
        </div>
        <Button
          type="submit"
          className="w-full text-lg font-semibold bg-[#4169E1] hover:bg-[#4169E1]/90 "
        >
          Login
        </Button>
      </div>
    </form>
  );
}
