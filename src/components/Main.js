import React, { Component } from "react";
import Input from "./input"
import Display from "./display"

class Main extends Component {
    constructor(props){
        super(props)
        this.setStateOfParent.bind(this);
        this.state = {
            name: "",
            lastname: "",
            title: "",
            address: "",
            phone: "",
            email: "",
            description: "",
            position: "",
            companyname: "",
            city: "",
            from: "",
            to: "",
            universityname: "",
            cityed: "",
            degree: "",
            subject: "",
            fromed: "",
            toed: ""
        }
    }
    setStateOfParent = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="main">
                <Input setStateOfParent ={this.setStateOfParent}/>
                <Display name={this.state.name}
                         lastname={this.state.lastname}
                         title={this.state.title}
                         address={this.state.address}
                         phone={this.state.phone}
                         email={this.state.email}
                         description={this.state.description}
                         position={this.state.position}
                         companyname={this.state.companyname}
                         city={this.state.city}
                         from={this.state.from}
                         to={this.state.to}
                         universityname={this.state.universityname}
                         cityed={this.state.cityed}
                         degree={this.state.degree}
                         subject={this.state.subject}
                         fromed={this.state.fromed}
                         toed={this.state.toed}/>
            </div>
        );
    }
}

export default Main;