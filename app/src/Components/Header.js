import React, { Component } from 'react';
import "../Styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Search for an Employee </p>
            </div>
        )
    }
}