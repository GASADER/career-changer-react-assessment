import { useContext, useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Navbar from "./components/navber";

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
];

const Home = () => {
  const [Sector, setSector] = useState();

  const role = (value) => {
    setSector(value);
  };

  let content;

  if (Sector === "admin") {
    content = <Admin />;
  } else if (Sector === "user") {
    content = <User />;
  } else {
    content = <h1>Generation Thailand React - Assessment</h1>;
  }
  return (
    <div>
      <Navbar/>
      {content}
      <button onClick={() => role("admin")}>Admin Home Sector</button>
      <button onClick={() => role("user")}>User Home Sector</button>
    </div>
  );
};

export default Home;
