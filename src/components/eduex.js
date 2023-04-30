import React, {Component} from "react"

class Eduex extends Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }
    handleClick = (value) => {
        this.props.setStateOfParent(value);
    }
    render(){
        return(
            <div className="edu-exp">
                    <input name="universityname" type="text" placeholder="universityname" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="cityed" type="text" placeholder="city" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="degree" type="text" placeholder="degree" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="subject" type="text" placeholder="subject" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="fromed" type="text" placeholder="from" onKeyUp={(e) => {this.handleClick(e)}}/>
                    <input name="toed" type="text" placeholder="to" onKeyUp={(e) => {this.handleClick(e)}}/>


            </div>
        )
    }
}

export default Eduex