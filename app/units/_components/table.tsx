"use client"
import axios from "axios"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"

export default function DataTable({id}:{id:string}) {

 
  var [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", amount: 100 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", amount: 200 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", amount: 150 },
  ])

useEffect(()=>{
        // axios.get("")
        // .then((response) => {
        //   setData((prevData) => [...prevData, ...response.data]) 
        // })
        // .catch((error) => {
        //   console.error("Error fetching data:", error)
        // })
},[])


  const handleDelete = (id:any) => {
    const removedItem =data.filter((item) => item.id !== id)
    setData(removedItem)

  }

  return (
    <div className="w-full p-4">
      <div className="rounded-md border">
        <Table>
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
                    <Button
                      variant="ghost"
                      onClick={() => handleDelete(item.id)}
                    >
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