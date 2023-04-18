import { useContext, useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Layout from "./components/Layout";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
  {
    id: 3,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
    role: "admin"
  },
  {
    id: 4,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
    role: "user"
  },
];

// const [Sector,setSector] = useState(null)
// const [Employees,setEmployees] = useState(null)
// const changeRole = () =>{
//   setSector('admin')
// }

const Home = () => {
  const role = mockEmployees[4].role;

  if (role === "admin") {
    return (
      <Layout>
        <Admin />
      </Layout>
    );
  } else if (role === "user") {
    return (
      <Layout>
        <User />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Generation Thailand React - Assessment</h1>
      </Layout>
    );
  }
};

export default Home;
