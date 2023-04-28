import React, { Component } from "react";

class Basic extends Component {
    render() {
        return (
            <div className="basic-info">
                <div className="name">
                    <label> 
                        Name
                        <input type="text"/>
                    </label>
                </div>
                <div className="email">
                    <label> 
                        Email
                        <input type="text"/>
                    </label>
                </div>
                <div className="phone">
                    <label> 
                        Phone Number
                        <input type="number"/>
                    </label>
                </div>
            </div>
        );
    }
}

export default Basic;