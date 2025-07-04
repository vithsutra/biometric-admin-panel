"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteMachineModal } from "./DeleteModal";
import { useUnits } from "@/hooks/getUnits";
import { deleteUnit } from "@/lib/api/panel/deleteUnit";
import { toast } from "sonner";

export default function DataTable(id: { id: string }) {
  const { loading, units } = useUnits(id);

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(units);
  }, [units]);

  const handleDelete = async () => {
    //@ts-ignore
    if (deleteId) {
      const response = await deleteUnit(deleteId);
      if (response.success) {
        setData((prevData) =>
          prevData.filter((item: any) => item.unit_id !== deleteId)
        );
        setDeleteId(null);
        toast("Machine Deleted Successfully");
      } else {
        toast("Failed to delete machine");
      }
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
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map((item: any) => (
                //@ts-ignore
                <TableRow key={item.unit_id}>
                  <TableCell>{item.unit_id}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      onClick={() => setDeleteId(item.unit_id)}
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
  );
}
