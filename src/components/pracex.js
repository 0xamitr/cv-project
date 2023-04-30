import React, {Component} from "react"

class Pracex extends Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    } 
    handleClick = (value) => {
        this.props.setStateOfParent(value);
    }
    render(){
        return(
            <div className="prac-exp">
                    <input name="position" type="text" placeholder="position" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="companyname" type="text" placeholder="company name" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="city" type="text" placeholder="city" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="from" type="year" placeholder="from"onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="to" type="year" placeholder="to" onKeyUp={(e) => {this.handleClick(e)}}/>


            </div>
        )
    }
}

export default Pracex