import { secret } from "@/lib/utils";
import axios from "axios";

export async function addUnit(unitId: string, label: string, userId: string) {
  try {
    const response = await axios.post(
      `${secret}/user/create/biometric_device`,
      {
        unit_id: unitId,
        label: label,
        user_id: userId,
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("addUser failed:", error);

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
