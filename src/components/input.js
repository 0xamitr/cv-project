import React, { Component } from "react";
import Basic from "./basicinfo"
import Eduex from "./eduex"
import Pracex from "./pracex"

class Input extends Component {
    render() {
        return (
            <div className="input">
                <Basic setStateOfParent ={this.props.setStateOfParent}/>
                <Pracex setStateOfParent ={this.props.setStateOfParent}/>
                <Eduex setStateOfParent ={this.props.setStateOfParent}/>
            </div>
        );
    }
}

export default Input;