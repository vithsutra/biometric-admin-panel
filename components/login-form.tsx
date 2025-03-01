"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handelSubmit } from "@/app/login/utils/handleSubmit"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    const formData = new FormData(event.currentTarget)
    const username = formData.get("username")|| ""
    const password = formData.get("password") || ""

      const status = await handelSubmit(username,password) 
      console.log(status)
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleFormSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" type="email" placeholder="Username" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Password" required />
        </div>
        <Button type="submit" className="w-full pb-4 bg-[#4169E1] hover:bg-[#4169E1]/90 ">
          Login
        </Button>
      </div>
    </form>
  )
}
