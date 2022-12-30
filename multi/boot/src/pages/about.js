import React, { useState, useEffect } from "react";

const About = () => {
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
        <h2>About Page</h2>
      </div>

      <div>
        {mode === "offline" ?
          <div className="text-center alert alert-danger" role="alert">
            No Internet Connection
          </div>
          :null}
      </div>

      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1660923734~exp=1660924334~hmac=12a0cffd4a5ee980d43e1a68977159387ef6716dbdb368042c184b8d98671e4a" width="100%" alt="" />
      
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

export default About;
