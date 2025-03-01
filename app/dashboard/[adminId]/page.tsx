import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


var colleges = [
    {
      user_name:"Alvas 1",
      id:1
    },
    {
      user_name:"Alvas"
    },
    {
      user_name:"Alvas"
    },
    {
      user_name:"Alvas"
    },
    {
      user_name:"Alvas"
    },
    {
      user_name:"Alvas"
    },
]

export default  function Page({params}:{params:{adminId:string}}) {
  const {adminId} = params



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10 mt-10 mx-10">
         {colleges.map((college,index) => (
                  <Card className="w-[250px] border-2 border-gray-400" key={index}>
                    <CardHeader>
                      <CardTitle>{college.user_name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex self-end">
                      <InteractiveHoverButton className="text-[10px] p-2 h-8 w-24"><Link href={`/units/${college.id}`}>Hover Me</Link></InteractiveHoverButton>
                    </CardFooter>
                  </Card>
          ))}       
      </div>            

  )
}
