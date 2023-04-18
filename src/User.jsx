import { useContext, useEffect, useState } from "react";
import React from "react";
import { DataContext } from "./util/Context";

const User = () => {
  const {employees} = useContext(DataContext)

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Last name</th>
          <th>Organization</th>
        </tr>
        {employees.map((list) => {
          return (
            <tr key={list.id}>
              <td>{list.name}</td>
              <td>{list.lastname}</td>
              <td>{list.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default User;
