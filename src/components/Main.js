import React, { Component } from "react";
import Input from "./input"
import Display from "./display"

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Input />
                <Display />
            </div>
        );
    }
}

export default Main;