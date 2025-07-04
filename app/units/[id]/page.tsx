"use client";
import { useParams } from "next/navigation";
import DataTable from "../_components/table";

export default function Units() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="w-[90%] mx-20 mt-10">
      <DataTable id={id} />
    </div>
  );
}
