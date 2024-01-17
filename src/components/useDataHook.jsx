import { useEffect, useState } from "react";

const useData = (url, stopFetch = "false") => {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const request = await fetch(url);
      const response = await request.json();
      setState(response);
    };
    if (!stopFetch) {
      dataFetch();
    }
  }, [url, stopFetch]);
  return { data: state };
};

export default useData;
