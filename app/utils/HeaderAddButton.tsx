"use client"

import { useState } from "react"
import { UserAddForm } from "../dashboard/_components/UserForm"
import { usePathname } from "next/navigation"
import { MachineAddForm } from "../units/_components/MachineForm"


export function UserAddButton() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  if (pathname.startsWith("/units")) {
    return <MachineAddForm />
  }
  else if(pathname.startsWith("/dashboard")){
  return <UserAddForm />
  }
  
}
