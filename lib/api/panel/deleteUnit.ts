import { secret } from "@/lib/utils";
import axios from "axios";

export async function deleteUnit(
  unitId: string,
) {
  try {
    const response = await axios.get(
      `${secret}/user/delete/biometric_device/${unitId}`
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("deleteUser failed:", error);

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
