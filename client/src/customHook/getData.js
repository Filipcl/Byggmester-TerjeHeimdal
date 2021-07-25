import { useState, useEffect } from "react";

// Cusomt hook for fetching data from CMS endpoint
export default function Example() {
  const [data, dataSet] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("api/cms");
      response = await response.json();
      dataSet(response);
    }

    fetchMyAPI();
  }, []);

  return data;
}
