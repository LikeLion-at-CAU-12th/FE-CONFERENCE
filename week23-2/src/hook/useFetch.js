import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, start, end) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = [];
        for (let i = start; i <= end; i++) {
          const speciesRequest = axios.get(`${url}/pokemon-species/${i}`);
          const imgRequest = axios.get(`${url}/pokemon/${i}`);
          // 모든 데이터가 준비되면 실행 되는 비동기 함수 Promise.all
          requests.push(Promise.all([speciesRequest, imgRequest]));
        }

        // requests: 각 포켓몬의 species와 img 요청을 병렬로 처리하는 Promise 객체들을 포함한 배열입니다. 이 배열의 각 요소는 Promise입니다.

        // responses: requests 배열의 모든 Promise가 완료된 후에 반환되는 결과 배열입니다.
        // 이 배열의 각 요소는 [speciesResponse, imgResponse] 형태로, 각 포켓몬에 대한 species와 img 응답이 포함되어 있습니다.
        console.log(requests);

        const responses = await Promise.all(requests);

        console.log(responses);

        const instantData = responses.map(([speciesResponse, imgResponse]) => ({
          speciesData: speciesResponse.data,
          imgData: imgResponse.data,
        }));

        setData(instantData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, start, end]);

  return { data, loading, error };
};

export default useFetch;
