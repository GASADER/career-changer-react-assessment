import { createContext, useContext, useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Navbar from "./components/navber";
import './components/Navber.css'
import '../style/Home.css'
import { DataContext } from "./util/Context";

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
  const [sector, setSector] = useState();
  const [employees, setEmployees] = useState(mockEmployees);

  const role = (value) => {
    setSector(value);
  };

  let info;
  let content;

  if (sector === "admin") {
    content = <Admin />;
    info = <h1>Generation Thailand <br/> Home - Admin Sector</h1>

  } else if (sector === "user") {
    content = <User />;
    info = <h1>Generation Thailand <br/> Home - User Sector</h1>

  } else {
    info = <h1>Generation Thailand <br/> React - Assessment</h1>;
  }
  return (
    <DataContext.Provider value={{employees, setEmployees}}>
      <Navbar/>
      <section>
      {info}
      <div className="buttonRole">
        <button onClick={() => role("admin")}>Admin Home Sector</button>
        <button onClick={() => role("user")}>User Home Sector</button>
      </div>
      {content}
      </section>
    </DataContext.Provider>
  );
};

export default Home;
