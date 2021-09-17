import { Component } from "react";
import Button from "./Button";
export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar--ico">
                    <img id="navbar--logo" src={this.props.navIconUrl} alt="" />
                </div>
                <div className="navbar--nav">
                    <ul>
                        {
                            this.props.navItems.map(item =>
                                <li className="nav__link"><a href="#">{item}</a></li>
                            )
                        }
                    </ul>
                </div>
                <div className="navbar--btn">
                    <Button _classname={"btn"} _function={console.log("Invitation clicked")} _value={"Request Invite"} />
                </div>
            </nav>
        )
    }
}
