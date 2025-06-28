"use client"

import { useState } from "react"
import axios from "axios"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DeleteMachineModal } from "./DeleteModal"



export default function DataTable() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", amount: 100 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", amount: 200 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", amount: 150 },
  ])
  const [deleteId, setDeleteId] = useState<number | null>(null)


  const handleDelete = async () => {
    setData((prevData) => prevData.filter((item) => item.id !== deleteId))
    setDeleteId(null)
    // Optionally, send a delete request to the backend
    // await axios.delete(`/api/delete/${deleteId}`)
  }

  return (
    <div className="w-full p-4">
      {deleteId !== null && (
        <DeleteMachineModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
      <div className="rounded-md border">
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell className="text-right">${item.amount}</TableCell>
                  <TableCell className="text-center">
                    <Button variant="ghost" onClick={() => setDeleteId(item.id)}>
                      <Trash2 color="#c01c28" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No Machines
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        
      </div>
    </div>
  )
}
