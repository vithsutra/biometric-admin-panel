import { useEffect, useState } from "react";
import { secret } from "@/lib/utils";
import useAuthToken from "@/lib/token/decode";
import axios from "axios";

export function useUnits(id:{id:string}) {
  const [loading, setLoading] = useState(false);
  const [units, setUnits] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await axios.get(`${secret}/user/get/biometric_device/${id.id}`);
        setUnits(response.data.units || []);
      } catch (error) {
        setError(true);
        console.error("getUsers failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { units, loading, error };
}
