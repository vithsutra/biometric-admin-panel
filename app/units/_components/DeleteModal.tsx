"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { MouseEventHandler} from "react"


export function DeleteMachineModal({ onConfirm, onCancel }:{onConfirm:MouseEventHandler<HTMLButtonElement>,onCancel:MouseEventHandler<HTMLButtonElement>}) {

        const handleFormSubmit = (event:any) => {
            event.preventDefault()
            // handelSubmit(name)
          }
      
    return (
        <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
               <DialogTitle>Confirm Deletion</DialogTitle>
             </DialogHeader>
              <p>Are you sure you want to delete this machine?</p>
              <DialogFooter>
                <Button variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-500" onClick={onConfirm}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
    )
}
  
