import { secret } from "@/lib/utils";
import axios from "axios";

export async function userAccess(
  password: string,
  userId: string,
  authToken: string
) {
  try {
    console.log(`${secret}/admin/access/user/${userId}`) 
    const response = await axios.post(
      `${secret}/admin/access/user/${userId}`,
      {
        user_id: userId,
        password: password,
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error(" failed to give access to user:", error);

    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data?.message || "Sever Error ",
        status: error.response?.status,
      };
    }

    return {
      success: false,
      error: error.message || "Something went wrong",
    };
  }
}
