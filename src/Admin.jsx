import React, { useState, useContext } from "react";
import { DataContext } from "./util/Context";
import '../style/Admin.css'

const Admin = () => {
  //set State for input data
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  //set variable from Context
  const { employees, setEmployees } = useContext(DataContext);

  //function for add new data
  const add = (employee) => {
    setEmployees([...employees, employee]);
    setName("");
    setLastname("");
    setPosition("");
    event.preventDefault();
  };

  //function for delete data
  const remove = (id) => {

    //findIndex from employees(array have obj inside)
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      
      //spread obj to new array
      const newEmployees = [...employees];

      //splice in new array and remove obj
      newEmployees.splice(index, 1);

      //spread new array to employees array
      setEmployees([...newEmployees]);
    }
  };

  return (
    <>
      <h2>Create User Here</h2>
    <div className="admin-container">
      <form>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={(event) => setLastname(event.target.value)}
          type="text"
          placeholder="Lastname"
          value={lastname}
        />
        <input
          onChange={(event) => setPosition(event.target.value)}
          type="text"
          placeholder="Position"
          value={position}
        />
        <button
          onClick={() =>
            add({
              //add id from  array length
              id: employees.length + 1,
              name: name,
              lastname: lastname,
              position: position,
            })
          }
        >SAVE</button>
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
        {/* map employees variable(mockEmployees) to object */}
          {employees.map((list) => {
            return (
              <tr key={list.id}>
                <td>{list.name}</td>
                <td>{list.lastname}</td>
                <td>{list.position}</td>
                <td>
                  <button onClick={() => remove(list.id)} className="btn-delate">Delate</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Admin;
