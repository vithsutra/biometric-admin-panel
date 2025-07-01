import { secret } from "@/lib/utils";
import axios from "axios";

export async function Login({
  username,
  password,
}: {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
}) {
  console.log("came here");
  try {
    const response = await axios.post(`${secret}/admin/login`, {
      user_name: username as string,
      password: password as string,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
