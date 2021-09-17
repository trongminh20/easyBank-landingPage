import { Component } from "react";
import Button from "./Button";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this._introduction = this.props._introduction;
        this._imgUrl = this.props._imgUrl;
    }

    render() {
        return (
            <div className="slider--container">
                <div className="slider--intro">
                    <p>{this._introduction}</p>
                    <Button _classname={"slider--btn"} _value={"Request Invite"} _function={console.log("header button clicked")} />
                </div>
                <div className="slider--img">
                    <img src={this._imgUrl} alt="" />
                </div>
            </div>
        )
    }
}