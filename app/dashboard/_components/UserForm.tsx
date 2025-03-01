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

export function UserAddForm() {
   const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    const handleFormSubmit = (event:any) => {
        event.preventDefault()
        console.log(username,password)
        
        // handelSubmit(name)
      }
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add User</Button>
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
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" placeholder="Username" className="col-span-3" onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" placeholder="Password" className="col-span-3" onChange={(e)=> setPassword(e.target.value)}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#4169E1] hover:bg-[#4169E1]/90" onClick={handleFormSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
