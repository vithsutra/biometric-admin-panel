"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addUser } from "@/lib/api/panel/adduser";
import { useState } from "react";
import { toast } from "sonner";

export function UserAddForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setDisabled(true);
      const response = await addUser(username, password, email);

      if (response.success) {
        toast("User Created");
        setIsOpen(false);
      } else {
        toast("Failed to create user");
      }
    } catch (error) {
      console.log(error);
      toast("Failed to create user");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Enter Details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-16">
            <Label htmlFor="username" className="text-right text-md">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Username"
              className="col-span-3"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-16">
            <Label htmlFor="Email" className="text-right text-md">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              className="col-span-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-16">
            <Label htmlFor="password" className="text-right text-md">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              className="col-span-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-[#4169E1] pb-4 hover:bg-[#4169E1]/90"
            onClick={handleFormSubmit}
            disabled={disabled}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
