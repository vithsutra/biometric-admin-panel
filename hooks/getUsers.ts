import { useEffect, useState } from "react";
import { secret } from "@/lib/utils";
import useAuthToken from "@/lib/token/decode";
import axios from "axios";

export function useUsers() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const { authToken } = useAuthToken();

  useEffect(() => {
    if(!authToken) return;

    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await axios.get(`${secret}/admin/get/users`, {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        setUsers(response.data.users || []);
      } catch (error) {
        setError(true);
        console.error("getUsers failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [authToken]);

  return { users, loading, error };
}
