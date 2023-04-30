import React, { Component } from "react";

class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="top">
                    <div>
                        <p>{this.props.name}</p>
                        <p>{this.props.lastname}</p>
                    </div>
                    <p>{this.props.title}</p>
                </div>
                <div className="bottom">
                    <div className="left">
                    <h3>Description</h3>
                    <p>{this.props.description}</p>
                    <p>{this.props.position}</p>
                    <p>{this.props.companyname}</p>
                    <p>{this.props.city}</p>
                    <p>{this.props.from}</p>
                    <p>{this.props.to}</p>
                    <p>{this.props.universityname}</p>
                    <p>{this.props.cityed}</p>
                    <p>{this.props.degree}</p>
                    <p>{this.props.subject}</p>
                    <p>{this.props.fromed}</p>
                    <p>{this.props.toed}</p>
                    </div>
                    <div className="right">
                        <h3>Personal Details</h3>
                        <p>{this.props.address}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.email}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display;