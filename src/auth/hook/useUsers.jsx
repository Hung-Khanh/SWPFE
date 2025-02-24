import { useState, useEffect } from "react";
import { API_URL, END_POINTS } from "@/lib/api-client/constant";
import { getCookie } from "cookies-next";

export const useUsers = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const accessToken = getCookie("access_token");

        if (!accessToken) {
          throw new Error("No access token found");
        }

        const response = await fetch(`${API_URL}${END_POINTS.getSelf.path}`, {
          method: END_POINTS.getSelf.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const refetch = async () => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const accessToken = getCookie("access_token");

        if (!accessToken) {
          throw new Error("No access token found");
        }

        const response = await fetch(`${API_URL}${END_POINTS.getSelf.path}`, {
          method: END_POINTS.getSelf.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    await fetchUserData();
  };

  return { user, isLoading, error, refetch };
};
