import React, { useState, useContext } from "react";
import { DataContext } from "./util/Context";

const Admin = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  const { employees, setEmployees } = useContext(DataContext);

  const add = (employee) => {
    setEmployees([...employees, employee]);
    event.preventDefault();
  };

  const remove = (id) => {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      const newEmployees = [...employees];
      newEmployees.splice(index, 1);
      setEmployees(newEmployees);
    }
  };
  return (
    <div>
      <h2>Create User Here</h2>
      <form action="">
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => setLastname(event.target.value)}
          type="text"
          placeholder="Lastname"
        />
        <input
          onChange={(event) => setPosition(event.target.value)}
          type="text"
          placeholder="Position"
        />
        <button
          onClick={() =>
            add({
              id: employees.length + 1,
              name: name,
              lastname: lastname,
              position: position,
            })
          }
        >
          SAVE
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Organization</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((list) => {
            return (
              <tr key={list.id}>
                <td>{list.name}</td>
                <td>{list.lastname}</td>
                <td>{list.position}</td>
                <td>
                  <button onClick={() => remove(list.id)}>Delate</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
