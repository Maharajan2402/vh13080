import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, filter = "All") {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const typeMap = {
          All: "",
          Placement: "Placement",
          Result: "Result",
          Event: "Event",
        };

        const notificationType = typeMap[filter];

        const data = await fetchNotifications(
          page,
          10,
          notificationType
        );

        const items = data.notifications || [];

        setNotifications(items);
        setTotal(items.length);

        setTotalPages(
          Math.max(1, Math.ceil(items.length / 10))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, filter]);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}