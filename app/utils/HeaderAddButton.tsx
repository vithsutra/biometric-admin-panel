"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { UserAddForm } from "../dashboard/_components/UserForm"
import { usePathname } from "next/navigation"
import { MachineAddForm } from "../units/_components/MachineForm"

export function UserAddButton() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    // <>
     

    //   {isOpen && (
    //     <div className="fixed inset-0 flex items-center justify-center bg-gray-400/50  z-50" >
            
    //       <div className="bg-white z-100 p-6 rounded-lg w-96">
    //           {pathname.startsWith("/units") ? <MachineAddForm />:<UserAddForm  />}
    //       </div>
    //       <X size={"20px"} className="z-100  absolute top-51 ml-[340px] " onClick={()=> setIsOpen(false)}/>
    //     </div>

    //   )}
    // </>
    <div>
      {pathname.startsWith("/units") ? <MachineAddForm />:<UserAddForm  />}
    </div>

  )
}
