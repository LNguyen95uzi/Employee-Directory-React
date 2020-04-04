import React from "react";
import "./style.css";

class Search extends React.Component {
    render() {
        return (
            <input type="text" name="search" id="searchBox" placeholder="Search" value={this.props.search} onChange={this.props.handleInputChange} ></input>
        );
    }
}

export default Search;