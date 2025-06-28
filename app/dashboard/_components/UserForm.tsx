"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { handelSubmit } from "../utils/handleSubmit"
import { toast } from "sonner"

export function UserAddForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isOpen, setIsOpen] = useState(false) // State to control modal visibility

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    console.log(username, password)

    const status = handelSubmit(username, password)


    if (status) {
      toast("User Created")
      setIsOpen(false) 
    } else {
      toast("Failed to create user") 
    }
  }

  console.log(isOpen)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Enter Details
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right text-md">
              Username
            </Label>
            <Input id="username" placeholder="Username" className="col-span-3" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right text-md">
              Password
            </Label>
            <Input id="password" placeholder="Password" className="col-span-3" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#4169E1] pb-4 hover:bg-[#4169E1]/90" onClick={handleFormSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
