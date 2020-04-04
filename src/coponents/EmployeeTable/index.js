import React from "react";
import "./style.css";
import API from "../API";
import Search from "../Search";


// const employees = [
//     {
//         id: 1, 
//         image: "pic.jpg",
//         name: "Long",
//         phone: "(123) 456-7890",
//         email: "long@example.com",
//         dob: "01-01-00"
//     },
//     {
//         id: 2, 
//         image: "pic.jpg",
//         name: "Jas",
//         phone: "(123) 456-7890",
//         email: "jas@example.com",
//         dob: "01-01-01"
//     },
//     {
//         id: 3, 
//         image: "pic.jpg",
//         name: "Allen",
//         phone: "(123) 456-7890",
//         email: "allen@example.com",
//         dob: "01-01-02"
//     }
// ]

class EmployeeTable extends React.Component {
    state = {
        sortOrder: "",
        employees: [],
        search: ""
    }

    componentDidMount() {
        API.ApiSearch()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            }).catch(err => console.log(err))
    }

    handleInputChange = event => {
        if (event.target.name === "search") {
            const searchTerm = event.target.value.toLowerCase();
            this.setState({
                search: searchTerm
            })
        }
    }

    sortByName = () => {
        // Sort by ASC
        let sortedEmployees = this.state.employees.sort(function (a, b) {
            if (b.name > a.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });
        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" })
        }

        this.setState({ employees: sortedEmployees });
    }

    render() {
        return (
            <>
                <Search handleInputChange={this.handleInputChange}
                    search={this.state.search} />
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name <button onClick={this.sortByName}>Sort</button></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.employees.map(person => (
                            person.name.first.toLowerCase().includes(this.state.search) ?
                                <tr>
                                    <td ><img src={person.picture.thumbnail} alt="thumbnail" /></td>
                                    <td key={person.id}>{person.name}</td>
                                    <td key={person.id}>{person.phone}</td>
                                    <td key={person.id}>{person.email}</td>
                                    <td key={person.id}>{person.dob}</td>
                                </tr> : null
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default EmployeeTable;