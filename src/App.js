import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/SearchForm";

function App() {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [employeeArrayFiltered, setEmployeeArrayFiltered] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((fetchData) => {
        setEmployeeArray(fetchData.results);
        setEmployeeArrayFiltered(fetchData.results);
      });
  }, []);

  const sortByName = () => {
    let sortArray = employeeArray.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });
    setEmployeeArray([...sortArray]);
    console.log(employeeArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameSearch = (e) => {
    //  here we filter through employee array and we use include to go through each employees name and return only employees who match users input
    let smallerArray = employeeArray.filter((each) => {
      return (
        each.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
        each.name.last.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setEmployeeArrayFiltered(smallerArray);
  };

  return (  
    <>
      <header>
        Employee Directory
        <p>Click on sort in the first name column to sort by Employee's First name. Type in the text box to filter by Employee's first or last name.</p>
      </header>
      <SearchForm
        handleSubmit={handleSubmit}
        handleNameSearch={handleNameSearch}
      />
      <EmployeeTable
        sortByName={sortByName}
        employeeArrayFiltered={employeeArrayFiltered}
      />
    </>
  );
}

export default App;
