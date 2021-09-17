import { Component } from "react";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

export default class Footer extends Component {
    constructor(props) {
        super(props);
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
                <div className="footer--logo">
                    <img src="./images/logo.svg" alt="" />
                    <div className="footer--social">
                        {
                            this._icon.map(
                                ico => {
                                    return <SocialIcon _icoUrl={ico.icoUrl} _alt={ico.alt} />
                                }
                            )
                        }
                    </div>
                </div>
                <div clasName="footer--navigation">
                    <ul>
                        <li className="nav--link"><a href="#">About Us</a></li>
                        <li className="nav--link"><a href="#">Contact</a></li>
                        <li className="nav--link"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="nav--link"><a href="#">Careers</a></li>
                        <li className="nav--link"><a href="#">Support</a></li>
                        <li className="nav--link"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <Button _classname={"footer--btn"} _function={console.log('footer button clicked')} _value={"Request Invite"} />
                    <p id="copyrights">Easybank. All Rights Reserved</p>
                </div>
            </div>
        )
    }
}