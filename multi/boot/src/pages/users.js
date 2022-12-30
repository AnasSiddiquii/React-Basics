import React, { useState, useEffect } from "react";

const Users = () => {
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
        <h2>Users Page</h2>
      </div>

      <div>
        {mode === "offline" ?
          <div className="text-center alert alert-danger" role="alert">
            No Internet Connection
          </div>
          :null}
      </div>

      <img src="https://img.freepik.com/free-photo/skogafoss-waterfall-iceland-guy-red-jacket-looks-skogafoss-waterfall_335224-593.jpg?w=740&t=st=1660923862~exp=1660924462~hmac=bba788a252f11eb8ea59f8eb71af7b8c44d511e9b2438f2759dc203c09552585" width="100%" alt="" />

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

export default Users;
