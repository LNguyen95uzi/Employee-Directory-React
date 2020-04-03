import React, { Component } from "react";

class EmployeeTable extends Component {
    state = {
        fruit: ["Banana", "Orange", "Apple", "Mango"]
    }

    handleInputChange = event => {
        if (event.target.name === "search") {
            const searchTerm = event.target.value.toLowerCase();
            console.log(searchTerm);

            const newList = this.state.fruit.filter(item => item.toLowerCase().includes(search));

            console.log(newList);
        }

        this.setStage({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                <p>{JSON.stringify(this.state.fruit)}</p>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
            </>
        )
    }
}