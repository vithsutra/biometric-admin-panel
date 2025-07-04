import { secret } from "@/lib/utils";
import axios from "axios";

export async function Login({
  username,
  password,
}: {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
}) {
  try {
    const response = await axios.post(`${secret}/admin/login`, {
      user_name: username as string,
      password: password as string,
    });

    return {
      success: "true",
      data: response.data,
    };
  } catch (error: any) {
    console.error("Login failed:", error);

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
