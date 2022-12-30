import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((resp) => {
        resp.json().then((result) => {
          console.log("result", result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((error) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
      });
  }, []);

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h2>Home Page</h2>
      </div>

      <div>
        {mode === "offline" ?
          <div className="text-center alert alert-danger" role="alert">
            No Internet Connection
          </div>
          :null}
      </div>

      <img src="https://img.freepik.com/free-photo/maldives-island_74190-478.jpg?w=740&t=st=1660923504~exp=1660924104~hmac=a2161794cdb4852394023a8f2088b90bb063c32559b960f81d1a16377c5c4973" width="100%" alt="" />

      <div>
        <table className="table table-secondary table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
