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
                <div className="navbar--nav" id="navbar--menu" style={this.props._resStyle}>
                    <ul>
                        {
                            this.props.navItems.map(item =>
                                <li className="nav__link"><a href="#">{item}</a></li>
                            )
                        }
                    </ul>
                </div>
                <button className="responsive--btn" onClick={this.props._resStyleChange}><i className="fas fa-bars"></i></button>
                <div className="navbar--btn">
                    <Button _classname={"btn"} _function={console.log("Invitation clicked")} _value={"Request Invite"} />
                </div>
            </nav>
        )
    }
}
