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
    <div className="border rounded-md p-4 my-4">
      <h2 className="text-xl font-bold mb-4">Başlıklar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {titles.map((data) => (
          <div
            key={data.name}
            className="border rounded-md p-3 shadow-sm flex items-center"
          >
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
      </div>
    </div>
  );
};
