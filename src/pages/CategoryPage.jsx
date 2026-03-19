import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../global";

export function CategoryPage() {
  const { type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((resData) => {
        const filtered = resData.filter(
          (item) => item.usageType === type
        );
        setData(filtered);
      });
  }, [type]);

  return (
    <div>
      <h2>{type} Instruments</h2>

      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
}