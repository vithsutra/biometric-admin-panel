"use client";

import { useState } from "react";
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
import { toast } from "sonner";
import { useUsers } from "@/hooks/getUsers";
import { userAccess } from "@/lib/api/panel/userAccess";
import useAuthToken from "@/lib/token/decode";

export function UserAccessForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState<string>("");
  const [type, setType] = useState<string>("");
  const { authToken } = useAuthToken();

  const { users, loading } = useUsers();
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authToken)
      try {
        const response = await userAccess(password, userId, authToken);
        if (response.success) {
          toast("Access Granted");
        } else {
          toast("Failed to grant access");
        }
      } catch (error) {
        toast("Failed to grant access");
      }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center  w-full">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  }

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
                  users.map((user: any) => (
                    <SelectItem
                      key={user.unit_id}
                      value={user.user_name}
                      onClick={() => {
                        setUserId(user.user_id);
                      }}
                    >
                      {user.user_name}
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
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500">
        Submit
      </Button>
    </form>
  );
}
