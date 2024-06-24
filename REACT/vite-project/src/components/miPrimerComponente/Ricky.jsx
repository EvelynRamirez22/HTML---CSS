import { useEffect, useState } from "react";

export default function Ricky() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);
  return (
    <>
      {!data ? (
        <>Loanding..</>
      ) : (
        <>
          <h2>
            name: {data.name}
            id:{data.id}
          </h2>
          <p></p>
        </>
      )}
    </>
  );
}
