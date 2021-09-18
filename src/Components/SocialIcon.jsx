import { Component } from "react";

export default class SocialIcon extends Component {
    constructor(props) {
        super(props);
        this._icoUrl = this.props._icoUrl;
        this._alt = this.props._alt;
    }

    render() {
        return (
            <a href="#"><i className={this._icoUrl}></i></a>
        )
    }
}