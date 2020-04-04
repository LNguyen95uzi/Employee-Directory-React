import React from "react";
import Header from "./coponents/Header/";
import Search from "./coponents/Search/";
import EmployeeTable from "./coponents/EmployeeTable";


function App() {
    return (
        <>
            <Header />
            <Search />
            <br /><br />
            <EmployeeTable />
        </>
    );
}

export default App;