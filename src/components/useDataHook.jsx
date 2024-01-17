import { useEffect, useState } from "react";

const useData = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const request = await fetch(url);
      const response = await request.json();
      setState(response);
    };
    dataFetch();
  }, [url]);
  return { data: state };
};

export default useData;
