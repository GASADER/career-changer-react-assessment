import { useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Navbar from "./components/navber";
import './components/Navber.css'
import '../style/Home.css'
import { DataContext } from "./util/Context";

// add mockupdata
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
  }
];

const Home = () => {

  // state for role content
  const [sector, setSector] = useState(null);

  // state for data
  const [employees, setEmployees] = useState(mockEmployees);

  //function for change role
  const role = (value) => {
    setSector(value);
  };

  //set variable and condition for change content
  let info;
  let content;  

  if (sector === "admin") {
    content = <Admin/>;
    info = <h1>Home - Admin Sector</h1>
  } 
  else if (sector === "user") {
    content = <User/>;
    info = <h1>Home - User Sector</h1>
  } 
  else {
    info = <h1>React - Assessment</h1>;
  } 

  return (
    //send data state to other component
    <DataContext.Provider value={{employees, setEmployees}}>
      <Navbar/>
      <section>
        <h1>Generation Thailand</h1>
        {info}
          <div className="btn-role">
            <button onClick={() => role("user")}>User Home Sector</button>
            <button onClick={() => role("admin")}>Admin Home Sector</button>
          </div>
        {content}
      </section>
    </DataContext.Provider>
  );
};

export default Home;
