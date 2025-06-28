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
                  <Card className="w-[350px] py-10 border-2 border-gray-400" key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{college.user_name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex self-end">
                    <Link href={`/units/${college.id}`}>
                      <InteractiveHoverButton  className="text-[14px] p-2 h-12 w-28">Hover Me</InteractiveHoverButton></Link>
                    </CardFooter>
                  </Card>
          ))}       
      </div>            

  )
}
