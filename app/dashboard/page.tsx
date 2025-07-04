
"use client";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsers } from "@/hooks/getUsers";
import Link from "next/link";

interface User {
  user_id: number;
  user_name: string;
}

export default function Page() {
  const { error, loading, users } = useUsers();

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

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500">
          Failed to load users. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10 mt-10 mx-10">
      {users.map((user:User, index) => (
        <Card className="w-[350px] py-10 border-2 border-gray-400" key={index}>
          <CardHeader>
            <CardTitle className="text-xl">{user.user_name}</CardTitle>
          </CardHeader>
          <CardFooter className="flex self-end">
            <Link href={`/units/${user.user_id}`}>
              <InteractiveHoverButton className="text-[14px] p-2 h-12 w-28">
                More
              </InteractiveHoverButton>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
