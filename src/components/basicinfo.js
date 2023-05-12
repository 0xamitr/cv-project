import React, { Component } from "react";

class Basic extends Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }
      
      handleClick = (value) => {
        this.props.setStateOfParent(value);
    }
    render() {
        return (
            <div className="basic-info">
                <h2>Basic Information</h2>
                <input name="name" type="text" placeholder="name" onKeyUp={(e) => {this.handleClick(e)}}/>
                <input name="lastname" type="text" placeholder="lastname" onKeyUp={(e) => {this.handleClick(e)}}/>
                <input name="title" type="text" placeholder="title" onKeyUp={(e) => {this.handleClick(e)}}/>
                <input name="address" type="text" placeholder="address" onKeyUp={(e) => {this.handleClick(e)}}/>
                <input name="phone" type="phone" placeholder="phone number" onKeyUp={(e) => {this.handleClick(e)}}/>
                <input name="email" type="text" placeholder="emaill" onKeyUp={(e) => {this.handleClick(e)}}/>
                <input name="description" type="text" placeholder="description" onKeyUp={(e) => {this.handleClick(e)}}/>
            </div>
        );
    }
}

export default Basic;