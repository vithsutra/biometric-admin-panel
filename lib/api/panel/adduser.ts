import { secret } from "@/lib/utils";
import axios from "axios";

export async function addUser(
  username: string,
  password: string,
  email: string
) {
  try {
    const response = await axios.post(`${secret}/user/register`, {
      user_name: username,
      password: password,
      email: email,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("addUser failed:", error);

    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data?.message || "Invalid Credentials",
        status: error.response?.status,
      };
    }

    return {
      success: false,
      error: error.message || "Something went wrong",
    };
  }
}
