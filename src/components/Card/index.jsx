import React, { useState, useEffect } from "react";
import "../Card/index.css";

function Card() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [startId, setStartId] = useState('');
  const [endId, setEndId] = useState('');

  async function getDataFromApi(url) {
    try {
      const resp = await fetch(url);
      if (resp.status === 200) {
        const data = await resp.json();
        setData(data);
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataFromApi("https://jsonplaceholder.typicode.com/photos");
  }, []);

  const filterDataByIds = () => {
    if (startId && endId) {
      const filtered = data.filter(item => item.id >= startId && item.id <= endId);
      setUsers(filtered);
    } else {
      setUsers(data);
    }
  };

  return (
    <>
      <div className="inputs">
        <input
          type="number"
          placeholder="Start Id"
          value={startId}
          onChange={(e) => setStartId(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="End Id"
          value={endId}
          onChange={(e) => setEndId(e.target.value)}
        />
        <button onClick={filterDataByIds}>Filter</button>
      </div>
      <div className="cards">
        {users.length > 0 &&
          users.map((user, index) => (
            <div className="card" key={index}>
              <img src={user.thumbnailUrl} alt="" />
              <h4>Id: {user.id}</h4>
              <h3>Title: {user.title}</h3>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
