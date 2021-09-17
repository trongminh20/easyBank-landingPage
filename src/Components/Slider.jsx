import { Component } from "react";
import Button from "./Button";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this._introTitle = this.props._introTitle;
        this._introduction = this.props._introduction;
        this._imgUrl = this.props._imgUrl;
    }

    render() {
        return (
            <div className="slider">
                <div className="slider--intro">
                    <h1>{this._introTitle}</h1>
                    <p id="brief--intro" >{this._introduction}</p>
                    <Button _classname={"slider--btn btn"} _value={"Request Invite"} _function={console.log("header button clicked")} />
                </div>
                <div className="slider--img">
                    <img id="img--bg" src="./images/bg-intro-desktop.svg" alt="" />
                    <img id="img--mockup" src={this._imgUrl} alt="" />
                </div>
            </div>
        )
    }
}