import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  const token = '3b9dcd58-ea1e-415d-af30-c29f95f1ec4f';
  const options = {
      headers: { 'user-access-token': token }
  };

  useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
          setStatus('fetching');
          const response = await fetch(url,options);
          const data = await response.json();
          setData(data);
          setStatus('fetched');
      };

      fetchData();
  }, [url]);

  return { status, data };
};
