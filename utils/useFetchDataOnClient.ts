import { useEffect, useState } from "react";

export function useFetchDataOnClient(endpoint: string) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/${endpoint}`);
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.error
            ? data.error
            : `Something went wrong\nError at fetching ${endpoint}`
        );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return data;
}
