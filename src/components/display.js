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
                        <div className="left-description">
                            <h3>Description</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="left-exp">
                            <h3>Experience</h3>
                            <div>
                                <div className="date">
                                    <p>{this.props.from}</p>
                                    <p>-  {this.props.to}</p>
                                </div>
                                <div>
                                    <p>{this.props.position}</p>
                                    <div className="company">
                                        <p>{this.props.companyname}</p>
                                        <p>{this.props.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-acad">
                            <h3>Education</h3>
                            <div>
                                <div className="date">
                                    <p>{this.props.fromed}</p>
                                    <p>-  {this.props.toed}</p>
                                </div>
                                <div>
                                    <div className="uni">
                                        <p>{this.props.universityname}</p>
                                        <p>{this.props.cityed}</p>
                                    </div>
                                    <p>Degree: {this.props.degree}</p>
                                    <p>Subject: {this.props.subject}</p>
                                </div>
                            </div>
                        </div>
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