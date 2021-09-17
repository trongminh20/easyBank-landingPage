import { Component } from "react";

export default class SocialIcon extends Component {
    constructor(props) {
        super(props);
        this._icoUrl = this.props._icoUrl;
        this._alt = this.props._alt;
    }

    render() {
        return (
            <img className="social--ico" src={this._icoUrl} alt={this._alt} />
        )
    }
}