import { Component } from "react";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        // this._ico = this._icon.bind(this);
    }
    _icon = [
        {
            alt: "facebook",
            icoUrl: "./images/icon-facebook.svg"
        },
        {
            alt: "youtube",
            icoUrl: "./images/icon-youtube.svg"
        },
        {
            alt: "pinterest",
            icoUrl: "./images/icon-pinterest.svg"
        },
        {
            alt: "instagram",
            icoUrl: "./images/icon-instagram.svg"
        },
        {
            alt: "twitter",
            icoUrl: "./images/icon-twitter.svg"
        }
    ];

    render() {
        return (
            <div className="footer">
                <div>
                    <img src="./images/logo.svg" alt="" />
                </div>
                <div>
                    {
                        this._icon.map(
                            ico => {
                                return <SocialIcon _icoUrl={ico.icoUrl} _alt={ico.alt} />
                            }
                        )
                    }
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}