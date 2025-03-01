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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { useState } from "react"

export function MachineAddForm() {

  const [name, setName] = useState("")
  const [type, setType] = useState<string>("")

  const handleFormSubmit = (event:any) => {
      event.preventDefault()
      console.log(name,type)
      
      // handelSubmit(name)
    }
  
  
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Add Machine</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Unit</DialogTitle>
        <DialogDescription>
          Enter the details
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Unit Id
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
           Unit Type
          </Label>
          <Select value={type} onValueChange={setType}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectGroup>
      </SelectContent>    
    </Select>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" className="bg-[#4169E1] hover:bg-[#4169E1]/90" onClick={handleFormSubmit}>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}
