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
import { useState } from "react";
import { addUnit } from "@/lib/api/panel/addUnit";
import { toast } from "sonner";

export function MachineAddForm({ userId }: { userId: string }) {
  const [name, setName] = useState("");
  const [id, setId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await addUnit(id, name, userId);
      console.log(response);
      if (response.success) {
        window.location.reload();
        toast("Machine Added");
      } else {
        toast("Failed to add machine");
      }
    } catch (error) {
      console.log(error);
      toast("Failed to add machine");
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Machine</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Unit</DialogTitle>
          <DialogDescription>Enter the details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Label
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="Label"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-start">
              Unit Id
            </Label>
            <Input
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="col-span-3"
              placeholder="Id"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-[#4169E1] hover:bg-[#4169E1]/90"
            onClick={handleFormSubmit}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
