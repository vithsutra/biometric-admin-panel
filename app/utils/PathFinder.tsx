import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserAddButton } from "./HeaderAddButton";

export function PathFinder(){
    
    return (
        <header className="flex w-full h-16 items-center justify-between px-4 border-b-2 " >
        <SidebarTrigger className="mr-4" />
        <div className=" mr-6 ">
        <UserAddButton/>
        </div>
      </header>
    )
}