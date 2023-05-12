import React, { Component } from "react";

class Display extends Component {
    render() {
        return (
            <div className="display">
                <div className="top">
                    <div>
                        <h1>{this.props.name}&nbsp;&nbsp;</h1>
                        <h1>{this.props.lastname}</h1>
                    </div>
                    <h2>{this.props.title}&nbsp;</h2>
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
                                    <p>-</p>
                                    <p>{this.props.to}</p>
                                </div>
                                <div className="data">
                                    <p className="position">{this.props.position}</p>
                                    <div className="company">
                                        <p>{this.props.companyname}</p>
                                        <p>,&nbsp;</p>
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
                                    <p>-</p>
                                    <p>{this.props.toed}</p>
                                </div>
                                <div className="data">
                                    <div className="uni">
                                        <p>{this.props.universityname}</p>
                                        <p>,&nbsp;</p>
                                        <p>{this.props.cityed}</p>
                                    </div>
                                    <p>Degree: {this.props.degree}</p>
                                    <p>Subject: {this.props.subject}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <h2>Personal Details</h2>
                            <div>
                                <h3>Address</h3>
                                <p>{this.props.address}</p>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>{this.props.phone}</p>
                            </div>
                            <div>     
                                <h3>Email</h3>
                               <p>{this.props.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display;