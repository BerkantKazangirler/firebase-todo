import { useState, useEffect } from "react";
import { fetch } from "@/utils/fetch-data";

export const Titles = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const titlesData = await fetch("titles");
      setTitles(titlesData);
    };

    loadUsers();
  }, []);

  return (
    <>
      {titles.map((data) => (
        <div key={data.name} className="h-fit p-2 rounded-sm border">
          <div>
            <h3 className="font-semibold">{data.name}</h3>
            {data.tasks?.map((data, index) => (
              <p key={index} className="text-gray-600 text-sm">
                {data}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
