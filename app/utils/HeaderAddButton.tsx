"use client";

import { UserAddForm } from "../dashboard/_components/UserForm";
import { useParams, usePathname } from "next/navigation";
import { MachineAddForm } from "../units/_components/MachineForm";

export function UserAddButton() {
  const pathname = usePathname();
  const { id } = useParams<{ id: string }>();

  if (pathname.startsWith("/units")) {
    return <MachineAddForm userId={id as string} />;
  } else if (pathname.startsWith("/dashboard")) {
    return <UserAddForm />;
  }
}
