import { useContext } from "react";
import React from "react";
import { DataContext } from "./util/Context";
import '../style/User.css'

const User = () => {
  //set variable from Context
  const {employees} = useContext(DataContext)
    
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last name</th>
          <th>Organization</th>
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
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default User;

