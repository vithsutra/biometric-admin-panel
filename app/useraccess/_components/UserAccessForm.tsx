"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { handelSubmit } from "../utils/handlesubmit";
import { toast } from "sonner";

export function UserAccessForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [type, setType] = useState<string>(""); // selected user
  const [users, setUsers] = useState<{ id: string; name: string }[]>([
    { id: "1", name: "John" },
    { id: "2", name: "Alice" },
  ]);

 
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!type || !password) {
      console.log("Username and password are required");
      return;
    }else if(password !== confirmpassword){
        toast.error("Passwords do not match");
        return;
    }

    const status = await handelSubmit(type, password);
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold">User Access</h1>
        <p className="text-muted-foreground text-md">Select your user</p>
      </div>
      <div className="grid gap-4 py-4">
        {/* User Selection */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Select User
          </Label>
          <Select value={type} onValueChange={setType} required>
            <SelectTrigger className="w-[350px]">
              <SelectValue placeholder="Select a user" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Users</SelectLabel>
                {users.length > 0 ? (
                  users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="loading" disabled>
                    Loading...
                  </SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Password Input */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="col-span-3"
            required
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Confirm Password
          </Label>
          <Input
            id="password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="col-span-3"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full bg-blue-600">
        Submit
      </Button>
    </form>
  );
}
