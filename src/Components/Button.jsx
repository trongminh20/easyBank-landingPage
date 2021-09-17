import { Component } from "react";

export default class Button extends Component {

    constructor(props) {
        super(props);
        this._classname = this.props._classname;
        this._value = this.props._value;
        this._function = this.props._fuction;
    }

    render() {
        return (
            <button className={this._classname} onClick={this._function}>{this._value}</button>
        );
    }
}